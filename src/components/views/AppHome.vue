<script>

import AppJumbo from '../AppJumbo.vue';
import AppAbout from './AppAbout.vue';
import AppContacts from './AppContacts.vue';
import copyright from './copyright.vue';

export default {
    name: 'AppHome',
    components: {
        AppJumbo,
        AppAbout,
        AppContacts,
        copyright

    }
}

</script>

<template>
    <AppJumbo />
    <AppAbout />
    <AppContacts />
    <copyright />
</template>

<style></style>