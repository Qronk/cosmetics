<template>
    <div>
    <v-card>
        <v-card-title>
            Nutrition
            <v-spacer></v-spacer>
            <v-text-field
                    v-model="search"
                    append-icon="search"
                    label="Search"
                    single-line
                    hide-details
            ></v-text-field>

        </v-card-title>
        <v-data-table
                :headers="headers"
                :items="products"
                :search="search"
                data-app

        >
            <template slot="items" slot-scope="props">
                <td>{{ props.item.data().name }}</td>
                <td class="text-xs-left">{{ props.item.data().price }}</td>
                <td class="justify-center layout px-0">
                    <v-icon
                            small
                            class="mr-2"
                            @click="editItem(props.item)"
                    >
                        edit
                    </v-icon>
                    <v-icon
                            small
                            @click="deleteItem(props.item.id)"
                    >
                        delete
                    </v-icon>
                </td>
            </template>
            <v-alert slot="no-results" :value="true" color="error" icon="warning">
                Your search for "{{ search }}" found no results.
            </v-alert>
        </v-data-table>
    </v-card>
        <!-- Modal -->
        <div class="modal fade" id="edit" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Edit Product</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div class="form-group">
                            <input type="text" placeholder="Product Name" v-model="product.name" class="form-control">
                        </div>
                        <div class="form-group">
                            <input type="text" placeholder="Price" v-model="product.price" class="form-control">
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button @click="updateProduct()" type="button" class="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
    </div>
    </div>
</template>

<script>
    import { fb, db} from '../firebase';
    export default {
        data () {
            return {
                products: [],
                product: {
                    name:null,
                    price:null
                },
                search: '',
                activeItem:null,
                headers: [
                    {
                        text: 'Product Name',
                        align: 'left',
                        value: 'name'
                    },
                    { text: 'Price', align: 'left', value: 'Price' },
                    { text: 'Actions', align: 'center', value: 'name', sortable: false }
                ],

            }
        },
        methods:{
        whatcher () {
            db.collection("products").onSnapshot((querySnapshot) =>  {
                    this.products = [];
                    querySnapshot.forEach((doc) => {
                        this.products.push(doc);
                    });

                });
        },
        updateProduct () {
            db.collection("products").doc(this.activeItem).update(this.product)
                .then(() => {
                    $('#edit').modal('hide');
                    this.whatcher();
                    console.log("Document successfully updated!");
                })
                .catch(function(error) {
                    // The document probably doesn't exist.
                    console.error("Error updating document: ", error);
                });
        },
        editItem (product) {
            $('#edit').modal('show');
            this.product = product.data();
            this.activeItem = product.id;
        },
        deleteItem (doc) {
            if(confirm('Are you sure ?')) {
                db.collection("products").doc(doc).delete().then(() => {
                    console.log("Document successfully deleted!");
                }).catch(function(error) {
                    console.error("Error removing document: ", error);
                });

            }else{

            }
        },
        readData(){

            db.collection("products").get().then((querySnapshot) => {
                // this.products = querySnapshot;

                querySnapshot.forEach((doc) => {

                    // doc.data() is never undefined for query doc snapshots
                    this.products.push(doc);
                });

            });
        },
        saveData(){

            db.collection("products").add(this.product)
                .then((docRef) => {
                    console.log("Document written with ID: ", docRef.id);
                    this.readData();
                })
                .catch(function(error) {
                    console.error("Error adding document: ", error);
                });

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
