const answer = document.querySelector("h1");

var threeSum = function (nums) {
  const results = [];
  nums.sort();
  for (var i = 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }
    let left = i + 1;
    let right = nums.length - 1;
    while (left < right) {
      sum = nums[i] + nums[left] + nums[right];
      if (sum < 0) {
        left += 1;
      } else if (sum > 0) {
        right -= 1;
      } else {
        results.push([nums[i], nums[left], nums[right]]);
        while (left < right && nums[left] === nums[left + 1]) {
          left++;
        }
        while (left < right && nums[right] === nums[right - 1]) {
          right--;
        }
        left += 1;
        right -= 1;
      }
    }
  }
  return results;
};

var isPalindrome = function (head) {
  const q = [];

  if (q.length === 0) {
    return true;
  }
  const node = head;
  while (node.length !== 0) {
    q.push(node.val);
    node = node.next;
  }
  while (q.length > 1) {
    if (q.shift() !== q.pop()) {
      return false;
    }
  }
  return false;
};

answer.innerText = threeSum([-1, 0, 1, 2, -1, -4]);

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
