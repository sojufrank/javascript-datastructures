// array with data to insert into linked list
var arr = [1,2,3,4,5];

//constructor function to create new nodes
function Node(data){
	this.value = data;
	this.next = null;
}

//constructor function to create new linked list
function LinkedList(){
	this._length = 0;
	this.head = null;
}

//add prototype function to add node with data to linked list
LinkedList.prototype.insertNode = function(data){
	var node = new Node(data);
	node.next = this.head;
	this.head = node;
	this._length++;
}

//add prototype function to print linked list to console
LinkedList.prototype.printList = function(){
	var current = this.head;
	while(current != null){
		console.log(current.value);
		current = current.next;
	}
}

//add prototype function to remove node from linked list
LinkedList.prototype.removeNode = function(data){
	var current = this.head;
	var prev = current;
	while(current != null){
		if(this.head.value == data){
			this.head = this.head.next;
			this._length--;
		}
		if(current.value == data){
			prev.next = current.next;
			this._length--;
		}
		prev = current;
		current = current.next;
	}
}

//add prototype function to reverse linked list
LinkedList.prototype.reverseList = function(){
	var current = this.head;
	var prev = null;
	var next = null;
	while(current != null){
		next = current.next;
		current.next = prev;
		prev = current;
		current = next;
	}
	this.head = prev;
}


//create new linked list
var testList = new LinkedList();

//insert data from array into linked list
arr.forEach(function(data){
	testList.insertNode(data);
})

//test list functions
testList.removeNode(1);
testList.printList();
testList.reverseList();
testList.printList();