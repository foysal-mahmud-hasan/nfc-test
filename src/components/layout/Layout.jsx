import { Outlet, useLocation } from "react-router-dom";
import { AppShell, Container } from "@mantine/core";
import { useViewportSize } from "@mantine/hooks";
import Header from "./Header";
import Footer from "./Footer";

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
            width: "100%",
            [`@media (max-width: ${theme.breakpoints.md}px)`]: {
              maxWidth: "900px",
            },
          })}
        >
          <Outlet context={{ mainAreaHeight }} />
        </Container>
      </AppShell.Main>

      <AppShell.Footer height={footerHeight}>
        <Footer />
      </AppShell.Footer>
    </AppShell>
  );
}

export default Layout;
