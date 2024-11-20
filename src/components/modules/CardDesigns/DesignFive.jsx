import { Card, Avatar, Text, Group, Box, Divider, Image, Center, Grid, Flex, Stack, Button, Space } from '@mantine/core';
import { IconPhone, IconMail, IconMapPin } from '@tabler/icons-react';
import { readLocalStorageValue, } from '@mantine/hooks';
function DesignFive(props) {

    const {formValues, id} = props;
    return (
        <Card shadow="lg" padding="lg" radius="md" w={{ base: '60mm', md: '60mm' }} h={'100mm'} style={{ backgroundColor: '#F8F9FA' }}>

            <Box sx={{ textAlign: 'center' }}>
                <Center >
                    <Avatar
                        src={formValues?.profile_pic}
                        size={70}
                        radius="xl"
                        sx={{ border: '2px solid #343A40' }}
                    />
                </Center>
            </Box>
            <Box ta="center" mt={'xl'}>
                <Text weight={700} size="md" color="#343A40">{formValues?.name}</Text>
                <Text c="dimmed" size="sm">{formValues?.designation}</Text>
            </Box>
            <Divider my="sm" />
            <Space h={'sm'}></Space>
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
                mt={'xs'}
                align="center"
                justify="flex-end"


            >
                <Box ta='center' sx={{ backgroundColor: '#343A40' }}>
                    <Center >
                        <Image pb={'xs'} src={formValues?.company_logo} height={90} fit="contain" alt="Company Logo" maw={'80%'} />
                    </Center>
                </Box>
            </Stack>
        </Card>
    );
}

export default DesignFive;