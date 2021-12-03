import './App.css';
import Profil from './Profil/Profil';


const App = () => {

  const data = {

    name: "Dave Harper ",
    bio: "I am young space addicted",
    profession: "Coder",
    image: "https://i.pinimg.com/originals/11/df/2b/11df2bc889722dab6946142dc9c70151.gif",

    warning: function () {

      alert ('my name is' + this.name)

    }
  }

    return (

      <div className = "App">
       
      <Profil {...data}/>
   
     </div>
   
     ) ;
    
}


  export default App;
  
