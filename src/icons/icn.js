const Icn = {
  symbol: 'icn',
  color: '#000',
  plainIcon: c => {
    return `<path fill="${
      c ? c : this.color
    }" fill-rule="evenodd" d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm4.833-25v18H23.5V7h-2.667zm-4.444 9v9h2.667v-9h-2.667zm-4.445-4.5V25h2.667V11.5h-2.667zm-4.444 9V25h2.667v-4.5H7.5z"/>`;
  },
  colorIcon() {
    return `<g fill="none" fill-rule="evenodd"><circle cx="16" cy="16" r="16" fill="#4C6F8C"/><path fill="#FFF" fill-rule="nonzero" d="M20.833 7H23.5v18h-2.667V7zm-4.444 9h2.667v9h-2.667v-9zm-4.445-4.5h2.667V25h-2.667V11.5zm-4.444 9h2.667V25H7.5v-4.5z"/></g>`;
  }
};
export default Icn;
