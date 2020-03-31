import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    strict:true,
    state: {
        products: [
            { name: "商品一", price: 200 },
            { name: "商品二", price: 400 },
            { name: "商品三", price: 600 },
        ]
    },
    getters: {
        saleProducts: (state) => {
            var saleProducts = state.products.map(
                product => {
                    return {
                        name: product.name + "**",
                        price: product.price*2,
                    }
                }
            );
            return saleProducts;
        },
    },
    mutations:{
        reducePrice:(state,amount)=>{
            state.products.forEach(product => {
                product.price -= 1;
            });
        }
    },
    actions:{
        reducePrice:(context,amount)=>{
            setTimeout(() => {
                context.commit('reducePrice',amount);
            }, 500);
        }
    },
});