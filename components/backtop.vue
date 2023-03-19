<template>
  <div>
    <div v-if="visible" :style="backTopStyle" @click="backtop">
      <span :style="{ 'font-size': `${size}px` }"
        ><Icon name="ic:baseline-rocket"
      /></span>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  visibilityHeight: {
    type: Number,
    default: 200,
  },
  right: {
    type: Number,
    default: 40,
  },
  bottom: {
    type: Number,
    default: 40,
  },
  size: {
    type: Number,
    default: 16,
  },
});
const visible = computed(() => {
  const { y } = useWindowScroll();
  return y.value >= props.visibilityHeight;
});

const backtop = () => {
  const el = document.documentElement.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
const backTopStyle = computed(() => {
  return {
    position: "fixed",
    bottom: `${props.bottom}px`,
    right: `${props.right}px`,
  };
});
</script>
