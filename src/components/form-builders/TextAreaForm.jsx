import React from "react";
import {
    Tooltip,
    Textarea
} from "@mantine/core";
import { useTranslation } from "react-i18next";
import { IconInfoCircle, IconX } from "@tabler/icons-react";
import { getHotkeyHandler } from "@mantine/hooks";

function TextAreaForm(props) {
    const { label, placeholder, required, nextField, name, form, tooltip, mt, id } = props
    const { t, i18n } = useTranslation();
    return (
        <>
            {
                form &&
                <Tooltip
                    label={tooltip}
                    opened={(name in form.errors) && !!form.errors[name]}
                    px={16}
                    py={2}
                    position="top-end"
                    bg={`orange.4`}
                    c={'white'}
                    withArrow
                    offset={2}
                    zIndex={0}
                    transitionProps={{ transition: "pop-bottom-left", duration: 500 }}
                >
                    <Textarea
                        id={id}
                        size="sm"
                        label={label}
                        placeholder={placeholder}
                        mt={mt}
                        {...form.getInputProps(name && name)}
                        autoComplete="off"
                        onKeyDown={getHotkeyHandler([
                            ['Enter', (e) => {
                                document.getElementById(nextField).focus();
                            }],
                        ])}
                        rightSection={
                            form.values[name] ?
                                <Tooltip
                                    label={t("Close")}
                                    withArrow
                                    bg={`orange.5`}
                                >
                                    <IconX color={`orange`} size={16} opacity={0.5} onClick={() => {
                                        form.setFieldValue(name, '');
                                    }} />
                                </Tooltip>
                                :
                                <Tooltip
                                    label={tooltip}
                                    px={16}
                                    py={2}
                                    withArrow
                                    position={"left"}
                                    c={'black'}
                                    bg={`gray.1`}
                                    transitionProps={{ transition: "pop-bottom-left", duration: 500 }}
                                >
                                    <IconInfoCircle size={16} opacity={0.5} />
                                </Tooltip>
                        }
                        withAsterisk={required}
                    />
                </Tooltip>

            }
        </>
    );
}

export default TextAreaForm;
