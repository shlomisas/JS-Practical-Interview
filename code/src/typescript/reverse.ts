(() => {

    function reverseDict(inputDict) {
        return Object.entries(inputDict).reduce((acc, [key, value]) => {
            // Check if the value is a valid key (string or number)
            if (typeof value === 'string' || typeof value === 'number') {
                acc[value] = key; // Reverse the key-value pair
            } else {
                console.warn(`Skipping invalid value: ${value}`);
            }
            return acc;
        }, {});
    }

    // Examples
    const input1 = { 1: 'a', 2: 'b' };
    console.log(reverseDict(input1)); // Expected: { 'a': 1, 'b': 2 }

    const input2 = { 'x': 1, 'y': 2 };
    console.log(reverseDict(input2)); // Expected: { 1: 'x', 2: 'y' }

    /**
     * The task:
     *  1. Implement the `reverseDict` function to reverse the keys and values of an object.
     *  2. Ensure that the function enforces only valid data
     */

})();