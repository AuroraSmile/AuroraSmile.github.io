<template>
  <div>
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
  max-width: 42rem;
  margin: 2rem auto;
  min-height: calc(100vh - 100px);
}
</style>
