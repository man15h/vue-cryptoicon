const Nav = {
  symbol: 'nav',
  color: '#000',
  plainIcon: c => {
    return `<path  fill="${
      c ? c : this.color
    }" fill-rule="evenodd" d="M16.524 22h4.797L27 10h-4.797l-3.443 7.276L14.815 10h-4.797L5 22h4.797l2.929-7.005L16.524 22zM16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16z"/>`;
  },
  colorIcon() {
    return `<g fill="none" fill-rule="evenodd"><circle cx="16" cy="16" r="16" fill="#7D59B5"/><path fill="#FFF" d="M21.32 22h-4.796l-3.798-7.005L9.797 22H5l5.018-12h4.797l3.945 7.276L22.203 10H27l-5.68 12z"/></g>`;
  }
};
export default Nav;
