const Bat = {
  symbol: 'bat',
  color: '#000',
  plainIcon: c => {
    return `<path fill="${
      c ? c : this.color
    }" d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zM6 23.5l20-.023L16.051 6.5 6 23.5zm10.027-10.12l4.127 6.786H11.92l4.108-6.786z"/>`;
  },
  colorIcon() {
    return `<g fill="none"><circle cx="16" cy="16" r="16" fill="#FF5000"/><path fill="#FFF" d="M6 23.5l10.051-17L26 23.477 6 23.5zm10.027-10.12l-4.108 6.786h8.235l-4.127-6.786z"/></g>`;
  }
};
export default Bat;
