using System;
using System.Linq;

namespace csharp
{
    public class TwoPointers
    {
        public void ExecuteAll()
        {
            IsPalindrome("A man, a plan, a canal: Panama");
            TwoSum(new[] {2, 7, 11, 15}, 9);
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
    }
}