const Sc = {
  symbol: 'sc',
  color: '#000',
  plainIcon: c => {
    return `<path fill="${
      c ? c : this.color
    }" fill-rule="evenodd" d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm0-24.5a8.5 8.5 0 1 0 0 17h8.5V16A8.5 8.5 0 0 0 16 7.5zm5.1 13.6h-5.023c-2.82 0-5.163-2.255-5.177-5.074a5.106 5.106 0 0 1 5.126-5.126c2.819.014 5.074 2.358 5.074 5.177V21.1z"/>`;
  },
  colorIcon() {
    return `<g fill="none" fill-rule="evenodd"><circle cx="16" cy="16" r="16" fill="#20EE82"/><path fill="#FFF" d="M16 7.5a8.5 8.5 0 0 1 8.5 8.5v8.5H16a8.5 8.5 0 1 1 0-17zm5.1 13.6v-5.023c0-2.82-2.255-5.163-5.074-5.177a5.106 5.106 0 0 0-5.126 5.126c.014 2.819 2.358 5.074 5.177 5.074H21.1z"/></g>`;
  }
};
export default Sc;
