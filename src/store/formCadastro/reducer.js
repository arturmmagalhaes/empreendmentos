import * as ACTION from '../actionTypes';

const initialState = {
    data: {},
    error: "",
    lista: [],
};
  
export default function formCadastroReducer (state = initialState, action) {
    switch(action.type) {
        case ACTION.SALVAR_EMPREENDIMENTO_REQUEST:
        case ACTION.SALVAR_EMPREENDIMENTO_SUCCESS: {
            return {
                ...state,
            }
        }
        case ACTION.LISTA_EMPREENDIMENTO_REQUEST:
        case ACTION.LISTA_EMPREENDIMENTO_SUCCESS:{
            return {
                ...state,
                lista: action.lista
            }
        }
        case ACTION.ERROR:
            return action.error
        default:
            return {
                ...state,
            }
    }
}