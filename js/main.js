var cartitems = document.getElementById("cartelements");

// notifications
var notok = document.getElementById("notok");
var notno = document.getElementById("notno");
var notrem = document.getElementById("notrem");

// item1 declarations
var qte1 = document.getElementById("qte1");
const qte1p = document.getElementById("qte1p");
const qte1m = document.getElementById("qte1m");
const whishlist1 = document.getElementById("wishlist1");
const remove1 = document.getElementById("remove1");
var item1 = document.getElementById("item1");
var totalht1 = document.getElementById("totalht1");
const uprice1 = document.getElementById("uprice1");


// item2 declaration
var qte2 = document.getElementById("qte2");
const qte2p = document.getElementById("qte2p");
const qte2m = document.getElementById("qte2m");
const whishlist2 = document.getElementById("wishlist2");
const remove2 = document.getElementById("remove2");
var item2 = document.getElementById("item2");
var totalht2 = document.getElementById("totalht2");
const uprice2 = document.getElementById("uprice2");

// item3 declaration
var qte3 = document.getElementById("qte3");
const qte3p = document.getElementById("qte3p");
const qte3m = document.getElementById("qte3m");
const whishlist3 = document.getElementById("wishlist3");
const remove3 = document.getElementById("remove3");
var item3 = document.getElementById("item3");
var totalht3 = document.getElementById("totalht3");
const uprice3 = document.getElementById("uprice3");

//total declarations
var ttht1 = Number(uprice1.innerText);
var ttht2 = Number(uprice2.innerText);
var ttht3 = Number(uprice3.innerText);
var tsubtotal = document.getElementById("tsubtotal");
var ttax = document.getElementById("ttax");
var tshipping = document.getElementById("tshipping");
var ttotal = document.getElementById("ttotal");

//subtotal
var subt = ttht1+ttht2+ttht3;
tsubtotal.innerText = subt;

//tax
var tax = Math.round(subt * 0.19);
ttax.innerText = tax;

//shipping
var shipfee = Number(tshipping.innerText);

//total
var tot = subt+tax+shipfee;
ttotal.innerText = tot;

//empty cart
var emptycart = document.getElementById("emptycart");
var headings = document.getElementById("headings")



//qte1 events
qte1p.addEventListener("click", qte1up);
function qte1up(){
    if(qte1.value<20){
        qte1.value++
        
    }
    
    ttht1 = Number(uprice1.innerText) * qte1.value;
    totalht1.innerText = ttht1;

    subt = ttht1+ttht2+ttht3;
    tsubtotal.innerText = subt;

    var tax = Math.round(subt * 0.19);
    ttax.innerText = tax;
    
    tot = subt+tax+shipfee;
    ttotal.innerText = tot;
    
}

qte1m.addEventListener("click", qte1do);
function qte1do(){
    if(qte1.value>1){
        qte1.value--
    }
    ttht1 = Number(uprice1.innerText) * qte1.value;
    totalht1.innerText = ttht1;

    subt = ttht1+ttht2+ttht3;
    tsubtotal.innerText = subt;
    
    tax = Math.round(subt * 0.19);
    ttax.innerText = tax;

    tot = subt+tax+shipfee;
    ttotal.innerText = tot;
}

//wishlist1 event
whishlist1.addEventListener("click", wishdo1);
function wishdo1(){
    if(wishlist1.style.color == ""){
    wishlist1.style.color = "#f5c800";
        notrem.style.display="none"
        notno.style.display="none"
        notok.style.display="none"
        notok.offsetWidth;
        notok.style.display="block"
    }
    else {
        wishlist1.style.color = "";
        notrem.style.display="none"
        notok.style.display="none"
        notno.style.display="none"
        notno.offsetWidth;
        notno.style.display="block"
    }
   
}
//remove1 event
remove1.addEventListener('click', tran1);
function tran1(){
    item1.classList.add("fadeout");
    
    notok.style.display="none"
    notno.style.display="none"
    notrem.style.display="none"
    notrem.offsetWidth;
    notrem.style.display="block"
}

item1.addEventListener('transitionend',rem1);
function rem1(){
        cartitems.removeChild(item1);

        ttht1 = 0;

        subt = ttht1+ttht2+ttht3;
        tsubtotal.innerText = subt;

        tax = Math.round(subt * 0.19);
        ttax.innerText = tax;

        tot = subt+tax+shipfee;
        ttotal.innerText = tot;

        if(ttht1 == 0 && ttht2 == 0 && ttht3 == 0){
            tshipping.innerText = 0;
            ttotal.innerText = 0;
            emptycart.style.display="block";
            headings.style.display="none";
        }

}

qte1.addEventListener('change', cqte1);
function cqte1(){
    ttht1 = Number(uprice1.innerText) * qte1.value;
    totalht1.innerText = ttht1;

    subt = ttht1+ttht2+ttht3;
    tsubtotal.innerText = subt;

    tax = Math.round(subt * 0.19);
    ttax.innerText = tax;

    tot = subt+tax+shipfee;
    ttotal.innerText = tot;
    
}



//qte2 events

qte2p.addEventListener("click", qte2up);
function qte2up(){
    if(qte2.value<20){
        qte2.value++
        
    }
    
    ttht2 = Number(uprice2.innerText) * qte2.value;
    totalht2.innerText = ttht2;

    subt = ttht1+ttht2+ttht3;
    tsubtotal.innerText = subt;
    
    tax = Math.round(subt * 0.19);
    ttax.innerText = tax;

    tot = subt+tax+shipfee;
    ttotal.innerText = tot;
}

qte2m.addEventListener("click", qte2do);
function qte2do(){
    if(qte2.value>1){
        qte2.value--
    }
    ttht2 = Number(uprice2.innerText) * qte2.value;
    totalht2.innerText = ttht2;

    subt = ttht1+ttht2+ttht3;
    tsubtotal.innerText = subt;

    tax = Math.round(subt * 0.19);
    ttax.innerText = tax;

    tot = subt+tax+shipfee;
    ttotal.innerText = tot;
}

//wishlist2 event
whishlist2.addEventListener("click", wishdo2);
function wishdo2(){
    if(wishlist2.style.color == ""){
        wishlist2.style.color = "#f5c800";
        notrem.style.display="none"
        notno.style.display="none"
        notok.style.display="none"
        notok.offsetWidth;
        notok.style.display="block"
    }
    else {
        wishlist2.style.color = "";
        notrem.style.display="none"
        notok.style.display="none"
        notno.style.display="none"
        notno.offsetWidth;
        notno.style.display="block"
    }
   
}
//remove2 event
remove2.addEventListener('click', tran2);
function tran2(){
    item2.classList.add("fadeout");
    notok.style.display="none"
    notno.style.display="none"
    notrem.style.display="none"
    notrem.offsetWidth;
    notrem.style.display="block"
}

item2.addEventListener('transitionend',rem2);
function rem2(){
        cartitems.removeChild(item2);

        ttht2 = 0;

        subt = ttht1+ttht2+ttht3;
        tsubtotal.innerText = subt;

        tax = Math.round(subt * 0.19);
        ttax.innerText = tax;

        tot = subt+tax+shipfee;
        ttotal.innerText = tot;

        if(ttht1 == 0 && ttht2 == 0 && ttht3 == 0){
            tshipping.innerText = 0;
            ttotal.innerText = 0;
            emptycart.style.display="block";
            headings.style.display="none";
        }
}

qte2.addEventListener('change', cqte2);
function cqte2(){
    ttht2 = Number(uprice2.innerText) * qte2.value;
    totalht2.innerText = ttht2;

    subt = ttht1+ttht2+ttht3;
    tsubtotal.innerText = subt;

    tax = Math.round(subt * 0.19);
    ttax.innerText = tax;

    tot = subt+tax+shipfee;
    ttotal.innerText = tot;
}





//qte3 events

qte3p.addEventListener("click", qte3up);
function qte3up(){
    if(qte3.value<20){
        qte3.value++
        
    }
    
    ttht3 = Number(uprice3.innerText) * qte3.value;
    totalht3.innerText = ttht3;

    subt = ttht1+ttht2+ttht3;
    tsubtotal.innerText = subt;

    tax = Math.round(subt * 0.19);
    ttax.innerText = tax;

    tot = subt+tax+shipfee;
    ttotal.innerText = tot;
    
}

qte3m.addEventListener("click", qte3do);
function qte3do(){
    if(qte3.value>1){
        qte3.value--
    }
    ttht3 = Number(uprice3.innerText) * qte3.value;
    totalht3.innerText = ttht3;

    subt = ttht1+ttht2+ttht3;
    tsubtotal.innerText = subt;

    tax = Math.round(subt * 0.19);
    ttax.innerText = tax;

    tot = subt+tax+shipfee;
    ttotal.innerText = tot;
}

//wishlist3 event
whishlist3.addEventListener("click", wishdo3);
function wishdo3(){
    if(wishlist3.style.color == ""){
    wishlist3.style.color = "#f5c800";
    notrem.style.display="none"
    notno.style.display="none"
    notok.style.display="none"
    notok.offsetWidth;
    notok.style.display="block"
}
else {
    wishlist3.style.color = "";
    notrem.style.display="none"
    notok.style.display="none"
    notno.style.display="none"
    notno.offsetWidth;
    notno.style.display="block"
    }
   
}
//remove3 event
remove3.addEventListener('click', tran3);
function tran3(){
    item3.classList.add("fadeout");
    notok.style.display="none"
    notno.style.display="none"
    notrem.style.display="none"
    notrem.offsetWidth;
    notrem.style.display="block"
}

item3.addEventListener('transitionend',rem3);
function rem3(){
        cartitems.removeChild(item3);

        ttht3 = 0;
        
        subt = ttht1+ttht2+ttht3;
        tsubtotal.innerText = subt;

        tax = Math.round(subt * 0.19);
        ttax.innerText = tax;

        tot = subt+tax+shipfee;
        ttotal.innerText = tot;

        if(ttht1 == 0 && ttht2 == 0 && ttht3 == 0){
            tshipping.innerText = 0;
            ttotal.innerText = 0;
            emptycart.style.display="block";
            headings.style.display="none";
        }
}

qte3.addEventListener('change', cqte3);
function cqte3(){
    ttht3 = Number(uprice3.innerText) * qte3.value;
    totalht3.innerText = ttht3;

    subt = ttht1+ttht2+ttht3;
    tsubtotal.innerText = subt;

    tax = Math.round(subt * 0.19);
    ttax.innerText = tax;

    tot = subt+tax+shipfee;
    ttotal.innerText = tot;
}