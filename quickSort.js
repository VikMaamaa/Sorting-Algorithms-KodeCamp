function quickSort(inputArray) {
    //create a copy of input array to avoid direct mutation
    const copiedArray = [...inputArray]

    //condition to prevent infinite recursion
    if(copiedArray.length <= 1) {
        return copiedArray
    }

    //declaration for different arrays to hold contents
    const smallerElementsArray = []
    const biggerElementsArray = []
    const pivotElement = copiedArray.shift()
    const centerElementsArray = [pivotElement]

    while (copiedArray.length) {
        const currentElement = copiedArray.shift()
        //check if current element is same as pivoted element
        if(currentElement === pivotElement) {
            //if true move current element to centerElementsArray
            centerElementsArray.push(currentElement)
        }else if (currentElement < pivotElement){
            //if current elemnt is smaller than pivot element
            // move current element to smaller element array
            smallerElementsArray.push(currentElement)
        }else{
            //if currnet is bigger than pivoted elment, 
            //move to the biggerElementsArray
            biggerElementsArray.push(currentElement)

        }
    }

    //above operations also need to be carried out 
    //for the smaller and bigger elements array
    //sorrting will be carried out for this 
    //array by means of recursion

    const sortedSmallerElementsArray = quickSort(smallerElementsArray)
    const sortedBiggerElementsArray = quickSort(biggerElementsArray)

    return sortedSmallerElementsArray.concat(centerElementsArray, sortedBiggerElementsArray)
}

const sortedArray = quickSort([234,43, 55, 63, 5, 6, 235, 547])
console.log(sortedArray)

const sortedArray2 = quickSort([1,4,2,5,-2,3])
console.log(sortedArray2)

const sortedArray3 = quickSort([52,37,63,14,17,8,6,25])
console.log(sortedArray3)

//Time Complexity
//1.Best Case: 'items are sorted randomly sorted, not in right or wrong order'
//           items are roughly splitted into chunks
//            we have a combination of logarithmic and linear time complexity  of O(n * log n)

//2.Average  Case: 'random sorted order'
//              
//                we have a combination of logarithmic and linear time complexity  of O(n * log n)
//                it grows slower

//3.Worst Case: 'items are already sorted'
//            due to one sided operation where the pivot element is
//            smaller than other elements, this is disadavantage to the algorithm
//           tends also to be quadratic time complexity O(n^2)

//for deriving the time complexity in the worst and best case scenario
// Master Theorem Formula was used