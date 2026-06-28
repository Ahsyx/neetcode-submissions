class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let prefix = new Array(nums.length);
        prefix.fill(1);
        for(let i =1;i<nums.length;i++){
            prefix[i]=nums[i-1]*prefix[i-1];
        }
        let suffix = new Array(nums.length);
        suffix.fill(1);
        for(let j = nums.length-2;j>=0;j--){
            suffix[j]=nums[j+1]*suffix[j+1];
        }
        let output = new Array(nums.length);
        for(let i = 0;i<nums.length;i++){
            output[i]=suffix[i]*prefix[i];
        }

        return output;       
    }
}
