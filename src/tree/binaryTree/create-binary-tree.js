import { getBinaryTreeHeight } from './binary-tree-height'

function Node(val){
    this.value = val;
    this.left = null;
    this.right = null;
  }

  export function BinarySearchTree(){
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

 BinarySearchTree.prototype.printIndore = function() {
    var root = this.root
    printBinaryTree(root)
    function printBinaryTree(node) {
       if (node === null) return

       printBinaryTree(node.left)
       console.log(node.value)
       printBinaryTree(node.right)
    }
 }
 
 BinarySearchTree.prototype.height = function() {
    var root = this.root
    return getBinaryTreeHeight(root)
 }

