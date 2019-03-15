export function getBinaryTreeHeight(node) {
    if (node === null) {
        return -1
    }

    const leftTreeHeight = getBinaryTreeHeight(node.left)
    const rightTreeHeight = getBinaryTreeHeight(node.right)
    return Math.max(leftTreeHeight, rightTreeHeight) + 1
}

export default getBinaryTreeHeight