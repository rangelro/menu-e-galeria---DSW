
function menuExpande(){
    const menuConteudo = document.getElementById('menuConteudo');
    const menuBotao = document.getElementById('menuBotao');

    const expandido = menuConteudo.classList.toggle('visivel');

}

function abrirModal(src){
    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('modalImg');
    modal.style.display = 'flex';
    modalImg.src = src;
}

function fecharModal(){
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
}

document.getElementById('cpf').addEventListener('input',function(e){
    var valor = e.target.value;
    console.log(valor.length)
    
    valor = valor.substring(0,14);
    
    var cpfPattern =   valor.replace(/\D/g,'')
                            .replace(/(\d{3})(\d)/,'$1.$2')
                            .replace(/(\d{3})(\d)/,'$1.$2')
                            .replace(/(\d{3})(\d{1,2})$/,'$1-$2')

    e.target.value = cpfPattern;
});

document.getElementById('telefone').addEventListener('input',function(e){
    var valor = e.target.value;
    console.log(valor.length)
    
    valor = valor.substring(0,14);
    
    var telefonePattern =  valor.replace(/\D/g,'')
                                .replace(/(\d{2})(\d)/,'($1) $2')
                                .replace(/(\d{5})(\d{4})$/,'$1-$2')

    e.target.value = telefonePattern;
});

document.getElementById('formulario').addEventListener('submit', function(e) {
    e.preventDefault();
    const cpf = document.getElementById('cpf').value.trim();
    const telefone = document.getElementById('telefone').value.trim();
    

    const cpfRegex = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
    const telefoneRegex = /^\(\d{2}\) \d{5}-\d{4}$/;

    let erros = [];

    if (!cpfRegex.test(cpf)) {
        erros.push('CPF inválido.');
    
    }
    if (!telefoneRegex.test(telefone)) {
        erros.push('Telefone inválido.');
    }

    if (erros.length > 0) {
        alert('Erro nos dados, verifique os dados digitados!');
    } else {
        alert('Formulário enviado com sucesso!');
    }

});