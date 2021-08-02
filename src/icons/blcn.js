const Blcn = {
  symbol: 'blcn',
  color: '#000',
  colorIcon() {
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none" fill-rule="evenodd"><circle cx="16" cy="16" fill="#2aabe4" r="16"/><path d="M7.9 7h6.2a.9.9 0 01.9.9v6.2a.9.9 0 01-.9.9H7.9a.9.9 0 01-.9-.9V7.9a.9.9 0 01.9-.9zm10 0h6.2a.9.9 0 01.9.9v6.2a.9.9 0 01-.9.9h-6.2a.9.9 0 01-.9-.9V7.9a.9.9 0 01.9-.9zm0 10h6.2a.9.9 0 01.9.9v6.2a.9.9 0 01-.9.9h-6.2a.9.9 0 01-.9-.9v-6.2a.9.9 0 01.9-.9zm-10 0h6.2a.9.9 0 01.9.9v6.2a.9.9 0 01-.9.9H7.9a.9.9 0 01-.9-.9v-6.2a.9.9 0 01.9-.9z" fill="#fff"/></g>`;
  },
  plainIcon: c => {
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path fill-rule="evenodd" fill="${
      c ? c : this.color
    }" d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zM7.9 7a.9.9 0 00-.9.9v6.2a.9.9 0 00.9.9h6.2a.9.9 0 00.9-.9V7.9a.9.9 0 00-.9-.9zm10 0a.9.9 0 00-.9.9v6.2a.9.9 0 00.9.9h6.2a.9.9 0 00.9-.9V7.9a.9.9 0 00-.9-.9zm0 10a.9.9 0 00-.9.9v6.2a.9.9 0 00.9.9h6.2a.9.9 0 00.9-.9v-6.2a.9.9 0 00-.9-.9zm-10 0a.9.9 0 00-.9.9v6.2a.9.9 0 00.9.9h6.2a.9.9 0 00.9-.9v-6.2a.9.9 0 00-.9-.9z" fill-rule="evenodd"/>`;
  }
};
export default Blcn;
