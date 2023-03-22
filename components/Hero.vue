<template>
  <div class="hero_container">
    <div class="hero_image">
      <img src="../assets/images/background.jpg" alt="background" />
    </div>
    <div class="container" style="display: flex; justify-content: center">
      <div class="head-container">
        <div class="head-holder">
          <h1 class="introduction">{{ title }}</h1>
          <div class="animated-text">{{ text }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    default: "",
  },
  text: {
    type: String,
    default: "",
  },
});
</script>

<style scoped>
.hero_container {
  width: 100%;
  height: calc(100vh - 64px);
  position: relative;
}
.hero_container::after {
  content: "";
  position: absolute;
  right: 0;
  top: 0;
  margin: auto;
  width: 100%;
  height: calc(100vh - 64px);
  background-color: rgba(50, 50, 50, 0.6);
  z-index: 9;
}
.hero_image {
  height: 100%;
  overflow: hidden;
}
.hero_image img {
  min-height: 100%;
  object-fit: cover;
  width: 100%;
}
.head-container {
  display: table;
  position: absolute;
  top: 0;
  height: 100%;
  color: #fff;
  font-size: 30px;
  font-weight: 300;
  z-index: 10;
}
.head-holder {
  display: table-cell;
  vertical-align: middle;
}
.introduction {
  font-size: 60px;
  font-weight: 600;
}
.animated-text {
  font-weight: 500;
}
</style>
