const arr = [1, 9, 0, 1, 5, 9, 1, 6];

// Solution_1 reduce includes push
function uniq (arr) {
  return arr.reduce((acc, current) => {

    if (!acc.includes(current)) {
        acc.push(current);
    }
    return acc;
  }, []);
}
console.log(uniq(arr));

// Solution_2 Set
const newArr2 = [...new Set(arr)];
console.log(newArr2);
// Solution_3 filter
const newArr3=arr.filter((item, index) => arr.indexOf(item) === index);
console.log(newArr3);