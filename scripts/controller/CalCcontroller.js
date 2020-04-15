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
       return(['+','X','x²','¹/x','←','÷','X','-','±'].indexOf(value)>-1)
    }

    setDisplay(value){


            this.displayCalc.innerHTML =  value
        }
    addNumber(value){

        this._valor += value
        this.setDisplay(this._valor)
   
    
    }


    addVirgula(value){
        if(this._valor.length == 0){this._valor = '0'}
        if(this._valor.indexOf('.')>0){
            console.log('tem virugla')
        }else{
            this.addNumber('.')
        }
    }

    lastOperator(){
        return(this.isOperator(this._operation[this._operation.length-1]))
    }
    lastCaracter(){
        return this._operation[this._operation.length-1]
    }
    porcent(){
        
     if(this._valor.length>0 ){
        if(this._operation.length = 2) {       
         this._operation.push(this._valor)
         this._valor = []

         let operador = this._operation[1]
         let fistNumber = this._operation[0]
         
        let porcento = (this._operation[0]*this._operation[2])/100
        
        
        this._operation = [fistNumber,operador,porcento]
        this.setDisplay(porcento)

        }
    }


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
                this.setDisplay(resultado)
                this._operation = [resultado,operador]

               }
            }

    raiz(){
        if(this._valor.length>0){
            this._operation.push(Math.sqrt((this._valor),2).toFixed(2))
            this.setDisplay(this._operation)
            this._valor= []

        }else{
            console.log('não existe valor para calcular')
        }
    


    }
    quadrado(){
        if(this._valor.length>0){
           
            this._operation.push(this.seila(this._valor))

            this.setDisplay(this._operation)
            this._valor =[]
        }else{
            console.log('não existe valor para calcular')
        }
    
    

    }
    seila(valor){
        return Math.pow(valor,2)
    }           
    
    igual(){
            if(this._valor.length>0){
            this._operation.push(this._valor)
            this._valor = []
            }else if(this.lastOperator()){
                
                var soma = eval(this._operation[0]+this._operation[1]+this._operation[0])
                soma = soma.toString()
                var operador = this._operation[1]
                this._operation = []
                
                this._operation.push(soma,operador)
                this.setDisplay(this._operation.join(''))
                this._operation = [soma,operador]
            }
             if(this._operation.length==3){
                var soma = eval(this._operation.join(''))
                soma = soma.toString()
                this._operation[0] = soma
                var operador = this._operation[1]
                this._operation[1] = operador
                this.setDisplay(soma)
                this._valor = []

                
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
    ce(){
        this._valor =[]
        this.setDisplay(0)
    }
    fracao(){
        if(this._valor.length > 0)
        
        var auxiliar = eval('1 /'+ this._valor).toFixed(4)
        this.setDisplay(auxiliar)
        this._valor = []


    }
    maisoumenos(){
        if(this._valor.length > 0){
            this._operation.push(this._valor* -1)
            this.setDisplay(this._operation)
            this._valor =  []
        }else if(this._operation.length==1){
            this._operation = this._operation[0] *-1
            this.setDisplay(this._operation)
        }
    }
    
    excBtn(value){

        switch(value){
            case 'CE':
                this.ce()
            break;
            case 'C':
            this.clearAll()
            break;
           
            case 'x²':
                this.quadrado()

            break;    
            case '←':
                this.clearEntry()
            break;
            case '¹/x':

                this.fracao()
            break;
            case '±':
            this.maisoumenos()
            break;
            
            case '/':
            case '*':
            case '+':
            case '-':
                this.addOperator(value)
            break;
            case '√':
                this.raiz()
            break;
            case '%':
                this.porcent()
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
