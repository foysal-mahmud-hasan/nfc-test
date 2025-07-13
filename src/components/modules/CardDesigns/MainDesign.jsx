import {
  Card,
  Avatar,
  Text,
  Group,
  Box,
  Divider,
  Flex,
  Grid,
} from "@mantine/core";
import {
  IconPhone,
  IconMail,
  IconMapPin,
  IconUserCircle,
  IconPhoneCall,
  IconBrandLinkedin,
  IconWorld,
} from "@tabler/icons-react";
import logo from "../../../assets/images/card-items/lazycodersLogo.png";
import turtle from "../../../assets/images/card-items/turtleLogo.png";
import QrWhite from "../../../assets/images/card-items/QrWhite.png";
import QRBlack from "../../../assets/images/card-items/QRBlack.png";
import lazycodersLogoWhite from "../../../assets/images/card-items/lazycodersLogoWhite.svg";
export default function MainDesign(props) {
  const { formValues, id } = props;
  return (
    <Grid columns={12} gutter={{ base: "xl" }}>
      <Grid.Col span={{ base: 12, md: 6 }} justify="center" align="center">
        <div
          style={{
            backgroundColor: "#FFFFFF",
            width: "85.6mm",
            height: "53.9mm",
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            position: "relative",
          }}
        >
          <div
            style={{
              backgroundColor: "#D5712C",
              position: "absolute",
              height: "46px",
              width: "30px",
              top: 0,
              left: "45.6%",
              borderRadius: "0px 0px 50px 50px",
              zIndex: 99,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <IconUserCircle
              style={{
                width: "65%",
                height: "65%",
                marginTop: "16px",
                color: "white",
              }}
              stroke={1.5}
            />
          </div>
          <div
            style={{
              backgroundColor: "#D5712C",
              position: "absolute",
              height: "140px",
              width: "30px",
              bottom: 0,
              left: "45.6%",
              borderRadius: "50px 50px 0px 0px",
              zIndex: 99,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              gap: 0,
            }}
          >
            <IconPhoneCall
              style={{
                width: "65%",
                height: "65%",
                marginTop: "16px",
                color: "white",
              }}
              stroke={1.5}
            />
            <IconMail
              style={{
                width: "65%",
                height: "65%",
                marginTop: "10px",
                color: "white",
              }}
              stroke={1.5}
            />
            <IconBrandLinkedin
              style={{
                width: "65%",
                height: "65%",
                marginTop: "10px",
                color: "white",
              }}
              stroke={1.5}
            />
            <IconWorld
              style={{
                width: "65%",
                height: "65%",
                marginTop: "10px",
                color: "white",
              }}
              stroke={1.5}
            />
            <IconMapPin
              style={{
                width: "65%",
                height: "65%",
                marginTop: "10px",
                marginBottom: "10px",
                color: "white",
              }}
              stroke={1.5}
            />
          </div>
          <div style={{ backgroundColor: "#FFFFFF", position: "relative" }}>
            <div
              style={{
                position: "absolute",
                left: 2,
                bottom: 4,
                width: "146px",
                height: "116px",
                backgroundImage: `url(${turtle})`,
                backgroundSize: "contain",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                transform: "rotate(0deg)",
                zIndex: 0,
              }}
            ></div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <img
                src={logo}
                style={{
                  width: "110px",
                  height: "15px",
                  marginTop: "53px",
                }}
              />

              <div
                style={{
                  position: "relative",
                  width: "100px",
                  height: "100px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {/* QR content */}
                <div
                  style={{
                    position: "relative",
                    backgroundImage: `url(${QRBlack})`,
                    backgroundSize: "contain",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    width: "75px",
                    height: "75px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    zIndex: 1,
                  }}
                >
                  <img
                    src={formValues?.qr_code}
                    style={{
                      width: "60px",
                      height: "60px",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div style={{ backgroundColor: "#123135" }}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div>
                <Box>
                  <Text fw={600} fz={10} c={"#FFFFFF"} mt={12}>
                    {formValues?.name}
                  </Text>
                </Box>
                <Box>
                  <Text fw={400} fz={6} c={"#FFFFFF"} mt={2}>
                    {formValues?.designation}
                  </Text>
                </Box>
                <Box>
                  <Text fw={600} fz={6} c={"#FFFFFF"} mt={2}>
                    {formValues?.company_name}
                  </Text>
                </Box>

                <Box
                  style={{
                    display: "flex",
                    justifyContent: "start",
                    minHeight: "30px",
                    alignItems: "center",
                  }}
                >
                  <Text fw={400} fz={8} c={"#FFFFFF"} mt={30}>
                    {formValues?.mobile}
                  </Text>
                </Box>
                <Box
                  style={{
                    marginTop: 4,
                    display: "flex",
                    justifyContent: "start",
                    minHeight: "28px",
                    alignItems: "center",
                  }}
                >
                  <Text fw={400} fz={8} c={"#FFFFFF"}>
                    {formValues?.email}
                  </Text>
                </Box>
                <Box
                  style={{
                    marginTop: 2,
                    display: "flex",
                    justifyContent: "start",
                    minHeight: "20px",
                    alignItems: "center",
                  }}
                >
                  <Text fw={400} fz={8} c={"#FFFFFF"}>
                    {formValues?.linkedin}
                  </Text>
                </Box>
                <Box
                  style={{
                    marginTop: 2,
                    display: "flex",
                    justifyContent: "start",
                    minHeight: "20px",
                    alignItems: "center",
                  }}
                >
                  <Text fw={400} fz={8} c={"#FFFFFF"} pt={8}>
                    {formValues?.website}
                  </Text>
                </Box>
                <Box
                  style={{
                    marginTop: 6,
                    display: "flex",
                    justifyContent: "start",
                    alignItems: "center",
                    minHeight: "24px",
                    maxHeight: "24px",
                  }}
                >
                  <p
                    style={{
                      fontWeight: 400,
                      fontSize: "7px",
                      color: "#FFFFFF",
                      wordBreak: "break-word",
                      overflowWrap: "break-word",
                      width: "100px",
                    }}
                  >
                    {formValues?.address}
                  </p>
                </Box>
              </div>
            </div>
          </div>
        </div>
      </Grid.Col>
      <Grid.Col span={{ base: 12, md: 6 }} justify="center" align="center">
        <div
          style={{
            backgroundColor: "#123135",
            width: "85.6mm",
            height: "53.9mm",
            // display: "grid",
            // gridTemplateColumns: "repeat(2, 1fr)",
            position: "relative",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <img
              src={lazycodersLogoWhite}
              style={{
                width: "140px",
                height: "18px",
                marginTop: "22px",
              }}
            />
            <div
              style={{
                backgroundColor: "#1B595F",
                height: "1px",
                width: "100%",
                marginTop: "6px",
              }}
            ></div>
            <div
              style={{
                marginTop: "5px",
                display: "flex",
                justifyContent: "space-around",
              }}
            >
              <div
                style={{
                  position: "relative",
                  width: "100px",
                  height: "100px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {/* QR content */}
                <img
                  src={formValues?.profile_pic}
                  style={{
                    borderRadius: "4px",
                    width: "75px",
                    height: "75px",
                  }}
                />
              </div>
              <div
                style={{
                  position: "relative",
                  width: "100px",
                  height: "100px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {/* QR content */}
                <div
                  style={{
                    position: "relative",
                    backgroundImage: `url(${QrWhite})`,
                    backgroundSize: "contain",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    width: "75px",
                    height: "75px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    zIndex: 1,
                  }}
                >
                  <img
                    src={formValues?.qr_code}
                    style={{
                      width: "60px",
                      height: "60px",
                    }}
                  />
                </div>
              </div>
            </div>
            <Box>
              <Text fw={400} fz={12} c={"#FFFFFF"} mt={2}>
                {formValues?.designation}
              </Text>
            </Box>
            <Box>
              <Text fw={400} fz={7} c={"#FFFFFF"} mt={2}>
                {formValues?.designation}
              </Text>
            </Box>
          </div>
        </div>
      </Grid.Col>
    </Grid>
  );
}
