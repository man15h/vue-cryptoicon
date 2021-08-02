const Sand = {
  symbol: 'sand',
  color: '#000',
  colorIcon() {
    return `<g fill="none"><circle fill="#04ADEF" cx="16" cy="16" r="16"/><path d="M10.75 7.067L9 8.867V16l1.75 1.8h6.935v3.6H14.25v-1.8H9v3.6l1.75 1.8h10.435l1.75-1.8V16l-1.75-1.8H14.25v-3.6h3.5v1.8H23V8.8L21.25 7h-10.5z" fill="#FFF"/></g>`;
  },
  plainIcon: c => {
    return `<path fill-rule="evenodd" fill="${
      c ? c : this.color
    }" d="M16 0c8.837 0 16 7.163 16 16s-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0zm5.25 7h-10.5v.067L9 8.867V16l1.75 1.8h6.935v3.6H14.25v-1.8H9v3.6l1.75 1.8h10.435l1.75-1.8V16l-1.75-1.8H14.25v-3.6h3.5v1.8H23V8.8L21.25 7z"/>`;
  }
};
export default Sand;
