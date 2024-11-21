import React, { useEffect, useState } from "react";
import {
    Box, Button,
    Grid, Progress, Title, Group, Burger, Menu, rem, ActionIcon, NavLink,
    Center, Flex, Anchor, Container, Image
} from "@mantine/core";
import { Carousel } from '@mantine/carousel';
import { getHotkeyHandler, useDisclosure, useHotkeys, useToggle } from "@mantine/hooks";
import { useTranslation } from 'react-i18next';
import classes from '../../assets/css/FooterNavbar.module.css';
import {
    IconInfoCircle, IconTrash, IconSearch, IconSettings
} from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";
import Appza from '../../assets/images/Appza.jpg';
import LazyTasks from '../../assets/images/LazyTasks.jpg';
import LearnSphere from '../../assets/images/LearnSphere.jpg';

function FooterNavbar() {
    const { t, i18n } = useTranslation();
    const navigate = useNavigate();
    const [opened, { toggle }] = useDisclosure(false);

    // const links = [
    //     { link: '/home', label: t('Sales') },

    // ];

    // const items = links.map((link) => (
    //     <a
    //         key={link.label}
    //         href={link.link}
    //         className={classes.link}
    //         onClick={(event) => {
    //             event.preventDefault();
    //             navigate(link.link)
    //         }}
    //     >
    //         {link.label}
    //     </a>
    // ));

    // const leftLinks = [
    //     { link: '/home', label: t('Home') },
    // ];

    // const leftItems = leftLinks.map((link) => (
    //     <a
    //         key={link.label}
    //         href={link.link}
    //         className={classes.link}
    //         onClick={(event) => {
    //             event.preventDefault();
    //             navigate(link.link)
    //         }}
    //     >
    //         {link.label}
    //     </a>
    // ));


    const socialMediaSlides = [
        <Carousel.Slide key={LearnSphere}>
            <Anchor href={''} target="_blank" rel="noopener noreferrer">
                <Image h={{ base: 50, md: 60 }} fit="contain" src={LearnSphere} alt="Instagram" mt={{ md: 'xs' }} />
            </Anchor>
        </Carousel.Slide>,
        <Carousel.Slide key={Appza}>
            <Anchor href={''} target="_blank" rel="noopener noreferrer">
                <Image h={{ base: 50, md: 60 }} fit="contain" src={Appza} alt="Facebook" mt={{ md: 'xs' }} />
            </Anchor>
        </Carousel.Slide>,
        <Carousel.Slide key={LazyTasks}>
            <Anchor href={''} target="_blank" rel="noopener noreferrer">
                <Image h={{ base: 50, md: 60 }} fit="contain" src={LazyTasks} alt="LinkedIn" mt={{ md: 'xs' }} />
            </Anchor>
        </Carousel.Slide>,
    ];


    return (
        <>
            <footer className={classes.footer} >
                <Container
                    size="xl"
                    styles={(theme) => ({
                        width: '100%',
                        [`@media (minWidth: ${theme.breakpoints.md}px)`]: {
                            maxWidth: '900px',
                        },
                    })}
                >
                    <Carousel
                        height="100%"
                        slideGap="xl"
                        controlsOffset="sm"
                        controlSize={10}
                        dragFree
                        withControls={false}
                        withIndicators={false}
                        align="start"
                        slideSize={{ base: '33%' }}
                    >
                        {socialMediaSlides}
                    </Carousel>
                </Container>
            </footer>
        </>
    );
}
export default FooterNavbar;
