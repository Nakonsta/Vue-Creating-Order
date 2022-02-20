<template>
  <div class="container">
    <div class="container__inner">
      <div class="row">
        <div class="col-12">
          <div class="form-wrapper">
            <form class="form">
              <div class="row align-items-center mb-3">
                <div class="col-3">
                  Имя
                </div>
                <div class="col-9">
                  <b-form-input 
                    v-model="customer.name" 
                    placeholder="Имя"
                    @input="updateCustomerInfo"
                  ></b-form-input>
                </div>
              </div>
              <div class="row align-items-center mb-3">
                <div class="col-3">
                  Телефон
                </div>
                <div class="col-9">
                  <b-form-input 
                    v-model="customer.phone" 
                    placeholder="Телефон"
                    @input="updateCustomerInfo"
                    v-mask="{
                      mask: '+7(999)999-99-99',
                    }"
                  ></b-form-input>
                </div>
              </div>
              <div class="row align-items-center mb-3">
                <div class="col-3">
                  Почта
                </div>
                <div class="col-9">
                  <b-form-input 
                    v-model="customer.email" 
                    placeholder="Электронная почта"
                    @input="updateCustomerInfo"
                  ></b-form-input>
                </div>
              </div>
              <div class="row align-items-center">
                <div class="col-3">
                  Адрес
                </div>
                <div class="col-9">
                  <b-form-input 
                    v-model="customer.address" 
                    placeholder="Адрес"
                    @input="updateCustomerInfo"
                  ></b-form-input>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div class="col-12 mt-4">
          <router-link to="/">
            <b-button 
              variant="outline-success mx-2"
            >
              Назад
            </b-button>
          </router-link>
          <router-link to="/summary">
            <b-button 
              variant="outline-success mx-2"
            >
              Далее
            </b-button>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import { BButton } from 'bootstrap-vue'

export default {
  name: 'Step1',
  components: {
    BButton
  },
  computed: {
    ...mapState([
      'customer',
    ]),
  },
  methods: {
    ...mapActions([
      'setCustomerInfo',
    ]),
    updateCustomerInfo() {
      this.setCustomerInfo(this.customer);
    }
  }
}
</script>

<style lang="scss" scoped>
.container__inner {
  max-width: 35%;
  margin: 0 auto;
}
</style>
