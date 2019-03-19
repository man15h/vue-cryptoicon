const Xdn = {
  symbol: 'xdn',
  color: '#000',
  plainIcon: c => {
    return `<path fill="${
      c ? c : this.color
    }" d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm-2.691-20v8h2.738c1.322 0 3.683-.803 3.683-4s-2.36-4-3.683-4zm1.51 6.38v-4.76h1.134c.944 0 2.077.578 2.077 2.38s-1.133 2.38-2.077 2.38zM20.77 12v8h.566v-6.872L26.433 20H27v-8h-.567v7.026L21.335 12zM5 12v2h1.888v-2zm2.833 0v2H9.72v-2zm2.832 0v2h1.889v-2zm0 3v2h1.889v-2zm0 3v2h1.889v-2zm-2.832-3v2H9.72v-2z" fill-rule="evenodd"/>`;
  },
  colorIcon() {
    return `<g fill="none" fill-rule="evenodd"><circle cx="16" cy="16" fill="#4f7aa2" r="16"/><path d="M13.309 12h2.738c1.322 0 3.683.803 3.683 4s-2.36 4-3.683 4H13.31zm1.51 6.38h1.134c.944 0 2.077-.578 2.077-2.38s-1.133-2.38-2.077-2.38H14.82zM20.77 12h.566l5.098 7.026V12H27v8h-.567l-5.098-6.872V20h-.567zM5 12h1.888v2H5zm2.833 0H9.72v2H7.833zm2.832 0h1.889v2h-1.889zm0 3h1.889v2h-1.889zm0 3h1.889v2h-1.889zm-2.832-3H9.72v2H7.833z" fill="#fff" fill-rule="nonzero"/></g>`;
  }
};
export default Xdn;
