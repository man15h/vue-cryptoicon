const Vtho = {
  symbol: 'vtho',
  color: '#000',
  plainIcon: c => {
    return `<path fill="${
      c ? c : this.color
    }" d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm4.272-26.942h-5.763l-4.487 11.78h4.45l-3.94 10.104 12.18-14.3h-5.1l5.683-7.584h-3.023z"/>`;
  },
  colorIcon() {
    return `<g fill="none"><circle cx="16" cy="16" r="16" fill="#2A5284"/><g fill="#FFF"><path fill-opacity=".704" d="M20.272 5.058h3.023l-5.682 7.584h5.099l-12.18 14.3 3.94-10.104h-4.45l4.487-11.78z"/><path d="M20.272 5.058h.182l-5.107 8.713h4.67l-9.485 13.17 3.94-10.103h-4.45l4.487-11.78z"/></g></g>`;
  }
};
export default Vtho;
