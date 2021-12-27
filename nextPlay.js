class Move{
    constructor(){
        let row,col;
    }
}
function areMovesAvail(arr){
    for(var i = 0;i<3;i++){
        for(var ii = 0;ii<3;ii++){
            if(arr[i][ii]=='')return true
            if(arr[i][ii]=='')break
        }
    }
    return false
}



function nextPlay(arr){
    var bestVal = posInfinity
    var bestPlay = new Move()
    bestPlay.row = -1
    bestPlay.col = -1
    if(areMovesAvail(arr)){
        for(var i = 0;i<3;i++){
            for(var ii = 0;ii<3;ii++){
                if(arr[i][ii]==''){
                    arr[i][ii]='O'
                    let moveVal = minimax(arr,0,true,negInfinity,posInfinity)
                    arr[i][ii]=''

                    if(moveVal<bestVal){
                        bestPlay.row = i
                        bestPlay.col = ii
                        bestVal = moveVal
                    }
                }
            }
        }   
    }
    return bestPlay;
}




