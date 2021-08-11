import * as ACTION from '../actionTypes'

export function listEmpreendimentosRequest() {
    return {
        type: ACTION.LISTA_EMPREENDIMENTO_REQUEST,
    }
}

export function listEmpreendimentosSuccess(data) {
    return {
        type: ACTION.LISTA_EMPREENDIMENTO_SUCCESS,
        data
    }
}

export function salvarEmpreendimento(data) {
    return {
        type: ACTION.SALVAR_EMPREENDIMENTO_REQUEST,
        data
    }
}

export function salvarEmpreendimentoSuccess(data) {
    return {
        type: ACTION.SALVAR_EMPREENDIMENTO_SUCCESS,
        data
    }
}

export function editarEmpreendimentoRequest(data) {
    return {
        type: ACTION.EDITAR_EMPREENDIMENTO_REQUEST,
        id: data.id, data
    }
}

export function editarEmpreendimentoSuccess(data) {
    return {
        type: ACTION.EDITAR_EMPREENDIMENTO_SUCCESS,
        data
    }
}

export function deletarRequest(id) {
    return{
        type: ACTION.DELETE_REQUEST,
        id
    }
}

export function deletarSuccess() {
    return {
        type: ACTION.DELETE_SUCCESS
    }
}

export function preparaEditarRequest() {
    return {
        type: ACTION.PREPARAR_EDITAR_REQUEST,
    }
}

export function preparaEditarSuccess(data) {
    {
        return {
            type: ACTION.PREPARAR_EDITAR_SUCCESS,
            data
        }
    }
}

export function error(e) {
    return {
        type: ACTION.ERROR,
    }
}