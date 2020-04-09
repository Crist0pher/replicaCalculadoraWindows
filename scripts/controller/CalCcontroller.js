class CalcController{
    
    constructor(){

        this.displayCalc = document.getElementById("display")

        this._operation = []
        this.value = 0
        this.setDisplay(0)
        this.initButtonsEvents()
        this.display =[]
        this.excBtn()
    }

    setDisplay(value){
        
        this.displayCalc.innerHTML = value
    
    }
    addOperation(value){

        this._operation.push(value)
        console.log(this._operation)
    }

    excBtn(value){

        switch(value){
            case 'ce':

            break;
            case 'c':

            break;
            case '%':

            break;
            case 'x²':

            break;
            case '¹/x':

            break;
            case '←':

            break;
            case '÷':

            break;
            case 'X':

            break;
            case '-':

            break;
            case '+':

            break;
            case '±':

            break;
            case ',':

            break;
            case '=':

            break;
            case '1':
            case '2':
            case '3':                
            case '4':
            case '5':
            case '6':
            case '7':
            case '8':
            case '9':
            case '0':
                this.addOperation(value)
            break;

            default:
            break;

        }
        this.setDisplay(this._operation)


    }
    addEventListenerAll(element, events, fn){

            events.split(' ').forEach(event =>{

                element.addEventListener(event,fn, false)

            })
                
            
    }

    initButtonsEvents(){
       let buttons =  document.querySelectorAll(".btn")
       
       buttons.forEach((btn, index)=>{
      
        this.addEventListenerAll(btn,'click drag', e=>{
           
           console.log(btn.innerHTML)
           this.excBtn(btn.innerHTML)
           })
      
    })

    }

    getDisplay(display){

        var value = document.getElementById("display").innerHTML
        var display 
        display += value

        console.log(display)
        this.setDisplay(display)

    }




}
