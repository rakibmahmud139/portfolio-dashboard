import { Box, Button, Grid, Typography } from "@mui/material";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";
import PDatePicker from "../components/form/PDatePicker";
import PForm from "../components/form/PForm";
import PInput from "../components/form/PInput";
import { useAddExperienceMutation } from "../redux/features/experienceApi";

const AddExperience = () => {
  const [addExperience, { isLoading }] = useAddExperienceMutation();

  const handleFormSubmit = async (data: FieldValues) => {
    const resData = {
      companyName: data?.companyName,
      jobTitle: data?.jobTitle,
      location: data?.location,
      startDate: data?.startDate,
      endDate: data?.location,
    };

    const res = await addExperience(resData).unwrap();
    if (res?.success) {
      toast.success(res?.message);
    }
  };

  const defaultValues = {
    companyName: "",
    jobTitle: "",
    location: "",
  };

  return (
    <Box>
      <Typography
        component="h1"
        variant="h4"
        color="#FF8F00"
        textAlign="center"
        sx={{
          borderBottom: "1px solid blue",
          width: "50%",
          mx: "auto",
          pb: "8px",
          fontFamily: "sans-serif",
        }}
      >
        Add Experience
      </Typography>
      <PForm onSubmit={handleFormSubmit} defaultValues={defaultValues}>
        <Grid container spacing={2} sx={{ my: 5 }}>
          <Grid item xs={12} sm={12} md={6}>
            <PInput
              name="companyName"
              label="Company Name"
              fullWidth={true}
              sx={{ mb: 2 }}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <PInput
              name="jobTitle"
              label="Job Title"
              fullWidth={true}
              sx={{ mb: 2 }}
            />
          </Grid>

          <Grid item xs={12} sm={12} md={6}>
            <PInput
              name="location"
              label="Location"
              fullWidth={true}
              sx={{ mb: 2 }}
            />
          </Grid>

          <Grid item xs={12} sm={12} md={6}>
            <PDatePicker
              name="startDate"
              label="Start Date"
              fullWidth={true}
              sx={{ mb: 2 }}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <PDatePicker
              name="endDate"
              label="End Date"
              fullWidth={true}
              sx={{ mb: 2 }}
            />
          </Grid>
        </Grid>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Button
            disabled={isLoading}
            type="submit"
            sx={{ background: "#FF8F00", color: "#fff" }}
          >
            Add Experience
          </Button>
        </Box>
      </PForm>
    </Box>
  );
};

export default AddExperience;
