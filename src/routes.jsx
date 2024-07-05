import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/index";
import Sobre from "./Pages/Sobre/indexSobre";
import Projetos from "./Pages/Projetos/indexProjetos";
import Contatos from "./Pages/Contatos/indexContatos";
import Page404 from "./Pages/Page404/indexPage404";
import Pagebase from "./Pages/Pagebase/index";

function AppRoutes() {
   return (
      <BrowserRouter>
            <Routes>
               <Route path='/' element={<Pagebase />}>
               <Route index element={<Home />} />
               <Route path="/sobre" element={<Sobre />} />
               <Route path="/projetos" element={<Projetos />} />
               <Route path="/contatos" element={<Contatos />} />
               <Route path="*" element={<Page404 />} />
               </Route>
            </Routes>
      </BrowserRouter>
   );
}

export default AppRoutes;
