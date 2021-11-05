describe("Binary Search", function () {


    it("should return '2' when passed in '2,1' and search is 2", function () {
        let list = [1, 2]
        let search = 2

        //demonstrates use of custom matcher
        expect(binarySearch(list, search)).toEqual(search);
    });
    it("should return '5' when passed in '3, 6, 2, 1, 4, 5' and search is 5", function () {
        let list = [1, 2, 3, 4, 5, 6]
        let search = 5

        //demonstrates use of custom matcher
        expect(binarySearch(list, search)).toEqual(search);
    });
    it("should return '3' when passed in '3, 2, 1' and search is 3", function () {
        let list = [1, 2, 3]
        let search = 3

        //demonstrates use of custom matcher
        expect(binarySearch(list, search)).toEqual(search);
    });
    it("should return '1' when passed in '3, 6, 9, 1, 5, 2' and search is 1", function () {
        let list = [1, 2, 3, 5, 6, 9]
        let search = 1

        //demonstrates use of custom matcher
        expect(binarySearch(list, search)).toEqual(search);
    });

    it("should return '7' when passed in '9, 8, 7, 6, 5, 4, 3, 2, 1' and search is 7", function () {
        let list = [1, 2, 3, 4, 5, 6, 7, 8, 9]
        let search = 7

        //demonstrates use of custom matcher
        expect(binarySearch(list, search)).toEqual(search);
    });
    it("should return '32' when passed in '24, 32, 11, 53, 46, 76, 65, 80, 91' and search is 32", function () {
        let list = [11, 24, 32, 46, 53, 65, 76, 80, 91]
        let search = 32

        //demonstrates use of custom matcher
        expect(binarySearch(list, search)).toEqual(search);
    });
    it("should return '-1' when passed in '3, 6, 9, 1, 5, 2' and 20 is searched for", function () {
        let list = [1, 2, 3, 5, 6, 9]
        let search = 20

        //demonstrates use of custom matcher
        expect(binarySearch(list, search)).toEqual(-1);
    });

    it("should return '-1' when passed in '9, 8, 7, 6, 5, 4, 3, 2, 1' and search is 0", function () {
        let list = [1, 2, 3, 4, 5, 6, 7, 8, 9]
        let search = 0

        //demonstrates use of custom matcher
        expect(binarySearch(list, search)).toEqual(-1);
    });
    it("should return '-1' when passed in '24, 32, 11, 53, 46, 76, 65, 80, 91' and search is 0", function () {
        let list = [11, 24, 32, 46, 53, 65, 76, 80, 91]
        let search = 85

        //demonstrates use of custom matcher
        expect(binarySearch(list, search)).toEqual(-1);
    });
    it("should return '24' when passed in '24, 32, 11, 53, 46, 76, 65, 80, 91, 24, 32, 11, 53, 46, 76, 65, 80, 91' and search is 0", function () {
        let list = [11, 24, 32, 46, 53, 65, 76, 80, 91, 24, 32, 11, 53, 46, 76, 65, 80, 91]
        let search = 85

        //demonstrates use of custom matcher
        expect(binarySearch(list, search)).toEqual(-1);
    });
    /* it("should return '11, 24, 32, 46, 53, 65, 76, 80, 91,' when passed in '24, 32, 11, 53, 46, 76, 65, 80, 91'", function () {
        let array = Array.from({ length: 100 }, () =>
            Math.floor(Math.random() * 100)
        );
        let sortedArray = [...array].sort((a, b) => a - b);
        console.log(array)

        //demonstrates use of custom matcher
        expect(sort(array)).toEqual(sortedArray);
    }); */
});