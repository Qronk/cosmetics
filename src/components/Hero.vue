<template>
    <div class="hero">
        <!-- Hero section -->
        <section class="hero-section">
                    <div class="container">
                        <div class="row">
                            <div style="color: white; margin-top: 200px;">
                                <span>New Arrivals</span>
                                <h2>denim jackets</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum sus-pendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. </p>
                                <a href="#" class="site-btn sb-line">DISCOVER</a>
                                <a href="#" class="site-btn sb-white">ADD TO CART</a>
                            </div>
                        </div>
                        <div class="first-text">
                            <span>from</span>
                            <h2>$29</h2>
                            <p>SHOP NOW</p>
                        </div>

            </div>
        </section>

        <!-- Hero section end -->
    </div>
</template>

<script>
    export default {
        name: "Navbar",

        data() {
            return {

            }
        },
        computed: {

        },
        methods: {

        },

    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .animation-box {
        width: 75%;
        height: 27.5rem;
        background-color: blue;
        margin: 0 auto;
        overflow: hidden;
        position: relative;
    }
    .first-text {
        font-size: 4.4rem;
        position: absolute;
        left: 2.5rem;
        top: 5rem;
        opacity: 1;
        animation-name: topFadeOut;
        animation-duration: 5s;
        color: white;
    }
    @keyframes topFadeOut {
        0% {
            position: absolute;
            top: -3rem;
            opacity: 0;
        }

        75% {
            position: absolute;
            top: 25%;
            opacity: 1;
        }

        100% {
            opacity: 0;
        }
    }


</style>
