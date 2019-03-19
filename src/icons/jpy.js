const Jpy = {
  symbol: 'jpy',
  color: '#000',
  plainIcon: c => {
    return `<path fill="${
      c ? c : this.color
    }" d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm1.548-13.289h5.063v-2.288h-4.197L24.5 7.5h-3.647l-4.8 7.534L11.251 7.5H7.5l6.06 8.923H9.39v2.288h5.063v1.878H9.39v2.288h5.063V25.5h3.096v-2.623h5.063V20.59h-5.063z" fill-rule="evenodd" />`;
  },
  colorIcon() {
    return `<g fill="none" fill-rule="evenodd"><circle cx="16" cy="16" fill="#eac749" r="16"/><path d="M17.548 18.711v1.878h5.063v2.288h-5.063V25.5h-3.096v-2.623H9.389v-2.288h5.063v-1.878H9.389v-2.288h4.171L7.5 7.5h3.752l4.8 7.534L20.853 7.5H24.5l-6.086 8.923h4.197v2.288z" fill="#fff"/></g>`;
  }
};
export default Jpy;
