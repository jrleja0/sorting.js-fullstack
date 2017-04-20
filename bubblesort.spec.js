describe('Bubble Sort', function(){
   beforeEach(function(){
     spyOn(window, 'swap').and.callThrough();
   });

  it('handles an empty array', function(){
    expect( bubbleSort([]) ).toEqual( [] );
  });

 it('calls a function called swap', function(){
  bubbleSort([2,1]);
  expect(swap.calls.count()).toEqual(1);
});

it('sorts an unsorted array', function(){
  expect( bubbleSort([3,7,1,5,6]) ).toEqual( [1,3,5,6,7] );
});

});
