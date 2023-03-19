<template>
  <div class="artice_container">
    <!-- <div class="back m-2">
      <NuxtLink to="/">Back</NuxtLink>
    </div> -->
    <h1 class="font-bold text-4xl text-slate-800">{{ artice.title }}</h1>
    <div class="artices_info text-gray-500">
      <div class="artices_date">
        {{ formatDate(artice.date, "MMM DD, YYYY") }}
      </div>
      <div class="readingTime">
        {{ Math.ceil(artice.readingTime.minutes) }}min
      </div>
    </div>
    <div class="tag_container text-gray-500">
      <span class="tag_item" v-for="(item, index) in taglist" :key="index">
        <NuxtLink :to="{ path: '/tags', query: { key: item } }">
          <span style="margin-right: 2px"
            ><Icon name="ic:baseline-local-offer"
          /></span>
          <span>{{ item }}</span>
        </NuxtLink>
      </span>
    </div>
    <main>
      <ContentRenderer v-if="artice" :value="artice" />
    </main>
    <div class="footer mt-8">
      <div v-if="prev" class="prev text-primary font-bold">
        <NuxtLink :to="prev._path">{{ prev.title }} </NuxtLink>
      </div>
      <div v-if="next" class="next text-primary font-bold">
        <NuxtLink :to="next._path">{{ next.title }} </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
const { path } = useRoute();

const { data: artice } = await useAsyncData(`content-${path}`, () => {
  return queryContent().where({ _path: path }).findOne();
});

console.log("文章数据", artice.value);
const taglist = computed(() => {
  return artice.value.tags || [];
});

// const [prev, next] = await queryContent("posts")
//   .only(["_path", "title"])
//   .sort({ date: -1 })
//   .findSurround(artice.value._path);
const { prev, next, toc, surround } = useContent();
console.log(toc, surround);
const formatDate = (date, format) => {
  return useDateFormat(date, format, { locales: "en-US" }).value;
};
</script>

<style scoped>
.artice_container {
  width: 100%;
}
.footer {
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
}
.tag_container {
  margin-bottom: 28px;
}
.tag_item {
  margin-right: 10px;
}
.artices_info {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-top: 14px;
  margin-bottom: 2px;
}
.readingTime {
  margin: 0 6px;
}
</style>
