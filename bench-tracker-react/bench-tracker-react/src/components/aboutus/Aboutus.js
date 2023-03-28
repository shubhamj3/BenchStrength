import React from "react";
import { Typography } from '@mui/material';
function Aboutus() {
    return (  
      <>
    <div>

    <Typography className="moad" variant="h1" component="div" gutterBottom >
    <strong>MoAD Team. </strong>  
  </Typography>  

  <img src="/officeteam.gif" align = "right" class="floatRight" style = {{ width : 300, height : 220, marginLeft:10 }}></img>
 
<div>
<Typography variant="h4" component="div" gutterBottom>
    <strong>Anoop Kumar, Syed Ashraf, Shubham Jadhav, Saurabh Dabhade, Hema Jangamani, Atul Narayan, Vinnymarria Mascarenhas.</strong>  
  </Typography>  
</div>

{/* 
<div>
<Typography variant="h4" component="div" gutterBottom>
    <strong>Syed Ashraf,</strong>  
  </Typography>  
</div>

<div>
<Typography variant="h4" component="div" gutterBottom>
    <strong>Shubham Jadhav,</strong>  
  </Typography>  
</div>

<div>
<Typography variant="h4" component="div" gutterBottom>
    <strong>Saurabh Dabhade,</strong>  
  </Typography>  
</div>

<div>
<Typography variant="h4" component="div" gutterBottom>
    <strong>Hema Jangamani,</strong>  
  </Typography>  
</div>

<div>
<Typography variant="h4" component="div" gutterBottom>
    <strong>Atul Narayan,</strong>  
  </Typography>  
</div>

<div>
<Typography variant="h4" component="div" gutterBottom>
    <strong>Vinnymarria Mascarenhas.</strong>  
  </Typography>  
</div> */}


</div>
</>
  );
}

export default Aboutus;