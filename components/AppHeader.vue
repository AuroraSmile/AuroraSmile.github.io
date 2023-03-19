<template>
  <div class="header_container max-w-2xl w-full">
    <NuxtLink to="/" class="logo_container">
      <Logo></Logo>
      <div class="logo_label">Aurora</div>
    </NuxtLink>
    <div class="nav_container">
      <ul>
        <li><NuxtLink to="/">home</NuxtLink></li>
        <li><NuxtLink to="/artices">artices</NuxtLink></li>
        <li><NuxtLink to="/about">about</NuxtLink></li>
        <li><NuxtLink to="/Archives">Archives</NuxtLink></li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.header_container {
  display: flex;
  align-items: center;
}
.nav_container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 14px;
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
.logo_container {
  display: flex;
  align-items: center;
  cursor: pointer;
}
.logo_label {
  font-weight: 700;
  font-size: 32px;
}
</style>
