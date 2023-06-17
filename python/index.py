def twoSum(nums, target):
    hashMap = {}

    for i in range(len(nums)):
        diff = target - nums[i]

        if(diff in hashMap):
            return [hashMap.get(diff), i]
        
        hashMap[nums[i]] = i
    return []


def twoSum2(numbers, target):
    left, right = 0, len(numbers) - 1

    while(left < right):
        curr = numbers[left] + numbers[right]

        if curr == target:
            return [left+1, right+1]
        
        if curr < target:
            left += 1
        else:
            right -= 1
    
    return []