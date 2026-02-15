function openfaq(evt, contentName){
    const tabContent = document.getElementsByClassName("tabContent");
    for(let i = 0; i<tabContent.length;i++){
        tabContent[i].style.display = "none";
    }

    const tabLinks = document.getElementsByClassName("tabLinks");
    for(let i = 0; i<tabLinks.length;i++){
        tabLinks[i].className = tabLinks[i].className.replace("active", "");
    }

    document.getElementById(contentName).style.display = "grid";
    evt.currentTarget.className += " active";
}