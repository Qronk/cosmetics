<template>
    <div id="brands">
        <div class="col-md-4" style="margin-bottom: 2%; ">

            <div @click="showprod(brands)" class="card" style="height: 120px; cursor: pointer; box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);">
                <div style="height: 100px; width: 90%; margin-left: 5%; margin-top: 10px">
                    <img style="width: 100%; height: 100%" v-bind:src="brands.image" class="card-img-top" alt="...">
                </div>
            </div>
        </div>
    </div>

</template>

<script>

    export default {
        name: "brands",
        props: ["brands"],
        data() {
            return {
                chosenbrand: {
                    brand: '',
                    image: ''
                },
            }
        },
        computed: {

        },
        methods: {
            showprod (brands) {
                this.chosenbrand = Object.assign({}, brands);
                console.log(this.chosenbrand.brand);
                this.$emit('changebrand', this.chosenbrand.brand)


            },
        },

    }
</script>