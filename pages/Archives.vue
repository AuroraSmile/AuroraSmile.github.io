<template>
  <div class="Archives_container">
    <div class="artice_container">
      <div class="" v-for="(value, key) in ArchivesList">
        <div class="date_label">
          {{ key }}
        </div>
        <div class="articleList_container">
          <div
            class="article_item"
            @click="goArtice(article._path)"
            v-for="article in value"
          >
            <div class="article_title">{{ article.title }}</div>
            <div class="article_date">
              {{
                formatDate(article.date, "YYYY-MM-DD", {
                  locales: "zh-CN",
                })
              }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const { data: postsList } = await useAsyncData(() => {
  return queryContent("/posts").sort({ date: -1 }).find();
});

const ArchivesList = computed(() => {
  const result = {};
  postsList.value.forEach((artice) => {
    const date = useDateFormat(artice.date, "YYYY-MM");
    result[date.value]
      ? result[date.value].push(artice)
      : (result[date.value] = [artice]);
  });
  for (const key in result) {
    console.log(result[key]);
    result[key].sort((a, b) => {
      const date_a = +new Date(a.date);
      const date_b = +new Date(b.date);
      return date_b - date_a;
    });
  }
  return result;
});
console.log(ArchivesList.value);
const goArtice = (path) => {
  navigateTo(path);
};
</script>

<style scoped>
.date_label {
  color: #1e293b;
  font-size: 18px;
  font-weight: 600;
}
.article_item {
  margin-bottom: 10px;
  cursor: pointer;
}
.article_date {
  margin-top: 2px;
  font-size: 14px;
  color: #9ca3af;
}
</style>
