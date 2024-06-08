import React, { useEffect, useState } from "react";
import {
    Box,
    Grid, Progress, Title, Container,
    Flex,
    ScrollArea
} from "@mantine/core";
import { useTranslation } from 'react-i18next';

import { getLoadingProgress } from "../../global-hook/loading-progress/getLoadingProgress.js";


import { useViewportSize } from "@mantine/hooks";
import DesignSix from "../CardDesigns/DesignSix.jsx";
import ViewCard from "./ViewCard.jsx";
import { useOutletContext } from "react-router-dom";

function SignupViewIndex({ setFormData }) {
    const { t, i18n } = useTranslation();

    const progress = getLoadingProgress()

    return (
        <>
            {progress !== 100 && <Progress color="red" size={"xs"} striped animated value={progress} />}
            {progress === 100 &&
                <>
                    {/* {console.log(setFormData)} */}
                    <Box >
                        <ViewCard />
                        {/* <ViewCard /> */}
                        {/* <ContactCard /> */}
                        {/* <ContactCardPrev /> */}
                    </Box>


                    {/* <ScrollArea h={height + 100}>
                        <Box bg={'white'} p={'xs'} mt={6} >
                            <Grid columns={12} gutter={{ base: 6 }} mt={'md'}>
                                <Grid.Col span={6}>
                                    <BoldCard />
                                </Grid.Col>
                                <Grid.Col span={6}>
                                    <ElegantCard />
                                </Grid.Col>
                            </Grid>

                            <Grid columns={12} gutter={{ base: 6 }} mt={'md'}>
                                <Grid.Col span={6}>
                                    <DesignFive />
                                </Grid.Col>
                                <Grid.Col span={6}>
                                    <DesignSix />
                                </Grid.Col>
                            </Grid>
                            <Grid columns={12} gutter={{ base: 6 }} mt={'md'}>
                                <Grid.Col span={6}>
                                    <SimpleCard />
                                </Grid.Col>
                                <Grid.Col span={6}>
                                    <DesignFour />
                                </Grid.Col>
                            </Grid>

                        </Box>
                    </ScrollArea> */}
                </>
            }
        </>

    );
}

export default SignupViewIndex;
