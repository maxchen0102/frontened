<template>

<form @submit.prevent="handle" class="form-group">
  <div class="input-group">
    <label>title:</label>
    <input type="text" v-model="title">
  </div>
  <div class="input-group">
    <label>conttne:</label>
    <input type="text" v-model="conttne">
  </div>
  <div class="input-group">
    <label>price:</label>
    <input type="number" v-model="price">
  </div>

 
  <button type="submit" class="btn btn-primary">submit</button>
</form>
<button class="btn btn-primary" @click="update"> update </button>


<label>input delete id </label>
<input type="number" v-model="id"> 
<button class="btn btn-primary" @click="prepare_delete_id"> delete api </button>
response : {{ response3 }}
<br>

=======
<br>
<br>
<button class="btn btn-primary" @click="get_all_product"> get_all_product </button>
response : {{ all_product_data }}
<br>
<br>
<label>input id:</label>
<input type="number" v-model="get_product_id"> 
<button class="btn btn-primary" @click="get_product_by_id_prepare"> get_product_by_id </button>
response : {{ product_by_id_data }}
<br>
<br>
response_data:{{ response_data }}
<br>
<br>

<br>
<br>

</template>


<script>

import axios from 'axios';
export default {
    data() {
        return {
            title:"default",
            conttne: "default",
          get_api: "http://127.0.0.1:8000/api/product",
          add_api: "http://127.0.0.1:8000/api/product_add",
          delete_api:"http://127.0.0.1:8000/api/prodcut_delete",
          product_by_id_data: [],
          all_product_data: [],

          add_data: {},
          data:{},

          price: 1,
      
          get_product_id: 1,
          response_data:"",
        }
    },
  methods: {
    get_product_by_id_prepare() {
        this.product_by_id_data=[]
      this.get_product_by_id(this.get_product_id)
        console.log("call get_product_by_id API")
      },

      get_product_by_id(id) {
           axios.get(`http://127.0.0.1:8000/api/product/${id}`,)
        .then(response => {
          console.log(response.data);
          this.product_by_id_data = response.data
          this.response_data = response.data
          this.title = response.data.title
          this.conttne = response.data.conttne
          this.price=response.data.price
          console.log("get_success")
          
        })
        .catch(error => {
            console.error('Error:', error);
        });
    },
         get_all_product() {
        axios.get(this.get_api)
        .then(response => {
          console.log(response.data);
          this.all_product_data = response.data
          this.response_data=response.data
          console.log("get_success")
        })
        .catch(error => {
            console.error('Error:', error);
        });
      },
        handle() {
            console.log("submit")
          this.add_data = {
            title:this.title,
            conttne:this.conttne,
            price:this.price,
          }
            this.add_product()
      },
    add_product() {
        axios.post(this.add_api,this.add_data)
        .then(response => {
          console.log(response.data);
          this.response_data=response.data
            console.log("add_success")
        })
        .catch(error => {
            console.error('Error:', error);
        });
    },
           prepare_delete_id() {
          
           this.deleteProduct(this.id)
      
      },
     deleteProduct(id) {
      axios.delete(`http://localhost:8000/api/prodcut_delete/${id}`)
        .then(response => {
          console.log('Product deleted:', response.data);
          this.response_data=response.data
          console.log('delete success:');
          // Optionally, update your component state or perform other actions
        })
        .catch(error => {
          console.error('Error deleting product:', error);
        });
    },
    update() {
      this.data = {
        title: this.title,
          conttne: this.conttne,
          price:this.price,
        }

        this.updateProduct(this.get_product_id, this.data )
      },

    updateProduct(id, updatedProductData) {
    axios.put(`http://localhost:8000/api/product_update/${id}/`, updatedProductData)
    .then(response => {
      console.log('Product updated:', response.data);
      this.response_data=response.data
      // Optionally, update your component state or perform other actions
    })
    .catch(error => {
      console.error('Error updating product:', error);
    });
}

    
    
    }
    
}

</script>
<style>
  
</style>