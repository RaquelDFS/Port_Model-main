import Header from "../../Components/Header/indexHeader";
import Footer from "../../Components/Footer/indexFooter";
import Container from "../../Components/Container/indexContainer";
import { Outlet } from "react-router-dom";

function Pagebase() {
    return (
        <main>
            <Header />
            <Container>
                <Outlet />
            </Container>
            <Footer />
        </main>
    );
}

export default Pagebase;


// o Outlet >> vai indicar que o conteúdo da página ficará no meio. Utilizando a rota filho
