/*
 Creates an array of elements split into groups the length of size. If array can't be split evenly, the final chunk will be the remaining elements.
*/
export default function split(array, numberOfChuncks) {
  if (!Array.isArray(array)) {
    return array;
  }

  if (typeof numberOfChuncks !== "number") {
    return array;
  }

  if (numberOfChuncks <= 1 || numberOfChuncks > array.length) {
    return array;
  }
  const quotient = Math.floor(array.length / numberOfChuncks);
  const remainder = array.length % numberOfChuncks;

  let chunks = [];
  let index = 0;
  for (let i = 1; i <= numberOfChuncks; i += 1) {
    chunks = [...chunks, array.slice(index, index + quotient)];
    index += quotient;
  }

  if (remainder > 0) {
    chunks = [...chunks, array.slice(index)];
  }

  return chunks;
}
