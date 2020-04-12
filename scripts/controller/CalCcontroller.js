class CalcController{
    
    constructor(){

        this.displayCalc = document.getElementById("display")

        this._valor =[]
        this._operation = []
        this.value = 0
        
        this.initButtonsEvents()
        this.display =[]
        this.excBtn()

    }

    isOperator(value){
       return(['+','X','%','x²','¹/x','←','÷','X','-','±'].indexOf(value)>-1)
    }

    setDisplay(value){
            this.displayCalc.innerHTML = value
        }
    addNumber(value){

        this._valor += value
        this.setDisplay(this._valor)

    
    }

    addOperator(value){

        if(this.isOperator(value) == true){
            this._operation.push(this._valor)
            this._valor = []
            this._operation.push(value)
            if(this._operation.length>3){
                let operador = this._operation.pop()
                this._operation.pop
                let resultado = eval(this._operation.join(''))
                this._operation = [resultado,operador]
                this.setDisplay(this._operation.join(''))
        }

    }
    }


    clearEntry(){
        
        var reduz = (this._valor.split(''))
        reduz.pop()
        this._valor = reduz.join('')
        this.setDisplay()
        
        
    }
    clearAll(){
        this._operation = [0]
        this.setDisplay(this._operation) 
    }
    
    excBtn(value){

        switch(value){
            case 'CE':
            this.clearEntry()
            break;
            case 'C':
            this.clearAll()
            break;
            case '%':
            case 'x²':
            case '¹/x':
            case '←':
            case '÷':
            case 'X':
            case '+':
            case '-':
            case '±':
                this.addOperator(value)
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
                this.addNumber(value)
            break;

            default:
            break;

        }
        


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
           

           this.excBtn(btn.innerHTML)
           })
      
    })

    }

   
    




}
