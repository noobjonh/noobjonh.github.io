
function checkwinner(arr){
    for(var row = 0;row<3;row++){
        if(arr[row][0]==arr[row][1] && arr[row][1]==arr[row][2]){
            if(arr[row][0]=='X'){return +10}
            else if(arr[row][0]=='O'){return -10}
        }
    }
    for(var col = 0;col<3;col++){
        if(arr[0][col]==arr[1][col] && arr[1][col]==arr[2][col]){
            if(arr[0][col]=='X'){return +10}
            else if(arr[0][col]=='O'){return -10}
        }
    }
    if(arr[0][0]==arr[1][1] && arr[1][1]==arr[2][2]){
        if(arr[0][0]=='X'){return +10}
        else if(arr[0][0]=='O'){return -10}
    }
    if(arr[0][2]==arr[1][1] && arr[1][1]==arr[2][0]){
        if(arr[0][2]=='X'){return +10}
        else if(arr[0][2]=='O'){return -10}
    }
    return 0
}