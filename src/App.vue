<script>
import AOS from 'aos';
import 'aos/dist/aos.css';
import AppHeader from './AppHeader.vue';

export default {
  name: 'App',
  components: {
    AppHeader
  },
  mounted() {
    AOS.init({
      duration: 700,
    });
  },
}
</script>

<template>
  <AppHeader />

  <main>
    <RouterView />
  </main>


</template>

<style></style>
