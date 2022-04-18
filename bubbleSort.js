function bubbleSort(inputArray) {
    //generating array to avoid mutating  original input array
    const resultArray = [...inputArray]

    //compare two items at a time by looping through the unsorted array
    for (let outer =0; outer< resultArray.length; outer++) {
       //pick each element in the array, and compare with the remaining part of the array
        let outerElement = resultArray[outer]
        
        for(let inner = outer + 1; inner < resultArray.length; inner++){
            let innerElement = resultArray[inner]

            //if element in front of current element is bigger
            //if bigger than current element swap them
            //sorting is done in ascending order
            //if '>' is change to '<', descending sorting can be performed 
            if(outerElement > innerElement) {
                resultArray[outer] = innerElement;
                resultArray[inner] = outerElement

                //updating reference since array elements were swapped
                //i.e counters/indicators for the array
                outerElement = resultArray[outer]
                innerElement = resultArray[inner]
            }
        }
    }

    //return sorted Array
    return resultArray
}

const sortedArray = bubbleSort([234,43, 55, 63, 5, 6, 235, 547])
console.log(sortedArray)

const sortedArray2 = bubbleSort([1,4,2,5,-2,3])
console.log(sortedArray2)

const sortedArray3 = bubbleSort([52,37,63,14,17,8,6,25])
console.log(sortedArray3)


//Time Complexity
//1.Best Case: 'array is already sorted'
//            the algorithm will go through the input once
//            we have a linear time complexity O(n)

//2.Average  Case: 'random order'
//               we don't know where items are, if sorted or not
//               tends to be quadratic time complexity O(n^2) 

//3.Worst Case: 'items are in a completely wrong order'
//            we have to sort through the whole array
//           tends also to be quadratic time complexity O(n^2)