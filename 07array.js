// 每个数据集合，都有增删改查，练习这些增删改查
let numbers = [ 0,1,2,3,4,5,6 ];

// add items in the end 
numbers[numbers.length] = 7;
numbers.push( 12 );

// delete items in the end 
numbers.pop();

// delete 3 items from index 5 
numbers.splice(5,3);

