import { createStore } from 'vuex'

const setLocalCartList = (state) => {
  const { cartList } = state
  const cartListString = JSON.stringify(cartList)
  localStorage.cartList = cartListString
}

// const getLocalCartList = () => {
//   return JSON.parse(localStorage.cartList) || {}
// }
const getLocalCartList = () => {
  try {
    const cartListStr = localStorage.getItem('cartList')
    if (cartListStr) {
      return JSON.parse(cartListStr)
    } else {
      // 如果没有找到 'cartList'，返回一个空对象或空数组
      return {} // 或者返回 []，取决于您的需求
    }
  } catch (error) {
    console.error('解析购物车列表时出错:', error)
    // 处理错误，比如返回一个空对象或空数组
    return {} // 或者返回 []，取决于您的需求
  }
}
export default createStore({
  state: {
    cartList: getLocalCartList()
    // 第一层级是商品ID
    // shopId: {
    // shopName:'沃尔玛',
    // productList:{
    //   productId: {
    //     _id: '1',
    //     name: '番茄250g/份',
    //     imgUrl: 'http://www.dell-lee.com/imgs/vue3/tomato.png',
    //     sales: 10,
    //     price: 33.6,
    //     oldPrice: 39.6
    //   },
  // },
  // }
  },
  getters: {
  },
  mutations: {
    addItemToCart (state, payload) {
      const { shopId, productId, productInfo } = payload
      const shopInfo = state.cartList[shopId] || {
        shopName: '', productList: {}
      }
      let product = shopInfo.productList[productId]
      if (!product) {
        productInfo.count = 0
        product = productInfo
      }
      product.count = product.count + payload.num
      if (payload.num > 0) { product.check = true }
      if (product.count < 0) { product.count = 0 }
      shopInfo.productList[productId] = product
      state.cartList[shopId] = shopInfo
      setLocalCartList(state)
    },
    changeCartItemChecked (state, payload) {
      const { shopId, productId } = payload
      const product = state.cartList[shopId].productList[productId]
      product.check = !product.check
      setLocalCartList(state)
    },
    cleanCartProducts (state, payload) {
      const { shopId } = payload
      state.cartList[shopId].productList = {}
      setLocalCartList(state)
    },
    setCartItemsChecked (state, payload) {
      const { shopId } = payload
      const products = state.cartList[shopId].productList
      if (products) {
        for (const key in products) {
          const product = products[key]
          product.check = true
        }
      }
      setLocalCartList(state)
    },
    changeShopName (state, payload) {
      const { shopId, shopName } = payload
      const shopInfo = state.cartList[shopId] || {
        shopName: '', productList: {}
      }
      shopInfo.shopName = shopName
      state.cartList[shopId] = shopInfo
      setLocalCartList(state)
    },
    clearCartData (state, shopId) {
      state.cartList[shopId].productList = {}
    }
  },
  actions: {
  },
  modules: {
  }
})
