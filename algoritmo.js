
//Polinomio digitado por el usuario
let polynomial;

//Términos en orden, separados por "+" y "-"
let terms = [];
//Información de cada término en orden
let exponents = [];
let coeficients = [];

//Arreglo de información del polinomio derivado
let derivedPolynomial = "Tu polinomio es ";

//Cantidad de términos
let termAmount;


function derivatePolynomial(polynomial) {
    
    //Separar cada término
    separateTerms(polynomial);

    //Separar el coeficiente y el exponente dentro de cada término
    coeficientsAndExponents(terms);

     for(i= 0; i < termAmount; i++){

        let derivedCoeficient = (coeficients[i]*exponents[i]);
        let derivedExponent = exponents[i]-1;

        if (derivedCoeficient != 0){

            switch (derivedExponent) {
                case 0:
                    derivedPolynomial += derivedCoeficient.toString();
                  break;
                case 1:
                    derivedPolynomial += derivedCoeficient+"x";
                  break;
                default:
                    derivedPolynomial += derivedCoeficient+"x^"+derivedExponent;
              }

        }

     }

    return derivedPolynomial;

  }

//Separa los términos
function separateTerms(polynomialFunction){

    //Expresiones del polinomio ingresado separadas por "+"
    let positiveExpresion = [];

    //Expresiones separadas por "+"
    positiveExpresion = polynomialFunction.split("+");

    //Evaluamos cada expresión separada por "+", para separarla también por un "-" si lo tiene
    for (var i = 0; i < positiveExpresion.length; i++) {
        
        //Expresiones separadas por "-"
        expresion = positiveExpresion[i].split("-");

        for (var u = 0; u < expresion.length; u++) {
            
            //Verificamos que no se haya entregado un término vacío 
            if(expresion[u] != ""){

                //Información de si el término es positivo o negativo
                if(u == 0){
                    //Si u=0 es porque el término fue separado antes por "+"
                    terms.push(expresion[u]);

                } else {
                    //Sino, apenas fue separado por "-"
                    terms.push("-"+expresion[u]);
                }
            }
        }
    }
}

//Separa la infomación de los términos, entre coeficientes y exponentes.
function coeficientsAndExponents(terms){
    
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

}
