import React, { useState } from "react";
import {
    Box,
    Grid, Progress,
    ScrollArea,
    Center
} from "@mantine/core";
import { useTranslation } from 'react-i18next';
import { useOutletContext } from "react-router-dom";

import { getLoadingProgress } from "../../global-hook/loading-progress/getLoadingProgress.js";
import BoldCard from "../CardDesigns/BoldCard.jsx";
import ElegantCard from "../CardDesigns/ElegantCard.jsx";
import SimpleCard from "../CardDesigns/SimpleCard.jsx";
import DesignFour from "../CardDesigns/DesignFour.jsx";
import DesignFive from "../CardDesigns/DesignFive.jsx";
import DesignSix from "../CardDesigns/DesignSix.jsx";

function SelectDesignIndex({ setFormData }) {
    const { t, i18n } = useTranslation();
    const { mainAreaHeight } = useOutletContext();
    const height = mainAreaHeight - 62;

    const progress = getLoadingProgress();
    const [selectedDesign, setSelectedDesign] = useState(null);

    const handleCardClick = (design) => {
        setSelectedDesign(design);
        // Pass the whole design component
        setFormData(design);
        console.log(`Selected Design:`, design);
    };

    return (
        <>
            {progress !== 100 && <Progress color="red" size={"xs"} striped animated value={progress} />}
            {progress === 100 &&
                <>
                    <Box>
                        <Grid gutter={8}>
                            <Grid.Col p={0}>
                                <Box>
                                    <Box>
                                        <Box mt={6} mb={6} className="boxBackground borderRadiusAll">
                                            <ScrollArea style={{ height: `calc(${height}px + 120px)` }} scrollbarSize={2} scrollbars="y">
                                                <Grid columns={12} gutter="xl" mt="md">
                                                    <Grid.Col span={12} md={6} style={{ display: 'flex', justifyContent: 'center' }}>
                                                        <Box onClick={() => handleCardClick(<BoldCard />)}>
                                                            <BoldCard />
                                                        </Box>
                                                    </Grid.Col>
                                                    <Grid.Col span={12} md={6} style={{ display: 'flex', justifyContent: 'center' }}>
                                                        <Box onClick={() => handleCardClick(<SimpleCard />)}>
                                                            <SimpleCard />
                                                        </Box>
                                                    </Grid.Col>
                                                </Grid>
                                                <Grid columns={12} gutter="xl" mt="md">
                                                    <Grid.Col span={12} md={6} style={{ display: 'flex', justifyContent: 'center' }}>
                                                        <Box onClick={() => handleCardClick(<ElegantCard />)}>
                                                            <ElegantCard />
                                                        </Box>
                                                    </Grid.Col>
                                                    <Grid.Col span={12} md={6} style={{ display: 'flex', justifyContent: 'center' }}>
                                                        <Box onClick={() => handleCardClick(<DesignFour />)}>
                                                            <DesignFour />
                                                        </Box>
                                                    </Grid.Col>
                                                </Grid>
                                                <Grid columns={12} gutter="xl" mt="md">
                                                    <Grid.Col span={12} md={6} style={{ display: 'flex', justifyContent: 'center' }}>
                                                        <Box onClick={() => handleCardClick(<DesignFive />)}>
                                                            <DesignFive />
                                                        </Box>
                                                    </Grid.Col>
                                                    <Grid.Col span={12} md={6} style={{ display: 'flex', justifyContent: 'center' }}>
                                                        <Box onClick={() => handleCardClick(<DesignSix />)}>
                                                            <DesignSix />
                                                        </Box>
                                                    </Grid.Col>
                                                </Grid>
                                            </ScrollArea>
                                        </Box>
                                    </Box>
                                </Box>
                            </Grid.Col>
                        </Grid>
                    </Box>
                </>
            }
        </>
    );
}

export default SelectDesignIndex;
