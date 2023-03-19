<template>
  <div>
    <div v-if="!TAG" class="tags_container">
      <div class="tags_item" v-for="(value, key) in taglist" :key="key">
        <NuxtLink :to="{ path: '/tags', query: { key: key } }">
          <span class="shadow-xl rounder-xl p-1.5 opacity-80">{{ key }}</span>
          <span class="shadow-xl rounder-xl">{{ value }}</span>
        </NuxtLink>
      </div>
    </div>
    <div v-else class="artices_container">
      <ArticesList :data="articesList"></ArticesList>
      <div v-if="articesList.length !== 0" class="fenye">
        <el-pagination
          layout="prev, pager, next"
          :page-size="limit"
          :total="total"
          :hide-on-single-page="true"
          :current-page="current_page"
          @current-change="onPageChange"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
const route = useRoute();
const TAG = ref(route.query.key);
console.log(TAG.value);
const current_page = ref(1);
const limit = ref(6);
const total = ref(0);
const articesList = ref([]);
const taglist = ref([]);
const refresh = null;
onMounted(() => {
  TAG.value ? getArtices() : initTagList();
});
watch(
  () => route.query,
  (newval) => {
    console.log("xin", newval);
    TAG.value = newval.key;
    TAG.value ? getArtices() : initTagList();
  }
);

const getArtices = async () => {
  const allPost = await queryContent("/posts")
    .where({ tags: { $contains: TAG.value } })
    .sort({ date: -1 })
    .find();
  console.log("总文章数", allPost.length);
  total.value = allPost.length;
  articesList.value = await queryContent("/posts")
    .where({ tags: { $contains: TAG.value } })
    .sort({ date: -1 })
    .skip((current_page.value - 1) * limit.value)
    .limit(limit.value)
    .find();
  console.log("标签文章数据", articesList.value);
};

const initTagList = async () => {
  const allArtices = (await queryContent("/posts").find()) || [];
  let result = {};
  console.log("所有文章数据", allArtices);
  allArtices.forEach(({ tags }) => {
    if (tags && Array.isArray(tags)) {
      tags.forEach((item) => {
        result[item] ? result[item]++ : (result[item] = 1);
      });
    }
  });
  console.log("tags", result);
  taglist.value = result;
};

const onPageChange = (value) => {
  current_page.value = value;
  getArtices();
};
</script>

<style scoped>
.tags_container {
  display: flex;
}
.tags_item {
  margin-right: 6px;
  margin-bottom: 8px;
}
</style>
