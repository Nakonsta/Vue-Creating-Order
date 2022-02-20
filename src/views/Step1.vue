<template>
  <div class="products">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div v-if="products.length" class="products__table">
            <div class="products__table-header d-flex">
              <div class="product__cell product__choosing"></div>
              <div class="product__cell product__img">
                {{ fields.image }}
              </div>
              <div class="product__cell product__name">
                {{ fields.name }}
              </div>
              <div class="product__cell product__desc">
                {{ fields.description }}
              </div>
              <div class="product__cell product__quantity">
                {{ fields.quantity }}
              </div>
              <div class="product__cell product__price">
                {{ fields.price }}
              </div>
            </div>
            <div 
              v-for="(product, key) in products"
              :key="key"
              class="d-flex product__row p-2 align-items-center w-100"
            >
              <div class="product__cell product__choosing">
                <a @click="toggleProductChoosing(product)"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" aria-labelledby="checkboxIconTitle" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none" color="#000000"> 
                    <title id="checkboxIconTitle">Checkbox (selected)</title>
                    <rect x="21" y="3" width="18" height="18" rx="1" transform="rotate(90 21 3)"/> 
                    <path v-if="product.chosen" d="M6.66666 12.6667L9.99999 16L17.3333 8.66669"/>
                  </svg>
                </a>
              </div>
              <div class="product__cell product__img">
                <img :src="require(`@/assets/img/${product.image}.jpeg`)" class="product__pic" />
              </div>
              <div class="product__cell product__name">
                {{ product.name }}
              </div>
              <div class="product__cell product__desc">
                {{ product.description }}
              </div>
              <div class="product__cell product__quantity d-flex align-items-center">
                <b-button 
                  variant="success mx-2"
                  @click="decreaseProductQuantity(product)"
                >
                  -
                </b-button>
                <b-form-input 
                  v-model="product.quantity"
                  class="product__input"
                  @input="updateQuantity"
                ></b-form-input>
                <b-button 
                  variant="success mx-2" 
                  @click="increaseProductQuantity(product)"
                >
                  +
                </b-button>
              </div>
              <div class="product__cell product__price">
                {{ getProductTotalPrice(product) }} ₽
              </div>
            </div>
            <div class="products__table-footer">
              <div class="products-sum">
                {{ getTotalSum(products) }} ₽
              </div>
            </div>
          </div>
          <div v-else class="pb-4">
            Нет выбранных товаров
          </div>
        </div>
      </div>
      <router-link to="/customer-info">
        <b-button 
          variant="outline-success"
        >
          Далее
        </b-button>
      </router-link>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import { BButton } from 'bootstrap-vue'
import { fields, getProductTotalPrice, getTotalSum } from '../libs/lib'

export default {
  name: 'Step1',
  components: {
    BButton
  },
  data() {
    return {
      
    }
  },
  computed: {
    ...mapState([
      'products',
    ]),
    fields() {
      return fields;
    },
  },
  methods: {
    ...mapActions([
      'toogleChoosing',
      'setQuantity',
    ]),
    getProductTotalPrice,
    getTotalSum,
    toggleProductChoosing(product) {
      product.chosen = !product.chosen;
      this.toogleChoosing(this.products);
    },
    updateQuantity() {
      this.setQuantity();
    },
    increaseProductQuantity(product) {
      this.products.find((item) => item.id === product.id).quantity++;
      this.updateQuantity();
    },
    decreaseProductQuantity(product) {
      if (this.products.find((item) => item.id === product.id).quantity == 0) {
        return;
      } 
      this.products.find((item) => item.id === product.id).quantity--;
      this.updateQuantity();
    },
  }
}
</script>

