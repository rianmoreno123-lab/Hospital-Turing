from fastapi import FastAPI, HTTPException, status 
from fastapi.middleware.cors import CORSMiddleware
import mysql.connector
from backend.database import conectarBanco
from backend.models import PacienteSchema, PacienteResponse

app = FastAPI(title="Hospital-Turing - CRUD Paciente", version="1.0")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  
    allow_credentials=True,
    allow_methods=["*"],  
    allow_headers=["*"], 
)

@app.post("/pacientes", response_model=PacienteResponse, status_code=status.HTTP_201_CREATED)
def cadastrarPaciente(paciente: PacienteSchema):
    conexao = conectarBanco()
    cursor = conexao.cursor()
    try:
        sql = """
            INSERT INTO Paciente (nome, cpf, dataNascimento, telefone, endereco) 
            VALUES (%s, %s, %s, %s, %s)
        """
        valores = (
            paciente.nome,
            paciente.cpf,
            paciente.dataNascimento,
            paciente.telefone,
            paciente.endereco
        )
        cursor.execute(sql, valores)
        conexao.commit()
        
        codigoGerado = cursor.lastrowid
        return {**paciente.model_dump(), "codigo": codigoGerado}
        
    except mysql.connector.Error as erro:
        conexao.rollback()
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail=f"Erro ao cadastrar paciente: {erro}"
        )
    finally:
        cursor.close()
        conexao.close()

@app.get("/pacientes", response_model=List[PacienteResponse])
def listarPacientes():
    conexao = conectarBanco()
    cursor = conexao.cursor(dictionary=True)
    try:
        cursor.execute("SELECT codigo, nome, cpf, dataNascimento, telefone, endereco FROM Paciente")
        return cursor.fetchall()
    finally:
        cursor.close()
        conexao.close()

@app.get("/pacientes/{codigoPaciente}", response_model=PacienteResponse)
def consultarPacientePorId(codigoPaciente: int):
    conexao = conectarBanco()
    cursor = conexao.cursor(dictionary=True)
    try:
        sql = "SELECT codigo, nome, cpf, dataNascimento, telefone, endereco FROM Paciente WHERE codigo = %s"
        cursor.execute(sql, (codigoPaciente,))
        resultado = cursor.fetchone()
        
        if not resultado:
            raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Paciente não encontrado.")
        return resultado
    finally:
        cursor.close()
        conexao.close()

@app.put("/pacientes/{codigoPaciente}", response_model=PacienteResponse)
def alterarPaciente(codigoPaciente: int, paciente: PacienteSchema):
    conexao = conectarBanco()
    cursor = conexao.cursor(dictionary=True)
    try:
        cursor.execute("SELECT codigo FROM Paciente WHERE codigo = %s", (codigoPaciente,))
        if not cursor.fetchone():
            raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Paciente não encontrado.")

        sql = """
            UPDATE Paciente 
            SET nome = %s, cpf = %s, dataNascimento = %s, telefone = %s, endereco = %s 
            WHERE codigo = %s
        """
        valores = (
            paciente.nome,
            paciente.cpf,
            paciente.dataNascimento,
            paciente.telefone,
            paciente.endereco,
            codigoPaciente
        )
        cursor.execute(sql, valores)
        conexao.commit()
        
        return {**paciente.model_dump(), "codigo": codigoPaciente}
    except mysql.connector.Error as erro:
        conexao.rollback()
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail=f"Erro ao atualizar: {erro}")
    finally:
        cursor.close()
        conexao.close()

@app.delete("/pacientes/{codigoPaciente}", status_code=status.HTTP_204_NO_CONTENT)
def excluirPaciente(codigoPaciente: int):
    conexao = conectarBanco()
    cursor = conexao.cursor()
    try:
        cursor.execute("SELECT codigo FROM Paciente WHERE codigo = %s", (codigoPaciente,))
        if not cursor.fetchone():
            raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Paciente não encontrado.")

        cursor.execute("DELETE FROM Paciente WHERE codigo = %s", (codigoPaciente,))
        conexao.commit()
        return None
    finally:
        cursor.close()
        conexao.close()