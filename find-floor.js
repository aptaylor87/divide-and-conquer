function findFloor(arr, val) {
    let leftIdx = 0;
    let rightIdx = arr.length - 1;
    let floor = -1;

    /*
    if the mid is higher than the sv, move the right idx over
    if the mid is the same as the value, set floor to value and return
    if the mid is less than the value, set the floor but keep searching, set the left index to mid +1

    */

    while (leftIdx <= rightIdx) {
        let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
        let middleVal = arr[middleIdx];

        if (middleVal > val) {
            rightIdx = middleIdx -1;
        } else if (middleVal < val) {
            leftIdx = middleIdx +1;
            floor = middleVal;
        } else {
            floor = middleVal;
            return floor;
        }
    }
  
    return floor;
}
console.log(findFloor([1,2,8,10,10,12,19], 0))
module.exports = findFloor