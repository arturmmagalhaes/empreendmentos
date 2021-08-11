import * as ACTION from '../actionTypes';

const initialState = {
    data: {},
    error: "",
    lista: [],
    cadastro_success: false,
};
  
export default function formCadastroReducer (state = initialState, action) {
    switch(action.type) {
        case ACTION.SALVAR_EMPREENDIMENTO_REQUEST:
        case ACTION.SALVAR_EMPREENDIMENTO_SUCCESS: {
            return {
                ...state,
                cadastro_success: true,
            }
        }
        case ACTION.LISTA_EMPREENDIMENTO_REQUEST:
        case ACTION.LISTA_EMPREENDIMENTO_SUCCESS:{
            return {
                ...state,
                lista: action.data
            }
        }
        case ACTION.EDITAR_EMPREENDIMENTO_SUCCESS: {
            return {
                ...state
            }
        }
        case ACTION.DELETE_REQUEST:
        case ACTION.DELETE_SUCCESS:
            return {
                ...state
            }
        case ACTION.ERROR:
            return action.error
        default:
            return {
                ...state,
            }
    }
}