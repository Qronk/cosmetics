<template>

  <div class="content" id="content">
      <div class="container">

          <h1 class="text-center p-5">
          <img src="http://x-lines.ru/letters/i/cyrillicscript/0288/000000/20/0/4nopbpqozmem7wfh4n47bxqosuea8wfi4n6pdn6oswopb86todem7wfw4gb7bqstomeas.png">
          </h1>
          <carousel v-bind:products="products"></carousel>
          <h1 class="text-center p-5">
              <img v-if="checkk>0" style="width: 20%; height: 20%" v-bind:src="chosenbrand.image" class="card-img-top" alt="...">
              <img v-if="checkk<0" src="http://x-lines.ru/letters/i/cyrillicscript/0288/000000/22/0/4nq7bcgttyopb8gosdem8wfo4n57bqgozw.png">
          </h1>
          <div v-if="checkk>0" style="margin-left: 10%">
              <v-btn round color="black" dark @click="showbrands()">
                  Назад
              </v-btn>
              <v-btn round color="black" style="min-width: 140px" dark
                 @click="showact(actions)" v-for="actions in filteredactions">{{ actions.action }}</v-btn>
              </div>
          <v-card-title style="margin-bottom: 3%;">
              <div v-if="checkk>0" class="text-xs-center">
                  <v-btn round color="grey" style="min-width: 140px" dark v-for="models in filteredModels"
                         @click="showmod(models)">{{ models.model }}</v-btn>

              </div>

              <v-text-field
                      v-model="search"
                      append-icon="search"
                      label="Search"
                      hide-details
                      v-if="checkk>0"
              ></v-text-field>
              
          </v-card-title>
          <div class="row">
              <div v-if="checkk<0" class="col-md-4" style="margin-bottom: 2%; " v-for="brands in filteredbrands">

                  <div @click="showprod(brands)" class="card" style="height: 120px; cursor: pointer; box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);">
                      <div style="height: 100px; width: 90%; margin-left: 5%; margin-top: 10px">
                    <img style="width: 100%; height: 100%" v-bind:src="brands.image" class="card-img-top" alt="...">
                      </div>
                  </div>
              </div>
          </div>

          <div class="row">
                <ProductDetails v-bind:chosenprod="chosenprod"></ProductDetails>
                <CartDetails v-bind:cart="cart"></CartDetails>
                <Navbar v-bind:cart="cart" v-bind:cartlenght="cartlenght"></Navbar>

              <div v-if="checkk>0" class="col-md-3" style="margin-bottom: 2%; " v-for="products in filteredProducts">
                  <v-hover>
                      <v-card
                              slot-scope="{ hover }"
                              :class="`elevation-${hover ? 12 : 2}`"
                              height="400px"
                              width="250"


                      >
                          <div v-show="products.sale" class="ribbon"><span>SALE</span></div>
                          <div class="prodimg" style="height: 180px; width: 100%; margin-left: 18%; padding: 5%" >
                              <v-btn
                                      absolute
                                      small
                                      dark
                                      fab
                                      right
                                      open-on-hover
                                      color="#A2A63A"
                                      style="margin-top: 160px"
                                      @click="addTocart(products, cart)"
                              >
                                  <v-icon>add</v-icon>
                              </v-btn>

                            <img style="width: 50%; height: 100%" v-bind:src="products.image" alt="..."@click="choseprod(products)" data-toggle="modal" data-target="#ProductDetails">
                             </div>

                                  <v-card-title>
                                      <div>
                                          <span class="headline">{{ products.type.substring(0,13)+".."}}</span>
                                          <div class="d-flex">
                                              <div class="ml-2 grey--text text--darken-2">
                                                  <span class="product-title">
                                                      {{ products.name.substring(0,21)}}
                                                      </span>
                                                  <span class="badge" style="background-color: #A2A63A">
                                                  {{ products.model}}
                                                  </span>
                                                  <span class="product-price">
                                                  ₪<b>{{ products.price }}</b>
                                                  </span>
                                              </div>
                                          </div>
                                      </div>
                                      <v-spacer></v-spacer>
                                      <v-btn icon class="mr-0">
                                          <v-icon>mdi-chevron-right</v-icon>
                                      </v-btn>
                                  </v-card-title>
                              </v-card>
                          </v-hover>
              </div>

          </div>
      </div>
  </div>
</template>

<script>
    import { fb, db} from '../firebase';
    import carousel from '../components/carousel';
    import ProductDetails from '../components/ProductDetails';
    import CartDetails from '../components/cart';
    import Navbar from '../components/Navbar';


export default {
    name: "Content",
    props: {
        msg: String
    },
    components: {
        carousel,
        ProductDetails,
        CartDetails,
        Navbar,

    },
    data(){
        return {
            products: [],
            brands: [],
            models: [],
            actions: [],
            color: 'red',
            cardprodamount: 0,
            cart: [],
            cartlenght: '',
            chosenprod: {
                name: '',
                brand: '',
                price: '',
                activeIngr: '',
                capacity: '',
                effect: '',
                image: '',
                inStock: '',
                model: '',
                type: '',
                usage: '',
                action: '',
            },
            chosenaction: {
                action: '',
                brand: ''
            },
            chosenbrand: {
                brand: '',
                image: ''
            },

            chosenmodel: {
                brand: '',
                model: '',

            },
            search: '',
            checkk: -1,
            branda: {
                brand: null,
                image: null

            }
        }
    },
    computed: {
        filteredProducts: function() {
            return this.products.filter((products) => {
                return products.brand == this.chosenbrand.brand &&
                       products.type.toLowerCase().includes(this.search.toLowerCase()) &&
                       products.model.toLowerCase().includes(this.chosenmodel.model.toLowerCase()) &&
                        products.action.toLowerCase().includes(this.chosenaction.action.toLowerCase())
            });
        },
        filteredModels: function() {
            return this.models.filter((models) => {
                return models.brand == this.chosenbrand.brand &&
                    models.action.toLowerCase().includes(this.chosenaction.action.toLowerCase())
            });
        },
        filteredactions: function() {
            return this.actions.filter((actions) => {
                return actions.brand.toLowerCase().includes(this.chosenbrand.brand.toLowerCase())

            });
        },
        filteredbrands: function() {
            return this.brands.filter((brands) => {
                return brands.brand.toLowerCase().includes(this.search.toLowerCase())
            });
        },


    },
    methods:{
        readData(){

            db.collection("brands").get().then((querySnapshot) => {
                // this.products = querySnapshot;

                querySnapshot.forEach((doc) => {

                    // doc.data() is never undefined for query doc snapshots
                    this.brands.push(doc.data());
                });

            });
            db.collection("products").get().then((querySnapshot) => {
                // this.products = querySnapshot;

                querySnapshot.forEach((doc) => {

                    // doc.data() is never undefined for query doc snapshots
                    this.products.push(doc.data());
                });

            });
            db.collection("models").get().then((querySnapshot) => {
                // this.products = querySnapshot;

                querySnapshot.forEach((doc) => {

                    // doc.data() is never undefined for query doc snapshots
                    this.models.push(doc.data());
                });


            });
            db.collection("actions").get().then((querySnapshot) => {
                // this.products = querySnapshot;

                querySnapshot.forEach((doc) => {

                    // doc.data() is never undefined for query doc snapshots
                    this.actions.push(doc.data());
                });

            });
        },

        addTocart (products, cart) {

            this.cart.push(products);

            this.cartlenght = this.cart.length;


        },
        choseprod (products) {
            this.chosenprod = Object.assign({}, products);
            console.log(this.chosenprod.name);

        },
        showmod (models) {
            this.chosenmodel = Object.assign({}, models);
            console.log(this.chosenmodel.model);

        },
        showact (actions) {
            this.chosenaction = Object.assign({}, actions);
            this.chosenmodel.model = '';
            console.log(this.chosenaction.action);

        },

        showprod (brands) {
            this.chosenbrand = Object.assign({}, brands);
            console.log(this.chosenbrand.brand);
            this.checkk = 1;




        },
        showbrands () {
            this.checkk = -1;
            this.chosenaction.action = '';
            this.chosenmodel.model = '';
            console.log(this.chosenaction.action);
        },

        reset(){
            // Object.assign(this.$data, this.$options.data.apply(this));
        }
    },
    created(){
        this.readData();



    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    body {
        font-family: 'Roboto', sans-serif;
        background: #353535;
    }
        .prodimg {
            border-top-left-radius: 4px;
            border-top-right-radius: 4px;
            cursor: pointer;


            &:hover {
                opacity: 0.5;
            }
        }
    .products{
        background-color: 	#FFFFFF;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        position: relative;
        /*background-image: url('https://wallpaperplay.com/walls/full/4/f/2/86526.jpg');*/
    }
    .contentnav{
        border: solid 1px;
        width: 100%;

    }
    .h1.oblique {
        font-style: oblique;
    }
    .product-title {
        max-width: 90%;
        max-height:70%;
        display: block;
        font-size: 17px;
        font-weight: 400;
        letter-spacing: 1px;
        text-transform: uppercase;
        font-family: 'Roboto', sans-serif;
    }
    .card-head {
        position: relative;
        margin-left: 13%;


    }
    .badge {
        position: relative;
        font-size: 15px;
        font-weight: 300;
        color: #fff;
        padding: 2px 5px;
        border-radius: 4px;
        top: 15px    ;
        margin-left: 10%;
    }
    .product-caption {
        display: block;
        padding: 0 20px;
        font-size: 10px;
        font-weight: 400;
        text-transform: uppercase;
        margin-top: 5%;
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
        margin-top: 15%;
        margin-left: 40%;
        box-shadow: -10px 20px 15px -10px rgba(17, 233, 91, 0.3);
    }
    .ribbon {
        position: absolute;
        right: -5px; top: -5px;
        z-index: 1;
        overflow: hidden;
        width: 75px; height: 75px;
        text-align: right;
    }
    .ribbon span {
        font-size: 10px;
        font-weight: bold;
        color: #FFF;
        text-transform: uppercase;
        text-align: center;
        line-height: 20px;
        transform: rotate(45deg);
        -webkit-transform: rotate(45deg);
        width: 100px;
        display: block;
        background: #79A70A;
        background: linear-gradient(#9BC90D 0%, #79A70A 100%);
        box-shadow: 0 3px 10px -5px rgba(0, 0, 0, 1);
        position: absolute;
        top: 19px; right: -21px;
    }
    .ribbon span::before {
        content: "";
        position: absolute; left: 0px; top: 100%;
        z-index: -1;
        border-left: 3px solid #79A70A;
        border-right: 3px solid transparent;
        border-bottom: 3px solid transparent;
        border-top: 3px solid #79A70A;
    }
    .ribbon span::after {
        content: "";
        position: absolute; right: 0px; top: 100%;
        z-index: -1;
        border-left: 3px solid transparent;
        border-right: 3px solid #79A70A;
        border-bottom: 3px solid transparent;
        border-top: 3px solid #79A70A;
    }

</style>
