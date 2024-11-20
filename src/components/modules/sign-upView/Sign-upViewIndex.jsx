import React, { useEffect, useState } from "react";
import { Box, Progress } from "@mantine/core";
import { useTranslation } from "react-i18next";

import { getLoadingProgress } from "../../global-hook/loading-progress/getLoadingProgress.js";

import ViewCard from "./ViewCard.jsx";
import { useOutletContext, useParams } from "react-router-dom";
import axios from "axios";

function SignupViewIndex({ setFormData }) {
  const { t, i18n } = useTranslation();
  const { id } = useParams();
  const [spinner, setSpinner] = useState(false);
  const [formValues, setFormValues] = useState(null);
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
          {/* {console.log(setFormData)} */}
          <Box>
            <ViewCard spinner={spinner} formValues={formValues} id={id} />
            {/* <ViewCard /> */}
            {/* <ContactCard /> */}
            {/* <ContactCardPrev /> */}
          </Box>
        </>
      )}
    </>
  );
}

export default SignupViewIndex;
