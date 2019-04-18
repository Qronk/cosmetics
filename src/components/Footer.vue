<template>
    <div class="Footer">
        <div class="container h-100" style="">
            <div class="row">
                <div class="col-md-5">
                    <v-text-field

                    ></v-text-field>
                    <v-text-field

                    ></v-text-field>
                    <v-textarea

                    ></v-textarea>
                </div>
                <div class="col-md-5" style="margin-left: 3%;">
                    <h3>
                        <img src="http://x-lines.ru/letters/i/cyrillicscript/0138/000000/16/0/4no7bcstt9empwfa4gbpbpqto8eaaegtoropbxqosdem3wfarr.png">

                    </h3>
                    <h4>
                        ул. Йонатан Нетаниягу, Барнеа, Ашкелон
                    </h4>
                    <h4>
                        profcosmetics75@gmail.com
                    </h4>
                    <h4>
                        054-7619889
                    </h4>
                    <button class="btn custom-btn btn-outline-primary mr-4">Browse Products</button>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    // @ is an alias to /src
    import Hero from "@/components/Hero.vue";



    export default {
        name: "Footer",
        props: {
            msg: String
        }
    };
</script>

<style scoped>
    .Footer{
        background-color: #cccccc;
        height: 300px;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        position: relative;
        background-image: url('https://wallpaperplay.com/walls/full/8/7/f/86553.jpg');
    }

</style>

