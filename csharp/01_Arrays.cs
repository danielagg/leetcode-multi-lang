using System;
using System.Collections.Generic;
using System.Linq;

namespace csharp
{
    public class Arrays
    {
        public void ExecuteAll()
        {
            ContainsDuplicate(new[] { 1,2,3,1 });
            IsAnagram("anagram", "nagaram");
        }
        
        // Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.
        private bool ContainsDuplicate(int[] nums)
        {
            var set = new HashSet<int>(nums);
            return set.Count != nums.Length;
            // return nums.Distinct().Count() != nums.Length;
        }
        
        private bool IsAnagram(string s, string t)
        {
            if (s.Length != t.Length)
                return false;

            var asArrayS = s.ToCharArray();
            var asArrayT = t.ToCharArray();
            
            Array.Sort(asArrayS);
            Array.Sort(asArrayT);

            var result = new string(asArrayS) == new string(asArrayT);
            return result;
        }
    }
}