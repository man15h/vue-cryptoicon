const Mod = {
  symbol: 'mod',
  color: '#000',
  plainIcon: c => {
    return `<path fill="${
      c ? c : this.color
    }" d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm6.985-10.993V8.08l-6.312 6.45zM9 7v17.985l8.77-8.998-8.466-8.675z"/><path d="M22.985 21.007V8.08l-6.312 6.449z" opacity=".5"/>`;
  },
  colorIcon() {
    return `<g fill="none"><circle cx="16" cy="16" fill="#09547d" r="16"/><g fill="#fff"><path d="M22.985 21.007V8.08l-6.312 6.449z" opacity=".5"/><path d="M9 7l.304.312 8.467 8.675L9 24.985z"/></g></g>`;
  }
};
export default Mod;
