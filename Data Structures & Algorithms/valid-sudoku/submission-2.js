class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        for(let i =0;i<board.length;i++){
            let rows=new Object();
            
            for(let j=0;j<board[0].length;j++){
                if(board[i][j]==="."){
                    continue;
                }
                else if(rows[board[i][j]]){
                    return false;
                }
                else{
                    rows[board[i][j]]=1;
                }
            }
        }
        for(let i=0;i<board[0].length;i++){
            let coloumn = new Object();
            for(let j =0;j<board.length;j++){
                if(board[j][i]==="."){
                    continue;
                }
                else if(coloumn[board[j][i]]){
                    return false;
                }
                else{
                    coloumn[board[j][i]]=1;
                }
            }
        }

        for(let i =0;i<9;i+=3){
            for(let j =0;j<9;j+=3){
                let box = new Object();
                for(let r=0;r<3;r++){
                    for(let t=0;t<3;t++ ){
                        if(board[i+r][j+t]==="."){
                            continue;
                        }
                        else if(box[board[i+r][j+t]]){
                            return false;
                        }
                        else{
                            box[board[i+r][j+t]]=1;
                        }
                    }

                }
            }
        }
        return true;
    }
}
