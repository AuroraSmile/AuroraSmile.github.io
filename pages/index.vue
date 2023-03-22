<template>
  <div class="home_container">
    <div class="recent_container">
      <div class="recent_tit">Recent artices</div>
      <div class="artice_container">
        <ArticesList v-if="data.length !== 0" :data="data"></ArticesList>
      </div>
    </div>
  </div>
</template>

<script setup>
const LIMIT = 5;
const { data } = await useAsyncData(() => {
  return queryContent("/posts").sort({ date: -1 }).limit(LIMIT).find();
});
</script>

<style scoped>
.recent_container {
  display: flex;
  justify-content: center;
  margin-top: 2rem;
}
</style>
