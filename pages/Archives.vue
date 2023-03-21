<template>
  <div class="Archives_container">
    <div class="artice_container">
      <div class="" v-for="(value, key) in ArchivesList">
        <h2 class="date_label">
          {{ key }}
        </h2>
        <div class="articleList_container">
          <div
            class="article_item"
            @click="goArtice(article._path)"
            v-for="article in value"
          >
            <span class="article_date">
              {{
                formatDate(article.date, "MMM DD", {
                  locales: "en-US",
                })
              }}
            </span>
            <span class="article_title">{{ article.title }}</span>
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
    const date = useDateFormat(artice.date, "YYYY");
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
  margin-top: 2rem;
  margin-bottom: 1rem;
}
.article_item {
  margin-bottom: 10px;
  cursor: pointer;
}
.article_date {
  margin-right: 8px;
  font-size: 14px;
  color: #9ca3af;
}
</style>
