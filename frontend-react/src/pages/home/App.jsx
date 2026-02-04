import { useRef,useState } from 'react'
import  Button  from '../../components/button'
import { Background, DivInputs, Header, Input, Label, Paragraph, RegistrationScreen, RegistrationUsers, Title } from './styles'
import api from '../../services/api'
import { useNavigate } from 'react-router-dom'

function App() {

  const navigate = useNavigate()
  const inputName = useRef()
  const inputAge = useRef()
  const inputEmail = useRef()
  const [message,setMessage] = useState("")

  async function RegisterNewUsers() {
    await api.post('/usuarios',{
      name:inputName.current.value,
      age:parseInt(inputAge.current.value),
      email:inputEmail.current.value,
    })

    inputName.current.value=""
    inputAge.current.value=""
    inputEmail.current.value=""

    setMessage("Usuário cadastrado com sucesso!")

    setTimeout(() => {
      setMessage("")
    }, 2500)
  }

  return (
    <Background>
      <RegistrationScreen>
        <Header>
          <Title>Cadastrar Novo Usuário</Title>
          <Paragraph>Preencha as informações abaixo para adicionar um novo usuário ao sistema</Paragraph>
        </Header>
        <RegistrationUsers>
          <DivInputs>
            {message && <p style={{textAlign:'center', color:'#8de942'}}>{message}</p>}
            <Label>
              Nome<span> *</span>
              <Input type='text' placeholder='Nome do Usuário' ref={inputName}></Input>
            </Label>
            <Label>
              Idade<span> *</span>
              <Input type='number' placeholder='Idade do Usuário' ref={inputAge}></Input>
            </Label>
            <Label>
              E-mail<span> *</span>
              <Input type='email' placeholder='E-mail do Usuário' ref={inputEmail}></Input>
            </Label>
          </DivInputs>

        <div style={{display:'flex',gap: '16px',marginTop: '32px'}}>
          <Button $variant='primary' type='button' onClick={RegisterNewUsers} >Cadastrar Usuário</Button>
          <Button $variant='secundary' type='button' onClick={()=>navigate('/lista-usuarios')} >Ver Usuários Cadastrados</Button>
        </div>
      </RegistrationUsers>
    </RegistrationScreen>
    </Background >
  )
}

export default App
