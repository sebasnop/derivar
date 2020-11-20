
//Polinomio digitado por el usuario
let polynomial;

//Expresiones del polinomio ingresado separadas por "+"
let positiveTerms = [];

//Términos en orden, separados por "+" y "-"
let terms = [];
//Información de cada término en orden
let symbols = [];
let exponents = [];
let coeficients = [];

//Cantidad de términos
let termAmount;

//Información ordenada con symbols, coeficients & exponents
let ordered = [];

function derivatePolynomial(polynomial) {
    
    //Separar cada término y obtener su signo (+ o -)
    separateTerms(polynomial);

    termAmount = terms.length;

     for(i= 0; i < termAmount; i++){
        
        if (terms[i].split("x^").length == 2){

            exponents.push(parseInt(terms[i].split("x^")[1]));
            coeficients.push(parseInt(terms[i].split("x^")[0]));

        } else if (terms[i].split("x").length == 2){
            
            coeficients.push(parseInt(terms[i].split("x")[0]));
            exponents.push(1);
        
        } else {
        
            coeficients.push(parseInt(terms[i].split("x^")[0]));
            exponents.push(0);
        
        }

     }

     ordered = [symbols, coeficients, exponents];

    //Borramos todo
    polynomial = "";
    positiveTerms = [];
    terms = [];
    symbols = [];


     return ordered;
  }

  function separateTerms(polynomialFunction){

    //Expresiones separadas por "+"
    positiveTerms = polynomialFunction.split("+");

    //Evaluamos cada expresión separada por "+", para separarla por un "-" si lo tiene
    for (var i = 0; i < positiveTerms.length; i++) {
        
        //Expresiones separadas por "-"
        actualExpresion = positiveTerms[i].split("-");

        for (var u = 0; u < actualExpresion.length; u++) {
            
            //Verificamos que no se haya entregado un término vacío, de un polinomio comenzando con "-"
            if(actualExpresion[u] != ""){
                
                //Guardamos los términos separados
                terms.push(actualExpresion[u]);

                //Información de si el término es positivo o negativo
                if(u == 0){
                    //Si u=0 es porque el término fue separado antes por "+"
                    symbols.push(1);
                } else {
                    //Sino, apenas fue separado por "-"
                    symbols.push(-1);
                }
            }
         }
     }
}

