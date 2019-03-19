const Lpt = {
  symbol: 'lpt',
  color: '#000',
  plainIcon: c => {
    return `<path fill="${
      c ? c : this.color
    }" d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm-1.775-8.517v3.509h3.508v-3.509h-3.508zm0-15.483v3.508h3.508V8h-3.508zm8.267 0v3.508H26V8h-3.508zM6 8v3.508h3.508V8H6zm12.358 7.742v3.508h3.509v-3.508h-3.509zm-8.275 0v3.508h3.509v-3.508h-3.509z"/>`;
  },
  colorIcon() {
    return `<g fill="none" fill-rule="evenodd"><circle cx="16" cy="16" r="16" fill="#000" fill-rule="nonzero"/><path d="M14.225 23.483h3.508v3.508h-3.508zm0-15.483h3.508v3.508h-3.508zm8.267 0H26v3.508h-3.508zM6 8h3.508v3.508H6zm12.358 7.742h3.508v3.508h-3.508zm-8.275 0h3.508v3.508h-3.508z" fill="#FFF"/></g>`;
  }
};
export default Lpt;
