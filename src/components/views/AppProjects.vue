<script>
import ProjectCard from '../ProjectCard.vue';
import { state } from '../../state';



export default {
    name: 'AppProjects',
    components: {
        ProjectCard
    },

    data() {
        return {
            state
        }
    },
    mounted() {
        window.scrollTo(0, 0);
    }
};
</script>

<template>
    <div>
        <div class="container">
            <h1  class="page_title">All my works</h1>
            <div class="hr"></div>
            <ProjectCard />
        </div>

    </div>
</template>

<style scoped lang="css">



</style>