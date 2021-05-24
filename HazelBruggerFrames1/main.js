const trigger = document.querySelector(`#trigger`)
 const panel = document.querySelector(`#panel`)

trigger.addEventListener(`click`, function(){
    //set a class on the panel to introduce it
        panel.classList.add(`doesExist`)
       
    setTimeout(() => {
        //set a class on the panel to let it fade
        panel.classList.add(`isVisible`)
    }, 50);
        })
    
            panel.addEventListener(`click`, function(){
    //set a class on the panel
        panel.classList.remove(`isVisible`)
        setTimeout(() => {
        //set a class on the panel to let it fade
        panel.classList.remove(`doesExist`)
    }, 50);
        })
