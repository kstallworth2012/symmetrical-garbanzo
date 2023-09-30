//A LinkedList is a collection of values
//Basic unit of a LinkedList is a node
//
//Basic Noe has two attributes 
//-Value: the information the node contains 
//could be a string, int, instance etc 
//-Next: referenc to the next node (last node's next ... in the list is null)


//BROWSER HISTORY USED AS A LINKED LIST 

class Node {
	constructor(value, next=null){
			this.value = value 
			this.next = next
	}
}

const firstPage = new Node('Slashdot.org')
const secondPage = new Node('Google.com')
const thirdPage = new Node('Amazon.com')
const fourthPage = new Node('Cnn.com',new Node('Espn.com',
								new Node('Springboard.com',
									new Node('si.com'
										,new Node('UNC.edu'
											,new Node('Duke.edu'))))))


firstPage.next = secondPage
secondPage.next = thirdPage
thirdPage.next = fourthPage


class LinkedList {
	constructor(){
		this.head = null
		this.tail = null
	}

	traverse(){
		let currentNode = this.head
		while(currentNode){
			console.log(currentNode.value)
			currentNode = currentNode.next
		}
	}

    find(value){
    	let currentNode = this.head
    	while(currentNode){
    		if(currentNode.value === value){
    			return true
    		}else {
    			currentNode = currentNode.next
    		}
    	}
    	return false
    }

   append(value){
   	const newNode = new Node(value)
   	if(!this.head){
   		this.head = new newNode
   		this.tail = new newNode
   	}
   	this.tail.next = newNode; 
   	this.tail = newNode
}

const webHistory = new LinkedList()
webHistory.head = firstPage
webHistory.traverse()
console.log(webHistory.find('Springboard.com'))
webHistory.append()
// console.log(webHistory.head.next)
// console.log(webHistory.head.next.next)
// console.log(webHistory.head.next.next.next)
// console.log(webHistory.head.next.next.next.next)
// console.log(webHistory.head.next.next.next.next.next)
// console.log(webHistory.head.next.next.next.next.next.next)
