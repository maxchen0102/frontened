<template>
    <div class="page-checkout">
        <div class="columns is-multiline">
            <div class="column is-12">
                <h1 class="title">Checkout</h1>
            </div>

            <div class="column is-12 box">
                <table class="table is-fullwidth">
                    <thead>
                        <tr>
                            <th>Product</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Total</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr
                            v-for="item in cart.items"
                            v-bind:key="item.product.id"
                        >
                            <td>{{ item.product.name }}</td>
                            <td>${{ item.product.price }}</td>
                            <td>{{ item.quantity }}</td>
                            <td>${{ getItemTotal(item).toFixed(2) }}</td>
                        </tr>
                    </tbody>

                    <tfoot>
                        <tr>
                            <td colspan="2">總金額</td>
                            <td>{{ cartTotalLength }}</td>
                            <td>${{ cartTotalPrice.toFixed(2) }}</td>
                        </tr>
                    </tfoot>
                </table>
            </div>

            <div class="column is-12 box">
                <h2 class="subtitle">個人資料</h2>

                <p class="has-text-grey mb-4">* All fields are required</p>

                <div class="columns is-multiline">
                    <div class="column is-6">
                        <div class="field">
                            <label>name*</label>
                            <div class="control">
                                <input type="text" class="input" v-model="name">
                            </div>
                        </div>


                        <div class="field">
                            <label>Phone*</label>
                            <div class="control">
                                <input type="text" class="input" v-model="phone">
                            </div>
                        </div>
                


                    </div>
                </div>

                <div class="notification is-danger mt-4" v-if="errors.length">
                    <p v-for="error in errors" v-bind:key="error">{{ error }}</p>
                </div>

                <hr>

                <div id="card-element" class="mb-5"></div>

                <template v-if="cartTotalLength">
                    <hr>

                    <button class="button is-dark" @click="checkout_fill_data">Pay with Stripe</button>
                </template>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'Checkout',
    data() {
        return {
            cart: {
                items: []
            },
            card: {},
            name: '',
            phone: '',
            errors: [],
            payload:{}
        }
    },
    mounted() {
        document.title = 'Checkout | Djackets'

        this.cart = this.$store.state.cart

        // if (this.cartTotalLength > 0) {
        //     this.stripe = Stripe('pk_test_51H1HiuKBJV2qfWbD2gQe6aqanfw6Eyul5PO2KeOuSRlUMuaV4TxEtaQyzr9DbLITSZweL7XjK3p74swcGYrE2qEX00Hz7GmhMI')
        //     const elements = this.stripe.elements();
        //     this.card = elements.create('card', { hidePostalCode: true })

        //     this.card.mount('#card-element')
        // }
    },
    methods: {
        getItemTotal(item) {
            return item.quantity * item.product.price
        },

        checkout_fill_data() {
            this.errors = []

            if (this.name === '') {
                this.errors.push('The name field is missing!')
            }

            if (this.phone === '') {
                this.errors.push('The phone field is missing!')
            }

            if (!this.errors.length) {
                // 欄位都填好了->組訂單資料
                const items=[]
                for (let i = 0; i < this.cart.items.length; i++) {
                    const item = this.cart.items[i]
                    const obj = {
                        product: item.product.id,
                        quantity: item.quantity,
                        price: item.product.price * item.quantity
                    }
                    items.push(obj)
                }
                

                this.payload = {
                    'name': this.name,
                    'phone': this.phone,
                    'items':items,
                }
               
                this.submitForm(this.payload)
            }
            
        },
        async submitForm() {
            this.$store.commit('setIsLoading', true)
            console.log("結帳頁送出payload= ",this.payload) // 測試用

            await axios
                    .post('/api/v1/checkout/', this.payload)
                    .then(response => {
                        this.$store.commit('clearCart')
                        this.$router.push('/cart/success')
                    })
                    .catch(error => {
                        this.errors.push('Something went wrong. Please try again')

                        console.log(error)
                    })

                    this.$store.commit('setIsLoading', false)
        },

   
    },
    computed: {
        cartTotalPrice() {
            return this.cart.items.reduce((acc, curVal) => {
                return acc += curVal.product.price * curVal.quantity
            }, 0)
        },
        cartTotalLength() {
            return this.cart.items.reduce((acc, curVal) => {
                return acc += curVal.quantity
            }, 0)
        }
    }
}
</script>