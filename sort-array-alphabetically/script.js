// Write a function that takes an array of strings as argument
// It should return the array with its values sorted alphabetically

const sortArr = (arr) => {
  const sorted = arr.sort()
  console.log(sorted);
  return sorted
}

sortArr(['b', 'c', 'd', 'a'])
sortArr(['z', 'c', 'd', 'a', 'y', 'a', 'w'])