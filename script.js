//Scroll to Top Button
const topButton = document.createElement("button");
topButton.textContent="Top";
topButton.styleposition="fixed;"
topButton.stylebottom="20px";
topButton.style.right="20px";
topButton.style.padding="10px";
topButton.style.backgroundColor="#4CAF50";
topButton.style.color="white";
topButton.style.border="none";
topButton.style.cursor="pointer";
topButton.style.display="none";

document.body.appendChild(topButton);

window.addEventListener("scroll",()=>{
    if(window.scrollY>200){
        topButton.style.display="none";
    } else{
        topButton.style.display="none";
    }
});

topButton.addEventListener("click",()=>{
    window.scrollTo({top:0,behavior:"smooth"})
});