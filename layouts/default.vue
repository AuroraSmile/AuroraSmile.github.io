<template>
  <div>
    <div class="app_container">
      <AppHeader />
      <AppMain class="min-h-screen max-w-2xl w-full">
        <slot />
      </AppMain>
      <AppFooter />
    </div>
  </div>
</template>

<style scoped>
.app_container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.app_main {
  flex: 1;
}
</style>
