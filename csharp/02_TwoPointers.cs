using System;
using System.Collections.Generic;
using System.Linq;

namespace csharp
{
    public class TwoPointers
    {
        public void ExecuteAll()
        {
            IsPalindrome("A man, a plan, a canal: Panama");
            TwoSum(new[] {2, 7, 11, 15}, 9);
            ThreeSum(new[] {-2,0,1,1,2});
        }
        
        private bool IsPalindrome(string s)
        {
            if (string.IsNullOrEmpty(s?.Trim()))
                return true;

            var parsed = new string(s.Where(x => char.IsLetter(x) || char.IsDigit(x)).Select(char.ToLower).ToArray());
            var reversed = new string(parsed.Reverse().ToArray());

            return parsed == reversed;
        }
        
        private int[] TwoSum(int[] numbers, int target)
        {
            var left = 0;
            var right = numbers.Length - 1;

            while (left < right)
            {
                var curr = numbers[left] + numbers[right];

                if (curr == target)
                    return new[] {left + 1, right + 1};

                if (curr > target)
                    right--;
                else
                    left++;
            }

            throw new Exception();
        }
        
        public IList<IList<int>> ThreeSum(int[] nums)
        {
            Array.Sort(nums);

            var result = new List<IList<int>>();

            for (int i = 0; i < nums.Length - 2; i++)
            {
                var leftIndex = i + 1;
                var rightIndex = nums.Length - 1;
                
                while (leftIndex < rightIndex)
                {
                    var curr = nums[i];
                    var left = nums[leftIndex];
                    var right = nums[rightIndex];

                    var sum = curr + left + right;
                    if (sum == 0)
                    {
                        // add to result, try again in case we have other combinations
                        result.Add(new[] { curr, left, right });

                        leftIndex++;
                        rightIndex--;
                    }
                    else if (sum > 0)
                        rightIndex--;
                    else
                        leftIndex++;
                }
            }

            return result.Aggregate(new List<IList<int>>(), (res, curr) =>
            {
                if (!res.Any(x => x.SequenceEqual(curr)))
                    res.Add(curr);
                return res;
            });
        }
    }
}