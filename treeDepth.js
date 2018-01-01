function treeDepth(root, depth=0) {
    if (root.left) {
        var leftDepth = findDepth(root.left, depth+1);
    } else {
        var leftDepth = depth;
    } if (root.right) {
        var rightDepth = findDepth(root.right, depth+1);
    } else {
        var rightDepth = depth;
        if(leftDepth>rightDepth){
            return leftDepth;
        } else {
            return rightDepth;
        }
    }
}

