function Node(val){
    this.value = val;
    this.left = null;
    this.right = null;
  }

  function BinarySearchTree(){
    this.root = null;
  }
  
  
  BinarySearchTree.prototype.push = function(val){
    var root = this.root;
 
    if(!root){
       this.root = new Node(val);
       return;
    }
 
    var currentNode = root;
    var newNode = new Node(val); 
 
    while(currentNode){
       if(val < currentNode.value){
           if(!currentNode.left){
              currentNode.left = newNode;
              break;
           }
           else{
              currentNode = currentNode.left;
         }
      }
      else{
          if(!currentNode.right){
             currentNode.right = newNode;
             break;
          }
          else{
             currentNode = currentNode.right;
          }
      }
   }
 
 }



 var bst = new BinarySearchTree();
bst.push(3);
bst.push(2);
bst.push(4);
bst.push(1);
bst.push(5);
bst.push(40);


console.log('bst before', JSON.stringify(bst))
getSum(bst.root)

function getSum(node, isRight = false, parentSum = 0) {
    let sum = 0
    if (node === null) {
        return sum
    }

    let sumLeft = getSum(node.left) 
    let sumRoot = node.value
    let sumRight = getSum(node.right, true, sumLeft + sumRoot)

    let total = sumLeft + sumRoot + sumRight
    if ((node.left && node.right) || (node.right && !node.left)) {
        node.right.value = total
        if (isRight) {
            node.right.value += parentSum
        }
    }
    if (isRight) {
        return sumRoot
    }
    return total
}


console.log('bst after', JSON.stringify(bst))





        