 function valid(){
 
    function valorDoId(id) {
        return document.getElementById(id).value;
    }   
        const iname = valorDoId('iname')
        const iemail = valorDoId('iemail')
        const isenha = valorDoId('isenha')
        const isenha2 = valorDoId('isenha2')
        const icpf = valorDoId('icpf')
        
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const senhaRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        const cpfSemFormato = icpf.replace(/[.-]/g, '');

        if (iname === '') {
            alert('Insira seu nome completo.');
        } else if (iemail === '') {
            alert('Insira seu e-mail, por exemplo: exemplo@email.com');
        } else if (!emailRegex.test(iemail)) {
            alert('Insira um e-mail válido.');
        } else if(!senhaRegex.test(isenha)){
            alert('Sua senha deve conter: 8 digitos, Letra Maiúscula, Minúscula, Numero e um Caracter espercial. exemplo: SuaSenha123$')
        } else if (isenha === '') {
             alert('Insira uma senha.');
        } else if (isenha !== isenha2) {
            alert('Suas senhas não coincidem. Tente novamente.');
        }else if (cpfSemFormato.length !== 11 || /^(\d)\1{2}\.\1{3}\.\1{3}-\1{2}$/.test(icpf)) {
            alert('Insira um CPF válido.');
        }else if (!validarCPF(cpfSemFormato)){
            alert('CPF Inválido')
        }
         else {
             return confirm()
        }

        function validarCPF(cpf) {

            // Verificar se o CPF tem o tamanho adequado
            if (cpf.length !== 11) {
                return false;
            }
            // Calcular o dígito verificador
            let soma = 0;
            for (let i = 0; i < 9; i++) {
                soma += parseInt(cpf.charAt(i)) * (10 - i);
            }
            let digitoVerificador = 11 - (soma % 11);
            // Ajustar o dígito para 0 se for 10 ou 11
            if (digitoVerificador === 10 || digitoVerificador === 11) {
                digitoVerificador = 0;
            }
            // Verificar se o dígito verificador calculado é igual ao décimo dígito do CPF
            if (digitoVerificador !== parseInt(cpf.charAt(9))) {
                return false;
            }
            // CPF válido
            return true;
        }
}


document.getElementById('icpf').addEventListener('input', function (event) {
    let input = event.target;
    let value = input.value.replace(/\D/g, '');

    if (value.length > 3) {
        value = value.replace(/(\d{3})(\d)/, '$1.$2');
    }
    if (value.length > 6) {
        value = value.replace(/(\d{3})(\d)/, '$1.$2');
    }
    if (value.length > 9) {
        value = value.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
    }

    input.value = value;
})

function mostrasenha() {
    const senhaInput = document.getElementById('isenha');
    const viewButton = document.querySelector('.view');

    if (senhaInput.type === 'password') {
        senhaInput.type = 'text';
        viewButton.innerHTML = "<i class='bx bx-low-vision' ></i>";
    } else {
        senhaInput.type = 'password';
        viewButton.innerHTML = "<i class='bx bx-show'></i>";
    }
}

function mostrasenhaconfirm() {
    const senhaInput2 = document.getElementById('isenha2');
    const viewButton = document.querySelector('.view2');

    if (senhaInput2.type === 'password') {
        senhaInput2.type = 'text';
        viewButton.innerHTML = "<i class='bx bx-low-vision' ></i>";
    } else {
        senhaInput2.type = 'password';
        viewButton.innerHTML = "<i class='bx bx-show'></i>";
    }
}

function confirm(){

    function valorDoId(id) {
        return document.getElementById(id).value;
    }
    const formulario = document.querySelector('.formulario')
    const telaconfirm = document.getElementById('confirm')
    const dados = []
    const items = ['Nome', 'E-mail', 'CPF']
    const iname = valorDoId('iname')
    const iemail = valorDoId('iemail')
    const icpf = valorDoId('icpf')

    dados.push(iname, iemail, icpf)

    let i = 0 

    for(let item of dados){
        res.innerHTML += `<p>${items[i]}: ${item}</p>`
        i++
    }

    telaconfirm.style.display = 'block'
    formulario.style.display = 'none'
}

function voltar(){
    const formulario = document.querySelector('.formulario')
    const telaconfirm = document.getElementById('confirm')
    const res = document.getElementById('res')

    res.innerHTML = ''

    telaconfirm.style.display = 'none'
    formulario.style.display = 'block'
}

function confirmar(){
    const sucesso = document.getElementById('sucesso')
    const formulario = document.querySelector('.formulario')
    const telaconfirm = document.getElementById('confirm')

    telaconfirm.style.display = 'none'
    formulario.style.display = 'none'
    sucesso.style.display = 'block'
}