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
                var x when x % 3 == 0 && x % 5 == 0 => "FizzBuzz",
                var x when x % 3 == 0 => "Fizz",
                var x when x % 5 == 0 => "Buzz",
                var x => x.ToString()
            });

            // foreach (var r in result)
            //     Console.WriteLine(r);
        }
    
    }
}