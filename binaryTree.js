var numbers = [10,5,15,4,16,7,8,19,2,3,12,11,13,14,11,11,12,11];
var linear = [1,2,3,4,5,6,7,8,9];
var arrow = [10,11,12,13,14,15,16,17,18,19,20,9,8,7,6,5,4,3,2,1];
var small = [5,7,3,1,9];

//constructor function to create new node for binary search tree
function Node(data){
	this.value = data;
	this.left = null;
	this.right = null;
}

//constructor function to create new binary tree
function BST(){
	this.root = null;
}

//add prototype that returns root node
BST.prototype.returnRoot = function(){
	return this.root;
}

//add prototype to insert into BST
BST.prototype.insert = function(data, pointer){
	var node = new Node(data);
	var current = this.root;

	//if 2nd argument of function != null, current = pointer
	if(pointer){
		current = pointer;
	}

	if(this.root == null){
		this.root = node;
	}
	else if(data <= current.value){
		if(current.left == null){
			current.left = node;
		}
		else{
			current = current.left;
			//recursion 
			this.insert(data, current);
		}
	}
	else if(data > current.value){
		if(current.right == null){
			current.right = node;	
		}
		else{
			current = current.right;
			//recursion
			this.insert(data, current);
		}
	}
}

//add prototype to search BST and report if data was found
BST.prototype.search = function(data, pointer){
	var current = this.root;

	if(pointer){
		current = pointer;
	}

	if(this.root == null){
		console.log("empty tree");
	}
	else if(data == current.value){
		console.log("found data "+current.value);
	}
	else if(data < current.value){
		if(current.left == null){
			console.log("data not found");
		}
		else{
			current = current.left;
			//recursion
			this.search(data, current);
		}
	}
	else if(data > current.value){
		if(current.right == null){
			console.log("data not found");
		}
		else{
			current = current.right;
			//recursion
			this.search(data, current);
		}
	}
}

//add prototype to find MIN value iteratively
BST.prototype.findMinIterative = function(){
	var current = this.root;

	while(current.left != null){
		current = current.left;
	}
	return current;
}

//add prototype to find MAX value iteratively
BST.prototype.findMaxIterative = function(){
	var current = this.root;

	while(current.right != null){
		current = current.right;
	}
	return current;
}

//add prototype to find MIN value recursively
//example test.findMinRecursively(test.returnRoot());
BST.prototype.findMinRecursively = function(pointer){
	var current = pointer;

	if(current.left == null){
		return current;
	}

	return this.findMinRecursively(current.left);
}

//add prototype to find MAX value recursively
//example test.findMaxRecursively(test.returnRoot());
BST.prototype.findMaxRecursively = function(pointer){
	var current = pointer;

	if(current.right == null){
		return current;
	}

	return this.findMaxRecursively(current.right);
}

//add prototype to traverse and print BST
//example test.levelOrderTraversal();
BST.prototype.levelOrderTraversal = function(){
	var array = [];
	array.push(this.root);

	// while array is not empty
	while(array.length > 0){

		//grab first elem from array
		var current = array.shift();

		//print the data in the current element
		console.log(current.value);
		//if pointer to left is not null push pointer to left into array
		if(current.left != null){
			array.push(current.left);
		}
		//if pointer to right is not null push pointer to right into array
		if(current.right != null){
			array.push(current.right);
		}
	}
}

//add prototype recursive function to traverse the BST and print data - preorder
//example test.preorder(test.returnRoot());
BST.prototype.preorder = function(pointer){
	var current = pointer;

	if(pointer == null){
		return;
	}

	//recursion
	console.log(current.value);
	this.preorder(current.left);
	this.preorder(current.right);
}

//add prototype recursive function to traverse the BST and print data - inorder
//example test.preorder(test.returnRoot());
BST.prototype.inorder = function(pointer){
	var current = pointer;

	if(pointer == null){
		return;
	}

	//recursion
	this.inorder(current.left);
	console.log(current.value);
	this.inorder(current.right);
	
}

//add prototype recursive function to traverse the BST and print data - postorder
//example test.postorder(test.returnRoot());
BST.prototype.postorder = function(pointer){
	var current = pointer;

	if(pointer == null){
		return;
	}

	//recursion
	this.postorder(current.left);
	this.postorder(current.right);
	console.log(current.value);

}

//add along function to bstChecker
BST.prototype.isBinarySearchTree = function(){
	return this.bstChecker(this.root, Number.MIN_VALUE, Number.MAX_VALUE);
}

//add prototype function to check if BST is real BST
BST.prototype.bstChecker = function(pointer, minValue, maxValue){
	var current = pointer;

	if(current == null){
		return true;
	}

	if(current.value > minValue && current.value < maxValue
		&& this.bstChecker(current.left, minValue, current.value)
		&& this.bstChecker(current.right, current.value, maxValue)){
		return true;
	}		
	else{
		return false;
	}
}

//add prototype delete node from BST
BST.prototype.delete = function(data){
	return this.deleteUtility(this.root, data);
}

BST.prototype.deleteUtility = function(pointer, data){
	var current = pointer;

	if(current == null){
		return current;
	}
	else if(data < current.value){
		current.left = this.deleteUtility(current.left, data);
	}
	else if(data > current.value){
		current.right = this.deleteUtility(current.right, data);
	}
	else if(data == current.value){
		
		if(current.left == null && current.right == null){
			current = null;
		}
		else if(current.left == null){
			current = current.right;
		}
		else if(current.right == null){
			current = current.left;
		}
		else{
			var temp = this.findMinRecursively(current.right);
			current = temp;
			current.right = this.deleteUtility(current.right, temp.value);
		}
	}
	else {console.log("bugg")}
	return current;
}


//test cases
var test = new BST();

numbers.forEach(function(arrItem){
	test.insert(arrItem);
})

//console.log(test);
//test.search(6);
//test.findMinIterative();
//test.findMaxIterative();
//console.log(test.findMinRecursively(test.returnRoot()));
//console.log(test.findMaxRecursively(test.returnRoot()));
//test.levelOrderTraversal();
//test.preorder(test.returnRoot());
//test.inorder(test.returnRoot());
//test.postorder(test.returnRoot());
//console.log(test.isBinarySearchTree());
//test.delete(11);
console.log(test);