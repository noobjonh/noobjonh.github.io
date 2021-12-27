var negInfinity = -10000
var posInfinity =  10000

function minimax(arr,depth,isMax,alpha,beta){
    let score = checkwinner(arr)
    if(score==10){
        return score-depth
    }
    if(score==-10){
        return score+depth
    }
    if(!areMovesAvail(arr)){
        return 0
    }

    if(isMax){
        let best = negInfinity
        for(var i = 0;i<3;i++){
            for(var ii = 0;ii<3;ii++){
                if(arr[i][ii]==''){
                    arr[i][ii]='X'
                    best = Math.max(best,minimax(arr,depth+1,false))
                    alpha=Math.max(best,alpha)
                    arr[i][ii]=''
                    if(beta<=alpha)break
                }
            }
        }
        return best
    }
    else{
        let best = posInfinity
        for(var i = 0;i<3;i++){
            for(var ii = 0;ii<3;ii++){
                if(arr[i][ii]==''){
                    arr[i][ii]='O'
                    best = Math.min(best,minimax(arr,depth+1,true))
                    beta=Math.min(beta,best)
                    arr[i][ii]=''
                    if(beta<=alpha)break
                }
            }
        }
        return best
    }
}



