package main

import "fmt"

func main() {
	res := twoSum([]int{1,7,2,15}, 9);
	fmt.Println(res)
}

func twoSum(nums []int, target int) []int {
	hashMap := make(map[int]int)

	for i := 0; i < len(nums); i++ {
		diff := target - nums[i]

		if val, ok := hashMap[diff]; ok {
			return []int{val, i}
		}

		hashMap[nums[i]] = i
	}

	return []int{}
}