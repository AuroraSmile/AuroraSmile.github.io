<template>
  <div class="Archives_container">
    <nav>
      <AppNavigation :navigation-tree="navigation" />
    </nav>
  </div>
</template>

<script setup>
const { data: navigation } = await useAsyncData("navigation", () =>
  fetchContentNavigation("/posts")
);
</script>
