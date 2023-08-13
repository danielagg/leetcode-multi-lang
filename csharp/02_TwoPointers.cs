using System.Linq;

namespace csharp
{
    public class TwoPointers
    {
        public void ExecuteAll()
        {
            IsPalindrome("A man, a plan, a canal: Panama");
        }
        
        private bool IsPalindrome(string s)
        {
            if (string.IsNullOrEmpty(s?.Trim()))
                return true;

            var parsed = new string(s.Where(x => char.IsLetter(x) || char.IsDigit(x)).Select(char.ToLower).ToArray());
            var reversed = new string(parsed.Reverse().ToArray());

            return parsed == reversed;
        }
    }
}