<script>

export default {
    name: 'NotFound',
    data() {
        return {
            error_message: 'I couldn\'t find what you\'re looking for',
        }
    }
}
</script>

<template>

    <div class="d-flex flex-row">
        <div class="error-container container">
            <div class="error_number">404</div>
            <div class="error_message">{{ error_message }}</div>
            <a class="btn btn-warning fw-light fs-5" href="javascript:history.back()">Better go Back</a>
        </div>
    </div>
    <i class="fa-solid fa-people-pulling"></i>
</template>


<style lang="scss" scoped>
* {
    overflow: hidden;
}

.fa-people-pulling {
    font-size: 45rem;
    position: absolute;
    right: 0;
    bottom: 0;
    color: #4a0336;
    z-index: -1;

}

.error_number {
    font-size: 20rem;
    margin: rem 0 0 3rem;
    font-weight: 900;
    color: rgb(213, 4, 213);
}

.error_message {
    color: rgb(145, 3, 145);
    font-size: 4rem;
    margin: -6rem 0 0 0rem;
}
</style>