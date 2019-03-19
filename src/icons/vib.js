const Vib = {
  symbol: 'vib',
  color: '#000',
  plainIcon: c => {
    return `<path fill="${
      c ? c : this.color
    }" d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zM7 7l10.2 18H22V7h-3.6v12.775L11.2 7z"/>`;
  },
  colorIcon() {
    return `<g fill="none"><circle cx="16" cy="16" fill="#ff1f43" r="16"/><path d="M7 7h4.2l7.2 12.775V7H22v18h-4.8z" fill="#fff"/></g>`;
  }
};
export default Vib;
