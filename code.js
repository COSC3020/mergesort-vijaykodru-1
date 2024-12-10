function mergesort(array) {
    var length = array.length;
    
    // base case for length less than or equal to 1
    if (length <= 1) {
        return array;
    }

    // Outer loop iterating through the array with increasing segment sizes
    for (let size = 1; size < length; size *= 2) {
        // Inner loop to merge segments of the current size
        for (let start = 0; start < length; start += 2 * size) {
            let mid = Math.min(start + size - 1, length - 1);
            let end = Math.min(start + 2 * size - 1, length - 1);

            // removed the seperate array value
            let leftStart = start;
            let rightStart = mid + 1;

            // Use a temporary pointer to manage swaps in place
            while (leftStart <= mid && rightStart <= end) {
                if (array[leftStart] <= array[rightStart]) {
                    leftStart++;
                } else {
                    // Move the smaller element from the right segment into the left segment
                    let temp = array[rightStart];
                    for (let k = rightStart; k > leftStart; k--) {
                        array[k] = array[k - 1];
                    }
                    array[leftStart] = temp;

                    // Update pointers
                    leftStart++;
                    mid++;
                    rightStart++;
                }
            }
        }
    }
    return array;
}
