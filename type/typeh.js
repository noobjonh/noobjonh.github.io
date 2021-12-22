var headW = 'WELCOME... '
var typeInterval = 300
var typeDelay = (typeInterval*headW.length)+400
var redoType = (typeDelay*2)
function typeGrande(){
    var head = document.querySelector('h1')
    var write = ''
    var headE = headW
    var numE = headW.length-1
    var num = 0;
    const typeAll = () => {
        function typeA(){
            if(write.length<headW.length){
                write += headW[num]
                num++
                head.innerText = write
                setTimeout(typeA,typeInterval)
            }
        }
        typeA()
        function typeB(){
            head.innerText = ''
            if(headE.length>0){
                headE = headW.substring(0,numE)
                numE--
                head.innerText = headE
                //console.log(headE)
                setTimeout(typeB,typeInterval)
            }
        }
        setTimeout(typeB,typeDelay)
    }
    typeAll()
    setTimeout(typeGrande,redoType)
}
typeGrande()