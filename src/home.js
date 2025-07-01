export default loadHomepage = function(){
    const contentDiv = document.getElementById("content");
    const children = contentDiv.childNodes;
    for(let i = children.length; i > -1; i--){
        contentDiv.removeChild(children[i])
    }
    
}