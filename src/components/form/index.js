import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Mapa from "./Mapa";
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { salvarEmpreendimento, preparaEditarRequest, editarEmpreendimentoRequest } from "../../store/formCadastro/action";
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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

  const params = useParams();
  const dispatch = useDispatch();
  const classes = useStyles();
  const [nome, setNome] = useState('');
  const [atributos, setAtributos] = useState('');
  const [telefone, setTelefone] = useState('');
  const [coordenadaX, setCoordenadaX] = useState('');
  const [coordenadaY, setCoordenadaY] = useState('');
  const reduce = useSelector(store => store.formCadastroReducer)
console.log(reduce)

  useEffect(() => {
    if(params.id){
      setNome(params.nome)
      setAtributos(params.atributos)
      setTelefone(params.telefone)
      setCoordenadaX(params.coordenadaX)
      setCoordenadaY(params.coordenadaY)
    } else {
        setNome("")
        setAtributos("")
        setTelefone("")
        setCoordenadaX("")
        setCoordenadaY("")
    }
  }, []);

  const enviarDados = () => {
    if(params.id){
      dispatch(editarEmpreendimentoRequest({
        id: params.id, nome, atributos, telefone, coordenadaX, coordenadaY
      }))
    } else {
      dispatch(salvarEmpreendimento({
        nome, atributos, telefone, coordenadaX, coordenadaY
      }))
    }
    if(reduce.cadastro_success){
      notify("SUCCESS")
    } else {
      notify("ERROR")
    }

    setNome("")
    setAtributos("")
    setTelefone("")
    setCoordenadaX("")
    setCoordenadaY("")

  }

  const notify = (message) => {
    if(message === "WAIT"){
      toast("AGUARDE !")
    } else if("SUCCESS") {
      toast.success("Sucesso no Cadastro !", {
        position: toast.POSITION.TOP_CENTER
      })
    } else {
      toast.error("Erro no Cadastro !", {
        position: toast.POSITION.TOP_CENTER
      })
    }
  }

  return (<>
    <FormControl className={clsx(classes.margin, classes.textField)} >
      <InputLabel htmlFor="nome">Nome do Empreendimento</InputLabel>
      <Input id="nome" aria-describedby="my-helper-text" value={nome} onChange={(e) => setNome(e.target.value)} />
    </FormControl>
    <FormControl className={clsx(classes.margin, classes.textField)} >
      <InputLabel htmlFor="atributos">Atributos</InputLabel>
      <Input id="atributos" aria-describedby="my-helper-text" value={atributos} onChange={(e) => setAtributos(e.target.value)} />
    </FormControl>
    <FormControl className={clsx(classes.margin, classes.textField)}>
      <InputLabel htmlFor="telefone">Telefone</InputLabel>
      <Input id="telefone" aria-describedby="my-helper-text" value={telefone} onChange={(e) => setTelefone(e.target.value)} />
    </FormControl>
    <FormControl className={clsx(classes.margin, classes.textField)}>
      <InputLabel htmlFor="coordenada X">Coordenadas</InputLabel>
      <Input id="coordenada-x" aria-describedby="my-helper-text" value={coordenadaX} onChange={(e) => setCoordenadaX(e.target.value)} />
    </FormControl>
    <FormControl className={clsx(classes.margin, classes.textField)}>
      <InputLabel htmlFor="coordenada Y">Coordenadas</InputLabel>
      <Input id="coordenada-y" aria-describedby="my-helper-text" value={coordenadaY} onChange={(e) => setCoordenadaY(e.target.value)} />
    </FormControl>
    <FormControl className={clsx(classes.marginButton, classes.textField)} >
      <Button variant="contained" color="primary" onClick={enviarDados}>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        />
          Cadastrar
        <ToastContainer />
      </Button>
    </FormControl>
    <Divider style={{ marginTop: "10px", marginBottom: "10px" }} />
    <div style={{ border: '1px solid', width: '100%',height: '50%', position: 'fixed !important' }}>
      {params.id && <Mapa coordenadaX={params.coordenadaX} coordenadaY={params.coordenadaY} />}
    </div>
  </>)
}