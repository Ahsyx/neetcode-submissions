class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let result ="";
        for(let s of strs){
            result=result+s.length+"#"+s;
            
        }
        return result;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let a=[];
        let k =0;
        for(let i =0;i<str.length;i++){
            if(str[i]=="#"){
                let len = Number(str.slice(k,i));
                let s = str.slice(i+1,i+1+len);
                a.push(s);
                k=i+len+1;
                i = i + len ;
                
            }
        }
        return a;
    }
}
