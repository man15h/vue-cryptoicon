const Storm = {
  symbol: 'storm',
  color: '#000',
  colorIcon() {
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none" fill-rule="evenodd"><circle cx="16" cy="16" fill="#080d98" r="16"/><path d="M23 6l-12.029 8.25 6.076 3.875L9 26l13.302-9.208-5.994-3.875z" fill="#fff"/></g>`;
  },
  plainIcon: c => {
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path fill-rule="evenodd" fill="${
      c ? c : this.color
    }" d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm7-26l-12.03 8.25 6.077 3.875L9 26l13.302-9.208-5.994-3.875z" fill-rule="evenodd"/>`;
  }
};
export default Storm;
