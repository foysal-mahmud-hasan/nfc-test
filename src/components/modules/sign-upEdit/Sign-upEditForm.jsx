import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import {
  Button,
  rem,
  Flex,
  Grid,
  Box,
  ScrollArea,
  Text,
  Title,
  Stack,
  Tooltip,
  Center,
  Image,
  Loader,
  LoadingOverlay,
  useMantineTheme,
  Modal,
} from "@mantine/core";
import { useTranslation } from "react-i18next";
import { IconCheck, IconX } from "@tabler/icons-react";
import { useDisclosure } from "@mantine/hooks";

import { useForm, isNotEmpty } from "@mantine/form";
import { modals } from "@mantine/modals";
import { notifications } from "@mantine/notifications";
import InputForm from "../../form-builders/InputForm.jsx";
import TextAreaForm from "../../form-builders/TextAreaForm";
import { useNavigate } from "react-router-dom";
import PhoneNumberInput from "../../form-builders/PhoneNumInput.jsx";
import axios from "axios";
import { Dropzone, IMAGE_MIME_TYPE } from "@mantine/dropzone";

function SignupEditForm(props) {
  const { id } = props;
  const { t, i18n } = useTranslation();

  const { mainAreaHeight } = useOutletContext();
  const height = mainAreaHeight - 65; //TabList height 104
  const [spinner, setSpinner] = useState(false);
  const [formValues, setFormValues] = useState(null);
  const navigate = useNavigate();
  const form = useForm({
    initialValues: {
      name: formValues?.name || "",
      email: formValues?.email || "",
      mobile: formValues?.mobile || "",
      phone: formValues?.mobile || "",
      about: formValues?.about_me || "",
      profile_pic: formValues?.profile_pic || "",
      company_name: formValues?.company_name || "",
      designation: formValues?.designation || "",
      company_logo: formValues?.company_logo || "",
      address: formValues?.address || "",
      xtwitter: formValues?.xtwitter || "",
      linkedin: formValues?.linkedin || "",
      facebook: formValues?.facebook || "",
      instagram: formValues?.instagram || "",
      website: formValues?.website || "",
      company_email: formValues?.company_email || "",
    },
    validate: {
      name: isNotEmpty(),
      email: (value) => {
        if (!value || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          return true;
        }
        return null;
      },
      phone: isNotEmpty(),
      about: isNotEmpty(),
      company_name: isNotEmpty(),
      designation: isNotEmpty(),
      address: isNotEmpty(),
      // Remove required validation for images in edit mode - they already exist
      profile_pic: (value) => {
        // Only validate if no existing image and no new upload
        if (!value && !uploadedImage && !formValues?.profile_pic) {
          return "Profile picture is required";
        }
        return null;
      },
      company_logo: (value) => {
        // Only validate if no existing image and no new upload
        if (!value && !companyLogoImage && !formValues?.company_logo) {
          return "Company logo is required";
        }
        return null;
      },
      company_email: (value) => {
        if (value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          return true;
        }
        return null;
      },
    },
  });
  const theme = useMantineTheme();
  const [uploadedImage, setUploadedImage] = useState(null);
  const [companyLogoImage, setCompanyLogoImage] = useState(null);
  const [profilePreviewImage, setProfilePreviewImage] = useState(null);
  const [companyLogoPreviewImage, setCompanyLogoPreviewImage] = useState(null);
  const [errorModal, setErrorModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [confirmModal, setConfirmModal] = useState(false);

  useEffect(() => {
    return () => {
      if (profilePreviewImage) URL.revokeObjectURL(profilePreviewImage);
      if (companyLogoPreviewImage) URL.revokeObjectURL(companyLogoPreviewImage);
    };
  }, [profilePreviewImage, companyLogoPreviewImage]);

  useEffect(() => {
    if (formValues) {
      form.setValues({
        name: formValues.name || "",
        email: formValues.email || "",
        mobile: formValues.mobile || "",
        phone: formValues.mobile || "",
        about: formValues.about_me || "",
        profile_pic: formValues.profile_pic || "",
        company_name: formValues.company_name || "",
        designation: formValues.designation || "",
        company_logo: formValues.company_logo || "",
        address: formValues.address || "",
        xtwitter: formValues.xtwitter || "",
        linkedin: formValues.linkedin || "",
        facebook: formValues.facebook || "",
        instagram: formValues.instagram || "",
        website: formValues.website || "",
        company_email: formValues.company_email || "",
      });
    }
  }, [formValues]);

  // Fetch form values when component mounts
  useEffect(() => {
    if (id) {
      setSpinner(true);
      axios({
        method: "get",
        url: `${import.meta.env.VITE_API_GATEWAY_URL}/nfc-user-details/${id}`,
        headers: {},
      })
        .then((res) => {
          if (res.status === 200) {
            setSpinner(false);
            setFormValues(res.data.data);
          }
        })
        .catch((error) => {
          setSpinner(false);
          console.error("Error fetching user details:", error);

          let errorMsg = "Failed to load user details. Please try again.";

          if (error.response) {
            errorMsg =
              error.response.data?.message ||
              error.response.data?.error ||
              `Server error: ${error.response.status}`;
          } else if (error.request) {
            errorMsg = "Network error. Please check your internet connection.";
          } else {
            errorMsg = error.message || "An unexpected error occurred.";
          }

          setErrorMessage(errorMsg);
          setErrorModal(true);
        });
    }
  }, [id]);
  return (
    <Box>
      <Modal
        opened={confirmModal}
        centered
        onClose={() => setConfirmModal(false)}
      >
        <Flex
          className="borderRadiusAll"
          h={height / 5}
          justify={"center"}
          align={"center"}
          direction={"column"}
        >
          <Text ta={"center"} fz={14} fw={600} p={"xs"}>
            Successfully Edited.
          </Text>
          <Text ta={"center"} fz={12} fw={600} p={"xs"}>
            Go back to to card View
          </Text>
        </Flex>
        <Flex
          className="borderRadiusAll"
          justify={"center"}
          align={"center"}
          pb={"xs"}
          mt={"4"}
        >
          <Button
            color="orange.5"
            size="xs"
            mt={"xs"}
            onClick={() => {
              setConfirmModal(false);
              form.reset();
              navigate(`/view/${id}`);
            }}
          >
            Accept
          </Button>
        </Flex>
      </Modal>

      <Modal opened={errorModal} centered>
        <Flex
          className="borderRadiusAll"
          h={height / 5}
          justify={"center"}
          align={"center"}
          direction={"column"}
        >
          <Text ta={"center"} fz={14} fw={600} p={"xs"} c="red">
            Update Failed
          </Text>
          <Text ta={"center"} fz={12} fw={400} p={"xs"}>
            {errorMessage}
          </Text>
        </Flex>
        <Flex
          className="borderRadiusAll"
          justify={"center"}
          align={"center"}
          pb={"xs"}
          mt={"4"}
        >
          <Button
            color="red.5"
            size="xs"
            mt={"xs"}
            onClick={() => {
              setErrorModal(false);
              setErrorMessage("");
            }}
          >
            Try Again
          </Button>
        </Flex>
      </Modal>
      <form
        onSubmit={form.onSubmit((values) => {
          const formValue = {};

          // Use form values for social media fields
          if (values.xtwitter) {
            formValue["xtwitter"] = values.xtwitter;
          }
          if (values.linkedin) {
            formValue["linkedin"] = values.linkedin;
          }
          if (values.facebook) {
            formValue["facebook"] = values.facebook;
          }
          if (values.instagram) {
            formValue["instagram"] = values.instagram;
          }
          if (values.website) {
            formValue["website"] = values.website;
          }
          if (values.company_email) {
            formValue["company_email"] = values.company_email;
          }
          formValue["name"] = values.name;
          formValue["email"] = values.email;
          formValue["mobile"] = values.phone || values.mobile;
          formValue["about_me"] = values.about;
          formValue["company_name"] = values.company_name;
          formValue["designation"] = values.designation;
          formValue["address"] = values.address;

          // Only include image fields if new images are uploaded
          if (uploadedImage) {
            formValue["profile_pic"] = uploadedImage;
          }
          if (companyLogoImage) {
            formValue["company_logo"] = companyLogoImage;
          }

          modals.openConfirmModal({
            title: <Text size="md"> {t("FormConfirmationTitle")}</Text>,
            children: <Text size="sm"> {t("FormConfirmationMessage")}</Text>,
            labels: { confirm: "Confirm", cancel: "Cancel" },
            confirmProps: { color: "red" },
            onCancel: () => console.log("Cancel"),
            onConfirm: () => {
              // console.log(values);
              setSpinner(true);
              axios
                .post(
                  `${
                    import.meta.env.VITE_API_GATEWAY_URL
                  }/nfc-user-update/${id}`,
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
                  }

                  notifications.show({
                    color: "teal",
                    title: t("Updated Successfully"),
                    icon: <IconCheck size="1rem" />,
                    autoClose: 2000,
                  });
                  form.reset();
                  // navigate(`/sign-up/${id}`);
                  setConfirmModal(true);
                })
                .catch((error) => {
                  setSpinner(false);
                  console.error("Error:", error);

                  let errorMsg = "Something went wrong. Please try again.";

                  if (error.response) {
                    // Server responded with error status
                    errorMsg =
                      error.response.data?.message ||
                      error.response.data?.error ||
                      error.response.data?.errors?.[0]?.message ||
                      `Server error: ${error.response.status}`;
                  } else if (error.request) {
                    // Network error
                    errorMsg =
                      "Network error. Please check your internet connection.";
                  } else {
                    // Other error
                    errorMsg = error.message || "An unexpected error occurred.";
                  }

                  setErrorMessage(errorMsg);
                  setErrorModal(true);
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
                                            nextField={"xtwitter"}
                                            name={"phone"}
                                            form={form}
                                            id={"phone"}
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
                                            placeholder={t("InstaAccount")}
                                            required={false}
                                            nextField={"about"}
                                            name={"instagram"}
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
                                          opened={!!form.errors.profile_pic}
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
                                            <Dropzone
                                              accept={IMAGE_MIME_TYPE}
                                              onDrop={(e) => {
                                                setUploadedImage(e[0]);
                                                const previewUrl =
                                                  URL.createObjectURL(e[0]);
                                                setProfilePreviewImage(
                                                  previewUrl
                                                );
                                                form.setFieldValue(
                                                  "profile_pic",
                                                  e[0]
                                                );
                                              }}
                                              multiple={false}
                                              style={{
                                                border: form.errors.profile_pic
                                                  ? `2px dashed ${theme.colors.red[3]}`
                                                  : `2px dashed ${theme.colors.gray[3]}`,
                                                borderRadius: "4px",
                                                padding: "20px",
                                                textAlign: "center",
                                              }}
                                            >
                                              <Center>
                                                {profilePreviewImage ? (
                                                  <Image
                                                    src={profilePreviewImage}
                                                    height={190}
                                                    fit="cover"
                                                    alt="Profile picture"
                                                  />
                                                ) : formValues?.profile_pic ? (
                                                  <Image
                                                    src={formValues.profile_pic}
                                                    height={190}
                                                    fit="cover"
                                                    alt="Profile picture"
                                                  />
                                                ) : (
                                                  <Center h={190}>
                                                    <Text
                                                      c={
                                                        form.errors
                                                          .profile_pic && "red"
                                                      }
                                                    >
                                                      {form.errors.profile_pic
                                                        ? t(
                                                            "Profile picture is required"
                                                          )
                                                        : t(
                                                            "DropProfilePictureHere"
                                                          )}
                                                    </Text>
                                                  </Center>
                                                )}
                                              </Center>
                                            </Dropzone>
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
                                          placeholder={t("CompanyWebsite")}
                                          required={false}
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
                                          placeholder={t("CompanyEmail")}
                                          required={false}
                                          nextField={"address"}
                                          name={"company_email"}
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
                                        opened={!!form.errors.company_logo}
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
                                          <Dropzone
                                            accept={IMAGE_MIME_TYPE}
                                            onDrop={(e) => {
                                              setCompanyLogoImage(e[0]);
                                              const previewUrl =
                                                URL.createObjectURL(e[0]);
                                              setCompanyLogoPreviewImage(
                                                previewUrl
                                              );
                                              form.setFieldValue(
                                                "company_logo",
                                                e[0]
                                              );
                                            }}
                                            multiple={false}
                                            style={{
                                              border: form.errors.company_logo
                                                ? `2px dashed ${theme.colors.red[3]}`
                                                : `2px dashed ${theme.colors.gray[3]}`,
                                              borderRadius: "4px",
                                              padding: "20px",
                                              textAlign: "center",
                                            }}
                                          >
                                            <Center>
                                              {companyLogoPreviewImage ? (
                                                <Image
                                                  src={companyLogoPreviewImage}
                                                  height={190}
                                                  fit="cover"
                                                  alt="Company logo"
                                                />
                                              ) : formValues?.company_logo ? (
                                                <Image
                                                  src={formValues.company_logo}
                                                  height={190}
                                                  fit="cover"
                                                  alt="Company logo"
                                                />
                                              ) : (
                                                <Center h={190}>
                                                  <Text
                                                    c={
                                                      form.errors
                                                        .company_logo && "red"
                                                    }
                                                  >
                                                    {form.errors.company_logo
                                                      ? t(
                                                          "Company logo is required"
                                                        )
                                                      : t(
                                                          "DropCompanyLogoHere"
                                                        )}
                                                  </Text>
                                                </Center>
                                              )}
                                            </Center>
                                          </Dropzone>
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

export default SignupEditForm;
