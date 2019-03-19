const Ubq = {
  symbol: 'ubq',
  color: '#000',
  plainIcon: c => {
    return `<g fill-rule="evenodd" fill="${
      c ? c : this.color
    }"><path d="M13.503 15.844l3.318-2.01V5L6.008 11.278v9.103l7.777 4.068-.282-8.605zm4.994.275l-3.318 2.012V27l10.813-6.321v-9.103l-7.777-4.068.282 8.611zM16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16z"/><path fill-opacity=".305" fill-rule="nonzero" d="M18.215 7.508l7.777 4.068-7.493 4.593-.284-8.661zm-4.43 16.941l-7.777-4.068 7.493-4.594.284 8.662z"/></g>`;
  },
  colorIcon() {
    return `<g fill="none" fill-rule="evenodd"><circle cx="16" cy="16" r="16" fill="#00EA90"/><path fill="#FFF" fill-opacity=".698" fill-rule="nonzero" d="M18.215 7.508l7.777 4.068-7.493 4.593-.284-8.661zm-4.43 16.941l-7.777-4.068 7.493-4.594.284 8.662z"/><path fill="#FFF" fill-rule="nonzero" d="M25.992 20.679L15.179 27v-8.869l10.813-6.555v9.103zm-19.984-9.4L16.821 5v8.834L6.008 20.381v-9.103z"/></g>`;
  }
};
export default Ubq;
