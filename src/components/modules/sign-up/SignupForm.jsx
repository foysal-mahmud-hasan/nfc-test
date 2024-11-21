import React, { useEffect, useState } from "react";
import { Navigate, useOutletContext } from "react-router-dom";
import {
  Button,
  rem,
  Flex,
  Grid,
  Box,
  ScrollArea,
  Text,
  Title,
  Alert,
  List,
  Stack,
  Tooltip,
  ActionIcon,
  Loader,
  LoadingOverlay,
  Modal,
} from "@mantine/core";
import { useTranslation } from "react-i18next";
import {
  IconCheck,
  IconDeviceFloppy,
  IconUsersGroup,
  IconX,
} from "@tabler/icons-react";
import { useDisclosure, useHotkeys } from "@mantine/hooks";

import { hasLength, isNotEmpty, useForm } from "@mantine/form";
import { modals } from "@mantine/modals";
import { notifications } from "@mantine/notifications";
import InputForm from "../../form-builders/InputForm.jsx";
import ImageUploadDropzone from "../../form-builders/ImageUploadDropzone.jsx";
import TextAreaForm from "../../form-builders/TextAreaForm";
import { useLocalStorage } from "@mantine/hooks";
import { useNavigate } from "react-router-dom";
import PhoneNumberInput from "../../form-builders/PhoneNumInput.jsx";
import axios from "axios";

function SignupForm() {
  const { t, i18n } = useTranslation();

  const { mainAreaHeight } = useOutletContext();
  const height = mainAreaHeight - 65; //TabList height 104
  const [opened, { open, close }] = useDisclosure(false);

  const [saveCreateLoading, setSaveCreateLoading] = useState(false);
  const [spinner, setSpinner] = useState(false);
  const navigate = useNavigate();
  const [twitter, setTwitter] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [facebook, setFacebook] = useState("");
  const [instagram, setInstagram] = useState("");
  const [website, setWebsite] = useState("");
  const [company_email, setCompany_email] = useState("");

  const form = useForm({
    initialValues: {
      name: "",
      email: "",
      mobile: "",
      about: "",
      profile_pic: "",
      company_name: "",
      designation: "",
      company_logo: "",
      address: "",
    },
    validate: {
      name: isNotEmpty(),
      email: (value) => {
        if (!value || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          return true;
        }
        return null;
      },
      mobile: isNotEmpty(),
      about: isNotEmpty(),
      company_name: isNotEmpty(),
      designation: isNotEmpty(),
      address: isNotEmpty(),
      profile_pic: isNotEmpty(),
      company_logo: isNotEmpty(),
      company_email: (value) => {
        if (value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          return true;
        }
        return null;
      },
    },
  });
  const [confirmModal, setConfirmModal] = useState(false);
  return (
    <Box>
      <Modal opened={confirmModal} centered>
        <Flex
          className="borderRadiusAll"
          h={height / 5}
          justify={"center"}
          align={"center"}
          direction={"column"}
        >
          <Text ta={"center"} fz={14} fw={600} p={"xs"}>
            Successfully Registered.
          </Text>
          <Text ta={"center"} fz={12} fw={600} p={"xs"}>
            Kindly check your mail for further instruction.
          </Text>
        </Flex>
        <Flex className="borderRadiusAll" justify={'center'} align={'center'} pb={'xs'} mt={'4'}>
        <Button
            color="orange.5"
            size="xs"
            mt={"xs"}
            onClick={() => {
              setConfirmModal(false);
              form.reset();
              navigate(`/`);
            }}
          >
            Understand
          </Button>
        </Flex>
      </Modal>
      <form
        onSubmit={form.onSubmit((values) => {
          const formValue = {};

          if (twitter) {
            formValue["twitter"] = twitter;
          }
          if (linkedin) {
            formValue["linkedin"] = linkedin;
          }
          if (facebook) {
            formValue["facebook"] = facebook;
          }
          if (instagram) {
            formValue["instagram"] = instagram;
          }
          if (website) {
            formValue["website"] = website;
          }
          if (company_email) {
            formValue["company_email"] = company_email;
          }
          formValue["name"] = values.name;
          formValue["email"] = values.email;
          formValue["mobile"] = values.mobile;
          formValue["about"] = values.about;
          formValue["profile_pic"] = values.profile_pic;
          formValue["company_name"] = values.company_name;
          formValue["designation"] = values.designation;
          formValue["company_logo"] = values.company_logo;
          formValue["address"] = values.address;
          modals.openConfirmModal({
            title: <Text size="md"> {t("FormConfirmationTitle")}</Text>,
            children: <Text size="sm"> {t("FormConfirmationMessage")}</Text>,
            labels: { confirm: "Confirm", cancel: "Cancel" },
            confirmProps: { color: "red" },
            onCancel: () => console.log("Cancel"),
            onConfirm: () => {
              setSpinner(true);
              axios
                .post(
                  `${import.meta.env.VITE_API_GATEWAY_URL}/nfc-user/store`,
                  formValue,
                  {
                    headers: {
                      Accept: `application/json`,
                      "Content-Type": `multipart/form-data`,
                    },
                  }
                )
                .then((response) => {
                  setSpinner(false);
                  // console.log(response.data.status);
                  if (response.data.status === 200) {
                    notifications.show({
                      color: "teal",
                      title: t("CreateSuccessfully"),
                      icon: <IconCheck size="1rem" />,
                      autoClose: 5000,
                    });
                    setConfirmModal(true);
                  }
                })
                .catch((error) => {
                  notifications.show({
                    color: "red",
                    title: "Error",
                    message:
                      error.response?.data?.message || "Something went wrong",
                    icon: <IconX size="1rem" />,
                    autoClose: 2000,
                  });
                  console.error("Error:", error);
                });
            },
          });
        })}
      >
        <Grid gutter={{ base: 8 }}>
          <Grid.Col p={"0"}>
            <Box>
              <Box>
                <Box
                  pl={`xs`}
                  pb={"xs"}
                  pr={8}
                  pt={"xs"}
                  className={"boxBackground borderRadiusAll"}
                >
                  <Grid>
                    <Grid.Col h={54}>
                      <Title order={6} mt={"xs"} pl={"6"}>
                        {t("WelcomeSignup")}
                      </Title>
                    </Grid.Col>
                  </Grid>
                </Box>
                <Box>
                  <Box>
                    <Box mt={"4"}>
                      <ScrollArea
                        h={{ base: height + 11, md: height - 10 }}
                        scrollbarSize={2}
                        scrollbars="y"
                        type="never"
                      >
                        <LoadingOverlay
                          visible={spinner}
                          zIndex={1000}
                          overlayProps={{ radius: "sm", blur: 2 }}
                          loaderProps={{ color: "red.6" }}
                        />
                        <Grid columns={12} gutter={{ base: 6 }}>
                          {/* 1st column */}
                          <Grid.Col span={{ base: 12, sm: 12, md: 6, lg: 6 }}>
                            <Box
                              h={{ base: "100%", sm: "100%", md: height + 85 }}
                              pl={`4`}
                              pr={4}
                              pt={"4"}
                              pb={{ base: "sm", sm: "sm", md: 0 }}
                              className="borderRadiusAll"
                            >
                              <Box
                                pl={`xs`}
                                pb={"xs"}
                                pr={8}
                                pt={"xs"}
                                className={"boxBackground borderRadiusAll"}
                              >
                                <Grid>
                                  <Grid.Col h={35}>
                                    <Title order={6} pl={"6"}>
                                      {t("PersonalInformation")}
                                    </Title>
                                  </Grid.Col>
                                </Grid>
                              </Box>
                              <Box>
                                <Box pl={"xs"} pr={"4"}>
                                  <Box>
                                    <Grid gutter={{ base: 4 }} mt={"xs"}>
                                      <Grid.Col
                                        span={{
                                          base: 12,
                                          sm: 12,
                                          md: 4,
                                          lg: 4,
                                        }}
                                      >
                                        <Box
                                          mt={{
                                            base: 1,
                                            sm: 1,
                                            md: "4",
                                            lg: "4",
                                          }}
                                        >
                                          <Flex
                                            justify="flex-start"
                                            align="center"
                                            direction="row"
                                          >
                                            <Text ta="center" fz="sm" fw={300}>
                                              {t("Name")}
                                              <Text component="span" c="red">
                                                *
                                              </Text>
                                            </Text>
                                          </Flex>
                                        </Box>
                                      </Grid.Col>
                                      <Grid.Col
                                        span={{
                                          base: 12,
                                          sm: 12,
                                          md: 8,
                                          lg: 8,
                                        }}
                                      >
                                        <Box>
                                          <InputForm
                                            tooltip={t("NameValidateMessage")}
                                            placeholder={t("Name")}
                                            required={true}
                                            nextField={"email"}
                                            name={"name"}
                                            form={form}
                                            mt={0}
                                            id={"name"}
                                          />
                                        </Box>
                                      </Grid.Col>
                                    </Grid>
                                  </Box>
                                  <Box mt={"xs"}>
                                    <Grid gutter={{ base: 4 }}>
                                      <Grid.Col
                                        span={{
                                          base: 12,
                                          sm: 12,
                                          md: 4,
                                          lg: 4,
                                        }}
                                      >
                                        <Box
                                          mt={{
                                            base: 1,
                                            sm: 1,
                                            md: "4",
                                            lg: "4",
                                          }}
                                        >
                                          <Flex
                                            justify="flex-start"
                                            align="center"
                                            direction="row"
                                          >
                                            <Text ta="center" fz="sm" fw={300}>
                                              {t("Email")}
                                              <Text component="span" c="red">
                                                *
                                              </Text>
                                            </Text>
                                          </Flex>
                                        </Box>
                                      </Grid.Col>
                                      <Grid.Col
                                        span={{
                                          base: 12,
                                          sm: 12,
                                          md: 8,
                                          lg: 8,
                                        }}
                                      >
                                        <Box>
                                          <InputForm
                                            tooltip={t("Email")}
                                            // label={t('Email')}
                                            placeholder={t("Email")}
                                            required={true}
                                            nextField={"mobile"}
                                            name={"email"}
                                            form={form}
                                            mt={{
                                              base: 1,
                                              sm: 1,
                                              md: "0",
                                              lg: "0",
                                            }}
                                            id={"email"}
                                          />
                                        </Box>
                                      </Grid.Col>
                                    </Grid>
                                  </Box>
                                  <Box mt={"xs"}>
                                    <Grid gutter={{ base: 4 }}>
                                      <Grid.Col
                                        span={{
                                          base: 12,
                                          sm: 12,
                                          md: 4,
                                          lg: 4,
                                        }}
                                      >
                                        <Box
                                          mt={{
                                            base: 1,
                                            sm: 1,
                                            md: "4",
                                            lg: "4",
                                          }}
                                        >
                                          <Box>
                                            <Flex
                                              justify="flex-start"
                                              align="center"
                                              direction="row"
                                            >
                                              <Text
                                                ta="center"
                                                fz="sm"
                                                fw={300}
                                              >
                                                {t("Phone")}
                                                <Text component="span" c="red">
                                                  *
                                                </Text>
                                              </Text>
                                            </Flex>
                                          </Box>
                                        </Box>
                                      </Grid.Col>
                                      <Grid.Col
                                        span={{
                                          base: 12,
                                          sm: 12,
                                          md: 8,
                                          lg: 8,
                                        }}
                                      >
                                        <Box>
                                          <PhoneNumberInput
                                            country={"bd"}
                                            onChange={(phone) =>
                                              form.setFieldValue("phone", phone)
                                            }
                                            tooltip={t("Phone")}
                                            placeholder={t("Phone")}
                                            // required={true}
                                            nextField={"xtwitter"}
                                            name={"mobile"}
                                            form={form}
                                            id={"mobile"}
                                          />
                                        </Box>
                                      </Grid.Col>
                                    </Grid>
                                  </Box>
                                  <Box mt={"xs"}>
                                    <Grid gutter={{ base: 4 }}>
                                      <Grid.Col
                                        span={{
                                          base: 12,
                                          sm: 12,
                                          md: 4,
                                          lg: 4,
                                        }}
                                      >
                                        <Box
                                          mt={{
                                            base: 1,
                                            sm: 1,
                                            md: "6",
                                            lg: "6",
                                          }}
                                        >
                                          <Flex
                                            justify="flex-start"
                                            align="center"
                                            direction="row"
                                          >
                                            <Text ta="center" fz="sm" fw={300}>
                                              {t("X(Twitter)Account")}
                                            </Text>
                                          </Flex>
                                        </Box>
                                      </Grid.Col>
                                      <Grid.Col
                                        span={{
                                          base: 12,
                                          sm: 12,
                                          md: 8,
                                          lg: 8,
                                        }}
                                      >
                                        <Box>
                                          <InputForm
                                            tooltip={t("TwitterAccount")}
                                            placeholder={t("TwitterAccount")}
                                            form={form}
                                            required={false}
                                            nextField={"linkedin"}
                                            name={"xtwitter"}
                                            onChange={(event) => {
                                              setTwitter(
                                                event.currentTarget.value
                                              );
                                            }}
                                            mt={{
                                              base: 1,
                                              sm: 1,
                                              md: "0",
                                              lg: "0",
                                            }}
                                            id={"xtwitter"}
                                          />
                                        </Box>
                                      </Grid.Col>
                                    </Grid>
                                  </Box>
                                  <Box mt={"xs"}>
                                    <Grid gutter={{ base: 4 }}>
                                      <Grid.Col
                                        span={{
                                          base: 12,
                                          sm: 12,
                                          md: 4,
                                          lg: 4,
                                        }}
                                      >
                                        <Box
                                          mt={{
                                            base: 1,
                                            sm: 1,
                                            md: "8",
                                            lg: "8",
                                          }}
                                        >
                                          <Flex
                                            justify="flex-start"
                                            align="center"
                                            direction="row"
                                          >
                                            <Text ta="center" fz="sm" fw={300}>
                                              {t("LinkedinAccount")}
                                            </Text>
                                          </Flex>
                                        </Box>
                                      </Grid.Col>
                                      <Grid.Col
                                        span={{
                                          base: 12,
                                          sm: 12,
                                          md: 8,
                                          lg: 8,
                                        }}
                                      >
                                        <Box>
                                          <InputForm
                                            tooltip={t("LinkedinAccount")}
                                            placeholder={t("LinkedinAccount")}
                                            required={false}
                                            nextField={"facebook"}
                                            name={"linkedin"}
                                            onChange={(event) => {
                                              setLinkedin(
                                                event.currentTarget.value
                                              );
                                            }}
                                            form={form}
                                            mt={{
                                              base: 1,
                                              sm: 1,
                                              md: "0",
                                              lg: "0",
                                            }}
                                            id={"linkedin"}
                                          />
                                        </Box>
                                      </Grid.Col>
                                    </Grid>
                                  </Box>
                                  <Box mt={"xs"}>
                                    <Grid gutter={{ base: 4 }}>
                                      <Grid.Col
                                        span={{
                                          base: 12,
                                          sm: 12,
                                          md: 4,
                                          lg: 4,
                                        }}
                                      >
                                        <Box
                                          mt={{
                                            base: 1,
                                            sm: 1,
                                            md: "4",
                                            lg: "4",
                                          }}
                                        >
                                          <Flex
                                            justify="flex-start"
                                            align="center"
                                            direction="row"
                                          >
                                            <Text ta="center" fz="sm" fw={300}>
                                              {t("FacebookAccount")}
                                            </Text>
                                          </Flex>
                                        </Box>
                                      </Grid.Col>
                                      <Grid.Col
                                        span={{
                                          base: 12,
                                          sm: 12,
                                          md: 8,
                                          lg: 8,
                                        }}
                                      >
                                        <Box>
                                          <InputForm
                                            tooltip={t("FacebookAccount")}
                                            placeholder={t("FacebookAccount")}
                                            required={false}
                                            nextField={"instagram"}
                                            name={"facebook"}
                                            onChange={(event) => {
                                              console.log("ok");
                                              setFacebook(
                                                event.currentTarget.value
                                              );
                                            }}
                                            form={form}
                                            mt={{
                                              base: 1,
                                              sm: 1,
                                              md: "0",
                                              lg: "0",
                                            }}
                                            id={"facebook"}
                                          />
                                        </Box>
                                      </Grid.Col>
                                    </Grid>
                                  </Box>
                                  <Box mt={"xs"}>
                                    <Grid gutter={{ base: 4 }}>
                                      <Grid.Col
                                        span={{
                                          base: 12,
                                          sm: 12,
                                          md: 4,
                                          lg: 4,
                                        }}
                                      >
                                        <Box
                                          mt={{
                                            base: 1,
                                            sm: 1,
                                            md: "4",
                                            lg: "4",
                                          }}
                                        >
                                          <Flex
                                            justify="flex-start"
                                            align="center"
                                            direction="row"
                                          >
                                            <Text ta="center" fz="sm" fw={300}>
                                              {t("InstaAccount")}
                                            </Text>
                                          </Flex>
                                        </Box>
                                      </Grid.Col>
                                      <Grid.Col
                                        span={{
                                          base: 12,
                                          sm: 12,
                                          md: 8,
                                          lg: 8,
                                        }}
                                      >
                                        <Box>
                                          <InputForm
                                            tooltip={t("InstaAccount")}
                                            // label={t('LinkedinAccount')}
                                            placeholder={t("InstaAccount")}
                                            required={false}
                                            nextField={"about"}
                                            name={"instagram"}
                                            onChange={(event) => {
                                              setInstagram(
                                                event.currentTarget.value
                                              );
                                            }}
                                            form={form}
                                            mt={{
                                              base: 1,
                                              sm: 1,
                                              md: "0",
                                              lg: "0",
                                            }}
                                            id={"instagram"}
                                          />
                                        </Box>
                                      </Grid.Col>
                                    </Grid>
                                  </Box>
                                  <Box mt={"4"}>
                                    <Grid gutter={{ base: 4 }}>
                                      <Grid.Col
                                        span={{
                                          base: 12,
                                          sm: 12,
                                          md: 4,
                                          lg: 4,
                                        }}
                                      >
                                        <Box>
                                          <Flex
                                            mih={{ base: 30, sm: 30, md: 70 }}
                                            gap="md"
                                            justify="flex-start"
                                            align="center"
                                            direction="row"
                                          >
                                            <Text ta="center" fz="sm" fw={300}>
                                              {t("AboutYourself")}
                                              <Text component="span" c="red">
                                                *
                                              </Text>
                                            </Text>
                                          </Flex>
                                        </Box>
                                      </Grid.Col>
                                      <Grid.Col
                                        span={{
                                          base: 12,
                                          sm: 12,
                                          md: 8,
                                          lg: 8,
                                        }}
                                      >
                                        <Box>
                                          <Box
                                            mt={{
                                              base: "1",
                                              sm: "1",
                                              md: "6",
                                              lg: "6",
                                            }}
                                          >
                                            <TextAreaForm
                                              tooltip={t("About Self")}
                                              placeholder={t("About Self")}
                                              required={true}
                                              nextField={"company_name"}
                                              name={"about"}
                                              form={form}
                                              mt={{
                                                base: 1,
                                                sm: 1,
                                                md: "0",
                                                lg: "0",
                                              }}
                                              id={"about"}
                                            />
                                          </Box>
                                        </Box>
                                      </Grid.Col>
                                    </Grid>
                                  </Box>
                                  <Box mt={"xs"}>
                                    <Grid gutter={{ base: 4 }}>
                                      <Grid.Col
                                        span={{
                                          base: 12,
                                          sm: 12,
                                          md: 4,
                                          lg: 4,
                                        }}
                                      >
                                        <Box>
                                          <Flex
                                            mih={{ base: 30, sm: 30, md: 50 }}
                                            gap="md"
                                            mt={{
                                              base: "1",
                                              sm: "1",
                                              md: "sm",
                                              lg: "sm",
                                            }}
                                            justify="flex-start"
                                            align="center"
                                            direction="row"
                                          >
                                            <Text ta="center" fz="sm" fw={300}>
                                              {t("ProfilePic")}
                                              <Text component="span" c="red">
                                                *
                                              </Text>
                                            </Text>
                                          </Flex>
                                        </Box>
                                      </Grid.Col>
                                      <Grid.Col
                                        span={{
                                          base: 12,
                                          sm: 12,
                                          md: 8,
                                          lg: 8,
                                        }}
                                      >
                                        <Tooltip
                                          label={"Profile Picture is required"}
                                          opened={form.errors.profile_pic}
                                          position="top-end"
                                          bg={`orange.4`}
                                          c={"white"}
                                          withArrow
                                          offset={2}
                                          zIndex={999}
                                          transitionProps={{
                                            transition: "pop-bottom-left",
                                            duration: 500,
                                          }}
                                        >
                                          <Box
                                            mt={{
                                              base: "xs",
                                              sm: "xs",
                                              md: "2",
                                              lg: "2",
                                            }}
                                            mb={"sm"}
                                          >
                                            <ImageUploadDropzone
                                              label={t("ProfilePic")}
                                              id={"profile_pic"}
                                              name={"profile_pic"}
                                              form={form}
                                              fieldName={"profile_pic"}
                                              required={true}
                                              placeholder={t(
                                                "DropProfilePictureHere"
                                              )}
                                              nextField={"company_name"}
                                              errors={form.errors.profile_pic}
                                            />
                                          </Box>
                                        </Tooltip>
                                      </Grid.Col>
                                    </Grid>
                                  </Box>
                                </Box>
                              </Box>
                            </Box>
                          </Grid.Col>
                          {/*     2nd columnd */}

                          <Grid.Col span={{ base: 12, sm: 12, md: 6, lg: 6 }}>
                            <Box
                              h={{ base: "auto", sm: "auto", md: height + 85 }}
                              pl={`4`}
                              pr={4}
                              pt={"4"}
                              pb={{ base: "sm", sm: "sm", md: 0 }}
                              className="borderRadiusAll"
                            >
                              <Box
                                pl={`xs`}
                                pb={"xs"}
                                pr={8}
                                pt={"xs"}
                                className={"boxBackground borderRadiusAll"}
                              >
                                <Grid>
                                  <Grid.Col h={35}>
                                    <Title order={6} pl={"6"}>
                                      {t("CompanyInformation")}
                                    </Title>
                                  </Grid.Col>
                                </Grid>
                              </Box>
                              <Box pl={"xs"} pr={"2"}>
                                <Box>
                                  <Grid gutter={{ base: 4 }} mt={"xs"}>
                                    <Grid.Col
                                      span={{ base: 12, sm: 12, md: 4, lg: 4 }}
                                    >
                                      <Box
                                        mt={{
                                          base: 1,
                                          sm: 1,
                                          md: "4",
                                          lg: "4",
                                        }}
                                      >
                                        <Flex
                                          justify="flex-start"
                                          align="center"
                                          direction="row"
                                        >
                                          <Text ta="center" fz="sm" fw={300}>
                                            {t("CompanyName")}
                                            <Text component="span" c="red">
                                              *
                                            </Text>
                                          </Text>
                                        </Flex>
                                      </Box>
                                    </Grid.Col>
                                    <Grid.Col
                                      span={{ base: 12, sm: 12, md: 8, lg: 8 }}
                                    >
                                      <Box>
                                        <InputForm
                                          tooltip={t(
                                            "CompanyNameValidateMessage"
                                          )}
                                          placeholder={t("CompanyName")}
                                          required={true}
                                          nextField={"designation"}
                                          name={"company_name"}
                                          form={form}
                                          mt={0}
                                          id={"company_name"}
                                        />
                                      </Box>
                                    </Grid.Col>
                                  </Grid>
                                </Box>
                                <Box mt={"xs"}>
                                  <Grid gutter={{ base: 4 }}>
                                    <Grid.Col
                                      span={{ base: 12, sm: 12, md: 4, lg: 4 }}
                                    >
                                      <Box
                                        mt={{
                                          base: 1,
                                          sm: 1,
                                          md: "4",
                                          lg: "4",
                                        }}
                                      >
                                        <Flex
                                          justify="flex-start"
                                          align="center"
                                          direction="row"
                                        >
                                          <Text ta="center" fz="sm" fw={300}>
                                            {t("Designation")}
                                            <Text component="span" c="red">
                                              *
                                            </Text>
                                          </Text>
                                        </Flex>
                                      </Box>
                                    </Grid.Col>
                                    <Grid.Col
                                      span={{ base: 12, sm: 12, md: 8, lg: 8 }}
                                    >
                                      <Box>
                                        <InputForm
                                          tooltip={t("Designation")}
                                          // label={t('CompanyName')}
                                          placeholder={t("Designation")}
                                          required={true}
                                          nextField={"website"}
                                          name={"designation"}
                                          form={form}
                                          mt={0}
                                          id={"designation"}
                                        />
                                      </Box>
                                    </Grid.Col>
                                  </Grid>
                                </Box>
                                <Box mt={"xs"}>
                                  <Grid gutter={{ base: 4 }}>
                                    <Grid.Col
                                      span={{ base: 12, sm: 12, md: 4, lg: 4 }}
                                    >
                                      <Box
                                        mt={{
                                          base: 1,
                                          sm: 1,
                                          md: "4",
                                          lg: "4",
                                        }}
                                      >
                                        <Flex
                                          justify="flex-start"
                                          align="center"
                                          direction="row"
                                        >
                                          <Text ta="center" fz="sm" fw={300}>
                                            {t("Company Website")}
                                            {/* <Text component="span" c="red">
                                              *
                                            </Text> */}
                                          </Text>
                                        </Flex>
                                      </Box>
                                    </Grid.Col>
                                    <Grid.Col
                                      span={{ base: 12, sm: 12, md: 8, lg: 8 }}
                                    >
                                      <Box>
                                        <InputForm
                                          tooltip={t("CompanyWebsite")}
                                          // label={t('CompanyWebsite')}
                                          placeholder={t("CompanyWebsite")}
                                          required={false}
                                          onChange={(event) => {
                                            setWebsite(
                                              event.currentTarget.value
                                            );
                                          }}
                                          nextField={"company_email"}
                                          name={"website"}
                                          form={form}
                                          mt={{
                                            base: 1,
                                            sm: 1,
                                            md: "0",
                                            lg: "0",
                                          }}
                                          id={"website"}
                                        />
                                      </Box>
                                    </Grid.Col>
                                  </Grid>
                                </Box>
                                <Box mt={"xs"}>
                                  <Grid gutter={{ base: 4 }}>
                                    <Grid.Col
                                      span={{ base: 12, sm: 12, md: 4, lg: 4 }}
                                    >
                                      <Box
                                        mt={{
                                          base: 1,
                                          sm: 1,
                                          md: "4",
                                          lg: "4",
                                        }}
                                      >
                                        <Flex
                                          justify="flex-start"
                                          align="center"
                                          direction="row"
                                        >
                                          <Text ta="center" fz="sm" fw={300}>
                                            {t("CompanyEmail")}
                                          </Text>
                                        </Flex>
                                      </Box>
                                    </Grid.Col>
                                    <Grid.Col
                                      span={{ base: 12, sm: 12, md: 8, lg: 8 }}
                                    >
                                      <Box>
                                        <InputForm
                                          tooltip={t("CompanyEmail")}
                                          // label={t('CompanyEmail')}
                                          placeholder={t("CompanyEmail")}
                                          required={false}
                                          nextField={"address"}
                                          name={"company_email"}
                                          onChange={(event) => {
                                            setCompany_email(
                                              event.currentTarget.value
                                            );
                                          }}
                                          form={form}
                                          mt={{
                                            base: 1,
                                            sm: 1,
                                            md: "0",
                                            lg: "0",
                                          }}
                                          id={"company_email"}
                                        />
                                      </Box>
                                    </Grid.Col>
                                  </Grid>
                                </Box>
                                <Box mt={"xs"}>
                                  <Grid gutter={{ base: 4 }}>
                                    <Grid.Col
                                      span={{ base: 12, sm: 12, md: 4, lg: 4 }}
                                    >
                                      <Box>
                                        <Flex
                                          mih={{ base: 30, sm: 30, md: 50 }}
                                          gap="md"
                                          mt={{
                                            base: "1",
                                            sm: "1",
                                            md: "10",
                                            lg: "10",
                                          }}
                                          justify="flex-start"
                                          align="center"
                                          direction="row"
                                        >
                                          <Text ta="center" fz="sm" fw={300}>
                                            {t("CompanyLogo")}
                                            <Text component="span" c="red">
                                              *
                                            </Text>
                                          </Text>
                                        </Flex>
                                      </Box>
                                    </Grid.Col>
                                    <Grid.Col
                                      span={{ base: 12, sm: 12, md: 8, lg: 8 }}
                                    >
                                      <Tooltip
                                        label={"Company Logo is required"}
                                        opened={form.errors.company_logo}
                                        position="top-end"
                                        bg={`orange.4`}
                                        c={"white"}
                                        withArrow
                                        offset={2}
                                        zIndex={999}
                                        transitionProps={{
                                          transition: "pop-bottom-left",
                                          duration: 500,
                                        }}
                                      >
                                        <Box mt={"2"}>
                                          <ImageUploadDropzone
                                            label={t("CompanyLogo")}
                                            id={"company_logo"}
                                            name={"company_logo"}
                                            form={form}
                                            fieldName={"company_logo"}
                                            required={true}
                                            placeholder={t(
                                              "DropCompanyLogoHere"
                                            )}
                                            nextField={"address"}
                                            errors={form.errors.company_logo}
                                          />
                                        </Box>
                                      </Tooltip>
                                    </Grid.Col>
                                  </Grid>
                                </Box>
                                <Box mt={"4"}>
                                  <Grid gutter={{ base: 4 }}>
                                    <Grid.Col
                                      span={{ base: 12, sm: 12, md: 4, lg: 4 }}
                                    >
                                      <Box>
                                        <Flex
                                          mih={{ base: 30, sm: 30, md: 70 }}
                                          gap="md"
                                          justify="flex-start"
                                          align="center"
                                          direction="row"
                                        >
                                          <Text ta="center" fz="sm" fw={300}>
                                            {t("Address")}
                                            <Text component="span" c="red">
                                              *
                                            </Text>
                                          </Text>
                                        </Flex>
                                      </Box>
                                    </Grid.Col>
                                    <Grid.Col
                                      span={{ base: 12, sm: 12, md: 8, lg: 8 }}
                                    >
                                      <Box>
                                        <Box
                                          mt={{
                                            base: "1",
                                            sm: "1",
                                            md: "6",
                                            lg: "6",
                                          }}
                                        >
                                          <TextAreaForm
                                            tooltip={t("Address")}
                                            placeholder={t("Address")}
                                            required={true}
                                            nextField={"EntityFormSubmit"}
                                            name={"address"}
                                            form={form}
                                            mt={{
                                              base: 1,
                                              sm: 1,
                                              md: "0",
                                              lg: "0",
                                            }}
                                            id={"address"}
                                          />
                                        </Box>
                                      </Box>
                                    </Grid.Col>
                                  </Grid>
                                </Box>
                              </Box>
                            </Box>
                          </Grid.Col>
                        </Grid>
                      </ScrollArea>
                    </Box>
                    <Box
                      pl={`sm`}
                      pb={{ base: "xs", sm: "xs", md: "xs" }}
                      pr={8}
                      pt={"sm"}
                      className={"boxBackground borderRadiusAll"}
                    >
                      <Grid span={12}>
                        <Grid.Col>
                          <Stack right align="flex-end" h={25}>
                            <>
                              {!saveCreateLoading && (
                                <Button
                                  size="xs"
                                  color={`orange.6`}
                                  type="submit"
                                  id="EntityFormSubmit"
                                  // onClick={(values) => {
                                  //     setFormData = values;
                                  //     console.log('Form Submitted with values:', values)
                                  // }}
                                  // leftSection={<IconDeviceFloppy size={16} />}
                                >
                                  {spinner ? (
                                    <Loader color="red" type="dots" size={30} />
                                  ) : (
                                    "Submit"
                                  )}
                                </Button>
                              )}
                            </>
                          </Stack>
                        </Grid.Col>
                      </Grid>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Grid.Col>
        </Grid>
      </form>
    </Box>
  );
}

export default SignupForm;
