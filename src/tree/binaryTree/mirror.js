export function mirror(root) {
    if (root === null || root === undefined) {
        return
    }

    if (root.left) {
        mirror(root.left)
    }
    if (root.right) {
        mirror(root.right)
    }

    const temp = root.left
    root.left = root.right
    root.right = temp
}