function validacao(cpf) {
    var cpf = valida.cpf.value
    var soma;
    var resto;
    soma = 0;

    if (typeof cpf !== "string") return false
    cpf = cpf.replace(/[\s.-]*/igm, '') /*i - ignora diferenças entre maisculas e minusculas, g- Combinação global., m-Combinação em várias linhas.*/   

  if (cpf == "00000000000" || cpf=="11111111111" || cpf=="22222222222" || cpf=="33333333333" ||
      cpf == "44444444444" || cpf=="55555555555" || cpf=="66666666666" || cpf=="77777777777" ||
      cpf == "88888888888" || cpf=="99999999999"){    
    alert("CPF inválido, digite novamente!")
    return false;
    }

  
    //Pega os primeiros 9 digitos do CPF e multiplica de 10 a 2 respectivamente
  for (i=1; i<=9; i++)   
  soma = soma + parseInt(cpf.substring(i-1, i)) * (11 - i);
    //Multiplica a soma por 10 e pega o resto da divisao por 11
  resto = (soma * 10) % 11; 
    if ((resto == 10) || (resto == 11))  
     resto = 0;
    if (resto != parseInt(cpf.substring(9, 10)) ){ /*Ele não entende uma operação de soma usando strings por isso elas são transformadas em inteiro*/
        alert("CPF inválido")
        return false;
    }
   
    //Pega os primeiros 10 digitos do CPF e multiplica de 11 a 2 respectivamente 
   soma = 0;
    for (i = 1; i <= 10; i++)
    soma = soma + parseInt(cpf.substring(i-1, i)) * (12 - i);
    resto = (soma * 10) % 11;
    if ((resto == 10) || (resto == 11)) 
    resto = 0;
    if (resto != parseInt(cpf.substring(10, 11) )){
        alert("CPF inválido")
        return false;
    }else{
        alert("CPF válido")
        return true;
    } 
}

