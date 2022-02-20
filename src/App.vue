<template>
  <div id="app">
    <div id="nav">
      <stepper />
    </div>
    <router-view />
  </div>
</template>

<script>
import Stepper from '@/components/Stepper'

export default {
  components: {
    Stepper,
  },
}
</script>


<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0,0,0,0);
  white-space: nowrap;
  border: 0;
}

.product__cell {
  margin-right: 2rem;
  text-align: left;
  &:last-child {
    padding-right: 0;
  }
}

.product__row {
  &:nth-child(2n+2) {
    background-color: rgb(250, 250, 250);
  }
}

.product__choosing {
  width: 3%;
}

.product__name {
  width: 20%;
}

.product__img {
  width: 10%;
}

.product__pic {
  width: 80px;
  border-radius: 5px;
}

.product__desc {
  width: 25%;
}

.product__quantity {
  width: 30%;
}

.product__price {
  width: 12%;
  white-space: nowrap;
}

.product__input {
  max-width: 80px;
  text-align: center;
}

.products__table-header {
  font-weight: 700;
  border-bottom: 2px solid #555;
  padding-bottom: 0.5rem;
}

.products__table-footer {
  font-weight: 700;
  border-top: 2px solid #555;
  padding-top: 0.5rem;
  display: flex;
  justify-content: flex-end;
}

.products-sum {
  padding-right: 100px;
}
</style>
