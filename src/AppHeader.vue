<script>


export default {
  name: 'AppHeader',
  data() {
    return {
    }
  }
}
</script>

<template>

  <nav class="d-flex border-bottom border-1 border-secondary align-items-center justify-content-end" id="top"
    style="padding: 0 15%;">

    <ul class="list-unstyled d-flex gap-4 my-2 pt-3">


      <li class="nav-item d-flex gap-4 align-items-center">
        <RouterLink class="nav-item-pp text-decoration-none" :class="{ 'active-item': $route.name == 'home' }"
          :to="{ name: 'home' }">home</RouterLink>
        <RouterLink class="nav-item-pp text-decoration-none" :class="{ 'active-item': $route.name == 'projects' }"
          :to="{ name: 'projects' }">projects</RouterLink>
        <a v-if="$route.fullPath == '/' || $route.fullPath == '/#about'" class="nav-item-pp text-decoration-none" :class="{ 'active-item': $route.name == 'about' }"
          href="#about">about</a>
        <RouterLink class="nav-item-pp text-decoration-none" :class="{ 'active-item': $route.name == 'contacts' }"
          :to="{ name: 'contacts' }">contacts</RouterLink>
      </li>

    </ul>
  </nav>

</template>

<style scoped lang="css">
nav {
  background: rgba(255, 255, 255, 0.038);

  > *{
    margin: 0 4rem;
    padding: 1rem 0;
  }

  
}

.logo-name {
  opacity: 0.8;
}

.nav-item-pp {
  color: #9F84BC;
  font-weight: 500;
  text-transform: uppercase;
  font-size: 1.25rem;
}

.active-item {
  font-size: 1.35rem;
  color: #d5b1fb;
  font-weight: 700
}

</style>
