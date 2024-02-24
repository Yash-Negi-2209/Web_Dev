
function makeBubble(){
    var bub = "";

    for (var i=1; i<=160; i++){
        var random = Math.floor(Math.random()*10);   //Math.random ek random number deta hai between 0 and 1, usko 10 se multiply krdiya jisse between 0 and 10 dede
        bub += `<div class="bubble">${random}</div>`
    }

    // ` ` --> these are backticks, used for strings but to add anything we use ${5+5}
    // ' ' --> these are quotes, used for strings but to add anything we use +5+5

    document.querySelector("#panelbottom").innerHTML = bub;
}

function timer(){
    var dec = 60;
    var count = setInterval(function(){        //setinterval me do values dete hai, phla ek function jo krna hai, or doosra jitne time me krna hai, in millisec
        if (dec>0){
            dec--;
            document.querySelector("#time").textContent = dec;
        }
        else {
            clearInterval(count);     //agar 0 hogyi value, to clearinterval krdo, jisse wahi pe end hojae, nahi to peeche chalta rhega negative numbers me bhi, bas print nahi krega.
            document.querySelector("#panelbottom").innerHTML = "<h1>Game Over</h1>";
        }
    }, 1000);      //here 1000 = 1000 millisec = 1 sec
}

var hitrn = 0;
function getNewHit(){
    hitrn = Math.floor(Math.random()*10);
    document.querySelector("#hitnumber").innerHTML = hitrn;
}

var score = 0;
function increaseScore(){
    score += 10;
    document.querySelector("#incscore").innerHTML = score;
}

document.querySelector("#panelbottom").addEventListener("click", function(num){
    var clickednum = Number(num.target.innerHTML);
    if (clickednum == hitrn){
        increaseScore();
        makeBubble();
        getNewHit();
    }
});

makeBubble();
timer();
getNewHit();


