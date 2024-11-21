import React, { useEffect, useState } from "react";
import { Box, Grid, Progress, Title, Container } from "@mantine/core";
import { useTranslation } from "react-i18next";

import { getLoadingProgress } from "../../global-hook/loading-progress/getLoadingProgress.js";

import SignupEditForm from "./Sign-upEditForm.jsx";
import axios from "axios";
import { useParams } from "react-router-dom";

function SignupEditIndex() {
  const { t, i18n } = useTranslation();
  const [formValues, setFormValues] = useState(null);

  const { id } = useParams();
  const [spinner, setSpinner] = useState(false);

  useEffect(() => {
    setSpinner(true);
    axios({
      method: "get",
      url: `${import.meta.env.VITE_API_GATEWAY_URL}/nfc-user-details/${id}`,
      headers: {},
    }).then((res) => {
      if (res.status === 200) {
        setSpinner(false);
        setFormValues(res.data.data);
      }
    });
  }, []);

  const progress = getLoadingProgress();

  return (
    <>
      {progress !== 100 && (
        <Progress color="red" size={"xs"} striped animated value={progress} />
      )}
      {progress === 100 && (
        <>
          <Box mt={6}>
            <SignupEditForm
              setSpinner={setSpinner}
              spinner={spinner}
              formValues={formValues}
              id={id}
            />
          </Box>
        </>
      )}
    </>
  );
}

export default SignupEditIndex;
