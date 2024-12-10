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
    
            let leftStart = start;
            let rightStart = mid + 1;
            let merged = [];
    
            // Merge the two subarrays into merged[]
            while (leftStart <= mid && rightStart <= end) {
                if (array[leftStart] <= array[rightStart]) {
                    merged.push(array[leftStart++]);
                } else {
                    merged.push(array[rightStart++]);
                }
            }
    
            // If there are remaining elements in the left half
            while (leftStart <= mid) {
                merged.push(array[leftStart++]);
            }
    
            // If there are remaining elements in the right half
            while (rightStart <= end) {
                merged.push(array[rightStart++]);
            }
    
            // Copy the merged result back to the original array
            for (let k = 0; k < merged.length; k++) {
                array[start + k] = merged[k];
            }
        }
    }
    return array;
}
