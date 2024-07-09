import AccountCircle from "@mui/icons-material/AccountCircle";
import LockIcon from "@mui/icons-material/Lock";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import {
  Avatar,
  Box,
  Button,
  Container,
  InputAdornment,
  Typography,
} from "@mui/material";
import Lottie from "lottie-react";
import { FieldValues } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import PForm from "../components/form/PForm";
import PInput from "../components/form/PInput";
import LoginImg from "../login.json";
import { useLoginMutation } from "../redux/features/authApi";
import { authKey } from "../types";
import { setToLocalStorage } from "../utils/localStorage";

const Login = () => {
  const [loginUser, { isLoading }] = useLoginMutation();

  const navigate = useNavigate();

  const handleLogin = async (data: FieldValues) => {
    try {
      const res = await loginUser(data).unwrap();

      if (res?.success && res?.data?.token) {
        toast.success(res?.message);
        setToLocalStorage(authKey, res?.data?.token);
        navigate("/");
      }
    } catch (error: any) {
      toast.error(error?.data?.errorMessage || "login failed");
    }
  };

  const defaultValues = {
    email: "",
    password: "",
  };

  return (
    <Box sx={{ background: "rgb(216, 239, 211)", height: "100vh" }}>
      <Container
        maxWidth="lg"
        sx={{
          display: { xs: "block", md: "flex" },
          justifyContent: "space-evenly",
          alignItems: "center",
          paddingTop: { md: 8 },
        }}
      >
        <Lottie animationData={LoginImg} />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            User Login
          </Typography>
          <Box sx={{ mt: { xs: "24px", md: 8 } }}>
            <PForm onSubmit={handleLogin} defaultValues={defaultValues}>
              <PInput
                required
                fullWidth
                size="medium"
                label="Email"
                type="email"
                name="email"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <AccountCircle />
                    </InputAdornment>
                  ),
                }}
              />
              <Box sx={{ mt: { xs: "16px", md: "48px" } }}>
                <PInput
                  required
                  fullWidth
                  size="medium"
                  name="password"
                  label="Password"
                  type="password"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <LockIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              </Box>
              <Button
                type="submit"
                fullWidth
                disabled={isLoading}
                sx={{ mt: 3, mb: 2, background: "#ff8f00", color: "#fff" }}
              >
                Login
              </Button>
            </PForm>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Login;
