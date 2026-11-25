window.addEventListener('DOMContentLoaded', async function() {
    

    const emailLogado = localStorage.getItem('emailUsuarioLogado');

    
    const spanNome = document.getElementById('nome-admin');
    const avatar = document.getElementById('avatar-admin');

    
    if (!emailLogado) {
        alert("Você precisa fazer login primeiro!");
        window.location.href = "index.html";
        return;
    }

    try {
       
        const resposta = await fetch(`http://127.0.0.1:8000/usuarios/${emailLogado}`);
        
        if (resposta.ok) {
            const dadosUsuario = await resposta.json();
            
            
            spanNome.textContent = dadosUsuario.nome;
            
            
            const iniciais = dadosUsuario.nome
                .split(' ')
                .map(palavra => palavra[0])
                .join('')
                .substring(0, 2)
                .toUpperCase();
                
            avatar.textContent = iniciais;

        } else {
          
            console.error("Usuário não encontrado no banco.");
            spanNome.textContent = "Administrador";
            avatar.textContent = "AD";
        }
    } catch (erro) {
        
        console.error("Erro de conexão com o servidor:", erro);
        spanNome.textContent = "Servidor Offline";
        avatar.textContent = "!";
    }
});


const listaTabela = document.getElementById('lista-pacientes');



async function carregarPacientes() {
    try {
        const resposta = await fetch('http://127.0.0.1:8000/pacientes');
        const pacientes = await resposta.json();
        
        listaTabela.innerHTML = ''; 

        if (pacientes.length === 0) {
            listaTabela.innerHTML = '<tr><td colspan="6" style="padding: 15px; text-align: center;">Nenhum paciente cadastrado.</td></tr>';
            return;
        }

        
        pacientes.forEach(function(paciente) {
            const linha = document.createElement('tr');
            linha.style.borderBottom = '1px solid #eee';

        
            const dataFormatada = paciente.dataNascimento.split('-').reverse().join('/');

            linha.innerHTML = `
                <td style="padding: 15px;">${paciente.nome}</td>
                <td style="padding: 15px;">${paciente.cpf}</td>
                <td style="padding: 15px;">${dataFormatada}</td>
                <td style="padding: 15px;">${paciente.telefone || '-'}</td>
                <td style="padding: 15px;">${paciente.endereco || '-'}
                <td style="padding: 15px; text-align: center;">
                    <button onclick="prepararEdicao(${paciente.codigo})" style="color: #1D655C; border: none; background: none; cursor: pointer; margin-right: 10px;" title="Editar">
                        <span class="material-symbols-outlined">edit</span>
                    </button>
                    <button onclick="deletarPaciente(${paciente.codigo})" style="color: #d9534f; border: none; background: none; cursor: pointer;" title="Excluir">
                        <span class="material-symbols-outlined">delete</span>
                    </button>
                </td>
            `;
            listaTabela.appendChild(linha);
        });
    } catch (erro) {
        console.error("Erro ao listar:", erro);
        alert("Erro ao carregar a lista de pacientes.");
    }
}


const modalPaciente = document.getElementById('modal-paciente');
const formPaciente = document.getElementById('form-paciente');
const btnNovoPaciente = document.getElementById('btn-novo-paciente');
const btnFecharModalPaciente = document.getElementById('btn-fechar-modal-paciente');


btnNovoPaciente.addEventListener('click', function() {
    formPaciente.reset();
    document.getElementById('id-paciente-edicao').value = ''; // Limpa o ID
    document.getElementById('titulo-modal-paciente').textContent = 'Novo Paciente';
    modalPaciente.classList.remove('escondido');
});


btnFecharModalPaciente.addEventListener('click', function() {
    modalPaciente.classList.add('escondido');
});

formPaciente.addEventListener('submit', async function(e) {
    e.preventDefault();

    const idEdicao = document.getElementById('id-paciente-edicao').value;
    
    //pacote de dados
    const dados = {
        nome: document.getElementById('p-nome').value,
        cpf: document.getElementById('p-cpf').value,
        dataNascimento: document.getElementById('p-dataNascimento').value,
        telefone: document.getElementById('p-telefone').value,
        endereco: document.getElementById('p-endereco').value
    };

    try {
        const url = idEdicao ? `http://127.0.0.1:8000/pacientes/${idEdicao}` : 'http://127.0.0.1:8000/pacientes';
        const metodo = idEdicao ? 'PUT' : 'POST';

        const resposta = await fetch(url, {
            method: metodo,
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(dados)
        });

        if (resposta.ok) {
            alert('Paciente salvo com sucesso!');
            modalPaciente.classList.add('escondido');
            carregarPacientes(); // Atualiza a tabela na tela
        } else {
            const erro = await resposta.json();
            alert('Erro: ' + erro.detail);
        }
    } catch (erro) {
        alert('Erro de conexão com o servidor.');
    }
});

window.prepararEdicao = async function(id) {
    try {
       
        const resposta = await fetch(`http://127.0.0.1:8000/pacientes/${id}`);
        const paciente = await resposta.json();


        document.getElementById('id-paciente-edicao').value = paciente.codigo;
        document.getElementById('p-nome').value = paciente.nome;
        document.getElementById('p-cpf').value = paciente.cpf;
        document.getElementById('p-dataNascimento').value = paciente.dataNascimento;
        document.getElementById('p-telefone').value = paciente.telefone || '';
        document.getElementById('p-endereco').value = paciente.endereco || '';

        document.getElementById('titulo-modal-paciente').textContent = 'Editar Paciente';
        modalPaciente.classList.remove('escondido');
    } catch (erro) {
        alert("Erro ao buscar dados do paciente.");
    }
};


window.deletarPaciente = async function(id) {
    
    if (!confirm("Tem certeza que deseja excluir este paciente?")) return;

    try {
        const resposta = await fetch(`http://127.0.0.1:8000/pacientes/${id}`, {
            method: 'DELETE'
        });

        if (resposta.ok) {
            alert("Paciente excluído!");
            carregarPacientes(); // atualiza a tabela
        } else {
            const erro = await resposta.json();
            alert("Erro ao excluir: " + erro.detail);
        }
    } catch (erro) {
        alert("Erro de conexão.");
    }
};

//carregar a tabela quando a página abrir
carregarPacientes();