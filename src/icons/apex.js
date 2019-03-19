const Apex = {
  symbol: 'apex',
  color: '#000',
  plainIcon: c => {
    return `<path  fill="${
      c ? c : this.color
    }" d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zM6 19.25v4.25l10-12.75L26 23.5v-4.25L16 6.5 6 19.25zm10.5 1.25a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z" fill-rule="evenodd"  />`;
  },
  colorIcon() {
    return `<g fill="none" fill-rule="evenodd"><circle cx="16" cy="16" r="16" fill="#1F4C9F"/><path fill="#FFF" d="M6 19.25L16 6.5l10 12.75v4.25L16 10.75 6 23.5v-4.25zm10.5 1.25a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z"/></g>`;
  }
};
export default Apex;
