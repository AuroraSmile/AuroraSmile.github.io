<template>
  <div>
    <ArticesList :data="data"></ArticesList>
    <div v-if="data.length !== 0" class="fenye">
      <pagination
        :page-size="limit"
        :total="total"
        :current-page="current_page"
        :hide-on-single-page="true"
        @current-change="onPageChange"
      ></pagination>
    </div>
  </div>
</template>

<script setup>
const current_page = ref(1);
const limit = ref(10);
const { data: allPost } = await useAsyncData("total", () => {
  return queryContent("/posts").find();
});
console.log("总文章数", allPost.value.length);
const total = ref(allPost.value.length);

const { data, refresh } = await useAsyncData("postpage", () => {
  console.log("当前页数", current_page.value);
  return queryContent("/posts")
    .sort({ date: -1 })
    .skip((current_page.value - 1) * limit.value)
    .limit(limit.value)
    .find();
});
console.log("所有文章数据", data);

const onPageChange = (value) => {
  current_page.value = value;
  refresh();
  console.log("文章数据", data);
};
</script>
