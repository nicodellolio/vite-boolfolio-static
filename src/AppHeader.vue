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

  <nav class="d-flex border-bottom border-1 border-secondary align-items-center" id="top"
    style="padding: 0 15%;">

    <ul class="list-unstyled gap-4 my-2 pt-3 not-mobile-view">


      <li class="nav-item d-flex gap-4 align-items-center">
        <RouterLink class="nav-item-pp text-decoration-none" :class="{ 'active-item': $route.name == 'home' }"
          :to="{ name: 'home' }">home</RouterLink>
        <RouterLink class="nav-item-pp text-decoration-none" :class="{ 'active-item': $route.name == 'projects' }"
          :to="{ name: 'projects' }">projects</RouterLink>
        <a v-if="$route.fullPath == '/' || $route.fullPath == '/#about'" class="nav-item-pp text-decoration-none"
          :class="{ 'active-item': $route.name == 'about' }" href="#about">about</a>
        <RouterLink class="nav-item-pp text-decoration-none" :class="{ 'active-item': $route.name == 'contacts' }"
          :to="{ name: 'contacts' }">contacts</RouterLink>
      </li>
    </ul>

    <ul class="list-unstyled gap-4 my-2 pt-3 mobile-view ">

      <li class="nav-item d-flex gap-5 align-items-center">
        <RouterLink class="nav-item-pp text-decoration-none" :class="{ 'active-item': $route.name == 'home' }"
          :to="{ name: 'home' }"><i class="fa fa-home" aria-hidden="true"></i></RouterLink>
        <RouterLink class="nav-item-pp text-decoration-none" :class="{ 'active-item': $route.name == 'projects' }"
          :to="{ name: 'projects' }"><i class="fa fa-briefcase" aria-hidden="true"></i></RouterLink>
        <a v-if="$route.fullPath == '/' || $route.fullPath == '/#about'" class="nav-item-pp text-decoration-none"
          :class="{ 'active-item': $route.name == 'about' }" href="#about"><i class="fa fa-user"
            aria-hidden="true"></i></a>
        <RouterLink class="nav-item-pp text-decoration-none" :class="{ 'active-item': $route.name == 'contacts' }"
          :to="{ name: 'contacts' }"><i class="fa fa-envelope" aria-hidden="true"></i></RouterLink>
      </li>

    </ul>
  </nav>

</template>

<style scoped lang="css">
nav {
  background: rgba(255, 255, 255, 0.038);

  >* {
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

.not-mobile-view {
  display: block;
}
.mobile-view {
  display: none;
}
nav{
  justify-content: end;
}

@media screen and (max-width: 460px) {
  nav{
  justify-content: center;
}
  .not-mobile-view {
    display: none;
  }

  .mobile-view {
    display: block;
    /* justify-content: center; */
  }

  .nav-item-pp {
    font-size: 1.75rem;
  }
}
</style>
