//develop
import { Routes, Route } from "react-router-dom";
import { NavbarComponent } from "./Components/Menu/Menu";
import Home from "./paginas/Home/Home";
import { Footer } from "./Components/Footer/footer";
import About from "./paginas/About/About";
import SignIn from "./paginas/SignIn/signin";
import Tratamiento from "./paginas/Tratamientos/tratamientos";
import { Programa } from "./paginas/Programas/Programas";
import SignUp from "./paginas/SignUp/signup";
import { Alcohol } from "./paginas/Adicciones/Alcohol";
import { Cannabis } from "./paginas/Adicciones/Cannabis";
import { Cocaina } from "./paginas/Adicciones/Cocaina";
import { Pastillas } from "./paginas/Adicciones/Pastillas";
import { Tecnologia } from "./paginas/Adicciones/Tecnologia";
import { Sexo } from "./paginas/Adicciones/Sexo";
import { Ludopata } from "./paginas/Adicciones/Ludopata";

function App() {

  return (
    <div>
      <NavbarComponent />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/programa" element={<Programa />} />
        <Route path="/tratamientos" element={<Tratamiento />} />
        <Route path="/about" element={<About />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />  
        <Route path="/alcohol" element={<Alcohol />} />   
        <Route path="/cannabis" element={<Cannabis />} /> 
        <Route path="/cocaina" element={<Cocaina />} />       
        <Route path="/pastillas" element={<Pastillas />} />
        <Route path="/tecnologia" element={<Tecnologia />} />
        <Route path="/sexo" element={<Sexo />} />
        <Route path="/ludopata" element={<Ludopata />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
