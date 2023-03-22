<template>
  <div class="page_container">
    <ContentDoc path="/about"> </ContentDoc>
  </div>
</template>

<script setup></script>

<style scoped>
.about_container {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  max-width: 42rem;
  margin: 2rem auto;
  min-height: calc(100vh - 100px);
}
</style>
