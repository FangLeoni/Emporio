/*Arthur Silles Fernandes 1DS2*/
/*Empório's javascript.js*/

/*DATA VALIDATION*/
    /*PHONE NUMBERS*/
        function submit() {
            if(document.dados.phonenumber.value.length < 14 || document.dados.phonenumber.value.length > 15)
            {
            alert("Preencha o campo Telefonne corretamente.");
            document.dados.tx_nome.focus();
            return false;
            }
            return true;
        }   


        // function validaCPF(cpf)
        // {
        //   var numeros, digitos, soma, i, resultado, digitos_iguais;
        //   digitos_iguais = 1;
        //   if (cpf.length < 11)
        //         return false;
        //   for (i = 0; i < cpf.length - 1; i++)
        //         if (cpf.charAt(i) != cpf.charAt(i + 1))
        //               {
        //               digitos_iguais = 0;
        //               break;
        //               }
        //   if (!digitos_iguais)
        //         {
        //         numeros = cpf.substring(0,9);
        //         digitos = cpf.substring(9);
        //         soma = 0;
        //         for (i = 10; i > 1; i--)
        //               soma += numeros.charAt(10 - i) * i;
        //         resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
        //         if (resultado != digitos.charAt(0))
        //               return false;
        //         numeros = cpf.substring(0,10);
        //         soma = 0;
        //         for (i = 11; i > 1; i--)
        //               soma += numeros.charAt(11 - i) * i;
        //         resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
        //         if (resultado != digitos.charAt(1))
        //               return false;
        //         return true;
        //         }
        //   else
        //       return false;
        // }

        function TestaCPF(strCPF) {
            var Soma;
            var Resto;
            Soma = 0;
          if (strCPF == "00000000000") return alert("CPF errado");;
             
          for (i=1; i<=9; i++) Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (11 - i);
          Resto = (Soma * 10) % 11;
           
            if ((Resto == 10) || (Resto == 11))  Resto = 0;
            if (Resto != parseInt(strCPF.substring(9, 10)) ) return alert("CPF errado");;
           
          Soma = 0;
            for (i = 1; i <= 10; i++) Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (12 - i);
            Resto = (Soma * 10) % 11;
           
            if ((Resto == 10) || (Resto == 11))  Resto = 0;
            if (Resto != parseInt(strCPF.substring(10, 11) ) ) return alert("CPF errado");;
            return true;

            
        }
        
       
        function verifPass(val){

            const senha1 = document.querySelector(".senha1");

            if(val != senha1.value){
                window.alert('Senhas diferentes')
            }

        }