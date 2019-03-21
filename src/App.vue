<template>
  <div class="container">
    <div class="search-wrapper">
      <div class="search">
        <input 
          v-model="icon" 
          type="search"
          class="search--input" 
          placeholder="Search icon" >
      </div>
    </div>
    <div class="icon-wrapper">  
      <div 
        v-for="symbol in data" 
        :key="symbol.symbol"
        class="icon" >
        <cryptoicon 
          :symbol="symbol.symbol"
          class="left" />
        <div class="right" >
          <h3>{{ symbol.name }}</h3>
          <p>{{ symbol.symbol }}</p>
        </div>
      </div>
    </div>
    <div class="guideline-wrapper">
      <h1>vue-cryptoicon</h1>
      <h4>
        Beautiful pixel perfect 400+ cryptocurrency and 10+ Fiat currency icon, in a range of styles and sizes
      </h4>
      <h2>Install</h2>
      <pre v-highlightjs><code class="javascript">const s = new Date().toString()</code></pre>
    </div>
  </div>
</template>
<script>
const symbols = require('./../manifest.json'); //with path
const data = require('./data.json'); //with path
export default {
  name: 'App',
  data() {
    return {
      symbols: symbols,
      data: data,
      icon: ''
    };
  }
};
</script>
<style lang="scss">
// variables
@import './scss/main.scss';
h1 {
  font-weight: 700;
  font-size: 2rem;
  letter-spacing: 0.05rem;
}
.container {
  display: grid;
  position: relative;
  grid-template-rows: 100px calc(100vh - 100px);
  grid-template-columns: auto auto;
  overflow: hidden;
}
.search-wrapper {
  grid-row-start: 1;
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-end: 2;
  height: 100px;
  width: 100%;
  top: 0;
  background: $bgSecondary;
  box-shadow: 0 2px 20px 0 rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
}
.search {
  background: #fff;
  border-radius: 3px;
  width: 100%;
  max-width: 500px;
  height: 2.5rem;
  display: inline-block;
  vertical-align: middle;
  &--input {
    width: 100%;
    height: 2.5rem;
    border: none;
    outline: none !important;
    text-indent: 44px;
    background: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1Ni45NjYgNTYuOTY2Ij48cGF0aCBkPSJNNTUuMTQ2IDUxLjg4N0w0MS41ODggMzcuNzg2QTIyLjkyNiAyMi45MjYgMCAwIDAgNDYuOTg0IDIzYzAtMTIuNjgyLTEwLjMxOC0yMy0yMy0yM3MtMjMgMTAuMzE4LTIzIDIzIDEwLjMxOCAyMyAyMyAyM2M0Ljc2MSAwIDkuMjk4LTEuNDM2IDEzLjE3Ny00LjE2MmwxMy42NjEgMTQuMjA4Yy41NzEuNTkzIDEuMzM5LjkyIDIuMTYyLjkyLjc3OSAwIDEuNTE4LS4yOTcgMi4wNzktLjgzN2EzLjAwNCAzLjAwNCAwIDAgMCAuMDgzLTQuMjQyek0yMy45ODQgNmM5LjM3NCAwIDE3IDcuNjI2IDE3IDE3cy03LjYyNiAxNy0xNyAxNy0xNy03LjYyNi0xNy0xNyA3LjYyNi0xNyAxNy0xN3oiLz48L3N2Zz4=)
      no-repeat 1rem 0.7rem;
    background-size: 17px;
    box-sizing: border-box;
    font-size: 0.9rem;
    font-family: 'Montserrat', sans-serif;
    box-shadow: 0 20px 13px 1px rgba(22, 49, 80, 0.1);
  }
}

.icon-wrapper {
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  grid-row-start: 2;
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-end: 3;
  overflow: scroll;
  padding-top: 3rem;
  .icon {
    padding: 1rem 2rem;
    width: 230px;
    color: white;
    display: flex;
    background: $bgSecondary;
    margin-right: 2rem;
    margin-bottom: 2rem;
    border-radius: 0.4rem;
    // transition: all 0.2s ease-in-out;
    cursor: pointer;
    &:hover {
      box-shadow: 0 2px 20px 0 rgba(0, 0, 0, 0.1);
      border: 1px solid #4dbfb5;
      margin-right: calc(2rem - 2px);
      margin-bottom: calc(2rem - 2px);
      // transition: all 0.2s ease-in-out;
    }
    h3 {
      margin: 0;
      font-weight: 300;
    }
    p {
      margin: 0;
      margin-top: 0.4rem;
      font-weight: 800;
      letter-spacing: 0.05rem;
    }
    .left {
      margin-right: 2rem;
    }
    .right {
      overflow: hidden;
      white-space: nowrap;
    }
  }
}

.guideline-wrapper {
  background: white;
  max-width: 600px;
  height: 100vh;
  padding: 3rem 2rem;
  color: $textSecondary;
  grid-row-start: 1;
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-end: 3;
  h4 {
    font-size: 1rem;
    font-weight: 400;
    color: $textMono;
    line-height: 1.6rem;
  }
}
</style>
