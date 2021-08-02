const Act = {
  symbol: 'act',
  color: '#000',
  colorIcon() {
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none" fill-rule="evenodd"><circle cx="16" cy="16" r="16" fill="#767DFF" fill-rule="nonzero"/><path fill="#FFF" d="M13.77 6.5h4.46a.87.87 0 01.759.444l6.906 12.319a.87.87 0 010 .85l-2.21 3.942a.87.87 0 01-.758.445H9.073a.87.87 0 01-.759-.445l-2.209-3.942a.87.87 0 010-.85l6.906-12.319a.87.87 0 01.759-.444zM16 11.401l-4.653 8.287h9.306L16 11.401z"/></g>`;
  },
  plainIcon: c => {
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path fill-rule="evenodd" fill="${
      c ? c : this.color
    }" d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zM13.77 6.5a.87.87 0 00-.759.444L6.105 19.263a.87.87 0 000 .85l2.21 3.942a.87.87 0 00.758.445h13.854a.87.87 0 00.759-.445l2.209-3.942a.87.87 0 000-.85L18.989 6.944a.87.87 0 00-.759-.444h-4.46zM16 11.401l4.653 8.287h-9.306L16 11.401z"/>`;
  }
};
export default Act;
