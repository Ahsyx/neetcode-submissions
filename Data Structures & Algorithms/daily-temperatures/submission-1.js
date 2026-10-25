class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        const a = new Array(temperatures.length).fill(0);
        const stack=[];
        for(let i =0;i<temperatures.length;i++){
            while(stack.length>0 && temperatures[i]>temperatures[stack[stack.length-1]]){
                const prev=stack.pop();
                a[prev]= i-prev;
            }
            stack.push(i);
        }
    return a;
    }
}
