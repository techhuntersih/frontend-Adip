import React from 'react'
// import { makeStyles } from '@material-ui/core/styles'



import{AppBar, Tab, Tabs, Toolbar, } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import './NavigationBar.css';

const styles = {
    tab: {
        minWidth: 10 ,
        color: '#ffffff',
    }
}

// const useStyles = makeStyles((theme) => ({
//     customOne: {
//        padding: '3rem 15rem',
//        flexGrow: 1
//        backgroundColor: theme.palette.background.paper,
//        fontFamily: 'Open Sans',
//     },
//     customTwo: {
//        padding: '0rem',
//        color: '#484848',
//        backgroundColor: 'white',
//        fontFamily: 'Open Sans',
//        fontSize: '1rem',
//    },
//   }))


const NavigationBar =()=> {
    const history = useNavigate();
    return(
       
       

        <React.Fragment>
        
            <AppBar sx={{ background:'#2f1045' }}>
                <Toolbar>
              <Tabs Tabs style={{justifyContent :'space-between' }}>
            
             
               
               <Tabs sx={{marginleft:'auto'}} />
                <Tab indicatorColor={'white'}/>

              
               
                

                <Tab  label="ABOUT THE SCHEME"  style={styles.tab} onClick={()=>{
                  history("/aboutthescheme")
                }} />
            

                <Tab   label = "  CI CANDIDACY "  style={styles.tab} onClick={()=>{
                  history("/cicandidacy")
                }} />  
                

                <Tab label="GUIDANCE/SUPPORT"  style={styles.tab}  onClick={()=>{
                  history("/guidance")
                }} />
                <Tab label=" HOW TO APPLY"  style={styles.tab}   onClick={()=>{
                  history("/howtoapply")}}/>
                
                </Tabs>

                {/* <div>
                    
                <InputBase sx={{marginleft:'auto'}} indicatorcolor={'white'} style={{
                    backgroundColor:"white", 
                    borderRadius:10,
                   
                }} 
                placeholder="     Search...." />
            
        
                <IconButton sx={{marginleft:'auto'}}>

                <SearchIcon sx={{marginleft:'auto'}}  indicatorColor={'white'}  style={styles.tab}/>
                
                
                </IconButton>
              
                </div> */}
        
        </Toolbar>

      </AppBar>
    
  
  </React.Fragment>
 

    )
    
}

export default NavigationBar ;
