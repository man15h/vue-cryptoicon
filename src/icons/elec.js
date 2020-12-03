const Elec = {
  symbol: 'elec',
  color: '#000',
  plainIcon: c => {
    return `<path fill-rule="evenodd" fill="${
      c ? c : this.color
    }" d="M16.74 14.284L19.51 4 8 18.27h6.262l-3.502 9.317 12.666-13.303H16.74zM16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16z"/>`;
  },
  colorIcon() {
    return `<g fill="none"><circle cx="16" cy="16" r="16" fill="#F90"/><g fill="#FFF"><path d="M10.76 27.587l12.666-13.303H15.76z"/><path d="M8 18.27h7.666l7.76-3.986H15.76z"/><path d="M19.51 4L8 18.27h7.666z"/></g></g>`;
  }
};
export default Elec;
