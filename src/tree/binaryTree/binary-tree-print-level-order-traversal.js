// https://www.geeksforgeeks.org/print-level-order-traversal-line-line/
// import { BinarySearchTree } from './create-binary-tree'

// var bst = new BinarySearchTree();
// bst.push(20);
// bst.push(8);
// bst.push(22);
// bst.push(4);
// bst.push(12);
// bst.push(10);
// bst.push(14);

// levelOrderTraversal(bst.root, bst.height())


export function levelOrderTraversal(node, height) {
    let queue = []
    if (node === null) return

    queue.push(node)

    while(queue.length) {
        const nodeCount = queue.length
        let stringToPrint = ''
        while(nodeCount > 0) {
            const frontNode = queue[0]
            stringToPrint += ` ${frontNode.value}`
            queue.splice(0,1)
            if (frontNode.left) {
                queue.push(frontNode.left)
            }
            if (frontNode.right) {
                queue.push(frontNode.right)
            }
            nodeCount--
        }
        for(let i = 1; i<=height; i++) {
            stringToPrint = ` ${stringToPrint}`
        }
        console.log(stringToPrint)
        height--
    }
}