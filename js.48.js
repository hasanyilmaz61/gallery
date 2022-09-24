let img=document.querySelectorAll("#bilder>img");
let ganzbilder=document.getElementById("ganzbilder");
let icon=document.querySelector("#klass img");
let closes=document.querySelector("#ganzbilder i");

img.forEach(element => {

    element.onclick=function()
    {
ganzbilder.style.display="flex";

let quelle=element.getAttribute("src");
icon.setAttribute("src",quelle);

    }
    
});


closes.onclick=function()
{
    ganzbilder.style.display="none";
}