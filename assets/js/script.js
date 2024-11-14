const tombola = document.getElementById('tombola');
for ( let i= 0; i< 76; i++){
    const numberDiv =document.createElement('div');
    numberDiv.innerText = i + 1;
    tombola.appendChild(numberDiv);
}
const btnEstrai = document.getElementById('estrai');
estrai.addEventlistner('click', function(){
     let extract = Math.floor(Math.random() *90) +1;
     console.log(extract);
     const celle = document.querySelectorAll('#tombola div');
     for ( let i=0; i< celle.length; i++){
        if (parseInt(celle[i].innerText)===extract){
            celle[i].classList.add('estratto');
        }
     }
})

