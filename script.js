function expandBoxes(){
    let allBoxes = document.querySelectorAll(".boxes") ;
    let lastActiveBox ;
    if(document.getElementById("defaultActiveBox")){
        lastActiveBox = document.getElementById("defaultActiveBox") ;
        let radioBtn = lastActiveBox.querySelector(".radioBtn") ;
        radioBtn.classList.add("isClicked"); 
    }
    allBoxes.forEach((box) => {
         box.addEventListener("click" , () => {
              if(lastActiveBox != null && lastActiveBox != undefined){
                  lastActiveBox.classList.remove("active");
                  let radioBtn = lastActiveBox.querySelector(".radioBtn") ;
                  radioBtn.classList.remove("isClicked");
              }

              box.classList.add("active") ;
              let radioBtn = box.querySelector(".radioBtn") ;
              radioBtn.classList.add("isClicked");
              lastActiveBox = box ;
         })
    })
}

expandBoxes();