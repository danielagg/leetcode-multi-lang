using System.Linq;

namespace csharp
{
    public class Arrays
    {
        public void ExecuteAll()
        {
            ContainsDuplicate(new[] { 1,2,3,1 });
        }
        
        // Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.
        public bool ContainsDuplicate(int[] nums)
        {
            return nums.Distinct().Count() != nums.Length;
        }
    }
}