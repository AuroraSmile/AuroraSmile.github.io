<template>
  <div>
    <h1>articles</h1>
    <div @click="toggleDark">test</div>
  </div>
</template>

<script setup>
const isDark = useDark();
const toggleDark = useToggle(isDark);
</script>
