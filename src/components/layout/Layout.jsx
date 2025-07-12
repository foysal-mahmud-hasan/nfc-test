import React, { useRef } from "react";
import { Navigate, Outlet, useLocation, useNavigate } from "react-router-dom";
import { AppShell, Container, Image, Anchor } from "@mantine/core";
import { useViewportSize, } from "@mantine/hooks";
import Header from "./Header";
// import Footer from "./Footer";

import Footer from "./Footer";
import SignupLanding from "../modules/sign-up/SignupLanding";

function Layout() {
    const { height } = useViewportSize();
    const location = useLocation();
    const paramPath = window.location.pathname;
    const headerHeight = 42;
    const footerHeight = 90;
    const mainAreaHeight = height - (headerHeight + footerHeight + 5);

    return (
        <AppShell padding="0">
            <AppShell.Header height={headerHeight}>
                <Header />
            </AppShell.Header>
            <AppShell.Main bg="white">
                <Container
                    size="xl"
                    styles={(theme) => ({
                        width: '100%',
                        [`@media (max-width: ${theme.breakpoints.md}px)`]: {
                            maxWidth: '900px',
                        },
                    })}
                >
                    {paramPath !== '/' ? (
                        <Outlet context={{ mainAreaHeight }} />
                    ) : (
                        <SignupLanding height={mainAreaHeight} />
                    )}
                </Container>
            </AppShell.Main>

            <AppShell.Footer height={footerHeight}>
                <Footer />
            </AppShell.Footer>
        </AppShell>
    );
}

export default Layout;
