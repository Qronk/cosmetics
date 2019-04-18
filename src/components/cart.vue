<template>
    <div class="CartDetails">
        <!-- Modal -->
        <div class="modal fade" id="CartDetails" tabindex="-1" role="dialog" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content" style="width: 600px">
                    <div class="modal-body" >
                        <v-card style="margin-top: 20px;">

                            <v-card-title style="margin-top: 10px;">
                                <img style="height: 50px; margin-left: 3%" src="http://x-lines.ru/letters/i/cyrillicscript/0394/ef1fa0/20/0/ky.png">
                                <img style="height: 50px;" src="http://x-lines.ru/letters/i/cyrillicscript/0394/000000/16/0/qjzscmkdp73s43mwpftzg.png">
                            </v-card-title>
                            <v-divider></v-divider>
                            <div class="card-body" style="max-height: 400px;
                                                overflow-y: scroll;">
                                <div v-for="(cart, index) in cart"
                                     v-bind:key="cart.id"
                                     style="margin-top: 10px;"
                                >
                                    <div class="row" style="width: 550px; margin-top: 10px;
            ">
                                        <div style="width: 15%">
                                            <img :src="cart.image" style="height: 50px; margin-left: 20px">
                                        </div>
                                        <div style="width: 25%; margin-top: 10px">
                                            <p>{{ cart.name }}</p>
                                        </div>
                                        <div style="width: 20%; margin-top: 10px;">
                                            <p style="">{{ cart.price }} ₪</p>
                                        </div>
                                        <div style="width: 15%; margin-top: 10px;">
                                            <p style="">1</p>
                                        </div>
                                        <div style="width: 25%;">
                                            <v-btn fab dark small color="red" @click="deleteEvent(cart)"
                                                   style="">
                                                <v-icon dark>remove</v-icon>
                                            </v-btn>
                                            <v-btn fab dark small color="green" @click=""
                                                   style="">
                                                <v-icon dark>add</v-icon>
                                            </v-btn>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <v-card-actions style="height: 100px;">
                                <div style="width: 550px; margin-top: 10px">
                                    <span class="cart-total">
                                        TOTAL: ₪<b>{{ totalMarks }}.00</b>
                                    </span>
                                </div>
                            </v-card-actions>
                            <v-btn
                                    color="green darken-1"
                                    flat="flat"
                                    data-dismiss="modal"
                            >
                                Выйти
                            </v-btn>

                            <v-btn
                                    color="green darken-1"
                                    flat="flat"
                                    @click="dialog = false"
                            >
                                Оформить Заказ
                            </v-btn>


                        </v-card>
                    </div>
                </div>
            </div>
        </div>

    </div>


</template>

<script>
    export default {
        name: "CartDetails",
        props: ["cart", "index",],
        data () {
            return {
                dialog: false,
            }
        },
        methods: {
            // viewItem () {
            //     this.dialog = true
            // },
        },
        computed: {
            totalMarks: function() {
                let total = 0;
                for(let i = 0; i < this.cart.length; i++){
                    total += parseInt(this.cart[i].price);
                }
                return total;
            },
        }
    }
</script>

<style scoped lang="scss">
    .cart-total {
        position: relative;
        display: -ms-flexbox;
        display: flex;
        -ms-flex-direction: column;
        flex-direction: column;
        width: 300px;
        background: orange;
        padding: 7px 20px;
        text-align: center;
        display: inline-block;
        font-size: 24px;
        font-weight: 200;
        color: #fff;
        border-radius: 7px;
        margin-left: 40%;
        box-shadow: -10px 20px 15px -10px rgba(17, 233, 91, 0.3);
    }
    </style>