window.addEventListener('load',function(){
    mode.style.opacity=1
})
var cell = [
    [document.querySelector('.cell1'),
    document.querySelector('.cell2'),
    document.querySelector('.cell3')],
    [document.querySelector('.cell4'),
    document.querySelector('.cell5'),
    document.querySelector('.cell6')],
    [document.querySelector('.cell7'),
    document.querySelector('.cell8'),
    document.querySelector('.cell9')]
    ]
var winnerDisplay = document.querySelector('.winn')

var mode = document.querySelector('.intro') 
var modeA = document.querySelector('.comp')
var modeH = document.querySelector('.human')
var determiner
function foo(){
    mode.remove()
}

modeA.addEventListener('click',function(){
    foo()
    determiner = 0
})
modeH.addEventListener('click',function(){
    foo()
    determiner = 1
})

function player(part){
    if(determiner==0){
        playerA(part)
    }
    else if(determiner==1){
        playerH(part)
    }
}

var human = 'X'
var ai = 'O'
//addEventListener for each cell----------------------------------------------------------------------------------------------------------------
cell[0][0].addEventListener('click',() => {
    player('1,1')
},{once:true})
cell[0][1].addEventListener('click',() => {
    player('1,2')
},{once:true})
cell[0][2].addEventListener('click',() => {
    player('1,3')
},{once:true})
cell[1][0].addEventListener('click',() => {
    player('2,1')
},{once:true})
cell[1][1].addEventListener('click',() => {
    player('2,2')
},{once:true})
cell[1][2].addEventListener('click',() => {
    player('2,3')
},{once:true})
cell[2][0].addEventListener('click',() => {
    player('3,1')
},{once:true})

cell[2][1].addEventListener('click',() => {
    player('3,2')
},{once:true})

cell[2][2].addEventListener('click',() => {
    player('3,3')
},{once:true})
//------------------------------------------------------------------------------------------------------------------------------------

// ------------------------------------------------------------------


//end game------------------------------------------------------------------
function endgame(arr){
    if(checkwinner(arr)==+10 || checkwinner(arr)==-10 ){
        cell[0][0].style.setProperty('--pointer-events','none')
        cell[0][1].style.setProperty('--pointer-events','none')
        cell[0][2].style.setProperty('--pointer-events','none')
        cell[1][0].style.setProperty('--pointer-events','none')
        cell[1][1].style.setProperty('--pointer-events','none')
        cell[1][2].style.setProperty('--pointer-events','none')
        cell[2][0].style.setProperty('--pointer-events','none')
        cell[2][1].style.setProperty('--pointer-events','none')
        cell[2][2].style.setProperty('--pointer-events','none')
    }
}
//--------------------------------------------------------------------------



