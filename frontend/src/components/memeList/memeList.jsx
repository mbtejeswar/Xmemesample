import React, { useEffect, useState } from 'react';
import {Grid} from 'semantic-ui-react';
import MemeCard from '../memeCard/memeCard';



const MemeList = (props)=>{

    const {firstHundredMemes} = props;



    return(
        
        <Grid  width={16} >  
        
       { firstHundredMemes.length > 0 ? firstHundredMemes.map((meme)=>(
        
       
       <MemeCard image={meme.url} name={meme.name} caption={meme.caption} />
    
       )) :''}
       
        </Grid>

    )

}

export default MemeList;


