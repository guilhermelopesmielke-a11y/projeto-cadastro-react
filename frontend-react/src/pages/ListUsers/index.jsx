import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import api from "../../services/api"
import { Button } from "../../components/button/style"
import Trash from '../../assets/trash (1).svg'
import {
    Background,
    ListContainer,
    Header,
    Title,
    Subtitle,
    Table,
    TableHead,
    TableRow,
    TableHeader,
    TableBody,
    TableData,
    TrashIcon,
    DeleteButton
} from "./styles"

function ListUsers() {
    const [users, setUsers] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        async function getUsers() {
            const { data } = await api.get('/usuarios')
            setUsers(data)
        }
        getUsers()
    }, [])

    async function deleteUsers(id) {
        await api.delete(`/usuarios/${id}`)

        // Atualiza lista após deletar
        setUsers(prev => prev.filter(user => user.id !== id))
    }

    return (
        <Background>

            <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                width: '100%'
            }}>

                <ListContainer>

                    <Header>
                        <Title>Lista de Usuários</Title>
                        <Subtitle>Visualize todos os usuários cadastrados no sistema</Subtitle>
                    </Header>

                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableHeader>ID</TableHeader>
                                <TableHeader>Nome</TableHeader>
                                <TableHeader>Idade</TableHeader>
                                <TableHeader>E-mail</TableHeader>
                                <TableHeader>Ações</TableHeader>
                            </TableRow>
                        </TableHead>

                        <TableBody>
                            {users.map((user) => (
                                <TableRow key={user.id}>
                                    <TableData>{user.id}</TableData>
                                    <TableData>{user.name}</TableData>
                                    <TableData>{user.age}</TableData>
                                    <TableData>{user.email}</TableData>

                                    <TableData>
                                        <DeleteButton onClick={() => deleteUsers(user.id)}>
                                            <TrashIcon src={Trash} alt="Excluir usuário" />
                                        </DeleteButton>
                                    </TableData>

                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>

                </ListContainer>

                <div style={{ marginTop: '25px' }}>
                    <Button $variant="primary" onClick={() => navigate('/')}>
                        Voltar
                    </Button>
                </div>

            </div>

        </Background>
    )
}

export default ListUsers
