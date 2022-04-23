
var form = document.getElementById("userDataForm");
function handleForm(event) { event.preventDefault(); } 
form.addEventListener('submit', handleForm);





let thumbImgs = [];
for(i=0; i<6;i++){
    thumbImgs[i] = document.getElementById("id-gallery"+i);
}


function setGalleryImage(e){
    const borderValue = " border border-primary border-5";
    for(i=0; i<6;i++){
        let classValue = thumbImgs[i].getAttribute("class");
        //alert(classValue);
        classValue = classValue.replace(borderValue, "");
        //alert(classValue);
        thumbImgs[i].setAttribute("class", classValue);
    }
    if(!e)
        e = window.event;
    let srcElem = e.srcElement;
    let classValue = srcElem.getAttribute("class");
    classValue += borderValue;
    //alert(classValue);
    srcElem.setAttribute("class", classValue);
    //alert(src.getAttribute("class"));
    mainImgElement = document.getElementById("id-gallery-selected");
    mainImageName = srcElem.getAttribute("src");
    mainImageName = mainImageName.replace(" Thumb","");
    mainImgElement.setAttribute("src", mainImageName);
}




function displayUserData(){
    console.log("displayUserData is called");
    var userName = document.getElementsByName("userName")[0].value;
    var userEmail = document.getElementsByName("userEmail")[0].value;
    document.getElementById("userDataListing").style.display = "none";
    document.getElementById("userDataDisplay").innerHTML = "Hi there " + userName + ". Thank you for your message. We will be in touch with you (via email "+userEmail+") shortly.";
}
