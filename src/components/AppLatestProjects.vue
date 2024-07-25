<script>
import { state } from '../state';

export default {
  name: 'AppLatestProjects',

  data() {
    return {
      state,
      projects: [],
      technologies: [],
      project_technology: [],
      types: []
    }
  },
  computed: {
    orderedProjects() {
      return this.projects.slice().sort((a, b) => b.id - a.id);
    }
  },
  methods: {
    async fetchProjects() {
      try {
        const projectsResponse = await fetch('/assets/119_laravel-api_table_projects.json');
        const technologiesResponse = await fetch('/assets/119_laravel-api_table_technologies.json');
        const projectTechnologyResponse = await fetch('/assets/119_laravel-api_table_project_technology.json');
        const typesResponse = await fetch('/assets/119_laravel-api_table_types.json');

        this.projects = await projectsResponse.json();
        this.technologies = await technologiesResponse.json();
        this.project_technology = await projectTechnologyResponse.json();
        this.types = await typesResponse.json();
        this.isLoading = false;
      } catch (error) {
        console.error('Error fetching projects:', error);
      }
    },
  },
  mounted() {
    this.fetchProjects()
  }
}

</script>

<template>


  <img class="jumbo-img" src="/assets/uploads/jumbo.png" alt="">
  <img class="jumbo-img mobile-view" src="/assets/uploads/jumbo-mobile.png" alt="">

  <div id="latest-projects" class="mb-5">
    <div class="row my-row d-flex flex-row flex-nowrap h-100 overflow-scroll">
      <div v-for="(project, index) in orderedProjects.slice(0, 5)" :key="index" class="col-12">


        <div class="card myCard overflow-scroll">
          <div class="title_box d-flex text-center align-items-center text-uppercase justify-content-center py-3">

            <h3 class="card-title pt-2">
              {{ project.title }}
            </h3>

          </div>

          <img :src="project.preview_image" alt="" class="card-img-top w-100">

          <div class="card-body">
            <div class="description">
              <h5 class="d-inline-block fs-2">Description:</h5>
              <p class="card-text">
                {{ project.description }}
              </p>
            </div>

            <div class="projectDuration">
              Project Duration: {{ project.project_duration }}
            </div>
          </div>
        </div>


      </div>
      <div class="col-12">
        <div class="card all-my-works bg-transparent d-flex border-0">
          <RouterLink id="allMyWorks" class="btn all-my-works text-uppercase" to="/projects">
            <h1 class="hover-underline-animation">
              see all my works
            </h1>
            <span class="">
              &#62;
            </span>

          </RouterLink>
        </div>
      </div>
    </div>

  </div>

</template>

<style lang="scss" scoped>
@import "../partials_scss/_jumbo.css";
</style>
