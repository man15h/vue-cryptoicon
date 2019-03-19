const Block = {
  symbol: 'block',
  color: '#000',
  plainIcon: c => {
    return `<path fill="${
      c ? c : this.color
    }" d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zM11.022 7l5.069 9-5.16 9H21.25l5.25-9-5.25-9H11.022zm5.43 3.166h2.988L22.789 16l-3.35 5.834h-2.986L19.802 16l-3.35-5.834zm-4.34.86L10.29 7.79 5.5 16l4.748 8.14 1.84-3.21L9.21 16l2.902-4.974z"/>`;
  },
  colorIcon() {
    return `<g fill="none" fill-rule="evenodd"><circle cx="16" cy="16" r="16" fill="#101341" fill-rule="nonzero"/><g fill="#FFF"><path d="M11.022 7H21.25l5.25 9-5.25 9H10.931l5.16-9-5.07-9zm5.43 3.166L19.803 16l-3.35 5.834h2.988L22.789 16l-3.35-5.834h-2.986z"/><path opacity=".5" d="M12.113 11.026L9.211 16l2.876 4.93-1.839 3.209L5.5 16l4.789-8.211z"/></g></g>`;
  }
};
export default Block;
