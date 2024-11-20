import { Card, Avatar, Text, Group, Box, Divider, Image, Center, Grid, Flex, Stack, Button, Space } from '@mantine/core';
import { IconPhone, IconMail, IconMapPin } from '@tabler/icons-react';
import { readLocalStorageValue, } from '@mantine/hooks';
function DesignSix(props) {

    const {formValues, id} = props;
    return (
        <Card shadow="lg" radius="md" w={{ base: '60mm', md: '60mm' }} h={'100mm'} style={{ backgroundColor: '#F8F9FA' }}>

            <Box >

                <Image
                    h={'30mm'}
                    w={'100%'}
                    src={formValues?.profile_pic}
                    fit='cover'
                >
                </Image>

            </Box>
            <Box ta="center" mt={'xl'}>
                <Text weight={700} size="md" color="#343A40">{formValues?.name}</Text>
                <Text c="dimmed" size="sm">{formValues?.designation}</Text>
            </Box>
            <Divider my="sm" />
            <Box >
                <Grid columns={12} gutter={1}>
                    <Grid.Col span={1}>
                        <IconPhone size={14} />
                    </Grid.Col>
                    <Grid.Col span={11} mt={2}>
                        <Text size="xs" fw={700}>{formValues?.mobile}</Text>
                    </Grid.Col>
                </Grid>
                <Grid columns={12} gutter={1}>
                    <Grid.Col span={1}>
                        <IconMail size={14} />
                    </Grid.Col>
                    <Grid.Col span={11} mt={2}>
                        <Text size="xs" fw={700}>{formValues?.email}</Text>
                    </Grid.Col>
                </Grid>
                <Grid columns={12} gutter={1}>
                    <Grid.Col span={1}>
                        <IconMapPin size={14} />
                    </Grid.Col>
                    <Grid.Col span={11} mt={2}>
                        <Text size="xs" fw={700}>{formValues?.address}</Text>
                    </Grid.Col>
                </Grid>
            </Box>

            <Stack
                align="center"
                justify="flex-end"

            >
                <Box sx={{ textAlign: 'center', backgroundColor: '#343A40' }}>
                    <Center >
                        <Image src={formValues?.company_logo} height={60} fit="contain" alt="Company Logo" maw={'80%'} />
                    </Center>
                </Box>
            </Stack>
        </Card>
    );
}

export default DesignSix;
