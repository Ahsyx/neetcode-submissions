class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        let a = new Array();
        for(let i of tokens){
            if(i=="+"){
                let q = a.pop();
                let p = a.pop();
                a.push(p+q);
            }
            else if(i=="-"){
                let q = a.pop();
                let p = a.pop();
                a.push(p-q);
            }
            else if(i=="*"){
                let q = a.pop();
                let p = a.pop();
                a.push(p*q);
            }
            else if(i=="/"){
                let q = a.pop();
                let p = a.pop();
                a.push(Math.trunc(p/q));
            }
            else{
                a.push(Number(i));
            }
        }
        return a.pop();
    }
}
