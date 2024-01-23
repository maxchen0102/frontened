<template>
        <div class="hello" >
                      <div class="card" style="width: 18rem;">
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <router-link class="btn btn-primary" to="/page/child1">go to 1</router-link>
            </div>
          </div>

           <div class="card" style="width: 18rem;">
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          
                    <router-link class="btn btn-primary" to="/page/child2">go to 2</router-link>
                </div>
              </div>
            </div>
      <router-view></router-view> 
</template>

<script>
export default {
    name: 'HelloWorld',
    props: {
        msg: String
    }
}
</script>

