import React, { useState } from 'react';

import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Mapa from "./Mapa";
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { salvarEmpreendimento } from "../../store/formCadastro/action";
import { useDispatch } from 'react-redux';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  margin: {
    margin: theme.spacing(1),
  },
  withoutLabel: {
    marginTop: theme.spacing(3),
  },
  textField: {
    width: '25ch',
  },
  marginButton: {
    marginTop: theme.spacing(3),
  }
}));

export default function FormCadastro() {

  const dispatch = useDispatch();
  const classes = useStyles();
  const [nome, setNome] = useState('');
  const [atributos, setAtributos] = useState('');
  const [telefone, setTelefone] = useState('');
  const [coordenadaX, setCoordenadaX] = useState('');
  const [coordenadaY, setCoordenadaY] = useState('');


  return (<>
    <FormControl className={clsx(classes.margin, classes.textField)} >
      <InputLabel htmlFor="nome">Nome do Empreendimento</InputLabel>
      <Input id="nome" aria-describedby="my-helper-text" onChange={(e) => setNome(e.target.value)} />
    </FormControl>
    <FormControl className={clsx(classes.margin, classes.textField)} >
      <InputLabel htmlFor="atributos">Atributos</InputLabel>
      <Input id="atributos" aria-describedby="my-helper-text" onChange={(e) => setAtributos(e.target.value)} />
    </FormControl>
    <FormControl className={clsx(classes.margin, classes.textField)}>
      <InputLabel htmlFor="telefone">Telefone</InputLabel>
      <Input id="telefone" aria-describedby="my-helper-text" onChange={(e) => setTelefone(e.target.value)} />
    </FormControl>
    <FormControl className={clsx(classes.margin, classes.textField)}>
      <InputLabel htmlFor="coordenada X">Coordenadas</InputLabel>
      <Input id="coordenada-x" aria-describedby="my-helper-text" onChange={(e) => setCoordenadaX(e.target.value)} />
    </FormControl>
    <FormControl className={clsx(classes.margin, classes.textField)}>
      <InputLabel htmlFor="coordenada Y">Coordenadas</InputLabel>
      <Input id="coordenada-y" aria-describedby="my-helper-text" onChange={(e) => setCoordenadaY(e.target.value)} />
    </FormControl>
    <FormControl className={clsx(classes.marginButton, classes.textField)} >
      <Button variant="contained" color="primary" onClick={() => dispatch(salvarEmpreendimento({
        nome, atributos, telefone, coordenadaX, coordenadaY
      }))}>
        Cadastrar
      </Button>
    </FormControl>
    <Divider style={{ marginTop: "10px", marginBottom: "10px" }} />
    <div style={{ border: '1px solid', width: '100%', position: 'fixed !important' }}>
      <Mapa />
    </div>
  </>)
}