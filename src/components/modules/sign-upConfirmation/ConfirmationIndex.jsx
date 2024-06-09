import React, { useEffect, useState } from "react";
import {
    Box,
    Grid, Progress, Title, Container
} from "@mantine/core";
import { useTranslation } from 'react-i18next';

import { useOutletContext } from "react-router-dom";
import { getLoadingProgress } from "../../global-hook/loading-progress/getLoadingProgress.js";

import SignupConfirmation from "./SignupConfirmation.jsx";

function ConfirmationIndex() {
    const { t, i18n } = useTranslation();

    const context = useOutletContext();

    const progress = getLoadingProgress()

    return (
        <>
            {progress !== 100 && <Progress color="red" size={"xs"} striped animated value={progress} />}
            {progress === 100 &&
                <>
                    <Box bg={'white'} mt={6} >
                        <SignupConfirmation />
                    </Box>
                </>
            }
        </>

    );
}

export default ConfirmationIndex;
