import axios from "axios";

const api = axios.create({
    baseURL: `localhost:8080/empreendimento`,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    }
  });
  
export const ServiceFormCadastro = {
    salvar: (data) => {
      return api.post("/insertemp/", {...data})
    }, 
    listar: () => {
      return api.get("/");
    },
    editar: (id, data) => {
      return api.put(`/update/${id}`, {...data})
    },
    deletar: (id) => {
      return api.delete(`/${id}`)
    }
}