function mergeSort(inputArray) {

    //check to prevent infinite recursive step
    if(inputArray.length < 2) {
        return inputArray;
    }

    //check if items in array is 2
    if(inputArray.length  === 2) {
        //check if inputArray is already sorted
        //if not sorted sort and return sorted Array
        //else return inputArray, since already sorted
        return inputArray[0] > inputArray[1] ? [inputArray[1], inputArray[0]] : inputArray
    }

    //pick a middle, or approximately middle element
    const middle = Math.floor(inputArray.length / 2);
    //create a left array, left of the middle element 
    const leftArray = inputArray.slice(0, middle)
    //create a right array right of the middle element
    const rightArray = inputArray.slice(middle)

    const sortedLeftArray = mergeSort(leftArray)
    const sortedRightArray = mergeSort(rightArray)

    //merged array being returned from recursive step
    const mergedArray = []
    let leftArrayIndex = 0
    let rightArrayIndex = 0
    while (leftArrayIndex < sortedLeftArray.length || rightArrayIndex < sortedRightArray.length) {
        if(leftArrayIndex >= sortedLeftArray.length ||sortedLeftArray[leftArrayIndex] > sortedRightArray[rightArrayIndex]) {
            mergedArray.push(sortedRightArray[rightArrayIndex])
           //change the right array index since item in the right array has already been merged
            rightArrayIndex++;
        }else{
            mergedArray.push(sortedLeftArray[leftArrayIndex])
            //change left array index
            leftArrayIndex++
        }
    }

    //return sorted and merged array
    return mergedArray
}

const sortedArray = mergeSort([234,43, 55, 63, 5, 6, 235, 547])
console.log(sortedArray)

const sortedArray2 = mergeSort([1,4,2,5,-2,3])
console.log(sortedArray2)

const sortedArray3 = mergeSort([52,37,63,14,17,8,6,25])
console.log(sortedArray3)

//Time Complexity
//1.Best Case: 'items are sorted randomly'
//            
//            we have a linear time complexity O(n * log n)

//2.Average  Case: 'items are sorted randomly'
//               we don't know where items are, if sorted or not
//               we have a linear time complexity O(n * log n) 

//3.Worst Case: 'items are in a completely random sorted order'
//            we have to sort through the whole array
//          we have a linear time complexity O(n * log n)

//Master Theorem was used to determine the time complexity