import React from 'react';
import './Image.css';

function Image() {
    return (

        <div style= {{border : 'solid 1px black' , maxWidth : '100vw'}} >
        
            <img src="/logo old cinema.png" alt="" width="500" height="200"/>

            <h1 className="title red">"Movies with classic touch and colors"</h1>
            
            <video src="/old.mp4" width="900" autoPlay="true" ></video>
            <br/>
            <br/>
            <h1 className="watch">"A Movie Lover’s Dream"</h1> 

            <br />

             <h2>NOW SHOWING</h2> 
             <img src="/action.png" alt=""width=" 540" height="410"/> 

        <div className="poster">
            <img  src="/titanic.jpg" alt="" width="472" height="700"/>
             <br/>
             <img src="/lala land.jpg" alt=""/>
            
        </div>
        
        <br />

        <div className="poster">
            <img  src="/gravity.jpg" alt="" width="472" height="700"/>
            <br />
            <img src="/captain america.jpg" alt=""width="472" height="700"/>
        </div>
         
         <br />

        <div className="poster">
            <img src="/jojo rabbit.jpg" alt=""width="472" height="700"/>
            <br/>
            <img src="/john.jpg" alt=""width="472" height="700"/>
            </div>

        </div>
        

    )
}
 export default Image;