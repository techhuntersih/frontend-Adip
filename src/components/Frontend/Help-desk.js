
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './Help-desk.css';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import { useNavigate } from 'react-router-dom';

import Grid from '@mui/material/Grid';
import { Typography } from '@material-ui/core';
import { Button } from '@mui/material';

const styles = {
    tab: {
        color: '#ffffff',
        margin:10
    }
}
function Helpdesk() {
    const history = useNavigate();
    return (
        <div style={{display:"flex",
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
        padding:8,
        margin:8
        }}>
             <Box>
                <Grid container sx={{width:"100%", padding:2
            }}>           <Button  onClick={()=>{
                    history("./faq");
            }}>
            
                        <Grid item sx={{alignItems:"center",
                    background:"#2f1045",padding:5,borderRadius:3,margin:1}}>
                   
                          <Typography style={styles.tab}>FAQ</Typography>
                         
                        </Grid>
                        </Button>
                        <Button   onClick={()=>{
                    history("./feedback");
            }}>
            
                        <Grid item sx={{alignItems:"center",
                    background:"#2f1045",padding:5,borderRadius:3,margin:1}}>
                        <Typography  style={styles.tab}>FEEDBACK</Typography>
                        </Grid>
                        </Button>
                        <Button  onClick={()=>{
                    history("./contactus");
            }}>
                        <Grid item sx={{alignItems:"center",
                    background:"#2f1045",padding:5,borderRadius:3,margin:1}} >
                        <Typography  style={styles.tab}>CONTACT US</Typography>
                        </Grid>
                        </Button>
                </Grid>
         </Box>
        </div>
  );
}

export default Helpdesk;