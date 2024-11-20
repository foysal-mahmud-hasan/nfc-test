import { Card, Avatar, Text, Group, Box, Divider, Flex, Grid } from '@mantine/core';
import { IconPhone, IconMail, IconMapPin } from '@tabler/icons-react';
import { readLocalStorageValue } from '@mantine/hooks';

function BoldCard(props) {
    const {formValues, id} = props;
    return (
        <>
            <Card shadow="lg" padding="sm" radius="md" w={{ base: '90mm', md: '100mm' }} h={'60mm'} >
                <div style={{ position: 'relative', width: '100%', height: 70 }}>
                    <img
                        src={formValues?.company_logo}
                        alt="Company Logo"
                        style={{ position: 'absolute', right: 0, height: '50px', width: '50%', objectFit: 'contain', transform: 'translateY(-10%)', }}
                    />
                    <Avatar
                        src={formValues?.profile_pic}
                        size={80}
                        radius="100%"
                        style={{ position: 'absolute', top: '60%', left: 0, transform: 'translateY(-25%)', border: '3px solid white' }}
                    />
                </div>
                <Box mt={'lg'}>
                    <Flex justify={'flex-end'} align={'flex-end'} direction={'column'}>
                        <Text weight={900} size="md">{formValues?.name}</Text>
                        <Text c="dimmed" size="sm">{formValues?.designation}</Text>
                    </Flex>
                </Box>
                <Divider my="sm" />
                <Box >
                    <Grid columns={12} gutter={0}>
                        <Grid.Col span={1}>
                            <IconPhone size={16} />
                        </Grid.Col>
                        <Grid.Col span={11} mt={2}>
                            <Text size="xs" fw={700}>{formValues?.mobile}</Text>
                        </Grid.Col>
                    </Grid>
                    <Grid columns={12} gutter={0}>
                        <Grid.Col span={1}>
                            <IconMail size={16} />
                        </Grid.Col>
                        <Grid.Col span={11} mt={2}>
                            <Text size="xs" fw={700}>{formValues?.email}</Text>
                        </Grid.Col>
                    </Grid>
                    <Grid columns={12} gutter={0}>
                        <Grid.Col span={1}>
                            <IconMapPin size={14} />
                        </Grid.Col>
                        <Grid.Col span={11} mt={2}>
                            <Text size="xs" fw={700}>{formValues?.address}</Text>
                        </Grid.Col>
                    </Grid>

                </Box>
            </Card>
        </>
    );
}

export default BoldCard;