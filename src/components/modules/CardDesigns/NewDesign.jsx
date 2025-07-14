import { Text, Flex, Grid, Center } from "@mantine/core";
import frontBg from "../../../assets/images/card-items/Front.png";
import backBg from "../../../assets/images/card-items/Back.png";
export default function NewDesign(props) {
  const { formValues, id } = props;
  return (
    <Grid columns={12} gutter={{ base: "xl" }}>
      <Grid.Col span={{ base: 12, md: 6 }} justify="center" align="center">
        {/* Front Card */}
        <div
          style={{
            width: "85.6mm",
            height: "53.9mm",
            backgroundImage: `url(${frontBg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            position: "relative",
          }}
        >
          <Flex
            w={"100%"}
            direction={"row"}
            justify="flex-end"
            align="center"
            gap="2"
            h={60}
            pr={"xs"}
          >
            <svg
              id="Layer_2"
              data-name="Layer 2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 22.88 7.14"
              width="40"
              height="14"
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
            <Flex direction={"row"} align="center" gap={2}>
              <Text
                pt={1}
                fw={500}
                fz={11}
                c="gray.6"
                style={{
                  fontFamily: "Rubik, sans-serif",
                  letterSpacing: "0px",
                  textTransform: "uppercase",
                }}
              >
                DIGITAL
              </Text>
              <Text
                pt={1}
                fw={500}
                fz={11}
                c="gray.6"
                style={{
                  fontFamily: "Rubik, sans-serif",
                  letterSpacing: "0px",
                  textTransform: "uppercase",
                }}
              >
                BUSINESS
              </Text>
              <Text
                pt={1}
                fw={500}
                fz={11}
                c="gray.6"
                style={{
                  fontFamily: "Rubik, sans-serif",
                  letterSpacing: "0px",
                  textTransform: "uppercase",
                }}
              >
                CARD
              </Text>
            </Flex>
            <Center>
              <svg
                width="25"
                height="25"
                viewBox="0 0 14.21 18.05"
                style={{
                  color: "#666",
                }}
              >
                <defs>
                  <linearGradient
                    id="linear-gradient"
                    x1="15.56"
                    y1="9.02"
                    x2="-3.59"
                    y2="9.02"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0" stopColor="#fff" />
                    <stop offset="1" stopColor="#000" />
                  </linearGradient>
                  <linearGradient
                    id="linear-gradient-2"
                    x1="19.11"
                    y1="8.98"
                    x2="-.03"
                    y2="8.98"
                    xlinkHref="#linear-gradient"
                  />
                  <linearGradient
                    id="linear-gradient-3"
                    x1="19.11"
                    y1="8.89"
                    x2="-.03"
                    y2="8.89"
                    xlinkHref="#linear-gradient"
                  />
                  <linearGradient
                    id="linear-gradient-4"
                    x1="19.11"
                    y1="8.93"
                    x2="-.03"
                    y2="8.93"
                    xlinkHref="#linear-gradient"
                  />
                </defs>
                <g>
                  <path
                    className="cls-2"
                    d="M4.08,18.05c-.48-.2-.77-.61-1.1-.99-1.43-1.66-2.38-3.56-2.76-5.71C-.53,7.09.6,3.39,3.63.29c.12-.12.3-.2.45-.29h.39s.06.03.09.04c.65.25.81.98.35,1.51-.44.5-.89.99-1.26,1.53-.97,1.39-1.56,2.93-1.75,4.62-.38,3.37.61,6.29,2.96,8.73.6.63.28,1.43-.36,1.59,0,0-.02.02-.02.02h-.39Z"
                    fill="url(#linear-gradient)"
                  />
                  <path
                    className="cls-3"
                    d="M3.6,8.84c.04-2.21.87-4.25,2.55-5.92.26-.26.56-.37.91-.26.34.11.56.34.64.69.07.32-.06.58-.26.82-.34.41-.69.82-.97,1.27-1.6,2.64-1.23,6.02.89,8.27.25.26.43.54.34.91-.08.35-.31.59-.66.69-.33.09-.62,0-.87-.25-.99-.98-1.71-2.13-2.14-3.45-.26-.79-.42-1.78-.42-2.78Z"
                    fill="url(#linear-gradient-2)"
                  />
                  <path
                    className="cls-1"
                    d="M7.23,8.97c.03-1.48.57-2.65,1.61-3.59.28-.25.62-.3.97-.18.34.12.54.37.6.72.05.31-.07.56-.28.78-.46.47-.76,1.02-.87,1.67-.17,1.02.1,1.92.83,2.66.23.23.39.49.33.83-.13.73-1.02,1.04-1.58.54-.84-.75-1.37-1.69-1.54-2.81-.04-.23-.05-.47-.06-.62Z"
                    fill="url(#linear-gradient-3)"
                  />
                  <path
                    className="cls-4"
                    d="M14.21,8.93c0,.95-.76,1.71-1.71,1.71-.95,0-1.72-.76-1.72-1.7,0-.96.76-1.72,1.72-1.72.95,0,1.71.76,1.71,1.71Z"
                    fill="url(#linear-gradient-4)"
                  />
                </g>
              </svg>
            </Center>
          </Flex>
          <Flex
            direction={"column"}
            gap={0}
            style={{
              position: "absolute",
              bottom: "18px",
              left: "30px",
              textAlign: "left",
            }}
          >
            <Text
              p={0}
              fw={700}
              fz={18}
              c="black"
              style={{
                fontFamily: "Rubik, sans-serif",
                letterSpacing: "0px",
              }}
            >
              {formValues?.name || ""}
            </Text>

            {/* Phone */}
            <Text
              fw={400}
              fz={11}
              c="gray.7"
              mt={-4}
              style={{
                fontFamily: "Rubik, sans-serif",
                marginBottom: "2px",
              }}
            >
              P: {"+" + formValues?.mobile || ""}
            </Text>

            {/* Email */}
            <Text
              fw={400}
              fz={11}
              c="gray.7"
              mt={-4}
              style={{
                fontFamily: "Rubik, sans-serif",
              }}
            >
              E: {formValues?.email || ""}
            </Text>
          </Flex>
        </div>
      </Grid.Col>

      <Grid.Col span={{ base: 12, md: 6 }} justify="center" align="center">
        {/* Back Card */}
        <div
          style={{
            width: "85.6mm",
            height: "53.9mm",
            backgroundImage: `url(${backBg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            position: "relative",
          }}
        >
          <Flex direction={"column"} align="center" justify="center" h={"100%"}>
            <Flex
              direction={"row"}
              gap={4}
              justify="flex-end"
              align="center"
              w={"100%"}
              pr={"lg"}
            >
              <Text
                fw={400}
                fz={12}
                c="gray.6"
                pt={6}
                style={{
                  fontFamily: "Rubik, sans-serif",
                  letterSpacing: "0px",
                  marginBottom: "5px",
                }}
              >
                Powered By:
              </Text>
              <svg
                id="Layer_2"
                data-name="Layer 2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 22.88 7.14"
                width="64"
                height="22"
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
            </Flex>
          </Flex>
        </div>
      </Grid.Col>
    </Grid>
  );
}
