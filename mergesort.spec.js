describe('Split Array function', function() {
  it('is able to split an array into two halves', function() {
    expect(split([2,4,6,1,3,5])).toEqual([[2,4,6],[1,3,5]]);
  });
  it('is able to split an array of odd length into two halves', function() {
    expect(split([2,4,6,1,3,5,7])).toEqual([[2,4,6],[1,3,5,7]]);
  });
});


describe('Merge function', function(){
  it('is able to merge two sorted arrays into one sorted array', function(){
    expect(merge([4,5,6], [1,2,3])).toEqual([1,2,3,4,5,6]);
  });
});

describe('Merge Sort function', function(){
  it('is able to sort an array', function(){
    expect(mergeSort([1,3,5,7,2,4,6,8])).toEqual([1,2,3,4,5,6,7,8]);
  });
  it('is able to sort an array', function(){
    expect(mergeSort([1,9,7,8,4,2,11])).toEqual([1,2,4,7,8,9,11]);
  });
});
