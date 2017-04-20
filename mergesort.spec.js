describe('Split Array function', function() {
  it('is able to split an array into two halves', function() {
    expect( split([1,2,3,4,5,6]) ).toEqual( [[1,2,3],[4,5,6]] );
  });
  it('handles odd arrays', function() {
    expect( split([1,2,3,4,5]) ).toEqual( [[1,2,3],[4,5]] );
  });
});

describe('Merge', function(){
  it('is able to merge two sorted arrays into one sorted array', function(){
    expect( merge([1,2,3],[4,5,6]) ).toEqual( [1,2,3,4,5,6] );
  });

it('is able to combine sorted arrays', function(){
  expect( merge([1,4,6],[5,8,9]) ).toEqual( [1,4,5,6,8,9] );
});
});

describe('Merge Sort', function(){
  it('merges and sorts', function(){
    expect( mergeSort([5,2,9,6,1,3,7]) ).toEqual( [1,2,3,5,6,7,9] );
  });
});
