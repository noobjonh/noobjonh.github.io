var track1 = ['','','']
var track2 = ['','',''] 
var track3 = ['','','']
var track = [track1,track2,track3]
var X = '<span class=\'x\'>X</span>'
var O = '<span class=\'o\'>O</span>'
var count = 0
var number = 0
function playerA(part){
    number+=2
    var first = parseInt(part[0])-1
    var sec = parseInt(part[2])-1
    function write(){
        var shape1,shape2 
            shape1 = X
            track[first][sec] = 'X'
        cell[first][sec].innerHTML=shape1
        cell[first][sec].style.pointerEvents = 'none'

        if(areMovesAvail(track)){
            if(checkwinner(track)==0){
            var next = nextPlay(track)
            shape2 = O
            track[next.row][next.col] = 'O' 
            cell[next.row][next.col].innerHTML=shape2 
            cell[next.row][next.col].style.pointerEvents = 'none'
            }  
        }

        count++
    }
    write()
    //-----------------------
    endgame(track)
 //-----------------------------------------------
    if(checkwinner(track)== +10){
        winnerDisplay.innerText = 'X WINS'
        restart5()
    }
    else if (checkwinner(track)== -10){
        winnerDisplay.innerText = 'O WINS'
        restart5()
    }
    
    else if (checkwinner(track)== 0 && number >= 9){
        winnerDisplay.innerText = 'TIE'
        restart5()
    }
//-----------------------------------------------
drawLine(track)
//----------------------------------------------------    
    
}


function restart5(){
    function countD(){
        location.reload()
    }
    setTimeout(countD,1500)
}


function playerH(part){
    number++
    var first = parseInt(part[0])-1
    var sec = parseInt(part[2])-1
    function write(){
        var shape 
        if(count%2==0){
            shape = X
            track[first][sec] = 'X'
        }
        if(count%2!=0){

            shape = O
            track[first][sec] = 'O'        
        }
        cell[first][sec].innerHTML=shape
        cell[first][sec].style.pointerEvents = 'none'
        count++
    }
    
    write()
    //-----------------------
    endgame(track)
 //-----------------------------------------------
    if(checkwinner(track)== +10){
        winnerDisplay.innerText = 'X WINS'
        restart5()
    }
    else if (checkwinner(track)== -10){
        winnerDisplay.innerText = 'O WINS'
        restart5()
    }
    
    else if (checkwinner(track)== 0 && number == 9){
        winnerDisplay.innerText = 'TIE'
        restart5()
    }
//-----------------------------------------------
drawLine(track)
//----------------------------------------------------    
    
}

