import { Box, Card, CardContent, Container, Typography, TextField, Button } from '@mui/material'

function Login() {

    function handleSubmit() {
        
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
               <TextField margin='normal' label='Email' fullWidth/>           
               <TextField margin='normal' label='Password' fullWidth /> 
               <Button variant='contained'>Login</Button>      
            </Box>          
          </CardContent>        
        </Card>    
      </Box>
    </Container>
  )
}

export default Login
