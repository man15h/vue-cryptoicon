const Ont = {
  symbol: 'ont',
  color: '#000',
  plainIcon: c => {
    return `<path fill="${
      c ? c : this.color
    }" d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm9-7.783V15.61C25 10.854 21.06 7 16.2 7c-2.43 0-4.63.964-6.223 2.521zM7 7.783v8.608C7 21.146 10.94 25 15.8 25c2.43 0 4.63-.964 6.223-2.521z"/>`;
  },
  colorIcon() {
    return `<g fill="none" fill-rule="evenodd"><circle cx="16" cy="16" fill="#32a4be" fill-rule="nonzero" r="16"/><path d="M25 24.217L9.977 9.521A8.871 8.871 0 0 1 16.2 7c4.86 0 8.8 3.854 8.8 8.609zM7 7.783l15.023 14.696A8.871 8.871 0 0 1 15.8 25C10.94 25 7 21.146 7 16.391z" fill="#fff"/></g>`;
  }
};
export default Ont;
