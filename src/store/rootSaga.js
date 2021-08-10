import { all } from "redux-saga/effects";
import formCadastroSaga from "./formCadastro/saga";

export default function* rootSaga() {
    yield all([
        formCadastroSaga,
    ])
}  