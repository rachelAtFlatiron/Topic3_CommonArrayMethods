/* Implement a function that finds the first pairs of numbers in array arr that match num. Return the pair of numbers as an array. If a pair isn't found return an empty array. There will be no negative numbers. */

function findSum(num, arr){
  for (let i = 0; i < arr.length; i++){
    for (let j = i + 1; j < arr.length; j++){
      console.log(`i = ${i}, j = ${j}, ${arr[i]} + ${arr[j]} = ${arr[i] + arr[j]}}`)
      if(arr[i] + arr[j] == num){
        return [arr[i], arr[j]]
      }
    }
  }
  return []
}

export { findSum }