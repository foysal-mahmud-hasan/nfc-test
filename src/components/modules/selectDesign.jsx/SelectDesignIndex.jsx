import React, { useState } from "react";
import {
    Box,
    Grid, Progress, Container,
    ScrollArea,
    Center,
    Flex,
    Text
} from "@mantine/core";
import { useNavigate } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import { modals } from "@mantine/modals";
import { getLoadingProgress } from "../../global-hook/loading-progress/getLoadingProgress.js";
import BoldCard from "../CardDesigns/BoldCard.jsx";
import ElegantCard from "../CardDesigns/ElegantCard.jsx";
import SimpleCard from "../CardDesigns/SimpleCard.jsx";
import DesignFour from "../CardDesigns/DesignFour.jsx";
import DesignFive from "../CardDesigns/DesignFive.jsx";
import { useViewportSize } from "@mantine/hooks";
import DesignSix from "../CardDesigns/DesignSix.jsx";
import { useOutletContext } from "react-router-dom";

function SelectDesignIndex({ setFormData }) {
    const { t, i18n } = useTranslation();

    const { mainAreaHeight } = useOutletContext();
    const height = mainAreaHeight - 62;

    const navigate = useNavigate();

    const progress = getLoadingProgress()

    const [selectedDesign, setSelectedDesign] = useState(null);

    const handleCardClick = (design) => {
        modals.openConfirmModal({
            title: (
                <Text size="md"> {t("FormConfirmationTitle")}</Text>
            ),
            children: (
                <Text size="sm"> {t("FormConfirmationMessageEdit")}</Text>
            ),
            labels: { confirm: t('Submit'), cancel: t('Cancel') }, confirmProps: { color: 'orange.6' },
            onCancel: () => console.log('Cancel'),
            onConfirm: () => {
                setSelectedDesign(design);
                navigate('/sign-upConfirmation');
                console.log(`Selected Design: ${design}`);
            },
        })

        // You can pass this design to another function or component here

        // Example: setFormData(design);
    };

    return (
        <>
            {progress !== 100 && <Progress color="red" size={"xs"} striped animated value={progress} />}
            {progress === 100 &&
                <>
                    <Box>
                        <Grid columns={12} gutter={{ base: 8 }} >
                            <Grid.Col p={'0'} span={12}>
                                <Box>
                                    <Box>
                                        <Box mt={6} mb={6} className={'boxBackground borderRadiusAll'}>
                                            <ScrollArea h={{ base: height + 115, md: height + 76 }} scrollbarSize={2} scrollbars="y" type="never" w={'100%'} >
                                                <Grid columns={12} gutter={'xl'} mt={'md'} >
                                                    <Grid.Col span={{ base: 12, md: 6 }}>
                                                        <Flex
                                                            justify={'center'}
                                                            align={'center'}
                                                            mt={{ base: 'md', md: 0 }}
                                                        >
                                                            <Box onClick={() => handleCardClick('BoldCard')}>
                                                                <BoldCard />
                                                            </Box>

                                                        </Flex>

                                                    </Grid.Col>
                                                    <Grid.Col span={{ base: 12, md: 6 }}>
                                                        <Center>
                                                            <Box onClick={() => handleCardClick('ElegantCard')}>
                                                                <ElegantCard />
                                                            </Box>
                                                        </Center>
                                                    </Grid.Col>
                                                </Grid>
                                                <Grid columns={12} gutter={'xl'} mt={'md'}>
                                                    <Grid.Col span={{ base: 12, md: 6 }}>
                                                        <Center>
                                                            <Box onClick={() => handleCardClick('SimpleCard')}>
                                                                <SimpleCard />
                                                            </Box>
                                                        </Center>
                                                    </Grid.Col>
                                                    <Grid.Col span={{ base: 12, md: 6 }}>
                                                        <Center>
                                                            <Box onClick={() => handleCardClick('DesignFour')}>
                                                                <DesignFour />
                                                            </Box>
                                                        </Center>
                                                    </Grid.Col>
                                                </Grid>
                                                <Grid columns={12} gutter={'xl'} mt={'md'}>
                                                    <Grid.Col span={{ base: 12, md: 6 }}>
                                                        <Center>
                                                            <Box onClick={() => handleCardClick('DesignFive')}>
                                                                <DesignFive />
                                                            </Box>
                                                        </Center>
                                                    </Grid.Col>
                                                    <Grid.Col span={{ base: 12, md: 6 }}>
                                                        <Center>
                                                            <Box onClick={() => handleCardClick('DesignSix')}>
                                                                <DesignSix />
                                                            </Box>
                                                        </Center>
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
