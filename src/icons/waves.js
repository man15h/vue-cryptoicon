const Waves = {
  symbol: 'waves',
  color: '#000',
  plainIcon: c => {
    return `<path fill="${
      c ? c : this.color
    }" d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm0-26L6 16l10 10 10-10z" fill-rule="evenodd"/>`;
  },
  colorIcon() {
    return `<g fill="none" fill-rule="evenodd"><circle cx="16" cy="16" fill="#0155ff" r="16"/><path d="M16 6l10 10-10 10L6 16z" fill="#fff"/></g>`;
  }
};
export default Waves;
