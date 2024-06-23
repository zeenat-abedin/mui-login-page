import { Box, Card, CardContent, Container, Typography, TextField, Button } from '@mui/material'
import { useState } from 'react'

function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    function handleSubmit(e) {
        e.preventDefault()
        console.log('Email:', email)
    }

  return (
    <Container>
      <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>
        <Card>
          <CardContent>
            <Typography component='h1' variant='h5'>
               Login     
            </Typography>
            <Box component='form' onSubmit={handleSubmit} sx={{ mt: 1, width: '100%' }}>
               <TextField margin='normal' label='Email' id='email' value={email} onChange={(e) => setEmail(e.target.value)}fullWidth required/>           
               <TextField margin='normal' label='Password' id='password' value={password} fullWidth required/> 
               <Button type='submit' variant='contained'>Login</Button>      
            </Box>          
          </CardContent>        
        </Card>    
      </Box>
    </Container>
  )
}

export default Login
