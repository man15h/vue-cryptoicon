const Atlas = {
  symbol: 'atlas',
  color: '#000',
  colorIcon() {
    return `<defs><path id="a" d="M2.5 4.938L0 0h5z"/><path d="M8.5 6.498L4.03 15.99c-.148.304-.225.55-.55.55l-2.953.002c-.423 0-.657-.109-.451-.55L7.296.447C7.445.19 7.537 0 7.862 0H9.14c.325 0 .417.19.565.448l7.22 15.544c.206.442-.028.551-.451.551l-2.953-.001c-.325 0-.402-.247-.55-.551L8.5 6.498z" id="b"/></defs><g fill="none" fill-rule="evenodd"><circle fill="#31FAFB" fill-rule="nonzero" cx="16" cy="16" r="16"/><use fill="#FFF" xlink:href="#a" transform="translate(13.5 21.312)"/><use fill="#FFF" xlink:href="#b" transform="translate(7.5 6.25)"/></g>`;
  },
  plainIcon: c => {
    return `<path fill-rule="evenodd" fill="${
      c ? c : this.color
    }" d="M16 0c8.837 0 16 7.163 16 16s-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0zm2.5 21.312h-5L16 26.25l2.5-4.938zM16.64 6.25h-1.28c-.325 0-.417.19-.564.448l-7.22 15.544c-.206.442.028.551.451.551l2.953-.001c.325 0 .402-.247.55-.551L16 12.748l4.47 9.493c.148.304.225.55.55.55l2.953.002c.423 0 .657-.109.451-.55l-7.22-15.545c-.148-.258-.24-.448-.565-.448z"/>`;
  }
};
export default Atlas;
