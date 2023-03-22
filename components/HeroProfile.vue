<template>
  <div class="profile_container">
    <div class="author">
      <img class="author_avatar" src="../assets/images/avatar.jpg" />
    </div>
    <div class="title">{{ title }}</div>
    <div class="description">
      {{ description }}
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    defalut: "",
  },
  description: {
    type: String,
    defalut: "",
  },
});
</script>

<style scoped>
.profile_container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 6.3rem;
  margin-bottom: 7.2rem;
}

.author_avatar {
  width: 70px;
  height: 70px;
  border-radius: 100%;
  user-select: none;
  background-color: #0d122b;
  animation: 0.5s ease-in forwards fadein;
  opacity: 1;
  object-fit: cover;
}
img {
  max-width: 100%;
  vertical-align: middle;
  -webkit-user-drag: none;
  margin: 0 auto;
  text-align: center;
}
.title {
  font-size: 1.7em;
  margin-top: 10px;
  margin-bottom: 2px;
  color: #0d122b;
  font-weight: 700;
}
.description {
  opacity: 0.9;
  max-width: 397px;
  line-height: 1.688;
  color: #434648;
}
</style>
