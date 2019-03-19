const Dgd = {
  symbol: 'dgd',
  color: '#000',
  plainIcon: c => {
    return `<path fill="${
      c ? c : this.color
    }" fill-rule="evenodd" d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zM5.5 11v10h10V11h-10zm7 3v-3h1v4h-8v-1h7zm-5 3h6v2h-6v-2zm19-4v-2h-10v10h10v-6h-6v2h4v2h-6v-6h8z"/>`;
  },
  colorIcon() {
    return `<g fill="none" fill-rule="evenodd"><circle cx="16" cy="16" r="16" fill="#F4D029"/><path fill="#FFF" d="M12.5 11v3h-7v-3h7zm1 0h2v10h-10v-6h8v-4zm-6 6v2h6v-2h-6zm19-4h-8v6h6v-2h-4v-2h6v6h-10V11h10v2z"/></g>`;
  }
};
export default Dgd;
