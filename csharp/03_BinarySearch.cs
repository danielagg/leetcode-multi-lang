using System;
using System.Collections.Generic;
using System.Linq;

namespace csharp
{
    public class BinarySearch
    {
        public void ExecuteAll()
        {
            Search(new[] { -1,0,3,5,9,12 }, 2);
        }
        
        public int Search(int[] nums, int target)
        {
            // return Array.BinarySearch(nums, target);

            var left = 0;
            var right = nums.Length - 1;

            while (left <= right)
            {
                var mid = (left + right) / 2;

                if (nums[mid] == target)
                    return mid;

                if (nums[mid] < target)
                    left = mid + 1;
                else
                    right = mid - 1;
            }

            return -1;
        }
    }
}