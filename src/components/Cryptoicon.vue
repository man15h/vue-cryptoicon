<template>
  <div :class="`cryptoicon--${symbol}`">
    <svg
      :width="size"
      :height="size"
      :class="`cryptoicon--${symbol}-svg`"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      @click="$emit('click')"
      v-html="icon"
    />
  </div>
</template>

<script>
export default {
  name: 'Cryptoicon',
  props: {
    symbol: {
      type: String,
      default: undefined
    },
    color: {
      type: String,
      default: null
    },
    size: {
      type: [String, Number],
      default: '24'
    }
  },
  computed: {
    icon() {
      let icon = this.$options.lib.find(
        i => i.symbol === this.symbol.toLowerCase()
      );
      if (icon) {
        if (!this.color) {
          return icon.colorIcon();
        } else {
          return icon.plainIcon(this.color);
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
<style scoped>
div {
  display: inline-flex;
}
</style>
