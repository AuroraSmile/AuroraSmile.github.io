<template>
  <footer class="footer">
    <div class="left">
      <span>Powered by Nuxt & Nuxt Content</span>
      <span
        ><a href="https://beian.miit.gov.cn/" :title="beian" target="_blank">{{
          beian
        }}</a></span
      >
    </div>
    <div class="copyright">
      <span>Copyright © 2023 Aurora</span>
    </div>
  </footer>
</template>

<script setup>
const beian = ref("粤ICP备xxxxxxx号");
</script>

<style scoped>
.footer {
  padding: 1rem 2.5rem 1rem 2.5rem;
  border-top: 1px solid #e5e7eb;
  background-color: #fffc;
  font-size: 14px;
}
.left {
  display: flex;
  flex-direction: column;
}
.left span {
  margin-bottom: 4px;
}
.copyright {
  text-align: center;
}
</style>
