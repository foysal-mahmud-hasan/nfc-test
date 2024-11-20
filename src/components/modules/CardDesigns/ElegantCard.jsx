import { Card, Avatar, Text, Group, Box, Image, Divider, BackgroundImage, Grid } from '@mantine/core';
import { IconPhone, IconMail, IconMapPin } from '@tabler/icons-react';
import { readLocalStorageValue } from '@mantine/hooks';

function ElegantCard(props) {
    const {formValues, id} = props;
    return (
        <Card shadow="lg" padding="xs" radius="md" w={{ base: '90mm', md: '100mm' }} h={'60mm'} bg={'var(--mantine-color-gray-0)'}>
            <Box textAlign="center" mt={'4'} ml={'xs'} mb={10}>
                <Text weight={700} size="md">{formValues?.name}</Text>
                <Text c="dimmed" size="sm">{formValues?.designation}</Text>
            </Box>
            <div style={{ position: 'relative', width: '100%', textAlign: 'end' }}>
                <Avatar
                    src={formValues?.profile_pic}
                    size={70}
                    radius="100%"
                    style={{ position: 'absolute', top: -65, left: '90%', transform: 'translateX(-50%)', border: '1px solid white' }}
                />
            </div>

            <Divider my="sm" />
            <Box ta="left" >
                <Grid columns={12} gutter={0}>
                    <Grid.Col span={1}>
                        <IconPhone size={16} />
                    </Grid.Col>
                    <Grid.Col span={11}>
                        <Text size="sm">{formValues?.mobile}</Text>
                    </Grid.Col>
                </Grid>
                <Grid columns={12} gutter={0}>
                    <Grid.Col span={1}>
                        <IconMail size={16} />
                    </Grid.Col>
                    <Grid.Col span={11}>
                        <Text size="sm">{formValues?.email}</Text>
                    </Grid.Col>
                </Grid>
                <Grid columns={12} gutter={0}>
                    <Grid.Col span={1}>
                        <IconMapPin size={16} />
                    </Grid.Col>
                    <Grid.Col span={11}>
                        <Text size="sm">{formValues?.address}</Text>
                    </Grid.Col>
                </Grid>

            </Box>
            <div style={{ position: 'relative', width: '100%', height: '40' }}>
                <img
                    src={formValues?.company_logo}
                    alt="Company Logo"
                    style={{ position: 'absolute', right: "25%", height: '35px', width: '50%', objectFit: 'contain', transform: 'translateY(10%)', }}
                />

            </div>

        </Card >
    );
}

export default ElegantCard;
