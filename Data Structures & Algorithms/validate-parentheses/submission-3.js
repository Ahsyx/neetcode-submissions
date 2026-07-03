class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let a = new Array();
        
        for(let i of s){
            if(i=="{"||i=="["||i=="("){
                a.push(i);
            
                
            }
            else if(i =="}"){
                if(a.pop()!="{"){
                    return false;
                }
            }
            else if(i ==")"){
                if(a.pop()!="("){
                    return false;
                }
            }
            else if(i =="]"){
                if(a.pop()!="["){
                    return false;
                }
            }
        }

        if(a.length>0){
            return false;
        }
        return true;
    }
}
