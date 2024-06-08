import React, { useEffect, useState } from "react";
import {
    Box,
    Grid, Progress, Title, Container
} from "@mantine/core";
import { useTranslation } from 'react-i18next';

import { useOutletContext } from "react-router-dom";
import { getLoadingProgress } from "../../global-hook/loading-progress/getLoadingProgress.js";

import SignupForm from "./SignupForm.jsx";

function SignupIndex() {
    const { t, i18n } = useTranslation();
    
    const context = useOutletContext();

    const progress = getLoadingProgress()

    return (
        <>
            {progress !== 100 && <Progress color="red" size={"xs"} striped animated value={progress} />}
            {progress === 100 &&
                <>
                    <Box bg={'white'} mt={6} >
                        <SignupForm />
                    </Box>
                </>
            }
        </>

    );
}

export default SignupIndex;
