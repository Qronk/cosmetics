<template>
    <div class="ProductDetails">
        <!-- Modal -->
        <div class="modal fade" id="ProductDetails" tabindex="-1" role="dialog" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                    <div class="modal-body">
                        <div class="row" style="padding: 2%">
                            <img style="width: 50%; height: 90%"v-bind:src="chosenprod.image" alt="...">
                            <v-btn
                                    absolute
                                    dark
                                    fab
                                    bottom
                                    right
                                    color="pink"
                            >
                                <v-icon>add</v-icon>
                            </v-btn>
                            <div class="card text-center" style="width: 50%; border: 0px">
                                <div class="card-header" style="background-color: white; border: 0px">
                                        <span class="product-header">{{ chosenprod.type }}</span>
                                        <span class="product-name">{{ chosenprod.name }}</span>
                                </div>
                                <div class="card-body">
                                    <span class="product-price">
                                      ₪<b>{{ chosenprod.price }}</b>
                                    </span>
                                </div>
                                <div class="card-footer" style="background-color: white; border: 0px">
                                    <div class="col">
                                        <div class="col">
                                            <span class="badge" style="background-color: #A2A63A; margin-top: 5%">
                                                {{ chosenprod.model}}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                            <div class="card-body" style="max-height: 350px;
                                                overflow-y: scroll;">
                                <span class="product-titles" style="margin-top: 0px;">Действие</span>
                                {{ chosenprod.effect }}
                                <span class="product-titles">Способ применения</span>
                                {{ chosenprod.usage }}
                                <span class="product-titles">Активные ингредиенты</span>
                                {{ chosenprod.activeIngr }}
                                <span class="product-titles">Доступный объем</span>
                                {{ chosenprod.capacity }}
                            </div>


                </div>


            </div>
        </div>


    </div>



</template>

<script>

    import {fb} from '../firebase'

    export default {
        name: "ProductDetails",
        props: ["chosenprod"],
        data(){
            return {

            }
        },

        methods:{


            },


        }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .product-header {
        max-width: 100%;
        max-height:100%;
        display: block;
        font-size: 17px;
        font-weight: 400;
        letter-spacing: 1px;
        text-transform: uppercase;
        font-family: 'Roboto', sans-serif;
    }
    .product-titles {
        max-width: 100%;
        max-height:100%;
        display: block;
        font-size: 17px;
        font-weight: 400;
        letter-spacing: 1px;
        text-transform: uppercase;
        font-family: 'Roboto', sans-serif;
        margin-top: 5%;
        border-bottom: solid 1px;
        border-color: #ddd;
    }
    .product-name {
        max-width: 100%;
        max-height:100%;
        font-size: 15px;
        font-weight: 300;
        letter-spacing: 1px;
        text-transform: uppercase;
        font-family: 'Roboto', sans-serif;
    }
    .badge {
        position: top;
        font-size: 15px;
        font-weight: 300;
        color: #fff;
        padding: 2px 5px;
        border-radius: 4px;
        top: 15px    ;
        margin-left: 10%;
    }
    .cardprop {

    }
    .product-price {
        position: relative;
        display: -ms-flexbox;
        display: flex;
        -ms-flex-direction: column;
        flex-direction: column;
        width: 150px;
        background: #4f5866;
        padding: 7px 20px;
        text-align: center;
        display: inline-block;
        font-size: 24px;
        font-weight: 200;
        color: #fff;
        border-radius: 7px;
        margin-top: 10%;
        box-shadow: -10px 20px 15px -10px;
    }
</style>
