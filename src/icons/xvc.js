const Xvc = {
  symbol: 'xvc',
  color: '#000',
  colorIcon() {
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none" fill-rule="evenodd"><circle cx="16" cy="16" fill="#b50126" r="16"/><path d="M10.118 10.743H8L9.664 8h4.134v10.717L21.714 8H26L14.857 24h-4.739z" fill="#fff"/></g>`;
  },
  plainIcon: c => {
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path fill-rule="evenodd" fill="${
      c ? c : this.color
    }" d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm-5.882-21.257V24h4.74L26 8h-4.286l-7.916 10.717V8H9.664L8 10.743z" fill-rule="evenodd"/>`;
  }
};
export default Xvc;
