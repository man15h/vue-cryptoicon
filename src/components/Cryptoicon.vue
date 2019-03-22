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
    fallback: {
      type: String,
      default: null
    }
  },
  computed: {
    icon() {
      let icon = this.$options.lib.find(
        i => i.symbol === this.symbol.toLowerCase()
      );
      if (icon) {
        return !this.color ? icon.colorIcon() : icon.plainIcon(this.color);
      } else if (this.fallback && this.fallback === 'generic') {
        let icon = this.$options.lib.find(i => i.symbol === 'generic');
        return !this.color ? icon.colorIcon() : icon.plainIcon(this.color);
      } else if (this.fallback) {
        return `${this.fallback}/${this.symbol}.svg`;
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
