import React, { useEffect, useState } from "react";
import { Navigate, useOutletContext } from "react-router-dom";
import {
    Button,
    rem, Flex,
    Grid, Box, ScrollArea, Text, Title, Alert, List, Stack, Tooltip, ActionIcon,
} from "@mantine/core";
import { useTranslation } from 'react-i18next';
import {
    IconCheck,
    IconDeviceFloppy, IconUsersGroup
} from "@tabler/icons-react";
import { useDisclosure, useHotkeys } from "@mantine/hooks";

import { hasLength, useForm } from "@mantine/form";
import { modals } from "@mantine/modals";
import { notifications } from "@mantine/notifications";
import InputForm from "../../form-builders/InputForm.jsx";
import ImageUploadDropzone from "../../form-builders/ImageUploadDropzone.jsx";
import TextAreaForm from "../../form-builders/TextAreaForm";
import { useLocalStorage } from '@mantine/hooks';
import { useNavigate } from "react-router-dom";
import PhoneNumberInput from "../../form-builders/PhoneNumInput.jsx";

function SignupForm() {
    const { t, i18n } = useTranslation();

    const { mainAreaHeight } = useOutletContext();
    const height = mainAreaHeight - 65; //TabList height 104
    const [opened, { open, close }] = useDisclosure(false);

    const [saveCreateLoading, setSaveCreateLoading] = useState(false);



    const navigate = useNavigate();

    const form = useForm({
        initialValues: {
            name: '',
            email: '',
            phone: '',
            xtwitter: '',
            linkedin: '',
            about: '',
            profile_pic: '',
            company_name: '',
            designation: '',
            website: '',
            company_email: '',
            company_logo: '',
            address: '',
            instagram: '',
            facebook: ''
        },



    });

    const [formData, setFormData] = useLocalStorage({
        key: 'signup-form-data',
        defaultValue: {
            name: '',
            email: '',
            phone: '',
            xtwitter: '',
            linkedin: '',
            about: '',
            profile_pic: '',
            company_name: '',
            designation: '',
            website: '',
            company_email: '',
            company_logo: '',
            address: '',
            instagram: '',
            facebook: ''
        },
    });



    const handleSubmit = (e) => {
        e.preventDefault();
        setFormData(form.getValues()); // Store form data in local storage
        console.log(form.getValues());
        navigate('/sign-upView');

    };

    return (
        <Box >
            <form onSubmit={handleSubmit}>
                <Grid gutter={{ base: 8 }} >
                    <Grid.Col p={'0'} >
                        <Box   >
                            <Box  >
                                <Box pl={`xs`} pb={'xs'} pr={8} pt={'xs'} className={'boxBackground borderRadiusAll'}  >
                                    <Grid >
                                        <Grid.Col h={54}>
                                            <Title order={6} mt={'xs'} pl={'6'}>{t('WelcomeSignup')}</Title>
                                        </Grid.Col>
                                    </Grid>
                                </Box>
                                <Box >
                                    <Box>

                                        <Box mt={'4'}>
                                            <ScrollArea h={{ base: height + 11, md: height - 30 }} scrollbarSize={2} scrollbars="y" type="never"  >
                                                <Grid columns={12} gutter={{ base: 6 }} >
                                                    {/* 1st column */}
                                                    <Grid.Col span={{ base: 12, sm: 12, md: 6, lg: 6 }}    >
                                                        <Box h={{ base: '100%', sm: '100%', md: height + 85 }} pl={`4`} pr={4} pt={'4'} pb={{ base: 'sm', sm: 'sm', md: 0 }} className="borderRadiusAll">
                                                            <Box pl={`xs`} pb={'xs'} pr={8} pt={'xs'} className={'boxBackground borderRadiusAll'} >
                                                                <Grid>
                                                                    <Grid.Col h={35}>
                                                                        <Title order={6} pl={'6'}>{t('PersonalInformation')}</Title>
                                                                    </Grid.Col>
                                                                </Grid>
                                                            </Box>
                                                            <Box  >
                                                                <Box pl={'xs'} pr={'4'}>
                                                                    <Box >
                                                                        <Grid gutter={{ base: 4 }} mt={'xs'}>
                                                                            <Grid.Col span={{ base: 12, sm: 12, md: 4, lg: 4 }} >
                                                                                <Box mt={{ base: 1, sm: 1, md: '4', lg: '4' }}>
                                                                                    <Flex
                                                                                        justify="flex-start"
                                                                                        align="center"
                                                                                        direction="row"
                                                                                    >
                                                                                        <Text ta="center" fz="sm" fw={300}>
                                                                                            {t('Name')}<Text component="span" c="red">*</Text>
                                                                                        </Text>
                                                                                    </Flex>
                                                                                </Box>
                                                                            </Grid.Col>
                                                                            <Grid.Col span={{ base: 12, sm: 12, md: 8, lg: 8 }}>
                                                                                <Box  >
                                                                                    <InputForm
                                                                                        tooltip={t('NameValidateMessage')}
                                                                                        placeholder={t('Name')}
                                                                                        required={true}
                                                                                        nextField={'email'}
                                                                                        name={'name'}
                                                                                        form={form}
                                                                                        {...form.getInputProps('name')}
                                                                                        mt={0}
                                                                                        id={'name'}
                                                                                    />
                                                                                </Box>
                                                                            </Grid.Col>
                                                                        </Grid>
                                                                    </Box>
                                                                    <Box mt={'xs'}>
                                                                        <Grid gutter={{ base: 4 }}>
                                                                            <Grid.Col span={{ base: 12, sm: 12, md: 4, lg: 4 }}>
                                                                                <Box mt={{ base: 1, sm: 1, md: '4', lg: '4' }}>
                                                                                    <Flex
                                                                                        justify="flex-start"
                                                                                        align="center"
                                                                                        direction="row"
                                                                                    >
                                                                                        <Text ta="center" fz="sm" fw={300}>
                                                                                            {t('Email')}<Text component="span" c="red">*</Text>
                                                                                        </Text>
                                                                                    </Flex>
                                                                                </Box>
                                                                            </Grid.Col>
                                                                            <Grid.Col span={{ base: 12, sm: 12, md: 8, lg: 8 }} >
                                                                                <Box >

                                                                                    <InputForm
                                                                                        tooltip={t('Email')}
                                                                                        // label={t('Email')}
                                                                                        placeholder={t('Email')}
                                                                                        required={true}
                                                                                        nextField={'phone'}
                                                                                        name={'email'}
                                                                                        form={form}
                                                                                        {...form.getInputProps('email')}
                                                                                        mt={{ base: 1, sm: 1, md: '0', lg: '0' }}
                                                                                        id={'email'}
                                                                                    />
                                                                                </Box>
                                                                            </Grid.Col>
                                                                        </Grid>
                                                                    </Box>
                                                                    <Box mt={'xs'}>
                                                                        <Grid gutter={{ base: 4 }}>
                                                                            <Grid.Col span={{ base: 12, sm: 12, md: 4, lg: 4 }}>
                                                                                <Box mt={{ base: 1, sm: 1, md: '4', lg: '4' }}>
                                                                                    <Box >
                                                                                        <Flex
                                                                                            justify="flex-start"
                                                                                            align="center"
                                                                                            direction="row"
                                                                                        >
                                                                                            <Text ta="center" fz="sm" fw={300}>
                                                                                                {t('Phone')}<Text component="span" c="red">*</Text>
                                                                                            </Text>
                                                                                        </Flex>
                                                                                    </Box>
                                                                                </Box>
                                                                            </Grid.Col>
                                                                            <Grid.Col span={{ base: 12, sm: 12, md: 8, lg: 8 }}>
                                                                                <Box >
                                                                                    <PhoneNumberInput
                                                                                        country={'bd'}
                                                                                        onChange={(phone) => form.setFieldValue('phone', phone)}
                                                                                        tooltip={t('Phone')}
                                                                                        placeholder={t('Phone')}
                                                                                        required={true}
                                                                                        nextField={'xtwitter'}
                                                                                        name={'phone'}
                                                                                        form={form}
                                                                                        {...form.getInputProps('phone')}
                                                                                        id={'phone'}
                                                                                    />
                                                                                </Box>
                                                                            </Grid.Col>
                                                                        </Grid>
                                                                    </Box>
                                                                    <Box mt={'xs'}>
                                                                        <Grid gutter={{ base: 4 }}>
                                                                            <Grid.Col span={{ base: 12, sm: 12, md: 4, lg: 4 }}>
                                                                                <Box mt={{ base: 1, sm: 1, md: '6', lg: '6' }}>
                                                                                    <Flex
                                                                                        justify="flex-start"
                                                                                        align="center"
                                                                                        direction="row"
                                                                                    >
                                                                                        <Text
                                                                                            ta="center" fz="sm"
                                                                                            fw={300}>
                                                                                            {t('X(Twitter)Account')}
                                                                                        </Text>
                                                                                    </Flex>
                                                                                </Box>
                                                                            </Grid.Col>
                                                                            <Grid.Col span={{ base: 12, sm: 12, md: 8, lg: 8 }}>
                                                                                <Box >
                                                                                    <InputForm
                                                                                        tooltip={t('TwitterAccount')}
                                                                                        placeholder={t('TwitterAccount')}
                                                                                        required={false}
                                                                                        nextField={'linkedin'}
                                                                                        name={'xtwitter'}
                                                                                        form={form}
                                                                                        {...form.getInputProps('xtwitter')}
                                                                                        mt={{ base: 1, sm: 1, md: '0', lg: '0' }}
                                                                                        id={'xtwitter'}
                                                                                    />

                                                                                </Box>
                                                                            </Grid.Col>
                                                                        </Grid>
                                                                    </Box>
                                                                    <Box mt={'xs'}>
                                                                        <Grid gutter={{ base: 4 }}>
                                                                            <Grid.Col span={{ base: 12, sm: 12, md: 4, lg: 4 }}>
                                                                                <Box mt={{ base: 1, sm: 1, md: '8', lg: '8' }}>
                                                                                    <Flex
                                                                                        justify="flex-start"
                                                                                        align="center"
                                                                                        direction="row"
                                                                                    >
                                                                                        <Text
                                                                                            ta="center" fz="sm"
                                                                                            fw={300}>
                                                                                            {t('LinkedinAccount')}
                                                                                        </Text>
                                                                                    </Flex>
                                                                                </Box>
                                                                            </Grid.Col>
                                                                            <Grid.Col span={{ base: 12, sm: 12, md: 8, lg: 8 }}>
                                                                                <Box >
                                                                                    <InputForm
                                                                                        tooltip={t('LinkedinAccount')}
                                                                                        placeholder={t('LinkedinAccount')}
                                                                                        required={false}
                                                                                        nextField={'facebook'}
                                                                                        name={'linkedin'}
                                                                                        form={form}
                                                                                        {...form.getInputProps('linkedin')}
                                                                                        mt={{ base: 1, sm: 1, md: '0', lg: '0' }}
                                                                                        id={'linkedin'}
                                                                                    />
                                                                                </Box>
                                                                            </Grid.Col>
                                                                        </Grid>
                                                                    </Box>
                                                                    <Box mt={'xs'}>
                                                                        <Grid gutter={{ base: 4 }}>
                                                                            <Grid.Col span={{ base: 12, sm: 12, md: 4, lg: 4 }}>
                                                                                <Box mt={{ base: 1, sm: 1, md: '4', lg: '4' }}>
                                                                                    <Flex
                                                                                        justify="flex-start"
                                                                                        align="center"
                                                                                        direction="row"
                                                                                    >
                                                                                        <Text
                                                                                            ta="center" fz="sm"
                                                                                            fw={300}>
                                                                                            {t('FacebookAccount')}
                                                                                        </Text>
                                                                                    </Flex>
                                                                                </Box>
                                                                            </Grid.Col>
                                                                            <Grid.Col span={{ base: 12, sm: 12, md: 8, lg: 8 }}>
                                                                                <Box >
                                                                                    <InputForm
                                                                                        tooltip={t('FacebookAccount')}
                                                                                        placeholder={t('FacebookAccount')}
                                                                                        required={false}
                                                                                        nextField={'instagram'}
                                                                                        name={'facebook'}
                                                                                        form={form}
                                                                                        {...form.getInputProps('facebook')}
                                                                                        mt={{ base: 1, sm: 1, md: '0', lg: '0' }}
                                                                                        id={'facebook'}
                                                                                    />
                                                                                </Box>
                                                                            </Grid.Col>
                                                                        </Grid>
                                                                    </Box>
                                                                    <Box mt={'xs'}>
                                                                        <Grid gutter={{ base: 4 }}>
                                                                            <Grid.Col span={{ base: 12, sm: 12, md: 4, lg: 4 }}>
                                                                                <Box mt={{ base: 1, sm: 1, md: '4', lg: '4' }}>
                                                                                    <Flex
                                                                                        justify="flex-start"
                                                                                        align="center"
                                                                                        direction="row"
                                                                                    >
                                                                                        <Text
                                                                                            ta="center" fz="sm"
                                                                                            fw={300}>
                                                                                            {t('InstaAccount')}
                                                                                        </Text>
                                                                                    </Flex>
                                                                                </Box>
                                                                            </Grid.Col>
                                                                            <Grid.Col span={{ base: 12, sm: 12, md: 8, lg: 8 }}>
                                                                                <Box >
                                                                                    <InputForm
                                                                                        tooltip={t('InstaAccount')}
                                                                                        // label={t('LinkedinAccount')}
                                                                                        placeholder={t('InstaAccount')}
                                                                                        required={false}
                                                                                        nextField={'about'}
                                                                                        name={'instagram'}
                                                                                        form={form}
                                                                                        {...form.getInputProps('instagram')}
                                                                                        mt={{ base: 1, sm: 1, md: '0', lg: '0' }}
                                                                                        id={'instagram'}
                                                                                    />
                                                                                </Box>
                                                                            </Grid.Col>
                                                                        </Grid>
                                                                    </Box>
                                                                    <Box mt={'4'}>
                                                                        <Grid gutter={{ base: 4 }}>
                                                                            <Grid.Col span={{ base: 12, sm: 12, md: 4, lg: 4 }}>
                                                                                <Box >
                                                                                    <Flex
                                                                                        mih={{ base: 30, sm: 30, md: 70 }}
                                                                                        gap="md"
                                                                                        justify="flex-start"
                                                                                        align="center"
                                                                                        direction="row"
                                                                                    >
                                                                                        <Text ta="center" fz="sm" fw={300}>
                                                                                            {t('AboutYourself')}<Text component="span" c="red">*</Text>
                                                                                        </Text>

                                                                                    </Flex>
                                                                                </Box>
                                                                            </Grid.Col>
                                                                            <Grid.Col span={{ base: 12, sm: 12, md: 8, lg: 8 }}>
                                                                                <Box >
                                                                                    <Box mt={{ base: '1', sm: '1', md: '6', lg: '6' }}>
                                                                                        <TextAreaForm
                                                                                            tooltip={t('Address')}
                                                                                            placeholder={t('About Self')}
                                                                                            required={true}
                                                                                            nextField={'company_name'}
                                                                                            name={'about'}
                                                                                            form={form}
                                                                                            {...form.getInputProps('about')}
                                                                                            mt={{ base: 1, sm: 1, md: '0', lg: '0' }}
                                                                                            id={'about'}
                                                                                        />
                                                                                    </Box>
                                                                                </Box>
                                                                            </Grid.Col>
                                                                        </Grid>
                                                                    </Box>
                                                                    <Box mt={'xs'}>
                                                                        <Grid gutter={{ base: 4 }}>
                                                                            <Grid.Col span={{ base: 12, sm: 12, md: 4, lg: 4 }}>
                                                                                <Box >
                                                                                    <Flex
                                                                                        mih={{ base: 30, sm: 30, md: 50 }}
                                                                                        gap="md"
                                                                                        mt={{ base: '1', sm: '1', md: 'sm', lg: 'sm' }}
                                                                                        justify="flex-start"
                                                                                        align="center"
                                                                                        direction="row"
                                                                                    >
                                                                                        <Text
                                                                                            fz="sm"
                                                                                            fw={300}>
                                                                                            {t('ProfilePic')}
                                                                                        </Text>
                                                                                    </Flex>
                                                                                </Box>
                                                                            </Grid.Col>
                                                                            <Grid.Col span={{ base: 12, sm: 12, md: 8, lg: 8 }}>
                                                                                <Box mt={{ base: 'xs', sm: 'xs', md: '2', lg: '2' }} mb={'sm'}>
                                                                                    <ImageUploadDropzone
                                                                                        label={t('ProfilePic')}
                                                                                        id={'profile_pic'}
                                                                                        name={'profile_pic'}
                                                                                        form={form}
                                                                                        fieldName={'profile_pic'}
                                                                                        required={false}

                                                                                        placeholder={t('DropProfilePictureHere')}
                                                                                        nextField={''}
                                                                                    />
                                                                                </Box>
                                                                            </Grid.Col>
                                                                        </Grid>
                                                                    </Box>
                                                                </Box>
                                                            </Box>
                                                        </Box>
                                                    </Grid.Col>
                                                    {/*     2nd columnd */}

                                                    <Grid.Col span={{ base: 12, sm: 12, md: 6, lg: 6 }} >

                                                        <Box h={{ base: 'auto', sm: 'auto', md: height + 85 }} pl={`4`} pr={4} pt={'4'} pb={{ base: 'sm', sm: 'sm', md: 0 }} className="borderRadiusAll">
                                                            <Box pl={`xs`} pb={'xs'} pr={8} pt={'xs'} className={'boxBackground borderRadiusAll'} >
                                                                <Grid>
                                                                    <Grid.Col h={35}>
                                                                        <Title order={6} pl={'6'}>{t('CompanyInformation')}</Title>
                                                                    </Grid.Col>
                                                                </Grid>
                                                            </Box>
                                                            <Box pl={'xs'} pr={'2'}>
                                                                <Box>
                                                                    <Grid gutter={{ base: 4 }} mt={'xs'}>
                                                                        <Grid.Col span={{ base: 12, sm: 12, md: 4, lg: 4 }} >
                                                                            <Box mt={{ base: 1, sm: 1, md: '4', lg: '4' }}>
                                                                                <Flex
                                                                                    justify="flex-start"
                                                                                    align="center"
                                                                                    direction="row"
                                                                                >
                                                                                    <Text ta="center" fz="sm" fw={300}>
                                                                                        {t('CompanyName')}<Text component="span" c="red">*</Text>
                                                                                    </Text>
                                                                                </Flex>

                                                                            </Box>
                                                                        </Grid.Col>
                                                                        <Grid.Col span={{ base: 12, sm: 12, md: 8, lg: 8 }}>
                                                                            <Box >
                                                                                <InputForm
                                                                                    tooltip={t('CompanyNameValidateMessage')}
                                                                                    placeholder={t('CompanyName')}
                                                                                    required={true}
                                                                                    nextField={'designation'}
                                                                                    name={'company_name'}
                                                                                    form={form}
                                                                                    {...form.getInputProps('company_name')}
                                                                                    mt={0}
                                                                                    id={'company_name'}
                                                                                />

                                                                            </Box>
                                                                        </Grid.Col>
                                                                    </Grid>
                                                                </Box>
                                                                <Box mt={'xs'}>
                                                                    <Grid gutter={{ base: 4 }} >
                                                                        <Grid.Col span={{ base: 12, sm: 12, md: 4, lg: 4 }} >
                                                                            <Box mt={{ base: 1, sm: 1, md: '4', lg: '4' }}>
                                                                                <Flex
                                                                                    justify="flex-start"
                                                                                    align="center"
                                                                                    direction="row"
                                                                                >
                                                                                    <Text ta="center" fz="sm" fw={300}>
                                                                                        {t('Designation')}<Text component="span" c="red">*</Text>
                                                                                    </Text>
                                                                                </Flex>

                                                                            </Box>
                                                                        </Grid.Col>
                                                                        <Grid.Col span={{ base: 12, sm: 12, md: 8, lg: 8 }}>
                                                                            <Box >
                                                                                <InputForm
                                                                                    tooltip={t('Designation')}
                                                                                    // label={t('CompanyName')}
                                                                                    placeholder={t('Designation')}
                                                                                    required={true}
                                                                                    nextField={'website'}
                                                                                    name={'designation'}
                                                                                    form={form}
                                                                                    {...form.getInputProps('designation')}
                                                                                    mt={0}
                                                                                    id={'designation'}
                                                                                />

                                                                            </Box>
                                                                        </Grid.Col>
                                                                    </Grid>
                                                                </Box>
                                                                <Box mt={'xs'}>
                                                                    <Grid gutter={{ base: 4 }}>
                                                                        <Grid.Col span={{ base: 12, sm: 12, md: 4, lg: 4 }}>
                                                                            <Box mt={{ base: 1, sm: 1, md: '4', lg: '4' }}>
                                                                                <Flex
                                                                                    justify="flex-start"
                                                                                    align="center"
                                                                                    direction="row"
                                                                                >
                                                                                    <Text ta="center" fz="sm" fw={300}>
                                                                                        {t('CompanyWebsite')}<Text component="span" c="red">*</Text>
                                                                                    </Text>
                                                                                </Flex>

                                                                            </Box>
                                                                        </Grid.Col>
                                                                        <Grid.Col span={{ base: 12, sm: 12, md: 8, lg: 8 }}>
                                                                            <Box >
                                                                                <InputForm
                                                                                    tooltip={t('CompanyWebsite')}
                                                                                    // label={t('CompanyWebsite')}
                                                                                    placeholder={t('CompanyWebsite')}
                                                                                    required={false}
                                                                                    nextField={'company_email'}
                                                                                    name={'website'}
                                                                                    form={form}
                                                                                    {...form.getInputProps('website')}
                                                                                    mt={{ base: 1, sm: 1, md: '0', lg: '0' }}
                                                                                    id={'website'}
                                                                                />
                                                                            </Box>
                                                                        </Grid.Col>
                                                                    </Grid>
                                                                </Box>
                                                                <Box mt={'xs'}>
                                                                    <Grid gutter={{ base: 4 }}>
                                                                        <Grid.Col span={{ base: 12, sm: 12, md: 4, lg: 4 }}>
                                                                            <Box mt={{ base: 1, sm: 1, md: '4', lg: '4' }}>
                                                                                <Flex
                                                                                    justify="flex-start"
                                                                                    align="center"
                                                                                    direction="row"
                                                                                >
                                                                                    <Text
                                                                                        ta="center" fz="sm"
                                                                                        fw={300}>
                                                                                        {t('CompanyEmail')}
                                                                                    </Text>
                                                                                </Flex>
                                                                            </Box>
                                                                        </Grid.Col>
                                                                        <Grid.Col span={{ base: 12, sm: 12, md: 8, lg: 8 }}>
                                                                            <Box >
                                                                                <InputForm
                                                                                    tooltip={t('CompanyEmail')}
                                                                                    // label={t('CompanyEmail')}
                                                                                    placeholder={t('CompanyEmail')}
                                                                                    required={false}
                                                                                    nextField={'address'}
                                                                                    name={'company_email'}
                                                                                    form={form}
                                                                                    {...form.getInputProps('company_email')}
                                                                                    mt={{ base: 1, sm: 1, md: '0', lg: '0' }}
                                                                                    id={'company_email'}
                                                                                />
                                                                            </Box>
                                                                        </Grid.Col>
                                                                    </Grid>
                                                                </Box>
                                                                <Box mt={'xs'}>
                                                                    <Grid gutter={{ base: 4 }}>
                                                                        <Grid.Col span={{ base: 12, sm: 12, md: 4, lg: 4 }}>
                                                                            <Box >

                                                                                <Flex
                                                                                    mih={{ base: 30, sm: 30, md: 50 }}
                                                                                    gap="md"
                                                                                    mt={{ base: '1', sm: '1', md: '10', lg: '10' }}
                                                                                    justify="flex-start"
                                                                                    align="center"
                                                                                    direction="row"
                                                                                >
                                                                                    <Text ta="center" fz="sm" fw={300}>
                                                                                        {t('CompanyLogo')}<Text component="span" c="red">*</Text>
                                                                                    </Text>
                                                                                </Flex>
                                                                            </Box>
                                                                        </Grid.Col>
                                                                        <Grid.Col span={{ base: 12, sm: 12, md: 8, lg: 8 }}>
                                                                            <Box mt={'2'}>
                                                                                <ImageUploadDropzone
                                                                                    label={t('CompanyLogo')}
                                                                                    id={'company_logo'}
                                                                                    name={'company_logo'}
                                                                                    form={form}
                                                                                    fieldName={'company_logo'}
                                                                                    required={true}
                                                                                    placeholder={t('DropCompanyLogoHere')}
                                                                                    nextField={'address'}
                                                                                />
                                                                            </Box>
                                                                        </Grid.Col>
                                                                    </Grid>
                                                                </Box>
                                                                <Box mt={'4'}>
                                                                    <Grid gutter={{ base: 4 }}>
                                                                        <Grid.Col span={{ base: 12, sm: 12, md: 4, lg: 4 }}>
                                                                            <Box >
                                                                                <Flex
                                                                                    mih={{ base: 30, sm: 30, md: 70 }}
                                                                                    gap="md"
                                                                                    justify="flex-start"
                                                                                    align="center"
                                                                                    direction="row"
                                                                                >
                                                                                    <Text ta="center" fz="sm" fw={300}>
                                                                                        {t('Address')}<Text component="span" c="red">*</Text>
                                                                                    </Text>

                                                                                </Flex>
                                                                            </Box>
                                                                        </Grid.Col>
                                                                        <Grid.Col span={{ base: 12, sm: 12, md: 8, lg: 8 }}>
                                                                            <Box >
                                                                                <Box mt={{ base: '1', sm: '1', md: '6', lg: '6' }}>
                                                                                    <TextAreaForm
                                                                                        tooltip={t('Address')}
                                                                                        placeholder={t('Address')}
                                                                                        required={true}
                                                                                        nextField={'EntityFormSubmit'}
                                                                                        name={'address'}
                                                                                        form={form}
                                                                                        {...form.getInputProps('address')}
                                                                                        mt={{ base: 1, sm: 1, md: '0', lg: '0' }}
                                                                                        id={'address'}
                                                                                    />
                                                                                </Box>
                                                                            </Box>
                                                                        </Grid.Col>
                                                                    </Grid>
                                                                </Box>
                                                            </Box>
                                                        </Box>
                                                    </Grid.Col>
                                                </Grid>
                                            </ScrollArea>
                                        </Box>
                                        <Box pl={`sm`} pb={{ base: 'xs', sm: 'xs', md: 'xs' }} pr={8} pt={'sm'} className={'boxBackground borderRadiusAll'}  >
                                            <Grid span={12}>
                                                <Grid.Col >
                                                    <Stack right align="flex-end" h={25}>
                                                        <>
                                                            {
                                                                !saveCreateLoading &&
                                                                <Button
                                                                    size="xs"
                                                                    color={`orange.6`}
                                                                    type="submit"
                                                                    id="EntityFormSubmit"
                                                                // onClick={(values) => {
                                                                //     setFormData = values;
                                                                //     console.log('Form Submitted with values:', values)
                                                                // }}
                                                                // leftSection={<IconDeviceFloppy size={16} />}
                                                                >

                                                                    <Flex direction={`column`} gap={0}>
                                                                        <Text fz={12} fw={400}>
                                                                            {t("Submit")}
                                                                        </Text>
                                                                    </Flex>
                                                                </Button>
                                                            }
                                                        </></Stack>
                                                </Grid.Col>
                                            </Grid>
                                        </Box>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    </Grid.Col >
                </Grid >
            </form >
        </Box >
    );
}

export default SignupForm;
