
function Multiplication() {
    document.getElementById("form").addEventListener("submit", function(event) {
    event.preventDefault();
    let a = parseFloat(document.getElementById('a').value);
    let b = parseFloat(document.getElementById('b').value);
    // A ajouter plus tard
    //  let c = parseFloat(document.getElementById('c').value);
    
    if (!isNaN(a) && !isNaN(b)) {
        let resultat = a * b
        document.getElementById('rs').innerText = 'Le résultat est : ' + resultat;
        a =document.getElementById('a').value='';
        b =document.getElementById('b').value='';
    }
    // A ajouter plus tard
    // else if (!isNaN(a) && !isNaN(b) && !isNaN(c)) {
    //     let resultat = a * b * c;

    // document.getElementById('rs').innerText = 'Le résultat est : ' + resultat;
    // a =document.getElementById('a').value='';
    // b =document.getElementById('b').value='';
    // c =document.getElementById('c').value='';
    // }


});
}




function Division() {
    document.getElementById("form").addEventListener("submit", function(event) {
     event.preventDefault();
    let a = parseFloat(document.getElementById('a').value);
    let b = parseFloat(document.getElementById('b').value);
    
    if (!isNaN(a) && !isNaN(b)) {
        let resultat = a / b
        document.getElementById('rs').innerText = 'Le résultat est : ' + resultat;
        a =document.getElementById('a').value='';
        b =document.getElementById('b').value='';
     
    }
});   
}


   
function Addition() {
    document.getElementById("form").addEventListener("submit", function(event) {
    event.preventDefault();
    let a = parseFloat(document.getElementById('a').value);
    let b = parseFloat(document.getElementById('b').value);
    // A ajouter plus tard
    // let c = parseFloat(document.getElementById('c').value);
    
    if (!isNaN(a) && !isNaN(b)) {
        let resultat = a + b
        document.getElementById('rs').innerText = 'Le résultat est : ' + resultat;
        a =document.getElementById('a').value='';
        b =document.getElementById('b').value='';
    }
    // A ajouter plus tard
    // else if (!isNaN(a) && !isNaN(b) && !isNaN(c)) {
    //     let resultat = a + b + c;

    // document.getElementById('rs').innerText = 'Le résultat est : ' + resultat;
    // a =document.getElementById('a').value='';
    // b =document.getElementById('b').value='';
    // c =document.getElementById('c').value='';
    // }

   
}) 
}

    

function Soustraction() {
    document.getElementById('form').addEventListener('submit',function(event){
    event.preventDefault();
    let a = parseFloat(document.getElementById('a').value);
    let b = parseFloat(document.getElementById('b').value);
    
    if (!isNaN(a) && !isNaN(b)) {
       let resultat = a - b
       document.getElementById('rs').innerText = 'Le résultat est : ' + resultat;   
       a =document.getElementById('a').value='';
       b =document.getElementById('b').value='';
    }
})   
}

