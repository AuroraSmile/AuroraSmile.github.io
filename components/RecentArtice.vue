<template>
  <div class="recent_container">
    <div class="recent_tit">Recent artices</div>
    <div class="artice_container">
      <div class="artice_item" v-for="artice in data">
        <div class="artice_tit">{{ artice.title }}</div>
        <div class="artice_date">
          {{ formatDate(artice.date, "DD MMM YYYY", { locales: "en-US" }) }}
        </div>
      </div>
    </div>
    <div class="more">
      <NuxtLink to="/artices">See all artices</NuxtLink>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  count: {
    type: Number,
    default: 5,
  },
});
const { data } = await useAsyncData(() => {
  return queryContent("/posts").sort({ date: -1 }).limit(props.count).find();
});
</script>

<style scoped>
.recent_container {
  margin-top: 2rem;
  padding: 0 1rem;
}
.recent_tit {
  padding-bottom: 0.3rem;
  font-weight: 600;
  color: #0d122b;
  margin-top: 10px;
  margin-bottom: 10px;
}
.artice_item {
  border-top: 1px solid #ececec;
  display: flex;
  padding-top: 10px;
  padding-bottom: 10px;
}
.artice_tit {
  flex: 1;
  font-size: 16px;
  font-weight: 400;
  letter-spacing: 0.1px;
  color: #0d122b;
}
.more {
  margin-top: 10px;
  margin-bottom: 10px;
}
.more a {
  text-decoration-color: #d2c7c7;
  text-decoration: underline;
}
</style>
