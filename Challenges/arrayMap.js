function subarraySumExists(arr, target) {
    let left = 0;
    let currentSum = 0;

    for (let right = 0; right < arr.length; right++) {
        currentSum += arr[right];

        while (currentSum > target && left <= right) {
            currentSum -= arr[left];
            left++;
        }

        if (currentSum === target) {
            return true;
        }
    }

    return false;
}

// Get user input for array
const userInputArray = prompt("Enter the array of integers separated by commas (e.g., 4,2,7,1,9,5):");
const arr = userInputArray.split(',').map(Number);

// Get user input for target sum
const target = parseInt(prompt("Enter the target sum:"));

console.log(subarraySumExists(arr, target));
