class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let a = new Object();
        for(let i =0 ;i<nums.length;i++){
            if(a[nums[i]]==undefined){
                a[nums[i]]=1;
            }
            else{
                a[nums[i]]=a[nums[i]]+1;
            }
        }

        let b = new Array();
        for(let j = 0 ;j<=nums.length;j++){
            b.push([]);
        }
        for(let t in a){
            let freq = a[t];
            b[freq].push(t);
        }
        let r = new Array();
        for (let p = b.length - 1; p >= 0; p--) {
            for (let num of b[p]) {
                r.push(num);
                if (r.length === k) {
                return r;
            }
    }
}
}
}
