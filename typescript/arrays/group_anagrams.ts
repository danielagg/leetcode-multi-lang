function groupAnagrams(strs: string[]): string[][] {
  type resultType = {
    key: string;
    variants: string[];
  };

  let result: resultType[] = [];

  for (let index = 0; index < strs.length; index++) {
    const element = strs[index].split("").sort().join("");

    if (result.some((x) => x.key == element)) {
      result.filter((x) => x.key == element)[0].variants.push(strs[index]);
    } else {
      result.push({ key: element, variants: [strs[index]] });
    }
  }

  return result.map((r) => r.variants);
}

const res = groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]); // [["bat"],["nat","tan"],["ate","eat","tea"]]
console.log(res);
