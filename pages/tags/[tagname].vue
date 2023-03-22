<template>
  <div style="width: 100%" class="page_container">
    <div class="search_tag">Tag:{{ TAG }}</div>
    <div class="artices_container">
      <ArticesList :data="articesList"></ArticesList>
      <div v-if="articesList.length !== 0" class="fenye">
        <pagination
          :page-size="limit"
          :total="total"
          :current-page="current_page"
          :hide-on-single-page="true"
          @current-change="onPageChange"
        ></pagination>
      </div>
    </div>
  </div>
</template>

<script setup>
const route = useRoute();
const TAG = ref(route.params.tagname);
const current_page = ref(1);
const limit = ref(10);
const { data: allArtices } = await useAsyncData(() => {
  return queryContent("/posts")
    .where({ tags: { $contains: TAG.value } })
    .sort({ date: -1 })
    .find();
});
const total = computed(() => {
  return allArtices.value.length;
});
const { data: articesList, refresh } = await useAsyncData(() => {
  return queryContent("/posts")
    .where({ tags: { $contains: TAG.value } })
    .sort({ date: -1 })
    .skip((current_page.value - 1) * limit.value)
    .limit(limit.value)
    .find();
});

const onPageChange = (value) => {
  current_page.value = value;
  refresh();
};
</script>

<style scoped>
.search_tag {
  font-size: 2rem;
  line-height: 4.6rem;
  margin-bottom: 2rem;
  font-weight: 600;
}
.artices_container {
  display: flex;
  justify-content: center;
}
</style>
