class CalcController{
    
    constructor(){

        this.displayCalc = document.getElementById("display")

        this.value = 0
        this.setDisplay(0)
        this.initButtonsEvents()
        this.display =[]
        
    }

    setDisplay(value){
        
        this.displayCalc.innerHTML = value
    
    }

    initButtonsEvents(){
       let buttons =  document.querySelectorAll(".btn")
       
       buttons.forEach((btn,index)=>{
      
        btn.addEventListener('click', e=>{
           
           console.log(btn)
            this.setDisplay(btn.innerHTML)
           this. getDisplay()
       })
      
    })

    }

    getDisplay(){

        var value = document.getElementById("display").innerHTML
       this.display +=value

        console.log(this.display)


    }




}
