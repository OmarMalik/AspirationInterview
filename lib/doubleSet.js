class DoubleSet {
    constructor() {
        this.counts = {}
    }

    add(num) {
        if (this.counts[num] == 2) {
            return;
        } else if (this.counts[num] < 2) {
            this.counts[num] += 1
        } else {
            this.counts[num] = 1
        }
    }

    subtract(num) {
        if(num in this.counts) {
            this.counts[num] -= 1

            if (this.counts[num] === 0) {
                delete this.counts[num]
            }
        }
    }
    
    addDoubleSet(otherSet) {
        const otherCounts = otherSet.counts
        for (var num in otherCounts) {
            const numCount = otherCounts[num]
            for(var i = 0; i < numCount; i++){
                this.add(num)
            }
        }
    }

    subtractDoubleSet(otherSet) {
        const otherCounts = otherSet.counts
        for (var num in otherCounts) {
            const numCount = otherCounts[num]
            for(var i = 0; i < numCount; i++){
                this.subtract(num)
            }
        }
    }

    clear() {
        this.counts = {}
    }
}

module.exports = DoubleSet