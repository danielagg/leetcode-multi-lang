from typing import Dict, List


def topKFrequent(nums: List[int], k: int) -> List[int]:
    result: List[Dict[str, int]] = []

    for index in range(len(nums)):
        element = nums[index]
        resultEntry = [x for x in result if x["key"] == element]

        if len(resultEntry) == 0:
            result.append({"key": element, "occurances": 1})
        else:
            resultEntry[0]["occurances"] += 1

    result.sort(key=lambda x: x["occurances"], reverse=True)

    return [x["key"] for x in result[:k]]
