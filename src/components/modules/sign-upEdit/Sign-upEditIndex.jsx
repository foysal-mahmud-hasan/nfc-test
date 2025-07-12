import { Box, Progress } from "@mantine/core";

import { getLoadingProgress } from "../../global-hook/loading-progress/getLoadingProgress.js";
import SignupEditForm from "./Sign-upEditForm.jsx";
import { useParams } from "react-router-dom";

function SignupEditIndex() {
  const { id } = useParams();

  const progress = getLoadingProgress();

  return (
    <>
      {progress !== 100 && (
        <Progress color="red" size={"xs"} striped animated value={progress} />
      )}
      {progress === 100 && (
        <>
          <Box mt={6}>
            <SignupEditForm id={id} />
          </Box>
        </>
      )}
    </>
  );
}

export default SignupEditIndex;
