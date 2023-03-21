<template>
  <header class="header_container">
    <div
      @click="showDropdown"
      :class="{ dropdown_active: dropdownVisible, dropdown: true }"
    >
      <div class="dropdown_nav">
        <div class="dropdown_item">
          <NuxtLink to="/">home</NuxtLink>
        </div>
        <div class="dropdown_item">
          <NuxtLink to="/artices">artices</NuxtLink>
        </div>
        <div class="dropdown_item">
          <NuxtLink to="/about">about</NuxtLink>
        </div>
        <div class="dropdown_item">
          <NuxtLink to="/Archives">Archives</NuxtLink>
        </div>
      </div>
    </div>
    <div class="left">
      <div class="menu" @click="showDropdown">
        <Icon name="ic-baseline-menu" size="24"></Icon>
      </div>
      <NuxtLink to="/" class="logo_container">
        <Logo></Logo>
        <div class="logo_label">Aurora</div>
      </NuxtLink>
    </div>

    <div class="nav_container">
      <ul>
        <li><NuxtLink to="/">home</NuxtLink></li>
        <li><NuxtLink to="/artices">artices</NuxtLink></li>
        <li><NuxtLink to="/about">about</NuxtLink></li>
        <li><NuxtLink to="/Archives">Archives</NuxtLink></li>
      </ul>
    </div>
    <div class="social_container">
      <AppSocialIcons />
    </div>
  </header>
</template>

<script setup>
const dropdownVisible = ref(false);
const showDropdown = () => {
  dropdownVisible.value = !dropdownVisible.value;
};
</script>

<style scoped>
.overlay {
  top: 0;
  left: 0;
  position: absolute;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.83);
  z-index: 4;
  display: block;
}
.dropdown_active {
  transform: translateY(64px) !important;
  background: rgba(0, 0, 0, 0.83);
}
.dropdown {
  position: absolute;
  z-index: 11;
  top: 0px;
  transition: all 0.2s;
  width: 100%;
  height: 100vh;

  transform: translateY(-100%);
}
.dropdown_item {
  border-bottom: 1px solid #e5e7eb;
  background-color: #fff;
  padding: 1rem;
  text-align: center;
  cursor: pointer;
}
header {
  height: 64px;
  position: sticky;
  top: 0;
  z-index: 10;
  width: 100%;
  border-bottom: 1px solid #e5e7eb;
  background-color: #fffc;
  backdrop-filter: saturate(200%) blur(20px);
}
.header_container {
  display: flex;
  align-items: center;
}

ul {
  list-style-type: none;
  display: flex;
}
li {
  margin-right: 20px;
  font-size: 18px;
  font-weight: 600;
}
li a {
  text-decoration: none;
  color: black;
}

.logo_label {
  font-weight: 700;
  font-size: 32px;
}
.social_container {
  display: flex;
  align-items: center;
}
.menu {
  display: flex;
  color: #71717a;
  padding: 1rem;
  cursor: pointer;
}
.left {
  display: flex;
  flex: 1;
}
.nav_container {
  display: none;
}
.logo_container {
  flex: 1;
  display: flex;
  align-items: center;
  cursor: pointer;
  justify-content: center;
}
@media screen and (min-width: 768px) {
  .left {
    flex: none;
  }
  .logo_container {
    justify-content: flex-start;
    flex: none;
  }
  .nav_container {
    flex: 1;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-left: 14px;
  }
  .menu {
    display: none;
  }
}
</style>
