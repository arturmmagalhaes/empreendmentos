import { call, put, all, takeLatest } from "redux-saga/effects";
import {
    error,
    salvarEmpreendimentoSuccess,
    listEmpreendimentosSuccess,
} from "./action";
import * as ACTION from "../actionTypes";
import {ServiceFormCadastro} from "../../services/serviceFormCadastro";

function* listar() {
  try {
      //CHAMADA API
      const lista = yield call(ServiceFormCadastro.listar);

      //CHAMADA SUCCESS
      yield put(listEmpreendimentosSuccess(lista));
  
    } catch (e) {
      //ERROR
      yield put(error(e.message));
    }
}

function* salvar( {data} ) {
    try {
        //CHAMADA API
        yield call(ServiceFormCadastro.salvar, data);

        //CHAMADA SUCCESS
        yield put(salvarEmpreendimentoSuccess());
    
      } catch (e) {
        //ERROR
        yield put(error(e.message));
      }
}

export default all([
  takeLatest(ACTION.SALVAR_EMPREENDIMENTO_REQUEST, salvar),
  takeLatest(ACTION.LISTA_EMPREENDIMENTO_REQUEST, salvar),
])
  