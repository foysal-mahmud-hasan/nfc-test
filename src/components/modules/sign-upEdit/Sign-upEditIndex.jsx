import React, { useEffect, useState } from "react";
import {
    Box,
    Grid, Progress, Title, Container
} from "@mantine/core";
import { useTranslation } from 'react-i18next';

import { getLoadingProgress } from "../../global-hook/loading-progress/getLoadingProgress.js";

import SignupEditForm from "./Sign-upEditForm.jsx";

function SignupEditIndex() {
    const { t, i18n } = useTranslation();


    const progress = getLoadingProgress()

    return (
        <>
            {progress !== 100 && <Progress color="red" size={"xs"} striped animated value={progress} />}
            {progress === 100 &&
                <>

                    <Box >
                        <SignupEditForm />
                    </Box>
                </>
            }
        </>

    );
}

export default SignupEditIndex;
