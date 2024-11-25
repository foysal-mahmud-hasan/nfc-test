import React from "react";
import { Tooltip, TextInput } from "@mantine/core";
import { useTranslation } from "react-i18next";
import { IconInfoCircle, IconX } from "@tabler/icons-react";
import { getHotkeyHandler } from "@mantine/hooks";

function InputForm(props) {
  const {
    label,
    placeholder,
    required,
    nextField,
    name,
    form,
    tooltip,
    mt,
    id,
    disabled,
    onChange,
  } = props;

  const { t, i18n } = useTranslation();
  const handleChange = (event) => {
    // First update the form if it exists
    if (form) {
      form.setFieldValue(name, event.currentTarget.value);
    }
    
    // Then call the parent's onChange
    if (onChange) {
      onChange(event);
    }
  };

  return (
    <>
      {form && (
        <Tooltip
          label={tooltip}
          opened={name in form.errors && !!form.errors[name]}
          px={16}
          py={2}
          position="top-end"
          bg={`orange.4`}
          c={"white"}
          withArrow
          offset={2}
          zIndex={999}
          transitionProps={{ transition: "pop-bottom-left", duration: 500 }}
        >
          <TextInput
            {...form?.getInputProps(name)}
            id={id}
            size="sm"
            label={label}
            placeholder={placeholder}
            mt={mt}
            disabled={disabled}
            onChange={handleChange}
            autoComplete="off"
            onKeyDown={getHotkeyHandler([
              [
                "Enter",
                (e) => {
                  nextField === "EntityFormSubmit"
                    ? document.getElementById(nextField).click()
                    : document.getElementById(nextField).focus();
                },
              ],
            ])}
            leftSection={props.leftSection ? props.leftSection : ""}
            rightSection={
              form.values[name] ? (
                <Tooltip
                  label={t("Close")}
                  withArrow
                  bg={`orange.1`}
                  c={"orange.3"}
                >
                  <IconX
                    color={`orange`}
                    size={16}
                    opacity={0.5}
                    onClick={() => {
                      form.setFieldValue(name, "");
                    }}
                  />
                </Tooltip>
              ) : (
                <Tooltip
                  label={tooltip}
                  px={16}
                  py={2}
                  withArrow
                  position={"left"}
                  c={"black"}
                  bg={`gray.1`}
                  transitionProps={{
                    transition: "pop-bottom-left",
                    duration: 500,
                  }}
                >
                  {props.rightIcon ? (
                    props.rightIcon
                  ) : (
                    <IconInfoCircle size={16} opacity={0.5} />
                  )}
                </Tooltip>
              )
            }
            withAsterisk={required}
          />
        </Tooltip>
      )}
    </>
  );
}

export default InputForm;