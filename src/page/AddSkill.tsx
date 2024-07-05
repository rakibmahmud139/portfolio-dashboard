import { Box, Button, Grid, Typography } from "@mui/material";
import { FieldValues } from "react-hook-form";
import PFileUploader from "../components/form/PFileUploader";
import PForm from "../components/form/PForm";
import PInput from "../components/form/PInput";
import SelectedField from "../components/form/Selector";
import { ProficiencyLevel } from "../types";
import { imageUpload } from "../utils/ImageUpload";
import { useAddSkillMutation } from "../redux/features/skillApi";
import { toast } from "sonner";

const AddSkill = () => {
  const [addSkill] = useAddSkillMutation();

  const handleFormSubmit = async (data: FieldValues) => {
    const image = await imageUpload(data?.file);

    const resData = {
      skillName: data?.skillName,
      proficiencyLevel: data?.proficiencyLevel,
      yearsOfExperience: Number(data?.yearsOfExperience),
      image,
    };

    const res = await addSkill(resData).unwrap();
    if (res?.success) {
      toast.success(res?.message);
    }
  };

  const defaultValues = {
    skillName: "",
    proficiencyLevel: "",
    yearsOfExperience: "",
    image: "",
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
          fontFamily: "sans-serif",
        }}
      >
        Add Skill
      </Typography>
      <PForm onSubmit={handleFormSubmit} defaultValues={defaultValues}>
        <Grid container spacing={2} sx={{ my: 5 }}>
          <Grid item xs={12} sm={12} md={6}>
            <PInput
              name="skillName"
              label="Skill Name"
              fullWidth={true}
              sx={{ mb: 2 }}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <SelectedField
              items={ProficiencyLevel}
              name="proficiencyLevel"
              label="Proficiency Level"
              fullWidth={true}
              sx={{ mb: 2 }}
            />
          </Grid>

          <Grid item xs={12} sm={12} md={6}>
            <PInput
              name="yearsOfExperience"
              label="Years Of Experience"
              type="number"
              fullWidth={true}
              sx={{ mb: 2 }}
            />
          </Grid>

          <Grid item xs={12} sm={12} md={6}>
            <PFileUploader name="file" label="Image" sx={{ mb: 2 }} />
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
            Add Skill
          </Button>
        </Box>
      </PForm>
    </Box>
  );
};

export default AddSkill;
