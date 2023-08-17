using System;
using System.Linq;

namespace csharp
{
    public class Misc
    {
        public void ExecuteAll()
        {
            FizzBuzz(100);
        }

        // Write a program that prints the numbers from 1 to n.
        // But for multiples of 3, print 'Fizz' instead of the number, and for multiples of 5, print 'Buzz'.
        // For numbers that are multiples of both 3 and 5, print 'FizzBuzz'.
        private void FizzBuzz(int n)
        {
            var result = Enumerable.Range(1, n).Select(i => i switch
            {
                int when i % 3 == 0 && i % 5 == 0 => "FizzBuzz",
                int when i % 3 == 0 => "Fizz",
                int when i % 5 == 0 => "Buzz",
                int => i.ToString()
            });

            // foreach (var r in result)
            //     Console.WriteLine(r);
        }
    
    }
}