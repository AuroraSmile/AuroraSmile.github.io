<template>
  <div>
    <div class="artices_container">
      <div
        class="artices_item"
        v-for="{ title, _path, _id, _file, _dir, date } in data"
        :key="_id"
      >
        <NuxtLink :to="formatPath({ _path, _file })">
          <p class="artices_tit">{{ title }}</p>
          <div class="artices_date">
            {{ formatDate(date, "YYYY-MM-DD") }}
          </div>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  data: {
    type: Array,
    default: [],
  },
});

const formatPath = (page) => {
  // 解决中文.md文件路由问题
  let str = "/" + page._file.replace(/\d+./g, "").replace(/.md/g, "");
  return str === page._path ? page._path : str;
};
</script>

<style scoped>
.artices_item {
  margin-bottom: 14px;
}
.artices_item a {
  text-decoration: none;
}
.artices_tit {
  margin-top: 0;
  margin-bottom: 10px;
  font-weight: 500;
  color: black;
}
.artices_date {
  color: #b9bfcc;
}
</style>
