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
    
    public int MaxDepthDfsRecursive(TreeNode root)
    {
        if (root == null) return 0;

        return 1 + Math.Max(MaxDepth(root.left), MaxDepth(root.right));
    }

    public int MaxDepthDfsIterative(TreeNode root)
    {
        if (root == null) return 0;

        var result = 1;
        
        var stack = new Stack<(TreeNode node, int depth)>();
        stack.Push((root, 1));

        while (stack.Count > 0)
        {
            var (node, depth) = stack.Pop();

            if (node != null)
            {
                result = Math.Max(result, depth);
                stack.Push((node.left, depth + 1));
                stack.Push((node.right, depth + 1));
            }
        }

        return result;
    }
}