<script setup>
const props = defineProps({
  pageSize: {
    type: Number,
    default: 1,
  },
  total: {
    type: Number,
    default: 0,
  },
  hideOnSinglePage: {
    type: Boolean,
    default: false,
  },
  currentPage: {
    type: Number,
    default: 1,
  },
});
const emit = defineEmits(["prevClick", "nextClick", "currentChange"]);
const page = computed(() => {
  return Math.ceil(props.total / props.pageSize);
});
const curpage = ref(props.currentPage);
watch(curpage, (newVal) => {
  console.log("curpageChange", newVal);
  emit("currentChange", newVal);
});

const prevChange = (data) => {
  if (curpage.value == 1) {
    return;
  }
  curpage.value = curpage.value + data;
  console.log("prevClick", curpage.value);
  emit("prevClick", curpage.value);
};

const nextChange = (data) => {
  if (curpage.value === page.value) {
    return;
  }
  curpage.value = curpage.value + data;
  console.log("nextClick", curpage.value);
  emit("nextClick", curpage.value);
};
</script>

<template>
  <div v-if="page !== 1 || !hideOnSinglePage" class="pagination_container">
    <div style="display: flex">
      <div class="prev" @click="prevChange(-1)">prev</div>
      <div class="page-box">
        <span>{{ curpage }}</span>
        <span style="margin: 0px 1px">/</span>
        <span>{{ page }}</span>
      </div>
      <div class="next" @click="nextChange(1)">next</div>
    </div>
  </div>
</template>

<style scoped>
.page-box {
  margin: 0 10px;
}
.prev {
  cursor: pointer;
}
.next {
  cursor: pointer;
}
</style>
