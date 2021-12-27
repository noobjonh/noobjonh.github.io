var width = 300
var translateA = 50
var translateB = 100
var rotateA = 45
var rotateB = 315
var line = document.querySelector('.horizontal')
function drawLine(arr){
    if(findPosition(arr)==1){
        line.style.setProperty('--width',width)
        line.style.setProperty('--translate',translateA)
    }
    if(findPosition(arr)==2){
        line.style.setProperty('--width',width)
        line.style.setProperty('--translate',translateA*3)
    }
    if(findPosition(arr)==3){
        line.style.setProperty('--width',width)
        line.style.setProperty('--translate',translateA*5)
    }
    if(findPosition(arr)==4){
        line.style.setProperty('--width',width)
        line.style.setProperty('--translate',translateA*3)
        line.style.setProperty('--rotate',90)
        line.style.setProperty('--translateV',-100)
    }
    if(findPosition(arr)==5){
        line.style.setProperty('--width',width)
        line.style.setProperty('--translate',translateA*3)
        line.style.setProperty('--rotate',90)
        line.style.setProperty('--translateV',0)
    }
    if(findPosition(arr)==6){
        line.style.setProperty('--width',width)
        line.style.setProperty('--translate',translateA*3)
        line.style.setProperty('--rotate',90)
        line.style.setProperty('--translateV',100)
    }
    if(findPosition(arr)==7){
        line.style.setProperty('--width',width)
        line.style.setProperty('--translate',translateA*3)
        line.style.setProperty('--rotate',45)
    }
    if(findPosition(arr)==8){
        line.style.setProperty('--width',width)
        line.style.setProperty('--translate',translateA*3)
        line.style.setProperty('--rotate',315)
    }

}

function findPosition(arr){
    if(arr[0][0]==arr[0][1] && arr[0][1]==arr[0][2]){
        if(arr[0][0]=='X' || arr[0][0]=='O')
        return 1
    }
    if(arr[1][0]==arr[1][1] && arr[1][1]==arr[1][2]){
        if(arr[1][0]=='X' || arr[1][0]=='O')        
        return 2
    }
    if(arr[2][0]==arr[2][1] && arr[2][1]==arr[2][2]){
        if(arr[2][0]=='X' || arr[2][0]=='O')        
        return 3
    }
    if(arr[0][0]==arr[1][0] && arr[1][0]==arr[2][0]){
        if(arr[0][0]=='X' || arr[0][0]=='O')        
        return 4
    }
    if(arr[0][1]==arr[1][1] && arr[1][1]==arr[2][1]){
        if(arr[0][1]=='X' || arr[0][1]=='O')  
        return 5
    }
    if(arr[0][2]==arr[1][2] && arr[1][2]==arr[2][2]){
        if(arr[0][2]=='X' || arr[0][2]=='O')  
        return 6
    }
    if(arr[0][0]==arr[1][1] && arr[1][1]==arr[2][2]){
        if(arr[0][0]=='X' || arr[0][0]=='O')  
        return 7
    }
    if(arr[0][2]==arr[1][1] && arr[1][1]==arr[2][0]){
        if(arr[0][2]=='X' || arr[0][2]=='O')  
        return 8
    }
    return 0
}