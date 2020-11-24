
//Polinomio digitado por el usuario
let polynomial;

//Numerador n y denominador d para derivar cociente n/d
let n;
let d;

console.log("DERIVA TU POLINOMIO CON:");
console.log("derivatePolynomial(a+bx+cx^2+...+kx^n);");
console.log("");
console.log("DERIVA TU COCIENTE DE POLINOMIOS CON:");
console.log("derivateQuotient(numerador, denominador);");


// Derivar Polinomio
function derivatePolynomial(polynomial) {
    
    //Separar cada término
    const terms = separateTerms(polynomial);
    const termAmount = terms.length;

    //Separar el coeficiente y el exponente dentro de cada término
    const info = coeficientsAndExponents(terms);
    const coeficients = info[0];
    const exponents = info[1];
    
    //Para guardar el polinomio derivado
    let derivedPolynomial = "";

    //Para no dejar un "+" en un primer término positivo
    let firstTerm = true;

     for(i= 0; i < termAmount; i++){

        const derivedCoeficient = (coeficients[i]*exponents[i]);
        const derivedExponent = exponents[i]-1;

        if (derivedCoeficient != 0){
            
        const term = writeTerm(derivedCoeficient, derivedExponent, firstTerm);
     
        derivedPolynomial += term;

        firstTerm = false;

        }


    }

    return derivedPolynomial;

}

//Separa los términos
function separateTerms(polynomial){

    let terms = [];

    //Expresiones separadas por "+"
    const positiveExpresion = polynomial.split("+");

    //Evaluamos cada expresión separada por "+", para separarla también por un "-" si lo tiene
    for (var i = 0; i < positiveExpresion.length; i++) {
        
        //Expresiones separadas por "-"
        const expresion = positiveExpresion[i].split("-");

        for (var u = 0; u < expresion.length; u++) {
            
            //Verificamos que no se haya entregado un término vacío o nulo
            if(expresion[u] != "" && expresion[u] != "0"){

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

    return terms;

}

//Separa la infomación de los términos, entre coeficientes y exponentes.
function coeficientsAndExponents(terms){

    let exponents = [];
    let coeficients = [];
    
    const termAmount = terms.length;

    for(i= 0; i < termAmount; i++){
        
        if (terms[i].includes("x^")){

            const coeficient = parseInt(terms[i].split("x^")[0]);
            const exponent = parseInt(terms[i].split("x^")[1]);

            if (isNaN(coeficient)){
                coeficients.push(1);
            } else {
                coeficients.push(coeficient);
            }

            exponents.push(exponent);

        } else if (terms[i].includes("x")){

            let coeficient = parseInt(terms[i].split("x")[0]);
            
            if (isNaN(coeficient)){
                coeficients.push(1);
            } else {
                coeficients.push(coeficient);
            }

            exponents.push(1);
        
        } else {
        
            coeficients.push(parseInt(terms[i].split("x^")[0]));
            exponents.push(0);
        
        }

     }

     const info = [coeficients, exponents];
     return info;

}

// Derivar Cociente n/d siendo n y d polinomios n(x) y d(x)
function derivateQuotient(n, d){

    // Calcular el denominador final, que es (d(x))^2
    const dFinal = multiplyPolynomials(d, d);

    //Calcular el numerador final, que es [n'(x) * d(x)] - [d'(x) * n(x)]
    const nDerived = derivatePolynomial(n);
    const dDerived = derivatePolynomial(d);

    //Cociente derivado
    let derivedQuotient = dFinal;

}

function squarePolynomial (polynomial){

    //Separar cada término
    const terms = separateTerms(polynomial);
    const termAmount = terms.length;

    //Separar el coeficiente y el exponente dentro de cada término
    const info = coeficientsAndExponents(terms);
    const coeficients = info[0];
    const exponents = info[1];

    //Para guardar el polinomio elevado al cuadrado
    let squaredPolynomial = "";

    let firstTerm = true;

    for(i= 0; i < termAmount; i++){

        const squaredCoeficient = Math.pow(coeficients[i], 2);
        const squaredExponent = exponents[i]*2;

        if (squaredCoeficient != 0){

            const term = writeTerm(squaredCoeficient, squaredExponent, firstTerm);

            squaredPolynomial += term;
    
            firstTerm = false;

        }

    }

    return squaredPolynomial;

}

//Multiplicar dos polinomios
function multiplyPolynomials (p, q) {

    const pTerms = separateTerms(p);
    const pTermAmount = pTerms.length;
    const pInfo = coeficientsAndExponents(pTerms);

    const qTerms = separateTerms(q);
    const qTermAmount = qTerms.length;
    const qInfo = coeficientsAndExponents(qTerms);

    let firstTerm = true;

    let result = "";

    for (i = 0; i < pTermAmount; i++) {

        const pCoeficient = pInfo[0][i];
        const pExponent = pInfo[1][i];

        for (u = 0; u < qTermAmount; u++) {

            const qCoeficient = qInfo[0][u];
            const qExponent = qInfo[1][u];

            const coeficient = pCoeficient*qCoeficient;
            const exponent = pExponent+qExponent;

            if (coeficient != 0){

                const term = writeTerm (coeficient, exponent, firstTerm);
    
                result += term;
        
                firstTerm = false;
    
            }
    
        }

    }

    return result;

}

//Escribir un término
function writeTerm(coeficient, exponent, firstTerm){

    //Para guardar el término
    let term = "";

            if (coeficient > 0 && firstTerm == false) {
                term += "+";
            };

            switch (exponent) {
                case 0:
                    term += coeficient.toString();
                  break;
                case 1:
                    term += coeficient+"x";
                  break;
                default:
                    term += coeficient+"x^"+exponent;
            }

    return term;

}
