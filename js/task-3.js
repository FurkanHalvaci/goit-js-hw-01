function getElementWidth(content, padding, border) {
  const deger1 = parseFloat(content);
  const deger2 = parseFloat(padding);
  const deger3 = parseFloat(border);
  const sonuc = deger3 * 2 + deger1 + deger2 * 2;
  return sonuc;
}
console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200
