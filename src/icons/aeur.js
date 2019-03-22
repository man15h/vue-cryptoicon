const Aeur = {
  symbol: 'aeur',
  color: '#000',
  plainIcon: c => {
    return `<path fill="${
      c ? c : this.color
    }" d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm-.048-13.014a7.144 7.144 0 0 0 .093 0 .055.055 0 0 1 .004.014.049.049 0 1 1-.097-.014zm-6.014-3.493a6.993 6.993 0 0 0 6.055 10.493 7.002 7.002 0 0 0 6.993-6.993 6.96 6.96 0 0 0-.94-3.503 6.993 6.993 0 1 0-12.11.003zM16.048 12a7.138 7.138 0 0 0-.097 0 .049.049 0 0 1 .049-.05.055.055 0 0 1 .049.05z"/>`;
  },
  colorIcon() {
    return `<defs><linearGradient x1="50%" y1="0%" x2="50%" y2="143.239%" id="a"><stop stop-color="#FFF" offset="0%"/><stop stop-color="#FFF" stop-opacity=".83" offset="3%"/><stop stop-color="#FFF" stop-opacity=".66" offset="7%"/><stop stop-color="#FFF" stop-opacity=".5" offset="11%"/><stop stop-color="#FFF" stop-opacity=".37" offset="15%"/><stop stop-color="#FFF" stop-opacity=".25" offset="19%"/><stop stop-color="#FFF" stop-opacity=".16" offset="25%"/><stop stop-color="#FFF" stop-opacity=".09" offset="30%"/><stop stop-color="#FFF" stop-opacity=".04" offset="37%"/><stop stop-color="#FFF" stop-opacity=".01" offset="47%"/><stop stop-color="#FFF" stop-opacity="0" offset="100%"/></linearGradient></defs><g fill="none"><circle cx="16" cy="16" r="16" fill="#051D2D"/><g transform="translate(9 6)" fill="url(#a)"><path d="M6.993 13.986a6.993 6.993 0 1 1 6.993-6.993 7.002 7.002 0 0 1-6.993 6.993zM7 6.951A.049.049 0 1 0 7.049 7a.055.055 0 0 0-.05-.05z"/><path d="M6.993 20.986a6.993 6.993 0 1 1 6.993-6.993 7.002 7.002 0 0 1-6.993 6.993zM7 13.951a.049.049 0 1 0 .049.049.055.055 0 0 0-.05-.05z"/></g></g>`;
  }
};
export default Aeur;
