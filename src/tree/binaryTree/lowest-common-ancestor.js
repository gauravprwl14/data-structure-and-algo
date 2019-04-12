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

findLowestCommonAncestor(bst.root,29, 14)


function getNodePath(node, value) {
    let pathArr = []
    if (node === null) return pathArr
    if (node.value === value) {
        pathArr.push(node)
        return pathArr
    }
    pathArr.push(node)
    if (node.value > value) {
        let childNodePath = getNodePath(node.left, value)
        if (childNodePath.length) {
            return pathArr.concat(childNodePath)
        }
        return []
    }
    if (node.value < value) {
        let childNodePath = getNodePath(node.right, value)
        if (childNodePath.length) {
            return pathArr.concat(childNodePath)
        }
        return []
    }

}

function findNode(pathArr, node) {
    let findIndex = -1
    for(let i=0;i<pathArr.length;i++) {
        if (node.value === pathArr[i].value) {
            findIndex = i
            return findIndex
        }
    }
    return findIndex
}

function getCommonAncestor(src, dest) {
    let i =0;
    while(i<src.length - 1) {
        const commonAncestor = findNode(dest, src[i])
        if (commonAncestor !== -1) {
            const nextNodeIsCommon = findNode(dest, src[i + 1])
            if (nextNodeIsCommon !== -1) {
                i += 1 
            } else {
                return src[i]
            }
        } else {
            i+=1
        }
        
    }
    return null
}

function findLowestCommonAncestor(node, v1, v2) {
    let v1NodePath = getNodePath(node, v1)
    let v2NodePath = getNodePath(node, v2)
    let commonAncestor = getCommonAncestor(v1NodePath, v2NodePath)
    console.log('commonAncestor', comxmonAncestor)
}