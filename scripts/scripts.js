

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
    let src = e.srcElement;
    let classValue = src.getAttribute("class");
    classValue += borderValue;
    //alert(classValue);
    src.setAttribute("class", classValue);
    //alert(src.getAttribute("class"));
}
