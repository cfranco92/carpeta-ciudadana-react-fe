import React, { useEffect, useRef, useState } from "react";

import { Button, CircularProgress, Stack } from "@mui/material";

import { Box } from "@mui/system";
import CheckIcon from "@mui/icons-material/Check";
import Fab from "@mui/material/Fab";
import SaveIcon from "@mui/icons-material/Save";
import { green } from "@mui/material/colors";
import { styled } from "@mui/material/styles";
import { usePostFileMutation } from "../../../../services/files";

const Input = styled("input")({
  display: "none",
});

function UploadDocuments() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [file, setFile] = useState(null);
  const timer = useRef<number>();

  const [postFile] = usePostFileMutation();

  const buttonSx = {
    ...(success && {
      bgcolor: green[500],
      "&:hover": {
        bgcolor: green[700],
      },
    }),
  };

  useEffect(() => {
    return () => {
      clearTimeout(timer.current);
    };
  }, []);

  const handleSelectFile = ({ target }: any) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(target.files[0]);
    fileReader.onload = (e: any) => {
      const file = e.target.result;
      setFile(file);
    };
  };

  const handleUploadFile = async () => {
    if (!loading) {
      setSuccess(false);
      setLoading(true);
      timer.current = window.setTimeout(() => {
        setSuccess(true);
        setLoading(false);
      }, 2000);
    }
    if (file) {
      await postFile(file);
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
      }}
    >
      {file ? (
        <>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Box sx={{ m: 1, position: "relative" }}>
              <Fab
                aria-label="save"
                color="primary"
                sx={buttonSx}
                onClick={handleUploadFile}
              >
                {success ? <CheckIcon /> : <SaveIcon />}
              </Fab>
              {loading && (
                <CircularProgress
                  size={68}
                  sx={{
                    color: green[500],
                    position: "absolute",
                    top: -6,
                    left: -6,
                    zIndex: 1,
                  }}
                />
              )}
            </Box>
            <Box sx={{ m: 1, position: "relative" }}>
              <Button
                variant="contained"
                sx={buttonSx}
                disabled={loading}
                onClick={handleUploadFile}
              >
                Guardar Archivo
              </Button>
              {loading && (
                <CircularProgress
                  size={24}
                  sx={{
                    color: green[500],
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    marginTop: "-12px",
                    marginLeft: "-12px",
                  }}
                />
              )}
            </Box>
          </Box>
        </>
      ) : (
        <>
          <Stack>
            <label htmlFor="contained-button-file">
              <Input
                accept="*"
                id="contained-button-file"
                type="file"
                onChange={handleSelectFile}
              />
              <Button variant="contained" component="span">
                Seleccionar Archivo
              </Button>
            </label>
          </Stack>
        </>
      )}
    </Box>
  );
}

export default UploadDocuments;
