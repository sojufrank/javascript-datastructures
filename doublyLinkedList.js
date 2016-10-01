// test arrays with values to insert into linked list
var arr =[1,2,3,4,5];
var arr2 =[6,7,8,9,10];

//constructor function to create new nodes
function Node(data){
	this.value = data;
	this.next = null;
	this.prev = null;
};

//constructor function to create new doubly linked list
function doublyLinkedList(){
	this._length = 0;
	this.head = null;
	this.tail = null;
};

//add prototype function to insert at head of linked list
doublyLinkedList.prototype.insertAtHead = function(data){

	var node = new Node(data);

	if(!this.head){
		node.next = this.head;
		this.head = node;
		this.tail = node;
		this._length++;
	}
	else{
		this.head.prev = node;
		node.next = this.head;
		this.head = node;
		this._length++;
	}

};

//add prototype function to insert at tail of linked list
doublyLinkedList.prototype.insertAtTail = function(data){

	var node = new Node(data);

	if(!this.tail){
		node.prev = this.tail;
		this.head = node;
		this.tail = node;
		this._length++;
	}
	else{
		this.tail.next = node;
		node.prev = this.tail;
		this.tail = node;
		this._length++;
	}
}

//add prototype function to print linked list
doublyLinkedList.prototype.print = function(){
	var current = this.head;
	while(current){
		console.log(current.value);
		current = current.next;
	}
};

//add prototype function to print linked list in reverse
doublyLinkedList.prototype.reversePrint = function(){
	var current = this.head;
	while(current.next){
		current = current.next;
	}

	while(current){
		console.log(current.value);
		current = current.prev;
	}
};

//add prototype function to remove node from linked list
doublyLinkedList.prototype.remove = function(data){
	var current = this.head;
	while(current){
		if(this.head.value == data){
			this.head.next.prev = this.head.prev;
			this.head = this.head.next;
			this._length--;			
		}
		else if(this.tail.value == data){
			this.tail.prev.next = this.tail.next;
			this.tail = this.tail.prev;
			this._length--;
		}
		else if(current.value == data){
			current.prev.next = current.next;
			current.next.prev = current.prev;
			this._length--;
		}
		current = current.next;
	}
};

//testing linked list
var test = new doublyLinkedList();

var test2 = new doublyLinkedList();

arr.forEach(function(arrItem){
	test.insertAtHead(arrItem);
});

arr2.forEach(function(arrItem){
	test.insertAtTail(arrItem);
});

console.log(test);