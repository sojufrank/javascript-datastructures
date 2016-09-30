// array of values to insert into hash table
var names = [1,2,3,4,5,6,7,8,9,0,
"soju", "nora", "mika", "kate", "beri", "afro", "mama", "soju"
]

//constructor function to create new node
function Node(data){
	this.value = data;
	this.next = null;
}

//constructor function to create new Hash Table
function HashTable(num){
	this.totalBuckets = num;
	this.arr = [];
	for(var i=0; i<this.totalBuckets; i++){
		this.arr[i] = null;
	}
}

//add prototype function that hashes data, returns a bucket number
HashTable.prototype.HashFunction = function(data){
	if(Number.isInteger(data)){
		data = data.toString();
	}
	var str = data;
	var bucketId = 0;
	for(var i=0; i<str.length;i++){
		bucketId += str[i].charCodeAt();
	}
	bucketId = bucketId % this.totalBuckets;
	return bucketId;
}

//add prototype function that inserts new node into hash table via bucket number
HashTable.prototype.insert = function(data){
	var bucket = this.HashFunction(data);
	var node = new Node(data);
	node.next = this.arr[bucket];
	this.arr[bucket] = node;
}

//add prototype function that removes data from hash table
HashTable.prototype.remove = function(data){
	var bucket = this.HashFunction(data);
	var current = this.arr[bucket];
	var prev = current;
	while(current){
		if(this.arr[bucket].value == data){
			this.arr[bucket] = this.arr[bucket].next;
		}
		if(current.value == data){
			prev.next = current.next;
		}
		prev = current;
		current = current.next;
	}
}

//add prototype function that prints table information 
HashTable.prototype.print = function(){
	this.arr.forEach(function(arrItem, index){
		if(arrItem){
			var current = arrItem;
			console.log("bucket : "+index+" contains list")
			while(current){
				console.log(current.value);
				current = current.next;
			}
		}
		else{
			console.log("bucket : "+index+" null")
		}
	})
}

//instantiate new hash table
var test = new HashTable(5);

//use values from names array and insert into hash table
names.forEach(function(arrItem){
	test.insert(arrItem);
})


console.log(test);
test.print();