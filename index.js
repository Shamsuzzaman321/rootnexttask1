function show_alert(text_1) {
    alert (text_1);
}


function zoom_s_icon(id){
    document.getElementById(id).style.width="30px";
}
function zoom_s_icon_remove(id){
    document.getElementById(id).style.width="24px";
}
function change_lang(){
    alert("Sorry. Language changing not available yet");
}

function search_box(){
    var search_item=document.getElementById('search_box').value;
    alert("Sorry. we cant find "+search_item);
}

function font_size_plus(e_id){
    document.getElementById(e_id).style.fontSize="large";
    document.getElementById(e_id).style.backgroundColor="#7cf47c";
}
function font_size_minus(e_id){
    document.getElementById(e_id).style.fontSize="medium";
    document.getElementById(e_id).style.backgroundColor="unset";
}

window.onerror=function (line1) {
    alert(line1 );
}

var i=0;
var img_list=[];
var time=3;

img_list[0]="data\\cover_0.jpg";
img_list[1]="data\\cover_1.jpg";
img_list[2]="data\\cover_2.jpg";
img_list[3]="data\\cover_3.jpg";

function change_cover(){
    setTimeout("",time);
    document.getElementById("cover_img").src=img_list[i];
    if (i<img_list.length-1){
        i++;
    }
    else{
        i=0
    }
    dis_navi();
    setTimeout("change_cover()",time*1000);
    
}
function dis_navi(){
    let w = window.innerWidth;

    document.getElementById("search_box").style.width="70%";
    if (w<750){
        document.getElementById("navi_bar").style.position="unset";
        document.getElementById("space").style.padding="1px";
    }
    else{
        document.getElementById("navi_bar").style.position="fixed";
        document.getElementById("space").style.padding="40px";
    }
}

/* zoom item images */
function zoom_img(id,x){
    if (id=="t5"){
        if (x=="30"){
            document.getElementById("t1").style.width=10;
        }
        document.getElementById("t1").style.width=20;
    }
    document.getElementById(id).style.width=x;
}

/* open popup box when user click item */
function open_popup(item_name,item_price){
    document.getElementById("popup_item").style.transform="translate(-50%,-50%) scale(1)";
    document.getElementById("overlay").style.opacity=1;
    document.getElementById("overlay").style.pointerEvents=("all");
    document.getElementById("popup_item_titile").innerText=item_name;
    document.getElementById("popup_item_price").innerText=item_price;

}
function close_popup(){
    document.getElementById("popup_item").style.transform="translate(-50%,-50%) scale(0)";
    document.getElementById("overlay").style.opacity=0;
    document.getElementById("overlay").style.pointerEvents=("none");
}

/* Cart item counting  and handel popup box buttons*/
var cart_item_count=0;

function add2cart(){
    var qty= document.getElementById("qty").value;
    if (qty>0){
        close_popup();
        cart_item_count=cart_item_count+1;
        document.getElementById("cart").innerText=cart_item_count;
    }
    else{
        alert("Quntity must be grater than 0")
    }
    
}
function buynow(){
    var qty= document.getElementById("qty").value;
    if (qty>0){
        close_popup();
    }
    else{
        alert("Quntity must be grater than 0")
    }
}