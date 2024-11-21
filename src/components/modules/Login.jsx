import {
  Paper,
  TextInput,
  PasswordInput,
  Checkbox,
  Button,
  Title,
  Text,
  Anchor,
  Alert,
  Tooltip,
  Group,
  Center,
  rem,
  Box,
  Loader,
  Card,
  Flex,
} from "@mantine/core";
import LoginPage from "../../assets/css/LoginPage.module.css";
import classes from "../../assets/css/AuthenticationImage.module.css";
import { useViewportSize, getHotkeyHandler, useHotkeys } from "@mantine/hooks";
import { IconInfoCircle, IconLogin, IconArrowLeft } from "@tabler/icons-react";
import { isNotEmpty, useForm } from "@mantine/form";
import { Navigate, useNavigate, useOutletContext } from "react-router-dom";
import Logo from "../../assets/images/logo.png";
import TerminalbdBg from "../../assets/images/terminalbd-bg.png";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import axios from "axios";

export default function Login() {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const icon = <IconInfoCircle />;
  const { mainAreaHeight } = useOutletContext();
  const height = mainAreaHeight;
  const [spinner, setSpinner] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // const user = localStorage.getItem("user");

  // if (user) {
  //     return <Navigate replace to="/" />;
  // }

  const form = useForm({
    initialValues: { email: "", password: "" },

    // functions will be used to validate values at corresponding key
    validate: {
      email: isNotEmpty(),
      password: isNotEmpty(),
    },
  });
  function login(data) {
    setSpinner(true);
    axios({
      method: "POST",
      url: `${import.meta.env.VITE_API_GATEWAY_URL + "/nfc-user/login"}`,
      headers: {
        Accept: `application/json`,
        "Content-Type": `application/json`,
        "Access-Control-Allow-Origin": "*",
        // "X-Api-Key": import.meta.env.VITE_API_KEY,
      },
      data: data,
    })
      .then((res) => {
        setTimeout(() => {
          // localStorage.setItem("user", JSON.stringify(res.data.data));
          // console.log("Succsess", res.data.data.tracking_no);
          setSpinner(false);
          navigate(`/edit/${res.data.data.tracking_no}`);
        }, 500);
      })
      .catch(function (error) {
        setTimeout(() => {
          setSpinner(false);
          console.log(error);
        }, 500);
      });
  }

  useHotkeys(
    [
      [
        "alt+n",
        () => {
          document.getElementById("email").focus();
        },
      ],
    ],
    []
  );

  return (
    <Box className={classes.wrapper} h={height + 40}>
      <Flex
        component="form"
        onSubmit={form.onSubmit((values) => login(values))}
        justify={"center"}
        align={"center"}
      >
        <Paper shadow="lg" className={classes.form} radius={0} p={30} w={{ base : rem(350), md : rem(500)}}>
          <Title
            order={2}
            className={classes.title}
            ta="center"
            mt="md"
            mb={80}
          >
            {t("Welcome to NFC Login")}
          </Title>
          {errorMessage && (
            <Alert
              variant="light"
              color="red"
              radius="md"
              title={errorMessage}
              icon={icon}
            ></Alert>
          )}
          <Tooltip
            label={t("EmailRequired")}
            px={20}
            py={3}
            opened={!!form.errors.email}
            position="top-end"
            color="red"
            withArrow
            offset={2}
            transitionProps={{ transition: "pop-bottom-left", duration: 500 }}
          >
            <TextInput
              withAsterisk
              label={t("Email")}
              placeholder={t("Email")}
              size="md"
              id={"email"}
              {...form.getInputProps("email")}
              onKeyDown={getHotkeyHandler([
                [
                  "Enter",
                  (e) => {
                    document.getElementById("password").focus();
                  },
                ],
              ])}
            />
          </Tooltip>

          <Tooltip
            label={t("RequiredPassword")}
            px={20}
            py={3}
            opened={!!form.errors.password}
            position="top-end"
            color="red"
            withArrow
            offset={2}
            transitionProps={{ transition: "pop-bottom-left", duration: 500 }}
          >
            <PasswordInput
              withAsterisk
              label={t("Password")}
              placeholder={t("Password")}
              mt="md"
              size="md"
              {...form.getInputProps("password")}
              id={"password"}
              onKeyDown={getHotkeyHandler([
                [
                  "Enter",
                  (e) => {
                    document.getElementById("LoginSubmit").click();
                  },
                ],
              ])}
            />
          </Tooltip>
          <Checkbox label="Keep me logged in" mt="xl" size="md" />
          <Group justify="space-between" mt="lg" className={LoginPage.controls}>
            <Anchor c="dimmed" size="sm" className={LoginPage.control}>
              <Center inline>
                <IconArrowLeft
                  style={{ width: rem(12), height: rem(12) }}
                  stroke={1.5}
                />
                {/* <Box ml={5}>Back to the sign-up page</Box> */}
              </Center>
            </Anchor>
            <Button
              fullWidth={false}
              mt="xl"
              bg={"red.5"}
              size="md"
              type="submit"
              id={"LoginSubmit"}
              className={LoginPage.control}
              rightSection={<IconLogin />}
            >
              {spinner ? <Loader color="red" type="dots" size={30} /> : "Login"}
            </Button>
          </Group>
        </Paper>
      </Flex>
    </Box>
  );
}
