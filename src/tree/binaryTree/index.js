import { BinarySearchTree } from './create-binary-tree'

var bst = new BinarySearchTree();
bst.push(20);
bst.push(8);
bst.push(22);
bst.push(29);
bst.push(21);
bst.push(4);
bst.push(12);
bst.push(10);
bst.push(14);


// test mirror
bst.levelOrderPrint()
bst.mirror()
console.log('after mirror')
bst.levelOrderPrint()