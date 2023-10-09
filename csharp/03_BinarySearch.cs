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
            SearchMatrix(new[] {
                new[] {1,3,5,7},
                new[] {10,11,16,20},
                new[] {23,30,34,60}
            }, 3);
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

        public bool SearchMatrix(int[][] matrix, int target)
        {
            var topRow = 0;
            var bottomRow = matrix.Count();

            var row = 0;

            while(topRow < bottomRow)
            {
                row = topRow + (bottomRow-topRow) / 2;

                if(target > matrix[row][matrix[0].Length - 1]) {
                    topRow = row;
                } else if(target < matrix[row][0]) {
                    bottomRow = row;
                } else {
                    break;
                }
            }

            var low = 0;
            var high = matrix[0].Length;

            while(low < high)
            {
                var mid = low + (high - low) / 2;

                if(matrix[row][mid] == target) {
                    return true;
                } else if (target > matrix[row][mid]) {
                    low = mid;
                } else {
                    high = mid;
                }
            }

            return false;
        }

    }
}