import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import FormCadastro from "../components/form/index";
import ListaEmpreendimentos from "../components/lista/index";
import MenuPrincipal from '../components/menu/index';

const Routes = () => {
    return (
      <BrowserRouter>
        <Switch>
            <Route exact path="/form" component={FormCadastro} >
              <MenuPrincipal />
              <FormCadastro />
            </Route>
            <Route exact path="/form/:id&:nome&:telefone&:atributos&:coordenadaX&:coordenadaY" component={FormCadastro} >
              <MenuPrincipal />
              <FormCadastro />
            </Route>
            <Route exact path="/lista" component={ListaEmpreendimentos} > 
              <MenuPrincipal />
              <ListaEmpreendimentos />
            </Route>
        </Switch>
      </BrowserRouter>
  );
};

export default Routes;