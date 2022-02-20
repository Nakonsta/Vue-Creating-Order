<template>
  <div class="container">
    <div class="row">
      <div class="col-6">
        <h5 class="mb-4">Список товаров</h5>
        <div v-if="chosenProducts.length" class="products__table">
          <div class="products__table-header d-flex">
            <div class="product__cell product__name">
              {{ fields.name }}
            </div>
            <div class="product__cell product__quantity">
              {{ fields.quantity }}
            </div>
            <div class="product__cell product__price">
              {{ fields.price }}
            </div>
          </div>
          <div 
            v-for="(product, key) in chosenProducts"
            :key="key"
            class="d-flex product__row p-2 align-items-center w-100"
          >
            <div class="product__cell product__name">
              {{ product.name }}
            </div>
            <div class="product__cell product__quantity d-flex align-items-center">
              {{ product.quantity }}
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
      <div class="col-6">
        <h5 class="mb-4">Информация о доставке</h5>
        <div class="summary__user">
          <div class="row align-items-center mb-3">
            <div class="col-3">
              Имя:
            </div>
            <div class="col-9 summary__user-info">
              {{ customer.name ? customer.name : 'Не указано' }}
            </div>
          </div>
          <div class="row align-items-center mb-3">
            <div class="col-3">
              Телефон:
            </div>
            <div class="col-9 summary__user-info">
              {{ customer.phone ? customer.phone : 'Не указано' }}
            </div>
          </div>
          <div class="row align-items-center mb-3">
            <div class="col-3">
              Почта:
            </div>
            <div class="col-9 summary__user-info">
              {{ customer.email ? customer.email : 'Не указано' }}
            </div>
          </div>
          <div class="row align-items-center">
            <div class="col-3">
              Адрес:
            </div>
            <div class="col-9 summary__user-info">
              {{ customer.address ? customer.address : 'Не указано' }}
            </div>
          </div>
        </div>
      </div>
      <div class="col-12 mt-4">
        <router-link to="/customer-info">
          <b-button 
            variant="outline-success mx-2"
          >
            Назад
          </b-button>
        </router-link>
        <b-button 
          variant="success mx-2"
          v-b-modal.create-order
        >
          Оформить покупку
        </b-button>
      </div>
      <Modal />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { BButton } from 'bootstrap-vue'
import { fields, getProductTotalPrice, getTotalSum } from '../libs/lib'
import Modal from '@/components/Modal'

export default {
  name: 'Step1',
  components: {
    BButton,
    Modal,
  },
  data() {
    return {
      
    }
  },
  computed: {
    ...mapState([
      'products',
      'customer',
    ]),
    fields() {
      return fields;
    },
    chosenProducts() {
      return this.products.filter((product) => product.chosen === true);
    }
  },
  methods: {
    getProductTotalPrice,
    getTotalSum,
  }
}
</script>

<style lang="scss" scoped>
.summary {
  &__user {
    padding-top: 2.8rem;
    &-info {
      text-align: left;
    }
  }
}

.products-sum {
  padding-right: 180px;
}
</style>