import { useOutletContext } from "react-router-dom";
import {
  Button,
  Flex,
  Grid,
  Box,
  ScrollArea,
  Text,
  Title,
  Stack,
  Center,
} from "@mantine/core";
import { useTranslation } from "react-i18next";
import { useForm } from "@mantine/form";
import { useNavigate } from "react-router-dom";

function SignupConfirmation() {
  const { t, i18n } = useTranslation();

  const { mainAreaHeight } = useOutletContext();
  const height = mainAreaHeight - 65; //TabList height 104

  const navigate = useNavigate();

  const form = useForm({
    initialValues: {},
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form.getValues());
    navigate("/view");
  };

  return (
    <Box>
      <form onSubmit={handleSubmit}>
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
                        {t("Confirm")}
                      </Title>
                    </Grid.Col>
                  </Grid>
                </Box>
                <Box>
                  <Box>
                    <Box mt={"4"}>
                      <ScrollArea
                        h={{ base: height + 11, md: height - 32 }}
                        scrollbarSize={2}
                        scrollbars="y"
                        type="never"
                      >
                        <Grid columns={12} gutter={{ base: 6 }}>
                          {/* 1st column */}
                          <Grid.Col span={{ base: 12, sm: 12, md: 12, lg: 12 }}>
                            <Box
                              h={{ base: "100%", sm: "100%", md: height - 36 }}
                              pl={`4`}
                              pr={4}
                              pt={"4"}
                              pb={{ base: "sm", sm: "sm", md: 0 }}
                              className="borderRadiusAll"
                            >
                              <Center>
                                <Text>Confirm your email</Text>
                              </Center>
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
                                <Flex direction={`column`} gap={0}>
                                  <Text fz={12} fw={400}>
                                    {t("Submit")}
                                  </Text>
                                </Flex>
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

export default SignupConfirmation;
