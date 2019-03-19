const Mkr = {
  symbol: 'mkr',
  color: '#000',
  plainIcon: c => {
    return `<path fill="${
      c ? c : this.color
    }" d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zM7.838 12.056l6.032 4.367V22.5h1.838v-6.973L6 8.5v14h1.838zm10.292 4.367l6.032-4.367V22.5H26v-14l-9.708 7.027V22.5h1.838z" fill-rule="evenodd"/>`;
  },
  colorIcon() {
    return `<g fill="none" fill-rule="evenodd"><circle cx="16" cy="16" fill="#1abc9c" r="16"/><path d="M7.838 12.056V22.5H6v-14l9.708 7.027V22.5H13.87v-6.077zm10.292 4.367V22.5h-1.838v-6.973L26 8.5v14h-1.838V12.056z" fill="#fff" fill-rule="nonzero"/></g>`;
  }
};
export default Mkr;
