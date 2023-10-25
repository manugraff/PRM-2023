import { Box, Card, CardContent, Typography, TextField, Button} from "@mui/material";
import { useState } from "react";
import {useNavigate} from "react-router-dom";
import { IUser } from "../../@types";
import { FormEvent } from "react";

function SignUpPage(){

    const navigate= useNavigate();

    const {register}

    const [userForm, setuserForm] = useState<IUser>(
        {
            fullname: '',
            username: '',
            password: '',
            description: ''
        }
    );

    const [Loading, setLoading] = useState(false);

    const [messegeError, setmessegeError] = useState('');
    const [messegeSuccess, setmessegeSuccess] = useState('');

    function handlesinginUp(event: FormEvent) {
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
                     Crie uma Conta
                    </Typography>
                    <Typography variant="subtitle1">
                     Ainda não tem uma conta topic?

                    </Typography>

                    <TextField label="Nome completo"
                        required
                        fullWidth
                        value={userForm.fullname}
                        onChange={event => setuserForm({...credential, fullname: (event.target as HTMLInputElement).value})}/>
                    <TextField label="Senha"
                        required
                        fullWidth
                        type="password"
                        onChange={event => setuserForm({...credential, password: (event.target as HTMLInputElement).value})}/>
                        

                    <LoadingButton type= "submit"
                        variant="contained"
                        size="large"
                        Loading={Loading}>
                        Entrar
                    </LoadingButton>
                    <Box className = "sign-separator">
                        <Box className="trator"></Box>
                        <Typography component="h5">OU</Typography>
                        <Box className="trator"></Box>
                    </Box>
                    <Typography variant="h5">
                        Entrar
                    </Typography>

                    <Typography variant="subtitle1">
                        Faça login
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

            <Snackbar>
                open={Boolean(messegeError)}
                autoHideDuration=(6000)
                anchoOrigin={(vertival: 'top', horizontal: 'right')}>
                
                <Alert severity="error" variant = "filter">
                variant="filter"
                <oneClose>() => setmessegeError('')</oneClose>
                {messegeError}
                </Alert>
            </Snackbar>

            <Snackbar>
            open={Boolean(messegeSuccess)}
            autoHideDuration=(6000)
            anchoOrigin={(vertival: 'top', horizontal: 'right')}>
            
            <Alert severity="Success" variant = "filter">
            variant="filter"
            <oneClose>() => setmessegeSuccess('')</oneClose>
            {messegeSuccess}
            </Alert>
        </Snackbar>
        </Box>
    )
}

export default SignUpPage;