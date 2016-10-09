console.clear();

//array of numbers to insert into linked list
var arr = [1,2,3,4,5,6,7,8,9];

//global variable that marks head of linked list
var head = null;

//function that inserts data into linked list
function insert(data){
  
  //create a node object
  var node ={
    value : data,
    next : null
  };
  
  //set node next to head, and head to node.  this sets the links
  node.next = head;
  head = node;
}

//function that prints values to console
function print(){
  var current = head;
  while(current != null){
    console.log(current.value);
    current = current.next;
  }
}

//function that recursively prints to console
//example recursivePrint(head);
function recursivePrint(pointer){
  if(pointer == null){
 
  }
  else{
    console.log(pointer.value)
    recursivePrint(pointer.next);
  }
}

//function that recursively prints linked list in reverse to console
//example reverseRecursivePrint(head);
function reverseRecursivePrint(pointer){
  if(pointer == null){
   
  }
  else{
    reverseRecursivePrint(pointer.next);
    console.log(pointer.value);
  }
}

//function that seaches linked list for a value 
function search(data){
  var current = head;
  while(current != null){
    if(data == current.value){
      console.log("search success")
      return;
    }
    current = current.next;
  }
  console.log("search failed");
}

//function that removes data from linked list
function remove(data){
  var current = head;
  var prev = current;
  while(current != null){
    if(data == current.value){
        prev.next = current.next;
      }
    prev = current;
    current = current.next;
  }
}

//function that reverses linked list iteratively
function reverseIterative(){
  var current = head;
  var prev;
  var next;
  while(current != null){
    next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }
  head = prev;
}

//function that reverses linked list recursively
function reverseRecursive(pointer, prev){
  if(pointer.next == null){
    head = pointer;
  }
  else{
    reverseRecursive(pointer.next, pointer);
  }
  pointer.next = prev;
}

//iterate over array and insert data into list
for(var i=0; i<arr.length; i++){
  insert(arr[i]);
}

console.log(head);