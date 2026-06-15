class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        let b = new Object();
        let c = new Object();
        if(s.length==t.length){
            
            for(let i =0;i<s.length;i++){
                if(!t.includes(s.charAt(i))){
                    return false;
                }
                else{
                    b[s[i]]=(b[s[i]]||0)+1;
                }
                
            }

            for(let j=0;j<t.length;j++){
                c[t[j]]=(c[t[j]]||0)+1;

            }
            for (let key in b){
                if(!(b[key]==c[key])){
                    return false;
                }
                
            }
            return true;
            
        }
        else{
            return false;
        }
    }
}
