class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let a = new Set(nums);
        let maxLength=0;
        let length;
        for(let i of a){
            if(!a.has(i-1)){
                let start = i+1;
                length=1;
                

                while(a.has(start)){
                    start+=1;
                    length+=1;
                }
                if(length>maxLength){
                maxLength= length;
            }
            }
            
        }
        return maxLength;
    }
}
