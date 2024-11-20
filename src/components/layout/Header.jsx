import {
    HoverCard,
    Group,
    Button,
    UnstyledButton,
    Text,
    SimpleGrid,
    ThemeIcon,
    Anchor,
    Divider,
    Center,
    Box,
    Burger,
    rem,
    useMantineTheme,
    Image,
    Notification, NavLink, Container, Flex, ScrollArea
} from "@mantine/core";
import Logo from "../../assets/images/tbd-logo.png";

import { useDisclosure, useFullscreen, useHotkeys } from "@mantine/hooks";
import {
    IconNotification,
    IconCode,
    IconBook,
    IconChartPie3,
    IconFingerprint,
    IconCoin,
    IconWifiOff,
} from "@tabler/icons-react";
import HeaderStyle from "./../../assets/css/Header.module.css";

import "@mantine/spotlight/styles.css";
import React, { useEffect, useState } from "react";
import flagBD from "../../assets/images/flags/bd.svg";
import flagGB from "../../assets/images/flags/gb.svg";
import { useTranslation } from "react-i18next";
import { Link, useNavigate, useLocation } from "react-router-dom";

import LazyCoders from "../../assets/images/LazyCoders.jpg"



const languages = [
    { label: "EN", value: "en", flag: flagGB },
    { label: "BN", value: "bn", flag: flagBD },
];

export default function Header() {
    const [opened, { open, close }] = useDisclosure(false);
    const { t, i18n } = useTranslation();
    const navigate = useNavigate();
    const location = useLocation(); // Add this line to get the current location
    const theme = useMantineTheme();

    // useEffect(() => {
    //     console.log('Current location:', location.pathname);
    // }, [location]);

    const [isClicked, setIsClicked] = useState(false);
    const path = '/sign-up'
    const pa = location.pathname;
    const handleClick = () => {
        console.log(path)
        console.log(pa);
        navigate(path);
    };

    const isHomePage = location.pathname === "/";

    return (
        <Container
            size="xl"
            styles={(theme) => ({
                width: '100%',
                [`@media (minWidth: ${theme.breakpoints.md}px)`]: {
                    maxWidth: '900px',
                },
            })}
        >
            <Box bg={'white'} pos={`relative`}>
                <Group justify="space-between"  bg={'white'} h={40} className="borderRadiusHeader">
                    <Link to="/">
                        <Image h={40} fit={'contain'} maw={{ base: '50%', md: '60%' }} src={LazyCoders} alt="Facebook" />
                    </Link>
                    {isHomePage && !isClicked && (
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
                                        {t('SignUp')}
                                    </Text>
                                </Flex>
                            </Button>
                        )}                        
                </Group>

            </Box>
        </Container>
    );
}
