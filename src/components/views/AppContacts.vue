<script>
export default {
    name: 'AppContacts',

    data() {
        return {

        }
    },
};
</script>

<template>
    <div class="container" :class="{'margin-50' : $route.fullPath == '/contacts'}">
        <div class="contact-me" data-aos="zoom-out-up">

            <a href="mailto:nico.dellolio18@gmail.com" class="text-decoration-none contact-link">
                <span>
                    <i class="fa-solid fa-envelope-open-text"></i>
                    <i class="fa-regular fa-envelope"></i>
                </span>
                <h1>
                    Let's get in touch
                </h1>
            </a>

        </div>
        <div class="contacts-list-box" :class="{'darker-contacts' : $route.fullPath == '/contacts'}">

            
            <h2>
                My contacts and profiles
            </h2>
            
            <ul class="list-unstyled contacts-list">
                <li>
                    <i class="devicon-github-original colored me-2"></i>

                    <span>GitHub</span> <a target="_blank" href="https://github.com/nicodellolio">github/nicodellolio</a>
                </li>
                <li>
                    <i class="fa-brands fa-linkedin me-2"></i>

                    <span>Linkedin</span> <a target="_blank" href="https://www.linkedin.com/in/nicola-dell%E2%80%99olio-2518a1238/">linkedin/nicoladellolio</a>
                </li>
                <hr>
                <li>
                    <span>This project repository</span> <a target="_blank" href="https://github.com/nicodellolio/vite-boolfolio-static">github/nicodellolio/portfolio</a>
                </li>

            </ul>
        </div>
    </div>
</template>

<style scoped >
.container {
    background-color: rgba(28, 3, 57, 0.204);
    border: 5px solid currentColor;
    border-radius: 50px;
    margin: 10% auto;

    .fa-envelope-open-text {
        display: none;
    }

    .contact-link {
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 5rem auto;
        width: fit-content;

        span {
            font-size: 4rem;
            color: var(--bg-dark);

        }

        h1 {
            display: inline-block;
            color: var(--bg-dark);
            padding-left: 2rem;
            text-transform: uppercase;
            font-weight: 900;
        }
    }

    .contact-link:hover {
        .fa-envelope {
            display: none;
        }

        .fa-envelope-open-text {
            display: inline-block;
            color: var(--bg-lighter);
        }

        h1 {
            scale: 1.1;
            color: var(--bg-lighter);
        }

        color: var(--bg-light);
    }

    .contacts-list-box{
        margin: 10% auto 0;
        width: fit-content;
        text-align: center;

        h2{
            font-weight: 100;
            color: var(--bg-dark);
            font-size: 2rem;
            margin-bottom: 1.5rem;
        }

        li{
            font-size: 1.25rem;
            span{
                font-weight: 700
            }
            a{
                text-decoration: none
            };
        }

    }
}
.darker-contacts{
    color: var(--bg-dark);
}

.margin-50{
    margin-top: 15%;
}

@media screen and (max-width: 460px) {
    .container{
        margin-top: 40%;
        width: 95%;

        a.contact-link{
            margin: 3rem auto;
            display: flex;
            flex-direction: column;
            h1{
                margin: -0.5rem 0 0 -1rem;
            }
        }
    
        .contacts-list-box{
            margin: 2rem auto;
        }
    }

}

</style>    