const Grt = {
  symbol: 'grt',
  color: '#000',
  colorIcon() {
    return `<defs><filter color-interpolation-filters="auto" id="a"><feColorMatrix in="SourceGraphic" values="0 0 0 0 1.000000 0 0 0 0 1.000000 0 0 0 0 1.000000 0 0 0 1.000000 0"/></filter></defs><g fill="none" fill-rule="evenodd"><circle fill="#5942CC" fill-rule="nonzero" cx="16" cy="16" r="16"/><g filter="url(#a)"><path d="M20.707 19.543a1 1 0 010 1.414l-4 4a1 1 0 11-1.414-1.414l4-4a1 1 0 011.414 0zM15 7.25a6 6 0 110 12 6 6 0 010-12zm0 2a4 4 0 100 8 4 4 0 000-8zm7-2a1 1 0 110 2 1 1 0 010-2z" fill="#000" fill-rule="nonzero"/></g></g>`;
  },
  plainIcon: c => {
    return `<path fill-rule="evenodd" fill="${
      c ? c : this.color
    }" d="M16 0c8.837 0 16 7.163 16 16s-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0zm4.707 19.543a1 1 0 00-1.414 0l-4 4a1 1 0 101.414 1.414l4-4a1 1 0 000-1.414zM15 7.25a6 6 0 100 12 6 6 0 000-12zm0 2a4 4 0 110 8 4 4 0 010-8zm7-2a1 1 0 100 2 1 1 0 000-2z"/>`;
  }
};
export default Grt;
