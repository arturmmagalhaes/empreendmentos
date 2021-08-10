import * as ACTION from '../actionTypes'

export function listEmpreendimentosRequest() {
    return {
        type: ACTION.LISTA_EMPREENDIMENTO_REQUEST,
    }
}

export function listEmpreendimentosSuccess(list) {
    return {
        type: ACTION.LISTA_EMPREENDIMENTO_SUCCESS,
        list
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

export function error(e) {
    return {
        type: ACTION.ERROR,
    }
}