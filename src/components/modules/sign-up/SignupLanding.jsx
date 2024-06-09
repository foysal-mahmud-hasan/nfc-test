import React, { useEffect, useState } from "react";
import {
    Box,
    Grid, Progress, Title, Container, Flex, Image, Text
} from "@mantine/core";
import { useTranslation } from 'react-i18next';

import { Carousel } from '@mantine/carousel';

import { getLoadingProgress } from "../../global-hook/loading-progress/getLoadingProgress.js";


function SignupLanding() {
    const { t, i18n } = useTranslation();



    const progress = getLoadingProgress()

    return (
        <>
            {progress !== 100 && <Progress color="red" size={"xs"} striped animated value={progress} />}
            {progress === 100 &&
                <>
                    <Flex
                        justify={'center'}
                        align={'center'}>

                    </Flex>
                </>
            }
        </>

    );
}

export default SignupLanding;
