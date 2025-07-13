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
            <Image
              h={40}
              fit={"contain"}
              maw={{ base: "50%", md: "60%" }}
              src={LazyCoders}
              alt="Facebook"
            />
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
