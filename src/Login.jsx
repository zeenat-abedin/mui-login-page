import { useState } from 'react'
import { Box, Card, CardContent, Container, Typography, TextField, Button } from '@mui/material'

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    setError('')
    setSuccess(false)

    console.log('Email:', email)
    console.log('Password:', password)

    if (email === 'test@test.com' && password === '12345678') {
      setSuccess(true)
    } else {
      setError('Invalid email or password')
    }   
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
               <TextField margin='normal' label='Email' id='email' value={email} onChange={(e) => setEmail(e.target.value)} fullWidth required/>           
               <TextField margin='normal' label='Password' id='password' type='password' value={password} onChange={(e) => setPassword(e.target.value) } fullWidth required/> 
               <Button type='submit' variant='contained'>Login</Button>      
            </Box>          
          </CardContent>        
        </Card>    
      </Box>
    </Container>
  )
}

export default Login
