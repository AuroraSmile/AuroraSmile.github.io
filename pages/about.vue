<template>
  <div>
    <ContentDoc path="/about"> </ContentDoc>
    <button aria-label="Color Mode" @click="onClick">
      <ColorScheme>
        <template v-if="colorMode.preference === 'dark'">
          <Icon name="uil:moon" />
          <span class="sr-only">Dark mode</span>
        </template>
        <template v-else-if="colorMode.preference === 'light'">
          <Icon name="uil:sun" />
          <span class="sr-only">Light mode</span>
        </template>
        <template v-else>
          <Icon name="uil:desktop" />
          <span class="sr-only">System mode</span>
        </template>
      </ColorScheme>
    </button>
  </div>
</template>

<script setup>
const colorMode = useColorMode();
const onClick = () => {
  const values = ["system", "light", "dark"];
  const index = values.indexOf(colorMode.preference);
  const next = (index + 1) % values.length;

  colorMode.preference = values[next];
};
</script>
