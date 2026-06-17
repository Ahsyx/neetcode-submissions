class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let a = new Object();
        for(let i =0;i<nums.length;i++){
            let b = target-nums[i];
            if(a[b]==undefined){
                a[nums[i]]=i;
            }
            else{
                return [a[b] , i];
            }
        }

    }
}
