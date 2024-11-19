import React, { useState, useEffect } from "react";
import { Dropzone, IMAGE_MIME_TYPE } from "@mantine/dropzone";
import {
  Text,
  Image,
  useMantineTheme,
  Center,
  Stack,
  rem,
} from "@mantine/core";
import fallbackSrc from "../../assets/images/fallbackSrc.jpg";

function ImageUploadDropzone(props) {
  const { placeholder, form, fieldName, placeholderSize, errors } = props;
  const [files, setFiles] = useState([]);
  const theme = useMantineTheme();
  const [imageUrl, setImageUrl] = useState(null);

  useEffect(() => {
    if (files.length > 0) {
      const url = URL.createObjectURL(files[0]);
      setImageUrl(url);

      // Cleanup URL when component unmounts or files change
      return () => {
        URL.revokeObjectURL(url);
      };
    }
  }, [files]);
  const handleDrop = (newFiles) => {
    const file = newFiles[0];
    setFiles([file]);
    form.setFieldValue(fieldName, file);
  };

  const inputProps = form.getInputProps(fieldName);

  return (
    <Dropzone
      accept={IMAGE_MIME_TYPE}
      onDrop={handleDrop}
      multiple={false}
      style={{
        border: errors
          ? `2px dashed ${theme.colors.red[3]}`
          : `2px dashed ${theme.colors.gray[3]}`,
        borderRadius: "4px",
        padding: "20px",
        textAlign: "center",
      }}
      {...inputProps}
    >
      <Center>
        {imageUrl ? (
          <Image
            height={200}
            width={"200"}
            radius="md"
            src={imageUrl}
            fit="contain"
            fallbackSrc={fallbackSrc}
          />
        ) : (
          <Stack gap={0}>
            <Text>{placeholder}</Text>
            <Text>{placeholderSize}</Text>
          </Stack>
        )}
      </Center>
    </Dropzone>
  );
}

export default ImageUploadDropzone;
