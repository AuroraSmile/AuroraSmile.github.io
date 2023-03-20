<script setup lang="ts">
const socials = [
  "twitter",
  "facebook",
  "instagram",
  "youtube",
  "github",
  "medium",
];

const icons = ref([
  {
    href: `https://github.com/AuroraSmile`,
    icon: `fa-brands:github`,
    label: "AuroraSmile",
  },
  // {
  //   href: `https://twitter.com/nuxt-themes/docus`,
  //   icon: `fa-brands:twitter`,
  //   label: "nuxtstudio",
  // },
  // {
  //   href: `https://github.com/nuxt-themes/docus`,
  //   icon: `fa-brands:instagram`,
  //   label: "nuxt-themes/docus",
  // },
]);
</script>

<template>
  <NuxtLink
    v-for="icon in icons"
    :key="icon.label"
    rel="noopener noreferrer"
    :title="icon.label"
    :aria-label="icon.label"
    :href="icon.href"
    target="_blank"
  >
    <Icon v-if="icon.icon" :name="icon.icon" />
  </NuxtLink>
</template>

<style scoped>
a {
  display: flex;
  color: #71717a;
  padding: 1rem;
}
a:hover {
  color: #3f3f46;
}
</style>
