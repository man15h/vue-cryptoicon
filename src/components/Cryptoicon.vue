<template>
  <svg
    :width="size"
    :height="size"
    :class="`cryptoicon--${symbol}`"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32 32"
    @click="$emit('click')"
    v-html="icon" />
</template>

<script>
export default {
  name: 'Cryptoicon',
  props: {
    symbol: {
      type: String,
      default: null
    },
    color: {
      type: String,
      default: null
    },
    size: {
      type: [String, Number],
      default: '24'
    },
    generic: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      lookupSymbol: new Map([['BCHSV', 'BSV'], ['BCHABC', 'BAB']])
    };
  },
  computed: {
    lSymbol() {
      return this.symbol && this.symbol.toLowerCase();
    },
    uSymbol() {
      return this.symbol && this.symbol.toUpperCase();
    },
    icon() {
      const symbol = this.lookupSymbol.has(this.uSymbol)
        ? this.lookupSymbol.get(this.uSymbol)
        : this.symbol;
      let icon = this.$options.lib.find(i => i.symbol === symbol.toLowerCase());
      if (icon) {
        return !this.color ? icon.colorIcon() : icon.plainIcon(this.color);
      } else if (this.generic) {
        let icon = this.$options.lib.find(i => i.symbol == 'generic');
        if (icon) {
          return !this.color ? icon.colorIcon() : icon.plainIcon(this.color);
        }
      } else {
        // eslint-disable-next-line no-console
        console.error(`Symbol of the icon is not correct: ${this.symbol}`);
        return undefined;
      }
    }
  },
  lib: [],
  add(icons) {
    if (Array.isArray(icons)) {
      this.lib = icons;
    } else {
      this.lib.push(icons);
    }
  }
};
</script>
