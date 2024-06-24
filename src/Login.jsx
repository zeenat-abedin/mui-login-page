import { useState } from 'react'
import { Box, Card, CardContent, Container, Typography, TextField, Button } from '@mui/material'

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [successMessage, setSuccessMessage] = useState('')
  const [error, setError] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    if (email === 'test@test.com' && password === '12345678') {
      setSuccessMessage('Login successful')
    } else {
      setError('Invalid email or password')
      setSuccessMessage('')
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
              {successMessage && <Typography color='green'>{successMessage}</Typography>}
              {error && <Typography color='red'>{error}</Typography>}
            </Box>          
          </CardContent>        
        </Card>    
      </Box>
    </Container>
  )
}

export default Login
