import { Box, Card, CardContent, Container, Typography } from '@mui/material'

function Login() {
  return (
    <Container>
      <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>
        <Card>
          <CardContent>
            <Typography variant='h4'>
               Login     
            </Typography>
            <form>
                          
            </form>          
          </CardContent>        
        </Card>    
      </Box>
    </Container>
  )
}

export default Login
