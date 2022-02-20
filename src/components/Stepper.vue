<template>
  <div class="stepper">
    <router-link 
      :disabled="true" 
      :event="''" 
      to="/"
      class="stepper__item"
    >
      Выбранные товары
    </router-link> →
    <router-link 
      :disabled="true" 
      :event="''" 
      to="/customer-info"
      class="stepper__item"
    >
      Информация о покупателе
    </router-link> →
    <router-link 
      :disabled="true" 
      :event="''" 
      to="/summary"
      class="stepper__item"
    >
      Итоговая информация
    </router-link>
  </div>
</template>

<script>

export default {
  name: 'Stepper',
}
</script>

<style lang="scss" scoped>
.stepper {
  padding: 30px;
  &__item {
    font-weight: bold;
    color: #2c3e50;
    cursor: default;
    text-decoration: none;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>