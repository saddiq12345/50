let bhai=document.getElementById('khan')
function to(){
    const number3=parseInt(document.getElementById('Start table ').value)
    const number4=parseInt(document.getElementById('And table').value)
    const number5=parseInt(document.getElementById('Enter').value)
    bhai.innerHTML=''
    for (let index=number3; index<+ number4; index++) {
        bhai.innerHTML+= number5+ " x "+index+ " = " +index*number5+"<br>"
        
    }  
}