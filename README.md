# Technical Lesson - Algorithmic Problem Solving Framework

## Introduction

This practice lesson will be an example of how to apply the algorithmic problem solving framework to a problem.

## Tools and Resources

It is recommended to review array iteration with for loops before continuing with this lesson.  [Link Content]

## Setup

**Fork and clone** this practice lesson into your local environment. Navigate into its
directory in the terminal, then run `code .` to open the files in Visual Studio
Code.

In the root directory run `npm install`.

Open `src/index.js`.  This is where you will be writing your code.

You can run `npm test` to test your code.

## Instructions

Together we will apply the Algorithmic Problem Solving Process to the function `findSum`.  

**1. Problem Definition:** 

For `findSum` we will be finding the first pair of numbers in `arr` that sum to the number `num`.  The inputs will include the integer `num` and the array `arr`.  `findSum` will return an array of the matching numbers *in the order they were given in the array*.  For example:

`findSum(3, [0, 3]) => [0, 3]`
`findSum(3, [3, 0]) => [3, 0]`

This is important in order to pass the tests provided in this lab.  

If there is no matching pair we will return an empty array `[]`.

It is good to note that we can expect no negative numbers and all inputs will be the expected data types.  Otherwise we would have to account for type checking.

**2. Problem Analysis:** 

Let's take an example and mimic a process as if we were using pen and paper.  Given the array `[0, 1, 2, 3]` let's find the pair of numbers that sum to `5`.  With pen and paper we may look at the first number as an anchor point and test if any of the following numbers will sum to `5`.  In other words we will look at the first number `0`, then test if `0 + 1 = 5` which is false. So we will now test if `0 + 1 = 5` which is also false.  And so will test if `0 + 2 = 5` which is also false.  And finally we test `0 + 3 = 5` which is false.

Since we have tested all combinations with the number `0` we can now use `1` as an an anchor point.  (We don't have to test `1 + 0` since we've already tested `0 + 1` so we can skip to testing all numbers following `1`.)  We will test `1 + 2 = 5`, `1 + 3 = 5` which are all false.

So we can move on to `2 + 3 = 5` which is true!  And so we have our matching pair: `2` and `3`.  

For now we won't think about different algorithms or evaluate the efficiency.  

**3. Algorithm Development:** 

Let's move on to pseudocode.  Our processes will look at each number one at a time so we can use for loops!  We will need two for loops: one for the anchor point, and one for the number we will be testing against the anchor point.  Ultimately we will be using a nested for loop.  Below is an example of pseudocode:

```
// initial for loop for anchor point with index `i`
//  inner for loop to test all following numbers against our anchor point (we will use index `j`)
//    test if `arr[i] + arr[j]` matches the target number
//      if it does match, return `[arr[i], arr[j]]` (remember we want the elements at those positions, not the indicies)
// once our nested for loop is done we will have tested all possible combinations and so we know there is no matching pair.  we can return `[]`
```

Notice the indentation for our code blocks to start figuring out our scoping.

At this point we will dive right into coding but you can break this down further if you'd like!  For example you can even write your code using pen and paper!  

**4. Coding and Documentation:** 

We will copy and paste the pseudocode and code each line.
```
function findSum(num arr){
    // initial for loop for anchor point with index `i`
    for (let i = 0; i < arr.length; i++){
        // inner for loop to test all following numbers against our anchor point (we will use index `j`)
        for (let j = i + 1; j < arr.length; j++){
            // test if `arr[i] + arr[j]` matches the target number
            if(arr[i] + arr[j] == num){
                // if it does match, return `[arr[i], arr[j]]` (remember we want the elements at those positions, not the indicies)
                return [arr[i], arr[j]]
            }
        }
    }
    // once our nested for loop is done we will have tested all possible combinations and so we know there is no matching pair.  we can return `[]`
    return []
}
```

It may be helpful to write down the values for each iteration to solidify the concept of this nested for loop for example:

```
arr = [3, 2, 9, 8], num = 17

first loop: 
i = 0, j = 1
arr[i] = 3, arr[j] = 2
3 + 2 !== 17

second loop:
i = 0, j = 2
arr[i] = 3, arr[j] = 9
0 + 2 !== 17

third loop:
i = 0, j = 3
arr[i] = 3, arr[j] = 8
3 + 8 !== 17

At this point we move to the next iteration of our outer for loop and restart our inner for loop but we'll just use the term 'fourth loop' for the sake of writing this out:

fourth loop:
i = 1, j = 2
arr[i] = 2, arr[j] = 9
2 + 9 !== 17

fifth loop:
i = 1, j = 3
arr[i] = 2, arr[j] = 8
2 + 8 !== 17

And so on and so forth until we reach the valid loop.  We'll call this the `nth loop` where `n` is some arbitrary number.

nth loop:
i = 2, j = 3
arr[i] = 9, arr[j] = 8
9 + 8 === 17
```

It's not necessary to do this every time you have a for loop.  But if you ever struggle with for loops (or anything else really) it may be helpful to write it out.  Or you can console log your work: ```console.log(`i = ${i}, j = ${j}, ${arr[i]} + ${arr[j]} = ${arr[i] + arr[j]}}`)```.

**5. Testing and Debugging:** 

Tests have been provided for you but the tests are not arbitrary.  There is a test for every case we may see (that we can think of so far).  

There are cases where:
-  `arr = []` so the expectation is to return `[]`
- there is no valid pair so the expectation is to *return an values of the valid pair* (not the indices)
- there is a matching pair and the array is ordered
- there is a matching pair and the array is unordered
- there are duplicated numbers: `[8, 0, 0, 8, 0, 0]`
- there is an array where all numbers are the same
- there are no duplicated numbers but `num` is `arr[i] * 2`: `arr = [0, 0, 3, 0, 0]` and `num = [6]` which should return `[]`

The last case is important in case we had started our inner for loop at `i` instead of `i + 1`.

**6. Maintenance:** 

This would be another good step to start thinking about optimization.  We won't cover this now.

**7. Document and Comment:** 

It is always important to comment your code, but it is equally important to not over comment.  Let's recomment our code so that it is more readable and not so wordy:

function findSum(num arr){
    for (let i = 0; i < arr.length; i++){
        for (let j = i + 1; j < arr.length; j++){
            // if `arr[i] + arr[j]` matches the target number return elements
            if(arr[i] + arr[j] == num){
                return [arr[i], arr[j]]
            }
        }
    }
    // no matching pair, return empty array
    return []
}
```

You can add whatever comments you feel are most important to you.  The above is just an example at attempting to simplify the comments so that they are more readable for other people.

And there we have it!  Our final solution.