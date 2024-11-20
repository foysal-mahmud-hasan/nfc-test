import { Card, Avatar, Text, Group, Box, Divider, BackgroundImage, Image, Grid, Flex } from '@mantine/core';
import { IconPhone, IconMail, IconMapPin } from '@tabler/icons-react';
import { readLocalStorageValue } from '@mantine/hooks';

function DesignFour(props) {
    const {formValues, id} = props;
    return (
        <Card shadow="sm" padding="lg" radius="md" w={{ base: '90mm', md: '100mm' }} h={'60mm'} >
            <Group justify='space-between' mb="sm">
                <Avatar
                    src={formValues?.profile_pic}
                    size={50}
                    radius="xl"
                />
                <Image
                    src={formValues?.company_logo}
                    height={50}
                    maw={'50%'}
                    fit="contain"
                    alt="Company Logo"
                    pb={'lg'}
                />
            </Group>
            <Flex justify="flex-start" align='flex-start' direction='column'>
                <Text weight={700} size="md">{formValues?.name}</Text>
                <Text c="dimmed" size="sm">{formValues?.designation}</Text>
            </Flex>
            <Box mt="sm">
                <Grid columns={12} gutter={0}>
                    <Grid.Col span={3}>
                        <Text size="sm"><strong>Phone</strong></Text>
                    </Grid.Col>
                    <Grid.Col span={1}>
                        <Text size="sm"><strong>:</strong></Text>
                    </Grid.Col>
                    <Grid.Col span={8}>
                        <Flex
                            justify={'flex-start'}
                            align={'flex-start'}
                            direction='row'>
                            <Text size="sm">{formValues?.mobile}</Text>
                        </Flex>
                    </Grid.Col>
                </Grid>
                <Grid columns={12} gutter={0}>
                    <Grid.Col span={3}>
                        <Text size="sm"><strong>Email</strong></Text>
                    </Grid.Col>
                    <Grid.Col span={1}>
                        <Text size="sm"><strong>:</strong></Text>
                    </Grid.Col>
                    <Grid.Col span={8}>
                        <Flex
                            justify={'flex-start'}
                            align={'flex-start'}
                            direction='row'>
                            <Text size="sm">{formValues?.email}</Text>
                        </Flex>
                    </Grid.Col>
                </Grid>
                <Grid columns={12} gutter={0}>
                    <Grid.Col span={3}>
                        <Text size="sm"><strong>Address</strong></Text>
                    </Grid.Col>
                    <Grid.Col span={1}>
                        <Text size="sm"><strong>:</strong></Text>
                    </Grid.Col>
                    <Grid.Col span={8}>
                        <Flex
                            justify={'flex-start'}
                            align={'flex-start'}
                            direction='row'>
                            <Text size="sm">{formValues?.address}</Text>
                        </Flex>
                    </Grid.Col>
                </Grid>

            </Box>
        </Card>
    );
}

export default DesignFour;
