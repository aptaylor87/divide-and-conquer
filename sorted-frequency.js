function sortedFrequency(arr, val) {

  firstIdx = findFirst(arr, val)
  lastIdx = findLast(arr, val)

  console.log (firstIdx)
  console.log (lastIdx)
  if (firstIdx === -1 || lastIdx === -1) {
    return -1
  } else {
    return lastIdx - firstIdx + 1
  }

}


function findFirst(arr, val) {
    /* 
    Check the middle value
        If it isn't the sought value and is higher than the sought value then right index should be updated
        If it is the sought value and the value to the left is also the the same value then the right index should be updated

        If it isn't the sought value and is lower than the sought value then the left index should be updated to be the middle index
        If it is sought value and the value to the left is not then this is the first index
    */
    let leftIdx = 0;
    let rightIdx = arr.length - 1;

    while (leftIdx <= rightIdx) {
        // find the middle value
        let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
        let middleVal = arr[middleIdx];

        if (middleVal > val || (middleVal === val && arr[middleIdx - 1] === val) ) {
          rightIdx = middleIdx;
        } else if (middleVal < val) {
          leftIdx = middleIdx+1;
        } else {
          return middleIdx
        }
    // return -1;
  }




}



function findLast(arr, val) {


  let leftIdx = 0;
  let rightIdx = arr.length - 1;

    while (leftIdx <= rightIdx) {
        // find the middle value
        let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
        let middleVal = arr[middleIdx];

        if (middleVal < val || (middleVal === val && arr[middleIdx + 1] === val) ) {
          leftIdx = middleIdx + 1;
          
        } else if (middleVal > val) {
          rightIdx = middleIdx - 1;
          
        } else {
          return middleIdx;
        }
  }
  return -1;


}

console.log(sortedFrequency([1,1,2,2,2,2,3],4))


module.exports = sortedFrequency