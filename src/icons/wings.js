const Wings = {
  symbol: 'wings',
  color: '#000',
  plainIcon: c => {
    return `<g fill-rule="evenodd" fill="${
      c ? c : this.color
    }"><path d="M16.895 17.299L8.27 23.993 22 18.118l.796-.338-.001-.003 1.285-.55.065-3.264 1.855.513-1.414-3.146-3.818 2.963-2.719-4.674L6 9l9.183 2.461.233.795-8.028-.413 7.224 1.935 1.247 4.325zM16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16z"/><g fill-rule="nonzero"><path d="M16.895 17.299l-1.036.804-1.247-4.325-7.224-1.935 8.028.413z" fill-opacity=".7"/><path d="M16.895 17.299l.778 2.652L22 18.118 8.27 23.993zm3.873-3.006l3.818-2.963L26 14.476l-1.855-.513-.065 3.264-1.285.55z" fill-opacity=".3"/></g></g>`;
  },
  colorIcon() {
    return `<g fill="none" fill-rule="evenodd"><circle cx="16" cy="16" fill="#0dc9f7" r="16"/><g fill="#fff" fill-rule="nonzero"><path d="M18.904 15.739l-3.045 2.364-1.247-4.325-7.224-1.935 9.481.487z" fill-opacity=".305"/><path d="M8.27 23.993L24.586 11.33 26 14.476l-1.855-.513-.065 3.264z" fill-opacity=".7"/><path d="M22.796 17.78l-4.747-8.161L6 9l9.183 2.461 2.49 8.49z"/></g></g>`;
  }
};
export default Wings;
