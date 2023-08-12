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
            TwoSum(new[] {2, 7, 11, 15}, 9);
            GroupAnagrams(new[] {"eat", "tea", "tan", "ate", "nat", "bat"});
            TopKFrequent(new[] {1, 1, 1, 2, 2, 3}, 2);
            ProductExceptSelf(new[] {1, 2, 3, 4});

            IsValidSudoku(new[]
            {
                new[] { '5','3','.','.','7','.','.','.','.' },
                new[] { '6','.','.','1','9','5','.','.','.' },
                new[] { '.','9','8','.','.','.','.','6','.' },
                new[] { '8','.','.','.','6','.','.','.','3' },
                new[] { '4','.','.','8','.','3','.','.','1' },
                new[] { '7','.','.','.','2','.','.','.','6' },
                new[] { '.','6','.','.','.','.','2','8','.' },
                new[] { '.','.','.','4','1','9','.','.','5' },
                new[] { '.','.','.','.','8','.','.','7','9' },
            });

            LongestConsecutive(new[] {100, 4, 200, 1, 3, 2}); // 4
            LongestConsecutive(new[] { 0,3,7,2,5,8,4,6,0,1 }); // 9
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
        
        private int[] TwoSum(int[] nums, int target)
        {
            var dict = new Dictionary<int, int>(nums.Length); // initial capacity

            for (var i = 0; i < nums.Length; i++)
            {
                var diff = target - nums[i];

                if (dict.TryGetValue(diff, out var index))
                    return new[] { index, i };

                dict[nums[i]] = i;
            }

            throw new Exception();
        }
        
        private IList<IList<string>> GroupAnagrams(string[] strs)
        {
            var result = new Dictionary<string, List<string>>();

            foreach (var entry in strs)
            {
                var entryAsCharArray = entry.ToCharArray();
                Array.Sort(entryAsCharArray);

                var sortedEntry = new string(entryAsCharArray);
                
                if(result.ContainsKey(sortedEntry))
                    result[sortedEntry].Add(entry);
                else
                    result.Add(sortedEntry, new[] { entry }.ToList());
            }

            return result
                .Select(x => x.Value)
                .Select(x => (IList<string>)x)
                .ToList();
        }
        
        private int[] TopKFrequent(int[] nums, int k)
        {
            var sorted = nums.GroupBy(x => x);
            var result = sorted.OrderByDescending(x => x.Count()).Take(k);

            return result.Select(r => r.Key).ToArray();
        }
        
        public int[] ProductExceptSelf(int[] nums)
        {
            /*
  1   2   3   4
  **************
- 1   2   6   24
  24  24  12   4   -
  
  
  24, 12, 8,   6  
             */

            var prevSums = new List<int>(nums.Length + 1);
            prevSums.Add(1);

            for (var i = 0; i < nums.Length; i++)
            {
                var curr = prevSums[i] * nums[i];
                prevSums.Add(curr);
            }
            
            var postSums = new List<int>(nums.Length + 1);
            postSums.Add(1);

            for (int i = nums.Length - 1; i >= 0; i--)
            {
                var curr = postSums[nums.Length - i - 1] * nums[i];
                postSums.Add(curr);
            }

            postSums.Reverse();

            var result = new List<int>();
            for (var i = 0; i < nums.Length; i++)
            {
                var test1 = prevSums[i];
                var test2 = postSums[i + 1];
                
                result.Add(test1 * test2);
            }
            
            return result.ToArray();
        }
        
        public bool IsValidSudoku(char[][] board)
        {
            // validate rows
            for (var i = 0; i < board.Length; i++)
            {
                var currentRowWithoutDots = board[i].Where(x => x != '.');

                var areUnique = currentRowWithoutDots.Distinct().Count() == currentRowWithoutDots.Count();
                var areValidDigits = currentRowWithoutDots.All(x => char.IsDigit(x) && x != '0');

                if (!areUnique || !areValidDigits)
                    return false;
            }
            
            // validate columns
            for (var i = 0; i < board.Length; i++)
            {
                var currentColWithoutDots = board.Select(x => x.ElementAt(i)).Where(x => x != '.');
                
                var areUnique = currentColWithoutDots.Distinct().Count() == currentColWithoutDots.Count();
                var areValidDigits = currentColWithoutDots.All(x => char.IsDigit(x) && x != '0');

                if (!areUnique || !areValidDigits)
                    return false;
            }
            
            // validate 3x3s
            for (int i = 0; i < 9; i++)
            {
                var currentRows = i switch
                {
                    var x when x >= 0 && x < 3 => new[] {0, 1, 2},
                    var x when x >= 3 && x < 6 => new[] {3, 4, 5},
                    _ => new[] {6, 7, 8}
                };
                
                var currentCols = i switch
                {
                    var x when new[] {0, 3, 6}.Contains(x) => new[] {0, 1, 2},
                    var x when new[] {1, 4, 7 }.Contains(x) => new[] {3, 4, 5},
                    _ => new[] {6, 7, 8}
                };
                
                var table = new List<char>();
                foreach (var row in currentRows)
                {
                    foreach (var column in currentCols)
                    {
                        var entry = board[row][column];
                        if(entry != '.')
                            table.Add(entry);
                    }
                }
                
                var areUnique = table.Distinct().Count() == table.Count();
                if (!areUnique)
                    return false;
            }

            return true;
        }
        
        public int LongestConsecutive(int[] nums)
        {
            if(nums.Length == 0) return 0;
            
            Array.Sort(nums);

            var globalMax = 0;
            var localMax = 0;

            for (int i = 1; i < nums.Length; i++)
            {
                localMax = nums[i] - nums[i - 1] == 1 ? localMax + 1 : 0;
                globalMax = Math.Max(globalMax, localMax);
            }

            return globalMax++;
        }
    }
}