<template>
  <div class="wrapper">
    <div class="container">
      <h1>Cryptocurrency  Icons </h1>
      <cryptoicon 
        v-for="symbol in top25" 
        :key="symbol.CoinInfo.Id"
        :symbol="symbol.CoinInfo.Name"
        class="icon" />
    </div>
  </div>
</template>
<script>
var symbols = require('./manifest.json'); //with path
var top25 = require('./top25.json'); //with path

export default {
  name: 'App',
  data() {
    return {
      symbols: symbols,
      top25: top25
    };
  }
};
</script>
<style lang="scss">
body {
  margin: 0;
  padding: 0;
  background: #2a2f39;
  -webkit-font-smoothing: antialiased;
  font-family: 'Source Sans Pro', sans-serif;
  font-size: 14px;
}
h1 {
  color: white;
  font-weight: 700;
  font-size: 4rem;
  letter-spacing: 0.05rem;
}
.container {
  max-width: 1000px;
  width: 100%;
  margin: auto;
  padding: 2rem;
  &--header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid grey;
    padding: 2rem 0;
  }
  &--body {
    justify-content: center;
    display: flex;
    flex-wrap: wrap;
    div {
      margin: 1rem 0.5rem;
    }
  }
}
.header {
  &--icon {
    flex: 1;
    max-width: 300px;
  }
  &--control {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }
}
.icon {
  margin: 1rem;
}
</style>
