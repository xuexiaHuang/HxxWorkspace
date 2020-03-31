<template>
  <div id="app">
    <!-- 
    <img src="./assets/baby1.png" style="height: 300px;width: 300px;"> -->
    <!-- <product-list-one v-bind:products="products"></product-list-one> 
    <product-list-two v-bind:products="products"></product-list-two>  -->
    <product-list-one></product-list-one> 
    <product-list-two></product-list-two> 
  </div>
</template>

<script>
  import ProductListOne from './components/ProductListOne.vue'
  import ProductListTwo from './components/ProductListTwo.vue'
export default {
  name: 'app',
   components:{
     'product-list-one':ProductListOne,
     'product-list-two':ProductListTwo,
   },
  data () {
   return{
    //  products:[
    //    {name:"张三",price:200},
    //    {name:"李四",price:400},
    //    {name:"黄六",price:600},
    //  ]
   }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
