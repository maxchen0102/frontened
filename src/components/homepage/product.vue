<template>
    <div class="page-product">
        <div class="columns is-multiline">
            <div class="column is-9">
                <h1 class="title">{{ product.name }}</h1>
               <figure class="image mb-6">
                    <img v-bind:src="product.get_image" style="width: 1000px; height: 500px;">
                </figure>

                
                <h2 class="title" >介紹</h2>
                <p>{{ product.description }}</p>
            </div>

            <div class="column is-3">
               
                <br>
                <br>
                <br>
                 <h2 class="title">售價 ${{ product.price }}</h2>
               

                <div class="field has-addons mt-6">
                    <div class="control">
                        <input type="number" class="input" min="1" v-model="quantity">
                    </div>

                    <div class="control">
                        <a class="button is-dark" @click="addToCart" >Add to cart</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'product',
    data () {
        return {
        product: {},
        quantity: 1
        }
    },
    mounted() {
        this.getProduct()
    },
    methods: {
        async getProduct() {
            this.$store.commit('setIsLoading',true) //begin loaing 

            const category_slug = this.$route.params.category_slug
            const product_slug = this.$route.params.product_slug
            await axios
                .get(`/api/v1/products/${category_slug}/${product_slug}`)
                .then(response => {
                    this.product = response.data
                    document.title=this.product.name
                })
                .catch(error => {
                    console.log(error)
                })

            this.$store.commit('setIsLoading',false)  //ending loaing 
        },
        addToCart() {
               if (isNaN(this.quantity) || this.quantity < 1) {
                   this.quantity = 1
            }

            const item = {
                product: this.product,
                quantity: this.quantity
            }
            this.$store.commit('addToCart', item)
        }
    }
}
</script>