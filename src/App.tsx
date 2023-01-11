import React from "react";
import {
  Box,
  Chip,
  Divider,
  Paper,
  TextField,
  Button,
  Grid,
  IconButton,
  Typography,
  FormControl,
  Input,
  InputAdornment,
  InputLabel,
} from "@mui/material";
import { useState } from "react";
import LoginIcon from "@mui/icons-material/Login";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";

import { StyledTab, StyledTabs } from "./styled-components/StyledTabs";
import { VisibilityOff, Visibility } from "@mui/icons-material";

function App() {
  const [tabIndex, setTabIndex] = useState(0);
  const [showPassword, setShowPassword] = React.useState(false);

  const handleTabChange = (event: any, newTabIndex: any) => {
    setTabIndex(newTabIndex);
  };

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  return (
    <>
      <Box
        sx={{
          height: "100vh",
          background:
            "linear-gradient(40deg, rgba(255,138,138,1) 0%, rgba(255,0,0,1) 100%)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Paper
          elevation={10}
          sx={{
            width: "25%",
            paddingY: 5,
            background: "#fff",
            borderRadius: 3,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Box
            sx={{
              width: "100%",
              paddingX: 4,
            }}
          >
            <StyledTabs
              value={tabIndex}
              onChange={handleTabChange}
              variant="fullWidth"
            >
              <StyledTab icon={<LoginIcon />} value={0} label="Log in" />
              <StyledTab icon={<PersonAddIcon />} value={1} label="Sign up" />
            </StyledTabs>
          </Box>
          <Box sx={{ padding: 2 }}>
            {tabIndex === 0 && (
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                <Box>
                  <TextField
                    label="Enter your username"
                    variant="standard"
                    margin="normal"
                    fullWidth
                  />
                  <FormControl variant="standard" margin="normal" fullWidth>
                    <InputLabel htmlFor="Password">Password</InputLabel>
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                          >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      }
                    />
                  </FormControl>

                  <Typography
                    variant="body2"
                    sx={{
                      textAlign: "end",
                      fontWeight: "bold",
                      textDecoration: "underline",
                      cursor: "pointer",
                    }}
                  >
                    Forgot password?
                  </Typography>
                </Box>
                <Button
                  variant="contained"
                  color="error"
                  type="submit"
                  sx={{ marginTop: 4, width: "100%", borderRadius: 5 }}
                >
                  Log in
                </Button>
              </Box>
            )}
            {tabIndex === 1 && (
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                <Box>
                  <TextField
                    label="Enter your email"
                    variant="standard"
                    margin="normal"
                    fullWidth
                  />
                  <TextField
                    label="Enter your username"
                    variant="standard"
                    margin="normal"
                    fullWidth
                  />
                  <FormControl variant="standard" margin="normal" fullWidth>
                    <InputLabel htmlFor="Password">Password</InputLabel>
                    <Input
                      id="Password"
                      type={showPassword ? "text" : "password"}
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                          >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      }
                    />
                  </FormControl>
                </Box>
                <Button
                  variant="contained"
                  color="error"
                  sx={{ marginTop: 4, width: "100%", borderRadius: 5 }}
                >
                  Register
                </Button>
              </Box>
            )}
            <Box
              sx={{
                marginTop: 2,
              }}
            >
              <Divider>
                <Chip
                  label="OR"
                  sx={{ fontWeight: "bold", fontSize: "15px" }}
                />
              </Divider>
              <Grid container sx={{ marginTop: 2 }}>
                <Grid
                  item
                  xs={4}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <IconButton size="large">
                    <GoogleIcon fontSize="inherit" />
                  </IconButton>
                </Grid>
                <Grid
                  item
                  xs={4}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <IconButton size="large">
                    <FacebookIcon fontSize="inherit" />
                  </IconButton>
                </Grid>
                <Grid
                  item
                  xs={4}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <IconButton size="large">
                    <TwitterIcon fontSize="inherit" />
                  </IconButton>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Paper>
      </Box>
    </>
  );
}

export default App;
