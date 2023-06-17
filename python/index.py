#  two-sum


def twoSum(nums, target):
    hashMap = {}

    for i in range(len(nums)):
        diff = target - nums[i]

        if(diff in hashMap):
            return [hashMap.get(diff), i]
        
        hashMap[nums[i]] = i
    return []

print(twoSum([1, 2, 3, 4, 5, 6, 7], 9))