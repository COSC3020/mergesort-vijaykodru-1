# Mergesort

Implement an iterative (no recursive calls) and in-place version of mergesort.
Use the template I've provided in `code.js`. Test your new function; I've
provided some basic testing code that uses
[jsverify](https://jsverify.github.io/) in `code.test.js`.

Hint: To make merge sort in-place, think about what happens during the merge --
where are elements moved to and from? To make it iterative, think about the
part of the array each recursive call considers.

## Runtime Analysis

Analyse the time complexity of your implementation and give a $\Theta$ bound for
its worst-case runtime. Add your answer, including your reasoning, to this
markdown file.


ANSWER:

we get the time complexity in the following way:

We start by analyzing the outer loop, which divides the given array into smaller chunks. This operation takes $O(log n)$ time complexity. Next, we go through the inner loop, which iterates over the $n$ elements which takes $O(n)$ time complexity. Then the while loop takes another $O(n)$ time complexity to move the element from the righ to left by iterating through every element. The total time complexity of the algorithm comes to $\Theta(n^2 log n)$.

I was able to remove the seperate array value I used earlier for merging the elements. Instead I am moving the smallest element found to the left by iterating through the array. I found the lecture slides with the recursive implmentation of mergesort helful for me to do the in place mergesort.

References used:

mergesort-vijaykodru

I wrote everything without looking at my previous repo. However I needed help to do the merging part. I wasn't sure how I can make sure all the elements are merged properly. I used the following piece of code from my previous one to make sure all the elements are merged properly

    // If there are remaining elements in the left half
    while (leftStart <= mid) {
        merged.push(array[leftStart++]);
    }

    // If there are remaining elements in the right half
    while (rightStart <= end) {
        merged.push(array[rightStart++]);
    }
    

I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models. All of the work is my own, except where stated otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice
