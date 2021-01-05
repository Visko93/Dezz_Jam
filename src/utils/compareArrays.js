export function areEqualsArrays(arr1: Array, arr2: Array) {
  return (
    arr1.length === arr2.length &&
    arr1.every((value, index) => value === arr2[index])
  )
}
