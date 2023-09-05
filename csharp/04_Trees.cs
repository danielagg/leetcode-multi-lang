namespace csharp;

public class Trees
{
    public class TreeNode
    {
        public int val;
        public TreeNode left;
        public TreeNode right;
        
        public TreeNode(int val=0, TreeNode left=null, TreeNode right=null)
        {
            this.val = val;
            this.left = left;
            this.right = right;
        }
    }
    
    public void ExecuteAll()
    {
        // InvertTree(new[] { -1,0,3,5,9,12 }, 2);
    }
    
    public TreeNode InvertTree(TreeNode root)
    {
        if (root == null) return null;

        (root.right, root.left) = (root.left, root.right);

        InvertTree(root.left);
        InvertTree(root.right);

        return root;
    }
}