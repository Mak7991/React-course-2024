import React, { useState } from 'react';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { useForm } from '../../Utils/helper';


export default function SignUp() {
    const [emailTxt, setEmailTxt] = useState('');
    const [pswdTxt, setPswdTxt] = useState('');
    const [firstnameTxt, setFirstnameTxt] = useState('')
    const [lastnameTxt, setLastnameTxt] = useState('')
    const { form, setForm } = useForm({
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    });



    const handleChange = e => {
        if (e.target.name === 'firstName' && !e.target.value.length) {
            setFirstnameTxt('firstName is required');
        } else if (e.target.name === 'lastName' && !e.target.value.length) {
            setLastnameTxt('lastName is required');
        }
        if (e.target.name === 'email' && !e.target.value.length) {
            setEmailTxt('email is required');
        } else if (e.target.name === 'password' && !e.target.value.length) {
            setPswdTxt('password is required');
        }
        if (e.target.name === 'email' && e.target.value.length) {
            setEmailTxt('');
        } else if (e.target.name === 'password' && e.target.value.length) {
            setPswdTxt('');
        }
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    function handleSubmit(e) {
        e.preventDefault();
        if (form.email.length === 0) {
            setEmailTxt('Email is required');
        }
        if (form.password.length === 0) {
            setPswdTxt('Password is required');
        }
        // if (form.username.length === 0 || form.password.length === 0) {
        //     return 0;
        // }
        // setIsLoggingIn(true);
        // let username;
        // if (Number.isFinite(Number(form.username))) {
        //     username = `+${form.username}`;
        // } else {
        //     username = form.username;
        // }
        // const { password } = form;
        // dispatch(authActions.submitLogin({ username, password }, setIsLoggingIn));
        // return 1;
    }

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign up
                </Typography>
                <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                onChange={handleChange}
                                autoComplete="given-name"
                                name="firstName"
                                required
                                fullWidth
                                id="firstName"
                                label="First Name"
                                autoFocus
                                error={!!firstnameTxt.length}
                                helperText={firstnameTxt}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                onChange={handleChange}
                                required
                                fullWidth
                                id="lastName"
                                label="Last Name"
                                name="lastName"
                                autoComplete="family-name"
                                error={!!lastnameTxt.length}
                                helperText={lastnameTxt}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                onChange={handleChange}
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                error={!!emailTxt.length}
                                helperText={emailTxt}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                onChange={handleChange}
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="new-password"
                                error={!!pswdTxt.length}
                                helperText={pswdTxt}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <FormControlLabel
                                control={<Checkbox value="allowExtraEmails" color="primary" />}
                                label="I want to receive inspiration, marketing promotions and updates via email."
                            />
                        </Grid>
                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Sign Up
                    </Button>
                    <Grid container justifyContent="flex-end">
                        <Grid item>
                            <Link href="#" variant="body2">
                                Already have an account? Sign in
                            </Link>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Container>
    )
}