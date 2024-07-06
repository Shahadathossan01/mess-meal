import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import { Container } from "@mui/material";

const Main = () => {
    return (
        <>
            <div>
                <div>
                    <Navbar></Navbar>
                </div>
                <Container maxWidth="xl">
                    <Outlet></Outlet>
                </Container>
            </div>
        </>
    );
};

export default Main;