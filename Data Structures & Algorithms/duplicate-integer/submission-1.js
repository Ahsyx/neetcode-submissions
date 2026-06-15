class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        for(let i =0;i<nums.length;i++){
            let sum=0;
            for(let j= 0;j<nums.length;j++){
                if(nums[i]===nums[j]){
                    sum+=1;
                }
            }
            if(sum>1){
                return true;
            }
            
        }
        return false;
    }
}
