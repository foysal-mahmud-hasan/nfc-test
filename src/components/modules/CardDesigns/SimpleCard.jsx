import { Card, Avatar, Text, Group, Box, Image, Divider, Flex, BackgroundImage, Grid, Container, Button, Space, Center } from '@mantine/core';
import { IconPhone, IconMail, IconMapPin } from '@tabler/icons-react';
import { readLocalStorageValue } from '@mantine/hooks';

function SimpleCard(props) {
    const {formValues, id} = props;
    return (
        <Card shadow="lg" padding="xs" radius="md" w={{ base: '90mm', md: '100mm' }} h={'60mm'} >

            <div style={{ position: 'start', width: '100%', textAlign: 'start' }}>
                <Avatar
                    src={formValues?.profile_pic}
                    size={90}
                    radius="100%"
                    style={{ position: 'absolute', top: -40, left: '5%', transform: 'translateY(70%)', border: '1px solid white' }}
                />
            </div>
            <Flex justify='flex-end' align='flex-end' direction='column'>
                <Text weight={700} size="md">{formValues?.name}</Text>
                <Text c="dimmed" size="sm">{formValues?.designation}</Text>
            </Flex>
            <Divider my="sm" />
            <Box>
                <Container fluid mb={'xs'}>
                    <Space h='md'></Space>
                    <Grid columns={12} gutter={0}>
                        <Grid.Col span={3}>
                        </Grid.Col>
                        <Grid.Col span={9}>
                            <Grid columns={12} gutter={0}  >
                                <Grid.Col span={2}>
                                    <Center mt={1} >
                                        <IconPhone size={16} />
                                    </Center>
                                </Grid.Col>
                                <Grid.Col span={10}>
                                    <Text size="sm">{formValues?.mobile}</Text>
                                </Grid.Col>
                            </Grid>
                            <Grid columns={12} gutter={0}  >
                                <Grid.Col span={2}>
                                    <Center mt={2}>
                                        <IconMail size={16} />
                                    </Center>
                                </Grid.Col>
                                <Grid.Col span={10}>
                                    <Text size="sm">{formValues?.email}</Text>
                                </Grid.Col>
                            </Grid>
                            <Grid columns={12} gutter={0} >
                                <Grid.Col span={2}>

                                    <Center mt={2}>
                                        <IconMapPin size={16} />
                                    </Center>
                                </Grid.Col>
                                <Grid.Col span={10}>
                                    <Text size="sm">{formValues?.address}</Text>
                                </Grid.Col>
                            </Grid>

                        </Grid.Col>
                    </Grid>
                </Container>
            </Box>
            <div style={{ position: 'relative', width: '100%', height: 40 }}>
                <img
                    src={formValues?.company_logo}
                    alt="Company Logo"
                    style={{ position: 'absolute', right: '25%', height: '40px', width: '50%', objectFit: 'contain', bottom: '-50%', marginBottom: '10px' }}
                />

            </div>


        </Card >
    );
}

export default SimpleCard;