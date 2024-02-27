/*    mergeObjects([{a: 1, b: 2}, {b: 3, c: 5}]) => {a: 1, b: 5, c: 5}
*    mergeObjects([]) => {}
*/
function isEmptyObject(obj) {
  return Boolean(Object.keys(obj).length);
}

console.log(isEmptyObject({}));
