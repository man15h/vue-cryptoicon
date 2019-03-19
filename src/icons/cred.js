const Cred = {
  symbol: 'cred',
  color: '#000',
  plainIcon: c => {
    return `<path fill="${
      c ? c : this.color
    }" d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm-3.864-16.034l-1.253 1.271L15.618 22 26 11.539l-1.253-1.271-9.13 9.19zm2.11-.31l1.255 1.273 5.616-5.658L19.864 10zm-2.276 4.83L7.251 15.7 6 16.97l4.734 4.762z" fill-rule="evenodd"/>`;
  },
  colorIcon() {
    return `<g fill="none" fill-rule="evenodd"><circle cx="16" cy="16" fill="#37e8a3" r="16"/><path d="M12.136 15.966l3.482 3.493 9.13-9.191L26 11.538 15.618 22l-4.735-4.763zm2.11-.31L19.864 10l1.253 1.27-5.617 5.66zm-2.276 4.83l-1.236 1.246L6 16.97l1.251-1.27z" fill="#fff" fill-rule="nonzero"/></g>`;
  }
};
export default Cred;
