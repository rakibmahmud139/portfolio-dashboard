import { Box, Button, Grid, Typography } from "@mui/material";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";
import PDatePicker from "../components/form/PDatePicker";
import PFileUploader from "../components/form/PFileUploader";
import PForm from "../components/form/PForm";
import PInput from "../components/form/PInput";
import PSelected from "../components/form/PSelected";
import { useAddProjectMutation } from "../redux/features/projectApi";
import { BackEndTech, FrontEndTech } from "../types";
import { imageUpload } from "../utils/ImageUpload";

const AddProject = () => {
  const [addProject, { isLoading }] = useAddProjectMutation();

  const handleFormSubmit = async (data: FieldValues) => {
    const projectImage = await imageUpload(data?.file);

    const resData = {
      projectTitle: data?.projectTitle,
      description: data?.description,
      usedTechnologiesFrontend: data?.usedTechnologiesFrontend,
      usedTechnologiesBackend: data?.usedTechnologiesBackend,
      startDate: data?.startDate,
      endDate: data?.endDate,
      projectImage,
      repositoryURL: data?.repositoryURL,
      backEndGitHubLink: data?.backEndGitHubLink,
      liveLink: data?.liveLink,
    };

    const res = await addProject(resData).unwrap();
    if (res?.success) {
      toast.success(res?.message);
    }
  };

  const defaultValues = {
    projectTitle: "",
    description: "",
    usedTechnologiesFrontend: "",
    usedTechnologiesBackend: "",
    projectImage: "",
    repositoryURL: "",
    backEndGitHubLink: "",
    liveLink: "",
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
        Add Project
      </Typography>
      <PForm onSubmit={handleFormSubmit} defaultValues={defaultValues}>
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
            <PFileUploader name="file" label="Project Image" sx={{ mb: 2 }} />
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
              items={BackEndTech}
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
          <Button
            disabled={isLoading}
            type="submit"
            sx={{ background: "#FF8F00", color: "#fff" }}
          >
            Add Project
          </Button>
        </Box>
      </PForm>
    </Box>
  );
};

export default AddProject;
