<script>
import { state } from '../state';
import { RouterLink } from 'vue-router';


export default {
  name: 'ProjectCard',

  data() {
    return {
      state,
      projects: [],
      technologies: [],
      project_technology: [],
      types: [],
      isLoading: true
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
    getTechnologiesForProject(projectId) {
      // Find all pivot entries for the given project
      const projectTechIds = this.project_technology
        .filter(entry => entry.project_id === projectId)
        .map(entry => entry.technology_id);

      // Map technology IDs to technology objects
      return this.technologies.filter(tech => projectTechIds.includes(tech.id));
    }
  },
  computed: {
    orderedProjects() {
      return this.projects.slice().sort((a, b) => b.id - a.id);
    }
  },
  mounted() {
    this.fetchProjects()
  }

};
</script>

<template>
  <div class="container mb-3">
    <div class="container my-5">

      <div class="row">
        <div v-for="project in orderedProjects" :key="project.id" class="col-12 gy-5">
          <div class="card myCard" data-aos="fade-right" data-aos-once="true">
            <div class="title">
              <div class="d-flex text-start align-items-center text-uppercase p-3">

                <h3 class="card-title pt-2 display-2 fw-lighter">
                  {{ project.title }}
                </h3>

              </div>
              <div class="card-body d-flex gap-5">
                <div class="left-side w-50">
                  <img class="img-single-project w-100" :src="project.preview_image" alt="">
                </div>
                <div class="right-side w-50">
                  <div class="tech-type d-flex align-items-center  mb-4">

                    <div v-for="type in types">
                      <span v-if="type.id == project.type_id"
                        class="type bg-light-trasparent w-adapt px-3 py-1 rounded">
                        {{ type.name }}
                      </span>
                    </div>

                    <div class="technology">

                      <div class="ms-2 technologies d-flex gap-1 fw-light">

                        <span class="badge fw-normal px-3 py-2" v-for="tech in getTechnologiesForProject(project.id)"
                          :key="tech.id">
                          {{ tech.name }}
                        </span>

                      </div>
                    </div>

                  </div>

                  <div class="description w-75 fs-4">
                    {{ project.description }}
                  </div>

                  <div class="duration w-75 fs-4 mt-4">
                    <h4 class="fw-bold">Project Duration:</h4>
                    {{ project.project_duration }}
                  </div>

                </div>
              </div>

              <div class="card-footer text-light d-flex justify-content-end align-items-center px-4">

                <div class="project-buttons d-flex gap-3">


                  <RouterLink
                    class="btn btn-drounded opacity-low text-decoration-none border text-light p-bg-light px-3 py-2 fs-5"
                    :to="{ name: 'NotFound' }">
                    Have a better look to the website
                  </RouterLink>
                  <a target="_blank" class="btn btn-github text-decoration-none text-light p-bg-light px-3 py-1 fs-5"
                    :href="project.link_to_source_code">
                    <img src="/github-6980894_1280.png" alt="Github link">
                    View Source Code
                  </a>
                </div>

              </div>

            </div>
          </div>
        </div>
      </div>

    </div>
  </div>

</template>

<style lang="css" scoped>
.myCard {
  font-family: "Quicksand", sans-serif;
  position: relative;
  padding-bottom: 50px;
  background-color: #ffffff21;
  background-image: var(--bs-gradient);
  color: #ffffffa7;
  border: 1px inset #ffffff55;

  .title_box {
    background-color: var(--bg-medium);
    background-image: var(--bs-gradient);
    height: 100px;
    color: #ffffffba;

    .card-title {
      font-weight: 100;
    }
  }
}

.btn.opacity-low {
  opacity: 0.3;
  cursor: pointer;
}

/* 
.myCard:hover {
  cursor: pointer;
  filter: brightness(0.8);
  filter: drop-shadow(15px 15px 7px #f8f8f87a);

} */

.projectDuration {
  position: absolute;
  bottom: 0;
  width: 90%;
  padding-bottom: 0.5rem;
}

.navigator-div {
  position: absolute;
  bottom: 1rem;
  /* width: 84%; */
}

.projectDuration {
  position: absolute;
  bottom: 0;
  width: 90%;
  padding-bottom: 0.5rem;
}

.left-side {
  max-height: 60vh;
  overflow: scroll;
}

.btn-github {
  background-color: #1b1f23;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  img {
    width: 40px;
  }
}

.badge {
  background-color: var(--bg-medium);
  font-size: 0.9rem;
}

.bg-light-trasparent {
  background-color: #ffffff4a;
  color: var(--bg-dark);
}
</style>
