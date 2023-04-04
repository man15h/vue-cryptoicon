exports.capitalize = string => string.charAt(0).toUpperCase() + string.slice(1);
exports.fixName = name => {
  switch (name) {
    case '0xbtc':
      return 'ZeroxBtc';
    case '2give':
      return 'TwoGive';
    case '1inch':
      return 'OneInch';
    default:
      return name;
  }
};

exports.removeSvg = svg => {
  return svg
    .replace(
      '<svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">',
      ''
    )
    .replace(
      '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32">',
      ''
    )
    .replace(
      '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">',
      ''
    )
    .replace(
      '<svg height="32" viewBox="0 0 32 32" width="32" xmlns="http://www.w3.org/2000/svg">',
      ''
    )
    .replace(
      '<svg height="32" width="32" xmlns="http://www.w3.org/2000/svg">',
      ''
    )
    .replace(
      '<svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">',
      ''
    )
    .replace(
      '<svg width="32" height="32" viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">',
      ''
    )
    .replace(
      '<svg height="32" viewBox="0 0 32 32" width="32" xmlns="http://www.w3.org/2000/svg">',
      ''
    )
    .replace(`</svg>`, '');
};
