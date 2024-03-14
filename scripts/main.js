/*function calculadora(){
    function init(){
        console.log('hi');
    }
    function suma(a,b){
        return a + b;
    }
    
    function resta(a,b){
        return a - b;
    }
    
    function multiplicar(a,b){
        return a * b;
    }
    
    function dividir(a,b){
        return a / b;
    }

    init();
    return {
        suma,
        resta,
        multiplicar,
        dividir
    }
}*/
//asignando a variable
//se llama así:  calculo.suma(1,2);
//let calculo = calculadora();



//autoejecutable y con función anónima

let calculadora = (function (){
    function init(){
        console.log('hi');
    }
    function suma(a,b){
        return a + b;
    }
    
    function resta(a,b){
        return a - b;
    }
    
    function multiplicar(a,b){
        return a * b;
    }
    
    function dividir(a,b){
        return a / b;
    }

    init();
    return {
        suma,
        resta,
        multiplicar,
        dividir
    }
})();


//funcion autoejecutable

let modulo = (function(){
    let contador = 0;

    function init(){
        console.log('hi contador');
    }
    function incrementar(){
        return contador++;
    }
    function decrementar(){
        return contador--;
    }
    function display(){
        console.log(`El valor del contador es ${contador}`);
    }
    function resetear(){
        return contador = 0;
    }
    init();
    return{
        incrementar,
        decrementar,
        display, 
        resetear
    }
})();


// lo mismo con objeto y función flecha

 let modulo2 = (function(){
    let contador = 0;
    return{
        decrementar: ()=>{
            return --contador
        },
        incrementar: () => {
            return ++contador
        },
        resetear: () => {
            return contador = 0
        }
    }
    
 })();