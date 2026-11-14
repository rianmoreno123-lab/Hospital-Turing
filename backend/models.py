from datetime import date
from typing import Optional
from pydantic import BaseModel, Field

class PacienteSchema(BaseModel):
    nome: str = Field(..., max_length=100)
    cpf: str = Field(..., min_length=11, max_length=11)
    dataNascimento: date
    telefone: Optional[str] = Field(None, max_length=15)
    endereco: Optional[str] = Field(None, max_length=200)

class PacienteResponse(PacienteSchema):
    codigo: int

    class Config:
        from_attributes = True