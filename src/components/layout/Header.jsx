import {
  Group,
  Button,
  Text,
  Box,
  useMantineTheme,
  Image,
  Container,
  Flex,
} from "@mantine/core";

import { useDisclosure } from "@mantine/hooks";

import "@mantine/spotlight/styles.css";
import { useState } from "react";
import flagBD from "../../assets/images/flags/bd.svg";
import flagGB from "../../assets/images/flags/gb.svg";
import { useTranslation } from "react-i18next";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { isAuthenticated, logout } from "../../utils/auth";

import LazyCoders from "../../assets/images/LazyCoders.jpg";

const languages = [
  { label: "EN", value: "en", flag: flagGB },
  { label: "BN", value: "bn", flag: flagBD },
];

export default function Header() {
  const [opened, { open, close }] = useDisclosure(false);
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();

  const [isClicked, setIsClicked] = useState(false);
  const path = "/sign-up";
  const handleClick = () => {
    navigate(path);
  };

  const isHomePage = location.pathname === "/";
  const isLoginPage = location.pathname === "/login";
  const showSignupButton = (isHomePage || isLoginPage) && !isClicked;
  const userLoggedIn = isAuthenticated();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <Container
      size="xl"
      styles={(theme) => ({
        width: "100%",
        [`@media (minWidth: ${theme.breakpoints.md}px)`]: {
          maxWidth: "900px",
        },
      })}
    >
      <Box bg={"white"} pos={`relative`}>
        <Group
          justify="space-between"
          bg={"white"}
          h={40}
          className="borderRadiusHeader"
        >
          <Link to="/">
            <svg
              id="Layer_2"
              data-name="Layer 2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 22.88 7.14"
              width="78"
              height="32"
            >
              <defs>
                <style>
                  {`.cls-1 {
                    fill: #231f20;
                    stroke-width: 0px;
                  }`}
                </style>
              </defs>
              <g id="Layer_1-2" data-name="Layer 1">
                <g>
                  <path
                    className="cls-1"
                    d="M0,.74h4.04s0,1.3,0,1.3h-1.3s0,5.09,0,5.09h-1.49s0-5.1,0-5.1H0S0,.74,0,.74Z"
                  />
                  <path
                    className="cls-1"
                    d="M4.73.74h1.48s0,2.47,0,2.47h1.18s0-2.47,0-2.47h1.49s0,6.39,0,6.39h-1.49s0-2.68,0-2.68h-1.18s0,2.68,0,2.68h-1.48s0-6.39,0-6.39Z"
                  />
                  <path
                    className="cls-1"
                    d="M11.32,3.2v3.93s-1.5,0-1.5,0v-3.93M9.82,2.06V.74s1.5,0,1.5,0v1.31"
                  />
                  <path
                    className="cls-1"
                    d="M12.84.74l.73,2.03c.22.6.38,1.12.5,1.56h.08l-.04-1.08V.74s-1.27,0-1.27,0ZM14.02,7.14l-.73-2.03c-.22-.6-.38-1.12-.5-1.57h-.08l.04,1.08v2.51s1.27,0,1.27,0Z"
                  />
                  <path
                    className="cls-1"
                    d="M15.54.74h1.49s0,2.31,0,2.31l1.13-2.3h1.48s-1.24,2.18-1.24,2.18l1.44,4.21h-1.67s-.72-2.55-.72-2.55l-.4.7v1.84s-1.49,0-1.49,0V.74Z"
                  />
                  <g>
                    <path
                      className="cls-1"
                      d="M21.09.26h-.4v1.15s-.32,0-.32,0V.26s-.4,0-.4,0v-.26s1.11,0,1.11,0v.26Z"
                    />
                    <path
                      className="cls-1"
                      d="M22.88,1.4h-.31v-.84c0-.09,0-.19.01-.3h0c-.02.09-.03.15-.04.19l-.33.95h-.26l-.33-.94s-.02-.09-.04-.2h0c0,.14.01.26.01.36v.78h-.28V0s.46,0,.46,0l.29.83c.02.07.04.13.05.2h0c.02-.08.04-.15.06-.2L22.43,0h.45s0,1.4,0,1.4Z"
                    />
                  </g>
                </g>
              </g>
            </svg>
          </Link>
          {showSignupButton && (
            <Button
              size="xs"
              color="orange.6"
              type="submit"
              // mt={''}
              id="EntityFormSubmit"
              onClick={handleClick}
            >
              <Flex direction="column" gap={0}>
                <Text fz={12} fw={400}>
                  {t("SignUp")}
                </Text>
              </Flex>
            </Button>
          )}
          {userLoggedIn && (
            <Button
              size="xs"
              color="orange.6"
              type="button"
              id="LogoutButton"
              onClick={handleLogout}
            >
              <Flex direction="column" gap={0}>
                <Text fz={12} fw={400}>
                  {t("Logout")}
                </Text>
              </Flex>
            </Button>
          )}
        </Group>
      </Box>
    </Container>
  );
}
