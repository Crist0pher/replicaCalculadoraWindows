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
            this.displayCalc.innerHTML =  value
        }
    addNumber(value){

        this._valor += value
        this.setDisplay(this._operation.join('') + this._valor)
   
    
    }

    addVirgula(value){
        if(this._valor.length == 0){this._valor = '0'}
        if(this._valor.indexOf(',')>0){
            console.log('tem virugla')
        }else{
            this.addNumber(',')
        }
    }

    lastOperator(){
        return(this.isOperator(this._operation[this._operation.length-1]))
    }
    addOperator(value){
            
        
            if(this._valor.length > 0){
                this._operation.push(this._valor)
            }else{
                this._operation.push(0)
            }
            
            if(this.lastOperator()){
                this._operation[this._operation.length-1] = value}else{this._operation.push(value)
                }

            this._valor = []
            this.setDisplay(this._operation.join(''))
           
            if(this._operation.length>3){
                let operador = this._operation.pop()
                this._operation.pop
                let resultado = eval(this._operation.join(''))
                this._operation = [resultado,operador]
                this.setDisplay(this._operation.join(''))
               }
            }
               
    
    igual(){
            if(this._valor.length>0){
            this._operation.push(this._valor)
            this._valor = []
            }else if(this.lastOperator()){
                var operador = this.isOperator[1]
                var soma = eval(this._operation[0]+this._operation[1]+this._operation[0])
                soma = soma.toString()
                var operador = this._operation[1]
                var valor = this._operation[0]
                this._operation = []
                this._operation.push(soma,operador,valor)
                this.setDisplay(this._operation.join(''))

            }
             if(this._operation.length==3){
                var soma = eval(this._operation.join(''))
                soma = soma.toString()
                this._operation[0] = soma
                var operador = this._operation[1]
                this._operation[1] = operador
                this.setDisplay(this._operation.join(''))
            }


    }


    clearEntry(){
        var ajusta = this._operation.join('')
        if(this._valor.length == 0){
                this.setDisplay(ajusta)
        }else{
        var reduz = (this._valor.split(''))
        reduz.pop()
        this._valor = reduz.join('')
        
        this.setDisplay(ajusta + this._valor)
    }
    }
    clearAll(){
        this._valor = []
        this._operation = []
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
            case '/':
            case '*':
            case '+':
            case '-':
            case '±':
                this.addOperator(value)
            break;
            case ',':
                this.addVirgula(value)
            break;
            case '=':
            this.igual()
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
