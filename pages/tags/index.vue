<template>
  <div class="tags_container page_container">
    <div class="tags_item" v-for="(value, key) in taglist" :key="key">
      <NuxtLink :to="{ path: `/tags/${key}` }">
        <span class="shadow-xl rounder-xl p-1.5 opacity-80">{{ key }}</span>
        <span class="shadow-xl rounder-xl">{{ value }}</span>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
const { data: allArtices } = await useAsyncData(() => {
  return queryContent("/posts").find();
});

const taglist = computed(() => {
  let result = {};
  allArtices.value.forEach(({ tags }) => {
    if (tags && Array.isArray(tags)) {
      tags.forEach((item) => {
        result[item] ? result[item]++ : (result[item] = 1);
      });
    }
  });
  return result;
});
</script>
<style scoped>
.tags_container {
  display: flex;
  flex-direction: row;
}
.tags_item {
  margin-right: 6px;
  margin-bottom: 8px;
}
</style>
