class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let b = new Object();
        for(let i = 0;i<strs.length;i++){
             let c = strs[i].split("");
            c.sort();
            c = c.join("");
            if(b[c]==undefined){
                b[c]=[strs[i]];
            }
            else{
                b[c].push(strs[i]);
            }
    
        }
        let a = new Array();
        for(let j in b){
            a.push(b[j]);
    
        }
        return a;
    }

}
