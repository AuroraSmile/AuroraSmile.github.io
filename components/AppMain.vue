<template>
  <div class="main_container">
    <slot />
    <backtop :size="32"></backtop>
  </div>
</template>

<style scoped>
.main_container {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}
</style>
