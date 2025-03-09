const mincost = (arr) => {
    if (arr.length === 1) return 0; // If there's only one rope, no cost

    // Min Heap (Priority Queue)
    const minHeap = arr.sort((a, b) => a - b); // Initial Sorting

    let totalCost = 0;

    while (minHeap.length > 1) {
        // Take out the two smallest ropes
        let first = minHeap.shift();
        let second = minHeap.shift();

        // Combine them
        let newRope = first + second;
        totalCost += newRope;

        // Insert back while keeping sorted order
        let index = minHeap.findIndex(x => x > newRope);
        if (index === -1) minHeap.push(newRope);
        else minHeap.splice(index, 0, newRope);
    }

    return totalCost;
};

module.exports = mincost;
