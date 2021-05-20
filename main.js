var Sarray=[];
function Submit(){
    var Name1=document.getElementById("S1").value;
    var Name2=document.getElementById("S2").value;
    var Name3=document.getElementById("S3").value;
    var Name4=document.getElementById("S4").value;
    var Name5=document.getElementById("S5").value;
    Sarray.push(Name1);
    Sarray.push(Name2);
    Sarray.push(Name3);
    Sarray.push(Name4);
    Sarray.push(Name5);
    document.getElementById("display_name").innerHTML=Sarray;
    document.getElementById("sort_button").style.display="inline-block";
    document.getElementById("submit_button").style.display="none";
}
function Sorting(){
    Sarray.sort();
    document.getElementById("display_name").innerHTML=Sarray; 
}    