import React,{useState} from 'react'
import { Grid,Paper, TextField, Button, Typography,Link } from '@material-ui/core'
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
 import {useNavigate} from "react-router-dom"


function Login({loggedin,logSet}){

    const username="test" 
    const password="1234"
    
    const [usernamestate ,setUsername]=useState("")
    const [paswordstate ,setPassword]=useState("")
    // const [loggedin, setLoggedin]=useState(false)
        const navigate=useNavigate()

    function Logged(){
        if (usernamestate===username && password===paswordstate){
                 logSet(true)
        }
    }

    const paperStyle={padding :20,height:'70vh',width:280, margin:"20px auto"}
    const btnstyle={margin:'8px 0'}
    return(
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                    <h2>Sign In</h2>
                </Grid>
                <TextField label='Username' placeholder='Enter username' fullWidth required onChange={(e) => setUsername(e.target.value)} />
                <TextField label='Password' placeholder='Enter password' type='password' fullWidth required onChange={(e) => setPassword(e.target.value)}/>
                <FormControlLabel
                    control={
                    <Checkbox
                        name="checkedB"
                        color="primary"
                    />
                    }
                    label="Remember me"
                 />
                <Button type='submit' color='primary' variant="contained" style={btnstyle} fullWidth onClick={Logged}>Sign in</Button>
                {loggedin && navigate('/home')}
                <Typography >
                     <Link href="#" >
                        Forgot password ?
                </Link>
                </Typography>
            </Paper>
        </Grid>
        
    )
}

export default Login