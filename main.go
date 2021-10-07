package main

import (
	"fmt"
	"math"
	"sort"
)

func main() {
	fmt.Println(maxProfit([]int{7, 6, 4, 3, 1}))
}

func maxProfit(prices []int) int {
	profit := 0
	min_price := 9223372036854775807

	for _, price := range prices {
		min_price = int(math.Min(float64(min_price), float64(price)))
		profit = int(math.Max(float64(profit), float64(price-min_price)))
	}

	return profit
}

func productExceptSelf(nums []int) []int {
	out := []int{}
	p := 1
	for i := 0; i < len(nums); i++ {
		out = append(out, p)
		p = p * nums[i]
	}
	p = 1
	for i := 0; i < len(nums); i++ {
		out[len(nums)-i-1] = out[len(nums)-i-1] * p
		p = p * nums[len(nums)-i-1]
	}
	return out
}

func arrayPairSum(nums []int) int {
	sort.Ints(nums)
	result := 0
	for idx, num := range nums {
		if idx%2 == 0 {
			result += num
		}
	}
	return result
}

func trap(height []int) int {
	if len(height) == 0 {
		return 0
	}
	volumn, left, right := 0, 0, len(height)-1
	left_max, right_max := height[left], height[right]
	for left < right {
		left_max, right_max = int(math.Max(float64(height[left]), float64(left_max))), int(math.Max(float64(height[right]), float64(right_max)))
		if left_max <= right_max {
			volumn += left_max - height[left]
			left++
		} else {
			volumn += right_max - height[right]
			right--
		}
	}
	return volumn
}
