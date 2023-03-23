function isAnagram_idea1(s: string, t: string): boolean {
  if (s.length !== t.length) return false;

  const splitS = s.split("").sort();
  const splitT = t.split("").sort();

  return splitS.every((value, index) => value === splitT[index]);
}

function isAnagram_idea2(s: string, t: string): boolean {
  if (s.length !== t.length) return false;

  return [...s].sort().join() == [...t].sort().join();
}

console.log(isAnagram_idea1("anagram", "nagaram"));
console.log(isAnagram_idea1("rat", "car"));

console.log(isAnagram_idea2("anagram", "nagaram"));
console.log(isAnagram_idea2("rat", "car"));
