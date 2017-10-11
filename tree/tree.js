
bool isValidBST(root) {

    //javascript int max variable
    return isValidNode(root, INT_MAX, INT_MIN);
}

bool isValidNode(root, maxVal, minVal) {
    if (root == null) return true;

    return root.val < maxVal && root.val > minVal &&
        isValidNode (root.left, root.val, minVal) &&
        isValidNode (root.right, maxVal, root.val);
}



/*

//Diff between binary tree and binary search tree


function (root)
{

  if (root == null) return true;
  left = root.left
  right  = root.right

  return functionLeftSubtree (left, root.val) &&
         functionRightSubtree (right, root.val) &&
         function(left) && function(right)


}

  O(n^2)

bool functionLeftSubtree(TreeNode node, int val) {
  if (node == null)
    return true;
  return node.val < val &&
    functionLeftSubtree(node.left, val) &&
    functionLeftSubtree(node.right, val) ;
}

  bool functionLeftSubtree(TreeNode node, int val) {
  if (node == null)
    return true;
  return node.val > val &&
    functionLeftSubtree(node.left, val) &&
    functionLeftSubtree(node.right, val) ;
}


* */