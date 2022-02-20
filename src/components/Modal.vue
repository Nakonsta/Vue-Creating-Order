<template>
  <div>
    <b-modal 
      id="create-order"
      ref="create-order"
      title="Оформление заказа"
      hide-header-close
      hide-footer
      no-close-on-esc
      no-close-on-backdrop
      size="md"
    >
      <div class="text-center py-5">
        Заказ успешно создан! Приятного путешествия!
      </div>
      <div class="text-center">
        <b-button 
          variant="success mx-2"
          @click="handleCreatedOrder"
        >
          Отлично!
        </b-button>
      </div>
    </b-modal>
  </div>
</template>

<script>
import { BButton} from 'bootstrap-vue'
import { mapActions } from 'vuex'
export default {
  name: 'Modal',
  components: {
    BButton,
  },
  methods: {
    ...mapActions([
      'clearProducts',
      'clearUserInfo',
    ]),
    handleCreatedOrder() {
      this.clearProducts();
      this.clearUserInfo();
      this.$router.push({ path: `/` });
    }
  }
}
</script>