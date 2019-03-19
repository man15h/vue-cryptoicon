const Fair = {
  symbol: 'fair',
  color: '#000',
  plainIcon: c => {
    return `<path  fill="${
      c ? c : this.color
    }" fill-rule="evenodd" d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm-8-7.746v.266l.045.175c.16.599.575.972 1.175 1.154.708.215 1.432.172 2.15.047 1.052-.182 1.932-.677 2.675-1.399.514-.5.936-1.064 1.281-1.683.712-1.277 1.147-2.649 1.536-4.036.194-.69.362-1.386.537-2.08.03-.119.083-.158.217-.158.493.003.987-.003 1.48-.022.288-.011.559-.09.753-.319.093-.11.196-.214.282-.329.265-.353.22-.803-.096-1.117-.259-.256-.587-.349-.942-.362-.33-.012-.66-.002-.994-.002-.002-.028-.007-.046-.003-.062.08-.326.165-.652.242-.979.018-.08.068-.079.131-.08.475-.008.95-.012 1.424-.028.355-.012.695-.061.985-.299.356-.29.431-.59.358-.971-.072-.375-.345-.594-.702-.728-.293-.11-.599-.111-.906-.106-.212.003-.425 0-.642 0 .005-.043.003-.07.011-.096.25-.816.554-1.612.974-2.364.202-.361.442-.698.749-.987.057-.054.134-.09.202-.134l.027.035c-.012.033-.025.066-.035.1-.134.448-.093.87.24 1.23.354.386.812.53 1.344.512.693-.023 1.458-.595 1.5-1.495.016-.317-.117-.585-.254-.854a1.754 1.754 0 0 0-1.03-.884c-.776-.266-1.573-.232-2.362-.092-1.19.211-2.183.787-3.026 1.6-.64.617-1.156 1.328-1.596 2.085-.241.416-.445.852-.653 1.285-.06.126-.127.175-.278.172a73.09 73.09 0 0 0-1.873-.004 1.727 1.727 0 0 0-.438.055c-.398.11-.647.369-.705.757-.057.384.04.73.393.974.284.196.613.273.952.287.432.017.865.004 1.303.004 0 .034.005.057 0 .077-.092.346-.183.693-.281 1.037-.009.031-.068.07-.104.07-.386.006-.772-.001-1.159.005-.403.007-.815-.019-1.207.05-.56.096-.854.477-.844.973.01.567.418.936 1.017.982.44.034.884.021 1.326.028.13.002.259 0 .4 0-.02.093-.033.172-.054.248-.527 1.94-1.05 3.883-1.586 5.821-.099.357-.246.702-.377 1.05-.02.053-.077.093-.117.138-.037-.046-.084-.088-.108-.14a1.086 1.086 0 0 0-.392-.457c-.533-.362-1.12-.426-1.735-.257-.606.167-1.012.535-1.167 1.132L8 24.254z"/>`;
  },
  colorIcon() {
    return `<g fill="none" fill-rule="evenodd"><circle cx="16" cy="16" r="16" fill="#C99705"/><path fill="#FFF" d="M8 24.254l.043-.175c.155-.597.561-.965 1.167-1.132.615-.17 1.202-.105 1.735.257.175.118.307.269.392.458.024.051.071.093.108.14.04-.046.097-.086.117-.138.131-.349.278-.694.377-1.05.536-1.94 1.06-3.881 1.586-5.822.021-.076.034-.155.053-.247-.14 0-.27.001-.399 0-.442-.008-.886.005-1.326-.029-.599-.046-1.006-.415-1.017-.982-.01-.496.283-.877.844-.974.392-.068.804-.042 1.207-.049.387-.006.773 0 1.16-.004.035 0 .094-.04.103-.071.098-.344.189-.69.28-1.037.006-.02.001-.043.001-.077-.438 0-.871.013-1.303-.004-.34-.014-.668-.091-.952-.287-.353-.243-.45-.59-.393-.974.058-.388.307-.648.705-.757.14-.038.292-.054.438-.055a77.962 77.962 0 0 1 1.873.004c.151.003.218-.046.278-.172.208-.433.412-.87.653-1.285.44-.757.956-1.468 1.596-2.086.843-.812 1.836-1.388 3.026-1.599.79-.14 1.586-.174 2.362.092.466.16.812.457 1.03.884.137.27.27.537.255.854-.043.9-.808 1.472-1.501 1.495-.532.018-.99-.126-1.344-.511-.333-.362-.374-.783-.24-1.232.01-.033.023-.066.035-.1l-.027-.034c-.068.044-.145.08-.202.134a4.077 4.077 0 0 0-.75.987c-.42.752-.723 1.548-.973 2.364-.008.025-.006.053-.01.096.216 0 .429.003.64 0 .308-.005.614-.004.907.106.357.134.63.353.702.728.073.381-.002.68-.358.971-.29.238-.63.287-.985.299-.474.016-.95.02-1.424.028-.063.001-.113 0-.131.08-.077.327-.161.653-.242.979-.004.016.001.034.003.062.333 0 .664-.01.994.002.355.013.683.106.942.362.316.314.36.764.096 1.117-.086.115-.189.22-.282.33-.194.228-.465.307-.753.318-.493.02-.987.025-1.48.022-.134 0-.187.04-.217.158-.175.694-.343 1.39-.537 2.08-.39 1.387-.824 2.76-1.536 4.036a7.251 7.251 0 0 1-1.281 1.683c-.743.722-1.623 1.217-2.675 1.4-.718.124-1.442.167-2.15-.048-.6-.182-1.015-.555-1.175-1.154L8 24.52v-.266z"/></g>`;
  }
};
export default Fair;