<script>
import axios from 'axios';
import NotFound from './NotFound.vue';

export default {
    data() {
        return {
            'base_api_url': 'http://127.0.0.1:8000',
            'base_projects_url': '/api/projects',
            'project': '',
        }
    },
    methods: {
        callAPI(url) {

            axios
                .get(url)
                .then(response => {

                    if (response.data.success) {
                        console.log(response);
                        this.project = response.data.response

                    } else {

                    }
                })
                .catch(err => {
                    console.error(err);
                })
        }
    },
    mounted() {
        let url = this.base_api_url + this.base_projects_url + `/${this.$route.params.id}`
        this.callAPI(url)
    }
}
</script>

<template>
    <div class="container my-5">
        
        <div class="row">
            <div class="card myCard">
                <div class="title">
                    <div class="d-flex text-start align-items-center text-uppercase p-3">

                        <h3 class="card-title pt-2 display-2 fw-lighter">
                            {{ project.title }}
                        </h3>

                    </div>
                    <div class="card-body d-flex gap-5">
                        <div class="left-side w-50">
                            <img class="img-single-project w-100"
                                :src="base_api_url + '/storage/' + project.preview_image" alt="">
                        </div>
                        <div class="right-side w-50">
                            <div class="tech-type d-flex align-items-center gap-2 mb-4">

                                <div v-if="project.type" class="type bg-light-trasparent w-adapt px-3 py-1 rounded">
                                    {{ project.type.name }}
                                </div>

                                <div class="technology">

                                    <div class="ms-2 technologies d-flex gap-1 fw-light">

                                        <span v-for="technology in project.technologies"
                                            class="badge fw-normal px-3 py-2">{{ technology.name }}</span>

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

                    <div class="card-footer text-light d-flex justify-content-between align-items-center px-4">
                        <a class="btn border text-decoration-none text-light px-3 py-2 fs-5" style="background-color: var(--bg-medium);"
                            href="javascript:history.back()">Go Back
                        </a>

                        <div class="project-buttons d-flex gap-3">

                            <a target="_blank"
                                class="btn btn-drounded disabled text-decoration-none text-light p-bg-light px-3 py-2 fs-5"
                                :href="project.link_to_project_view">
                                Have a better look to the website
                            </a>
                            <a target="_blank"
                                class="btn btn-github text-decoration-none text-light p-bg-light px-3 py-1 fs-5"
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
</template>


<style lang="scss" scoped>
.myCard {
    font-family: "Quicksand", sans-serif;
    position: relative;
    background-color: #ffffff21;
    background-image: var(--bs-gradient);
    color: #ffffffa7;
    border: 1px inset #ffffff55;
}

.w-adapt {
    width: fit-content;
}

.bg-light-trasparent {
    background-color: #ffffff4a;
    color: var(--bg-dark);
}

.badge {
    background-color: var(--bg-medium);
    font-size: 0.9rem;
}

.left-side {
    height: 60vh;
    overflow: scroll;
}

.duration h4 {
    color: var(--bg-dark);
    display: inline-block;
    margin-right: 0.25rem;
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
</style>
