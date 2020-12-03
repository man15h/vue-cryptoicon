<template>
  <div 
    :class="[{'full': closeGuide }, selectedTheme]" 
    class="container">
    <div 
      class="search-wrapper" >
      <div class="search">
        <input 
          v-model="searchValue" 
          type="search"
          class="search--input" 
          placeholder="Search icon">
      </div>
      <div class="button-wrapper">
        <div class="filter-btn">
          <button 
            v-for="btn in filterButtons"
            :key="btn"
            :class="{'selected': btn == selectedFilter}"
            class="button" 
            @click="filter(btn)">
            {{ btn }}
          </button>
        </div>
        <div class="theme-btn">
          <button 
            v-for="btn in themeButtons"
            :key="btn"
            :class="{'selected': btn == selectedTheme}"
            class="button" 
            @click="selectedTheme=btn">
            {{ btn }}
          </button>
        </div>
      </div>
      <div 
        class="toggle-btn" 
        @click="closeGuide= !closeGuide">
        <svg 
          :class="{'rotate': closeGuide}" 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 24 24" >
          <g data-name="Layer 2">
            <g data-name="arrowhead-right">
              <rect 
                width="24" 
                height="24" 
                transform="rotate(-90 12 12)" 
                opacity="0"/>
              <path d="M18.78 11.37l-4.78-6a1 1 0 0 0-1.41-.15 1 1 0 0 0-.15 1.41L16.71 12l-4.48 5.37a1 1 0 0 0 .13 1.41A1 1 0 0 0 13 19a1 1 0 0 0 .77-.36l5-6a1 1 0 0 0 .01-1.27z"/>
              <path d="M7 5.37a1 1 0 0 0-1.61 1.26L9.71 12l-4.48 5.36a1 1 0 0 0 .13 1.41A1 1 0 0 0 6 19a1 1 0 0 0 .77-.36l5-6a1 1 0 0 0 0-1.27z"/>
            </g>
          </g>
        </svg>
      </div>
    </div>
    <transition-group 
      :name="shuffleSpeed" 
      tag="div" 
      class="icon-wrapper">
      <div 
        v-for="(currency, index) in filteredCurrencies" 
        :key="index+currency.symbol"
        :class="{'selected': isSelected(currency.symbol) > -1}"
        class="icon"
        @click="selectIcon(currency.symbol)" >
        <cryptoicon 
          :symbol="currency.symbol"
          :color="selectedTheme !='color' ? selectedTheme: ''"
          generic
          size="42"
          class="left" />
        <div class="right" >
          <h3>{{ currency.name }}</h3>
          <p>{{ currency.symbol }}</p>
        </div>
      </div>
    </transition-group>
    <div 
      :class="{'close': closeGuide}" 
      class="guideline-wrapper">
      <div class="title">
        <h1>vue-cryptoicon  
          <a 
            class="github-button" 
            href="https://github.com/man15h/vue-cryptoicon" 
            data-show-count="true" 
            aria-label="Star man15h/vue-cryptoicon on GitHub">Star</a></h1>
        <h4>
          Beautiful pixel perfect 400+ cryptocurrency and 10+ Fiat currency icon, in a range of styles and sizes
        </h4>
      </div>
      <h2>Install</h2>
      <p> Installing with NPM or Yarn </p>
      <prism language="javascript">
        npm install vue-cryptoicon // yarn add vue-cryptoicon
      </prism>
      <h2>Use</h2>
      <p>
        To use in your project, just import vue-cryptoicon and install into Vue.
      </p>
      <prism language="javascript">
        //  main.js 
        import Vue from 'vue';
        import Cryptoicon from 'vue-cryptoicon';
        import {{ !selectedIcons.length ? 'icons' : selectedIconObj }} from 'vue-cryptoicon/src/icons';
        Cryptoicon.add({{ !selectedIcons.length ? 'icons' : selectedIconArr }});
        Vue.use(Cryptoicon);  

        // App.vue
        // Bitcoin color icon
        &lt;cryptoicon symbol="btc" size="24" /> 
      </prism>
      <h2>Props</h2>
      <table>
        <thead>
          <tr>
            <th style="text-align: left;">Name</th> 
            <th style="text-align: left;">Description</th> 
            <th style="text-align: left;">Type</th>
            <th style="text-align: left;">Default</th>
            <th style="text-align: left;">Accepted values</th>
          </tr>
        </thead> 
        <tbody>
          <tr 
            v-for="prop in props" 
            :key="prop.name">
            <td style="text-align: left;">
              <code>{{ prop.name }}</code>
            </td> 
            <td style="text-align: left;">
              {{ prop.description }}
            </td>
            <td style="text-align: left;">
              <code> {{ prop.type }}</code>
            </td>
            <td style="text-align: left;">
              {{ prop.default }}
            </td>
            <td style="text-align: left;">
              {{ prop.accepted }}
            </td>
          </tr> 
        </tbody>
      </table>
      <h2>Advance</h2>
      <p>
        You can change the default value of size and color in main.js
      </p>
      <prism language="javascript">
        //  main.js 
        Vue.use(Cryptoicon, { size: '50', color: 'black' });
      </prism>
      <h2>Licence</h2>
      <a 
        href="https://github.com/man15h/vue-cryptoicon/blob/master/LICENSE" 
        target="_blank"> 
        MIT license.
      </a>
    </div>
  </div>
</template>
<script>
import Vue from 'vue';
import Vue2Filters from 'vue2-filters';
const data = require('./data.json'); //with path
import Prism from 'vue-prism-component';

export default {
  name: 'App',
  components: {
    Prism
  },
  mixins: [Vue2Filters.mixin],
  data() {
    return {
      currencies: data,
      searchValue: '',
      shuffleSpeed: 'shuffleMedium',
      filterButtons: ['A-Z', 'Z-A', 'top', 'fiat', 'shuffle'],
      themeButtons: ['white', 'black', 'color'],
      sortKey: 'symbol',
      sortOrder: 1,
      selectedIcons: [],
      closeGuide: false,
      selectedFilter: 'A-Z',
      selectedTheme: 'white',
      props: [
        {
          name: 'symbol',
          description: 'Cryptocurrency symbol',
          type: 'String',
          default: '-',
          accepted: 'Valid and Available'
        },
        {
          name: 'color',
          description: 'Color of the symbol',
          type: 'String',
          default: 'Original color icon',
          accepted: 'HEX or color name'
        },
        {
          name: 'size',
          description: 'Size of the icon',
          type: 'Number',
          default: '24',
          accepted: 'Positive integer'
        }
      ]
    };
  },
  computed: {
    filteredCurrencies() {
      return this.filterBy(
        this.currencies,
        this.searchValue,
        'name',
        'symbol',
        'type'
      );
    },
    selectedIconObj() {
      return `{${this.selectedIcons.join(', ')}}`;
    },
    selectedIconArr() {
      return `[${this.selectedIcons.join(', ')}]`;
    }
  },
  methods: {
    shuffleDeck() {
      for (let i = this.currencies.length - 1; i > 0; i--) {
        let randomIndex = Math.floor(Math.random() * i);
        let temp = this.currencies[i];
        Vue.set(this.currencies, i, this.currencies[randomIndex]);
        Vue.set(this.currencies, randomIndex, temp);
      }
    },
    filter(key) {
      this.selectedFilter = key;
      if (key == 'shuffle') {
        this.shuffleDeck();
      } else if (key == 'A-Z' || key == 'Z-A') {
        if (key == 'Z-A') this.sortOrder = -1;
        else this.sortOrder = 1;
        this.sortKey = 'symbol';
        this.sortCurrencies();
      } else if (key == 'top') {
        console.log(key);
        this.sortKey = 'rank';
        this.sortOrder = 1;
        this.sortCurrencies();
      } else if (key == 'fiat') {
        this.searchValue = 'fiat';
      } else {
        this.sortKey = '';
        this.sortOrder = 1;
        this.sortCurrencies();
      }
    },
    sortCurrencies() {
      this.currencies = this.orderBy(
        this.currencies,
        this.sortKey,
        this.sortOrder
      );
    },
    selectIcon(symbol) {
      const index = this.isSelected(symbol);
      if (index > -1) {
        this.selectedIcons.splice(index, 1);
      } else {
        const icon = symbol.toLowerCase().replace(/^\w/, c => c.toUpperCase());
        this.selectedIcons.push(icon);
      }
    },
    isSelected(symbol) {
      const icon = symbol.toLowerCase().replace(/^\w/, c => c.toUpperCase());
      const index = this.selectedIcons.indexOf(icon);
      if (index > -1) {
        return index;
      } else {
        return -1;
      }
    }
  }
};
</script>
<style lang="scss">
// variables
@import './scss/main.scss';

h1 {
  font-weight: 700;
  font-size: 3.5rem;
  letter-spacing: 0.05rem;
}
.container {
  display: grid;
  position: relative;
  grid-template-rows: calc(100px + 4rem) calc(100vh - 100px - 4rem);
  grid-template-columns: calc(100% - 70rem) 70rem;
  overflow: hidden;
  font-size: 1.4rem;
  @include transition;
  &.full {
    @include transition;
    grid-template-columns: 100%;
  }
  @include desktop {
    grid-template-columns: calc(100% - 60rem) 60rem;
  }
  @include tablet {
    grid-template-columns: 50rem calc(100% - 50rem);
  }
  @include small-tablet {
    grid-template-columns: 100%;
  }
  @include mobile {
    grid-template-columns: 100%;
  }
}

.search {
  &-wrapper {
    grid-row-start: 1;
    grid-column-start: 1;
    grid-column-end: 2;
    position: relative;
    grid-row-end: 2;
    padding: 2rem;
    @include tablet {
      padding: 3rem 2rem 2rem;
    }
    height: 100px;
    width: calc(100% - 4rem);
    top: 0;
    flex-direction: column;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  border-radius: 3px;
  width: 100%;
  max-width: 70rem;
  height: 3.7rem;
  display: inline-block;
  vertical-align: middle;
  @include desktop {
    max-width: 50rem;
  }
  &--input {
    width: 100%;
    height: 3.7rem;
    border: none;
    outline: none !important;
    text-indent: 4.4rem;
    background: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1Ni45NjYgNTYuOTY2Ij48cGF0aCBkPSJNNTUuMTQ2IDUxLjg4N0w0MS41ODggMzcuNzg2QTIyLjkyNiAyMi45MjYgMCAwIDAgNDYuOTg0IDIzYzAtMTIuNjgyLTEwLjMxOC0yMy0yMy0yM3MtMjMgMTAuMzE4LTIzIDIzIDEwLjMxOCAyMyAyMyAyM2M0Ljc2MSAwIDkuMjk4LTEuNDM2IDEzLjE3Ny00LjE2MmwxMy42NjEgMTQuMjA4Yy41NzEuNTkzIDEuMzM5LjkyIDIuMTYyLjkyLjc3OSAwIDEuNTE4LS4yOTcgMi4wNzktLjgzN2EzLjAwNCAzLjAwNCAwIDAgMCAuMDgzLTQuMjQyek0yMy45ODQgNmM5LjM3NCAwIDE3IDcuNjI2IDE3IDE3cy03LjYyNiAxNy0xNyAxNy0xNy03LjYyNi0xNy0xNyA3LjYyNi0xNyAxNy0xN3oiLz48L3N2Zz4=)
      no-repeat 1.4rem 1.1rem;
    background-size: 1.7rem;
    box-sizing: border-box;
    font-size: 1.4rem;
    font-family: 'Montserrat', sans-serif;
  }
}

.button {
  &-wrapper {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    max-width: 70rem;
    width: 100%;
    align-items: center;
  }
  font-family: Montserrat, sans-serif;
  -moz-appearance: none;
  -webkit-appearance: none;
  padding: 0.7rem 1.4rem;
  border: 0;
  margin: 0;
  min-width: fit-content;
  outline: none !important;
  cursor: pointer;
  text-align: center;
  border-radius: 50px;
  font-size: 1.1rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  text-decoration: none;
  line-height: 1;
  -webkit-transition: background-color 0.1s ease-out;
  -o-transition: background-color 0.1s ease-out;
  transition: background-color 0.1s ease-out;
}
.filter-btn,
.theme-btn {
  display: flex;
  justify-content: space-between;
  max-width: 350px;
  width: 100%;
}
.theme-btn {
  max-width: 250px;
}

// button {
.icon-wrapper {
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  align-content: baseline;
  grid-row-start: 2;
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-end: 3;
  overflow: scroll;
  padding-top: 2.8rem;
  @include tablet {
    padding-top: 3rem;
  }
  justify-content: space-around;
  @include no-select;
  .icon {
    padding: 1.4rem 2.8rem;
    width: 230px;
    display: flex;
    border-radius: 0.6rem;
    margin-bottom: 2.8rem;
    max-height: 4rem;
    cursor: pointer;
    &:hover {
      box-shadow: 0 2px 20px 0 rgba(0, 0, 0, 0.1);
      @include transition;
    }
    &.selected {
      // outline: 1px solid $secondary
      box-shadow: 0 2px 20px 0 rgba(0, 0, 0, 0.1), 0 0 0 1px $secondary inset; // Inside white border 1px
    }
    h3 {
      margin: 0;
      font-weight: 300;
      font-size: 1.3rem;
    }
    p {
      margin: 0;
      margin-top: 0.56rem;
      font-weight: 800;
      letter-spacing: 0.05rem;
      font-size: 1.4rem;
    }
    .left {
      margin-right: 2.8rem;
    }
    .right {
      overflow: hidden;
      white-space: nowrap;
    }
  }
}
// shuffle transition

.shuffleSlow-move {
  transition: transform 2s;
}

.shuffleMedium-move {
  transition: transform 1s;
}

.shuffleFast-move {
  transition: transform 0.5s;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.guideline-wrapper {
  max-width: 70rem;
  height: 100vh;
  padding: 0 2.8rem 0;
  color: $textSecondary;
  grid-row-start: 1;
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-end: 3;
  position: relative;
  overflow: scroll;
  right: 0;
  .title {
    padding: 1rem 0 0.05rem;
    @include no-select;
  }
  @include small-tablet {
    display: none;
  }
  @include mobile {
    display: none;
  }
  h4,
  p {
    font-size: 1.4rem;
    font-weight: 400;
    color: $textMono;
    line-height: 2.24rem;
  }
  p {
    font-size: 1.3rem;
  }
  @include transition;

  &.close {
    @include transition;
    right: -700px;
    opacity: 0;
  }
  a {
    color: rgba($primary, 0.7);
    padding-bottom: 5rem;
  }
}
table {
  border-collapse: collapse;
  margin: 1rem 0;
  display: block;
  overflow-x: auto;
  font-size: 1.4rem;
  thead {
    display: table-header-group;
    vertical-align: middle;
    border-color: inherit;
  }
  tr {
    display: table-row;
    vertical-align: inherit;
    border-color: inherit;
    border-top: 1px solid #dfe2e5;
  }
  th {
    font-weight: bold;
    text-align: -internal-center;
  }
  td,
  th {
    border: 1px solid #dfe2e5;
    padding: 0.6em 1em;
  }
  tr {
    border-top: 1px solid #dfe2e5;
    display: table-row;
    vertical-align: inherit;
    border-color: inherit;
    &:nth-child(2n) {
      background-color: #f6f8fa;
    }
    code {
      background-color: rgba(27, 31, 35, 0.05);
      border-radius: 3px;
      font-size: 1.8rem;
      margin: 0;
      padding: 0.3em 0.5em;
    }
  }
}
.toggle-btn {
  position: absolute;
  right: -1px;
  top: 0;
  background: white;
  height: 3rem;
  width: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.4rem 0 0 0.4rem;
  cursor: pointer;
  @include no-select;
  @include transition;
  &:hover {
    @include transition;
    svg {
      height: 2.2rem;
      width: 2.2rem;
      path {
        fill: $textSecondary;
      }
    }
  }
  svg {
    height: 2rem;
    width: 2rem;
    @include transition;
    path {
      fill: $textMono;
    }
    &.rotate {
      @include transition;
      transform: rotate(180deg);
    }
  }
  @include small-tablet {
    display: none;
  }
  @include mobile {
    display: none;
  }
}
//black theme
.container.white {
  background: $bgPrimary;
  .search {
    &-wrapper {
      box-shadow: 0 2px 20px 0 rgba(0, 0, 0, 0.1);
      background: $bgSecondary;
    }
    background: #fff;
  }
  .button {
    &-wrapper {
    }
    background-color: white;
    color: $textSecondary;

    &.selected {
      background-color: $secondary;
    }
  }
  .icon-wrapper {
    color: white;
    .icon {
      background: $bgSecondary;
    }
  }
  .guideline-wrapper {
    background: white;
  }
}
.container.black,
.container.color {
  background: $textMono3;
  .search {
    &-wrapper {
      background: #fff;
      box-shadow: 0;
    }
    background: #fff;
    border: 1px solid $borderColor;
  }
  .button {
    &-wrapper {
    }
    background-color: white;
    border: 1px solid $borderColor;
    color: $textSecondary;
    &.selected {
      background-color: $secondary;
    }
  }
  .icon-wrapper {
    color: white;
    .icon {
      background: #fff;
      color: $textSecondary;
    }
  }
  .toggle-btn {
    border-left: 1px solid $borderColor;
    border-bottom: 1px solid $borderColor;
    border-top: 1px solid $borderColor;
    right: -2px;
    z-index: 10;
  }
  .guideline-wrapper {
    background: white;
    border-left: 1px solid $borderColor;
  }
}
</style>
