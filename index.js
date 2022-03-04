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