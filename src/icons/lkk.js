const Lkk = {
  symbol: 'lkk',
  color: '#000',
  plainIcon: c => {
    return `<path fill="${
      c ? c : this.color
    }" fill-rule="evenodd" d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm-5.995-6L16 19.894 21.976 26v-3.656L16 16.24l-5.995 6.105V26zM5 13.633l2.531 2.606H16l-2.531-2.606H5zm22 0h-8.469V7.586L16 5v11.239h8.469L27 13.633z"/>`;
  },
  colorIcon() {
    return `<g fill="none" fill-rule="evenodd"><circle cx="16" cy="16" r="16" fill="#9D01EB"/><path fill="#FFF" fill-rule="nonzero" d="M10.005 26v-3.656L16 16.24l5.976 6.105V26L16 19.894 10.005 26zM5 13.633h8.469L16 16.24H7.531L5 13.633zm22 0l-2.531 2.606H16V5l2.531 2.586v6.047H27z"/></g>`;
  }
};
export default Lkk;
