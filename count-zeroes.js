function countZeroes(arr) {
  
  let leftIdx = 0;
  let rightIdx = arr.length - 1;
  let lowestZero = arr.length
  
  while (leftIdx !== rightIdx) {
    
    // find the middle value
    let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
    let middleVal = arr[middleIdx];
    

    if (middleVal === 1 ) {
      // middleVal is one, then we disgard the left half and focus on the right.
      leftIdx = middleIdx + 1;
      
    } else {
      // middleVal is zero, disregard everything to the right and track this index as the lowest index for the value zero. 
      lowestZero = middleIdx
      rightIdx = middleIdx;
      
    } 
  }
  
  // left and right pointers have met, val isn't in arr
  return (arr.length - lowestZero)
  
}


module.exports = countZeroes



