<script>
export default {
    name: 'AppAbout',
    data() {
        return {
            technologies: [
                {
                    "icon": "devicon-plain-space",
                    "name": ""
                },
                {
                    "icon": "devicon-css3-plain",
                    "name": "CSS 3"
                },
                {
                    "icon": "devicon-bootstrap-plain",
                    "name": "Bootstrap"
                },
                {
                    "icon": "devicon-mysql-original",
                    "name": "MYSQL"
                },
                {
                    "icon": "devicon-laravel-original",
                    "name": "Laravel"
                },
                {
                    "icon": "devicon-php-plain",
                    "name": "PHP"
                },
                {
                    "icon": "devicon-codepen-original",
                    "name": "CodePen"
                },
                {
                    "icon": "devicon-git-plain",
                    "name": "GIT"
                },
                {
                    "icon": "devicon-vscode-plain",
                    "name": "VS"
                },
                {
                    "icon": "devicon-javascript-plain",
                    "name": "JavaScript"
                },
                {
                    "icon": "devicon-npm-original-wordmark",
                    "name": "NPM"
                },
                {
                    "icon": "devicon-vitejs-plain",
                    "name": "Vite"
                },
                {
                    "icon": "devicon-vuejs-plain-wordmark",
                    "name": "VueJS"
                },
                {
                    "icon": "devicon-github-original colored",
                    "name": "GitHub"
                }
            ],
        }
    }
};
</script>

<template>

    <div class="container" id="about">
        <div class="hr"></div>

        <h1 class="text-end a-bit-about-me">A bit about me</h1>

        <div class="about-me">

            <img class="rounded-5" src="/assets/uploads/about_img.jpg" alt="">

            <div class="right-side">


                <p class="all-about-me">
                    I'm a creative soul who loves coding and travel. I spent a year in Australia working as a video
                    editor, where I discovered my passion for programming. Now, I'm diving into the tech world, blending
                    my creative background with my new coding skills. I'm all about tackling challenges and exploring
                    new places along the way.

                    <br>
                    <br>

                    I completed a 6-month full-time course to achive such skills. This intensive program taught me
                    the basics of both front-end and back-end development including modern frameworks, giving me a
                    strong foundation in web development. I worked on various projects and practical assignments, which
                    helped me gain hands-on experience.
                </p>


            </div>


        </div>

        <div class="small-chalk">
            <p>what I comfortbly deal with &downarrow;</p>
        </div>
    </div>
    <div class="slider">
        <div class="slide-track">

            <div v-for="technology in technologies" class="slide">
                <i :class="technology.icon"><span v-if="technology.name != 'VueJS'">{{ technology.name }}</span></i>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.container{
    margin-top: 3rem;
}
.about-me {
    display: flex;

    img {
        width: 50%;
        height: fit-content;
    }
}

.small-chalk {
    display: flex;
    align-items: end;
    width: 150px;
    margin-top: 10%;

    p {
        font-family: "Cabin Sketch", sans-serif;
        font-size: 1.7rem;
        transform: rotate(-15deg);
        color: #ffffffd5;
        font-weight: 600;

    }
}

.right-side {
    display: flex;
    flex-direction: column;

    .all-about-me {
        margin: 10% 0 4rem;
        line-height: 1.8;
        text-align: end;
        font-size: 1.25rem;
        font-family: "Comfortaa", sans-serif;
        font-optical-sizing: auto;
        color: #ffffffbc;
        font-weight: 100;
        width: 70%;
        align-self: flex-end;
    }
}

.a-bit-about-me {
    font-size: 8rem;
    margin-top: 5rem;
    font-weight: 800;
    text-transform: lowercase;
    color: var(--bg-lighter)
}

@media screen and (max-width: 460px) {

    .container{
        margin-top: 1rem;
    }

    h1.a-bit-about-me{
        font-size: 3rem;
        margin-top: 2rem;
    }
    .about-me{
        display: block;
        img{
            width: 100%
        }
    }
    .right-side{
        .all-about-me{
            padding: 0 1rem;
            width: 100%;
            font-size: 1rem
        }
    }

    .small-chalk{
        margin-left: 1rem
    }
}

@import '../../partials_scss/_carousel.scss';
</style>
