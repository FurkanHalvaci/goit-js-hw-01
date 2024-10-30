function getElementWidth(content, padding, border) {
  const contentElement = Number.parseFloat(content);
  const paddingElement = Number.parseFloat(padding);
  const borderElement = Number.parseFloat(border);
  const elementWidth = contentElement + 2 * paddingElement + 2 * borderElement;
  console.log(elementWidth);
}
console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200
