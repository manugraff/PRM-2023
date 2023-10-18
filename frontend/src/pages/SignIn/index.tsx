import { Box, Card, CardContent, Typography, TextField, Button, LoadingButton } from "@mui/material";
import { useState } from "react";
import {useNavigate} from "react-router-dom";
import { ICredential } from "../../@types";
import { FormEvent } from "react";

function SignInPage(){

    const navigate= useNavigate();

    const [Credential, setCredential] = useState<ICredential>(
        {
            username: '',
            password: ''
        }
    );

    const [Loading, setLoading] = useState(false);

    const [messegeError, setmessegeError] = useState('');

    function handlesingin(event: FormEvent) {
       event.preventDefault();
       setLoading(true);

       try{

       }catch (e) {
        const error = e as Error;
        setmessegeError(String(error.message));
       }finally{
            setLoading(false);
        }
       }
    

    return (
        <Box id="sign-in-page">
            <form onSubmit={handlesingin}>
                <Card>
            
                <CardContent>

                    <Typography variant="h5">
                        Faça o login
                    </Typography>
                    <Typography variant="subtitle1">
                        Já tem uma conta topic?
                    </Typography>

                    <TextField label="Usuário"
                        required
                        fullWidth
                        value={Credential.username}
                        onChange={event => setCredential({...credential, username: (event.target as HTMLInputElement).value})}/>
                    <TextField label="Senha"
                        required
                        fullWidth
                        type="password"
                        onChange={event => setCredential({...credential, password: (event.target as HTMLInputElement).value})}/>
                        

                    <LoadingButton type= "submit"
                        variant="contained"
                        size="large"
                        Loading={Loading}>
                        Entrar
                    </LoadingButton>

                    <Typography variant="h5">
                        Crie uma Conta
                    </Typography>

                    <Typography variant="subtitle1">
                        Ainda não tem uma conta topic?
                    </Typography>

                    <Button type= "submit"
                        variant="outlined"
                        size="large"
                        onClick={()=>navigate('/signup') }>
                        Criar uma conta

                    </Button>

                </CardContent>

                </Card>
            </form>
        </Box>
    )
}

export default SignInPage;