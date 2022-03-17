import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import React, { useCallback, useEffect } from "react";

import { DashboardLayout } from "../../../components/layouts";
import { usersApi } from "../../../services/users";

function DashboardHome() {
  const [fetchUser] = usersApi.endpoints.fetchUser.useLazyQuery();

  const handleGetUser = useCallback(async () => {
    // TODO: Get UID from account slice
    const uid = "1412342423";
    const userResponse = await fetchUser({ uid: uid });
    // TODO: Save user in account slice
  }, [fetchUser]);

  useEffect(() => {
    handleGetUser();
  }, [handleGetUser]);

  return (
    <DashboardLayout page="dashboard-page">
      <Box sx={{ p: 8, display: "flex", flexDirection: "row" }}>
        <Grid container spacing={8}>
          <Grid item xs={6} md={6}>
            <Card>
              <CardActionArea sx={{ display: "flex" }}>
                <CardMedia
                  component="img"
                  image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJvHvEkqwHEUdErsaMf_SeJNRTuj82LiE_iznJRrXaHktMQKVHaLx80uRWXTp6Ll3xRvQ&usqp=CAU"
                  alt="green iguana"
                  sx={{ width: 300 }}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Cristian Franco
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    En este recuadro tenemos información del usuario.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={6} md={6}>
            <Card>
              <CardActionArea sx={{ display: "flex" }}>
                <CardMedia
                  component="img"
                  image="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Firma_Len%C3%ADn_Moreno_Garc%C3%A9s.png/1200px-Firma_Len%C3%ADn_Moreno_Garc%C3%A9s.png"
                  alt="green iguana"
                  sx={{ width: 300 }}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Firma
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    En este recuadro tenemos la firma del usuario.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </DashboardLayout>
  );
}

export default DashboardHome;
