//logica pra fazer de escolha de perfil//
const botoesPerfil = document.querySelectorAll('.perfil');

botoesPerfil.forEach(function(botao) {
    botao.addEventListener('click', function() {
        
        botoesPerfil.forEach(function(b) {
            b.classList.remove('ativo');
        });
        
        //coloca como escolhido apenas no botão que foi clicado
        botao.classList.add('ativo');
    });
});


const formLogin = document.querySelector('form'); //formulário de login

formLogin.addEventListener('submit', function(evento) {
    evento.preventDefault(); 

    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;

    const botaoSelecionado = document.querySelector('.perfil.ativo');
    const perfilEscolhido = botaoSelecionado.getAttribute('data-perfil');

    if (email === '' || senha === '') {
        alert('Por favor, preencha o e-mail e a senha!');
        return; 
    }

    fetch('http://127.0.0.1:8000/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email, senha: senha, cargo: perfilEscolhido })
    })
    .then(function(resposta) {
        if (!resposta.ok) {
            return resposta.json().then(function(erro) {
                alert(erro.detail);
            });
        }
        localStorage.setItem('emailUsuarioLogado', email);
        const destinos = {
            administrador: 'admin.html',
            paciente: 'paciente.html',
            profissional: 'profissional.html',
            atendente: 'atendente.html'
        };
        window.location.href = destinos[perfilEscolhido];
    })
    .catch(function() {
        alert('Não foi possível conectar com o servidor');
    });
});


// codificação para cadastrar paciente da tela inicial 

const botaoAbrirCadastro = document.querySelector('.link-ajuda a'); 
const modalCadastro = document.getElementById('modal-cadastro');
const botaoCancelar = document.getElementById('botao-fechar-modal');
const formularioPaciente = document.getElementById('form-cadastro-paciente');

// se clicar em "Cadastre-se como paciente" abre a janela
botaoAbrirCadastro.addEventListener('click', function(evento) {
    evento.preventDefault(); 
    modalCadastro.classList.remove('escondido'); 
});

// se clicar em cancelar fecha a janela 
botaoCancelar.addEventListener('click', function() {
    modalCadastro.classList.add('escondido'); 
    formularioPaciente.reset(); 
});

// se clicar em cadastrar submete os dados
formularioPaciente.addEventListener('submit', function(evento) {
    evento.preventDefault(); 

    const dadosDoPaciente = {
        nome: document.getElementById('nome').value,
        cpf: document.getElementById('cpf').value,
        dataNascimento: document.getElementById('dataNascimento').value,
        telefone: document.getElementById('telefone').value,
        endereco: document.getElementById('endereco').value
    };

    fetch('http://127.0.0.1:8000/pacientes', {
        method: 'POST', 
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dadosDoPaciente) 
    })
    .then(function(resposta) {
        if (resposta.ok) {
            alert('Paciente cadastrado com sucesso no banco de dados!');
            
           
            formularioPaciente.reset();
            modalCadastro.classList.add('escondido');
            
        } else { 
            resposta.json().then(function(erro) {
                alert('Ops, deu erro: ' + erro.detail);
            });
        }
    })
    .catch(function(erro) {
        console.error('Erro na comunicação:', erro);
        alert('Não foi possível conectar com o servidor');
    });
});