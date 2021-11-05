function binarySearch(array, search) {
    for (let i = 0; i < 10; i++) {
        if (array.length <= 2) {
            if (array[0] == search) {
                return search
            }
            else if (array[1] == search) {
                return search
            }
        }
        else {
            if (search > array[Math.round(.5 * (array.length - 1))]) {
                array.splice(0, Math.round(.5 * (array.length - 1)))
            }
            else if (search < array[Math.round(.5 * (array.length - 1))]) {
                array.splice(Math.round(.5 * (array.length - 1)), Math.round(.5 * (array.length - 1)))
            }
            else if (search = array[Math.round(.5 * (array.length - 1))]) {
                return search
            }
        }

    }
    return -1
}

let list = [11, 24, 32, 46, 53, 65, 76, 80, 91]
let search = 32

