
//This part of code is a temporary fix to prevent the page
//from reloading when userDataForm is submitted
var form = document.getElementById("userDataForm");
function handleForm(event) { event.preventDefault(); } 
form.addEventListener('submit', handleForm);

//Populate an array of image elements
//with the thumbnails in the html doc
let thumbImgs = [];
for(i=0; i<6;i++){
    thumbImgs[i] = document.getElementById("id-gallery"+i);
}



//This function sets the main gallery image to be the
//image selected in the thumbnail. It also highlights
//the selected thumbnail using a bootstrap css border
//This func is called by clicking on any of the thumbnail img's
function setGalleryImage(e){
    const borderValue = " border border-primary border-5";
    //Loop through all thumbnail img's and remove any border highlight
    for(i=0; i<6;i++){
        let classValue = thumbImgs[i].getAttribute("class");
        //alert(classValue);
        classValue = classValue.replace(borderValue, "");
        //alert(classValue);
        thumbImgs[i].setAttribute("class", classValue);
    }
    //Select the element that fired the click event
    if(!e)
        e = window.event;
    let srcElem = e.srcElement;
    //Get the class values for the clicked img
    let classValue = srcElem.getAttribute("class");
    //Add the bootstrap css border to the existing class value
    classValue += borderValue;
    //alert(classValue);
    srcElem.setAttribute("class", classValue);
    //alert(src.getAttribute("class"));
    //Now update the main image to be the selected thumbnail image
    mainImgElement = document.getElementById("id-gallery-selected");
    mainImageName = srcElem.getAttribute("src");
    mainImageName = mainImageName.replace(" Thumb","");
    mainImgElement.setAttribute("src", mainImageName);
}



//This is a function that provides feedback to the user
//that the contact form has been submitted.
function displayUserData(){
    console.log("displayUserData is called");
    //get the user name and email address entered by the user 
    var userName = document.getElementsByName("userName")[0].value;
    var userEmail = document.getElementsByName("userEmail")[0].value;
    //Hide the contact form input fields
    document.getElementById("userDataListing").style.display = "none";
    //Display a confirmation text to the user
    document.getElementById("userDataDisplay").innerHTML = "Hi there " + userName + ". Thank you for your message. We will be in touch with you (via email "+userEmail+") shortly.";
}
