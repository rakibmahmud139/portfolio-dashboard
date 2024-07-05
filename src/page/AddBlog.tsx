import { Box, Button, Grid, Typography } from "@mui/material";
import { FieldValues } from "react-hook-form";
import PDatePicker from "../components/form/PDatePicker";
import PForm from "../components/form/PForm";
import PInput from "../components/form/PInput";
import PSelected from "../components/form/PSelected";
import { FrontEndTech } from "../types";

const AddBlog = () => {
  const handleFormSubmit = (data: FieldValues) => {
    console.log("Success:", data);
  };

  return (
    <Box>
      <Typography
        component="h1"
        variant="h4"
        color="#FF8F00"
        textAlign="center"
        sx={{
          borderBottom: "1px solid #fff",
          width: "50%",
          mx: "auto",
          pb: "8px",
        }}
      >
        Add Blog
      </Typography>
      <PForm onSubmit={handleFormSubmit}>
        <Grid container spacing={2} sx={{ my: 5 }}>
          <Grid item xs={12} sm={12} md={6}>
            <PInput
              name="projectTitle"
              label="Project Title"
              fullWidth={true}
              sx={{ mb: 2 }}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <PInput
              name="description"
              label="Description"
              fullWidth={true}
              sx={{ mb: 2 }}
            />
          </Grid>

          <Grid item xs={12} sm={12} md={6}>
            <PInput
              name="liveLink"
              label="LiveLink"
              fullWidth={true}
              sx={{ mb: 2 }}
            />
          </Grid>

          <Grid item xs={12} sm={12} md={6}>
            <PInput
              name="backEndGitHubLink"
              label="Back End GitHub Link"
              fullWidth={true}
              sx={{ mb: 2 }}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <PInput
              name="projectImage"
              label="Project Image"
              fullWidth={true}
              sx={{ mb: 2 }}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <PInput
              name="repositoryURL"
              label="Front End GitHub Link"
              fullWidth={true}
              sx={{ mb: 2 }}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <PDatePicker
              name="startDate"
              label="Star tDate"
              fullWidth={true}
              sx={{ mb: 2 }}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <PDatePicker name="endDate" label="End Date" sx={{ mb: 2 }} />
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <PSelected
              items={FrontEndTech}
              name="usedTechnologiesBackend"
              label="Used Technologies Backend"
              fullWidth={true}
              sx={{ mb: 2 }}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <PSelected
              items={FrontEndTech}
              name="usedTechnologiesFrontend"
              label="Used Technologies Frontend"
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
          <Button type="submit" sx={{ background: "#FF8F00", color: "#fff" }}>
            Add Blog
          </Button>
        </Box>
      </PForm>
    </Box>
  );
};

export default AddBlog;
