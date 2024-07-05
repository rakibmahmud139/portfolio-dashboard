import { Box, Button, Grid, Typography } from "@mui/material";
import JoditEditor from "jodit-react";
import { useRef, useState } from "react";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";
import PDatePicker from "../components/form/PDatePicker";
import PFileUploader from "../components/form/PFileUploader";
import PForm from "../components/form/PForm";
import PInput from "../components/form/PInput";
import { useAddBlogMutation } from "../redux/features/blogApi";
import { imageUpload } from "../utils/ImageUpload";

const AddBlog = () => {
  const editor = useRef(null);
  const [content, setContent] = useState("");

  const [addBlog] = useAddBlogMutation();

  const handleFormSubmit = async (data: FieldValues) => {
    const image = await imageUpload(data?.file);

    const resData = {
      title: data?.title,
      platform: data?.platform,
      publicationDate: data?.publicationDate,
      summary: data?.summary,
      url: data?.url,
      content,
      image,
    };

    const res = await addBlog(resData).unwrap();
    if (res?.success) {
      toast.success(res?.message);
    }
  };

  const defaultValues = {
    title: "",
    platform: "",
    summary: "",
    url: "",
    content: "",
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
          borderBottom: "1px solid blue",
          width: "50%",
          mx: "auto",
          pb: "8px",
          fontFamily: "sans-serif",
        }}
      >
        Add Blog
      </Typography>
      <PForm onSubmit={handleFormSubmit} defaultValues={defaultValues}>
        <Grid container spacing={2} sx={{ my: 5 }}>
          <Grid item xs={12} sm={12} md={6}>
            <PInput
              name="title"
              label="Title"
              fullWidth={true}
              sx={{ mb: 2 }}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <PInput
              name="platform"
              label="Platform"
              fullWidth={true}
              sx={{ mb: 2 }}
            />
          </Grid>

          <Grid item xs={12} sm={12} md={6}>
            <PDatePicker
              name="publicationDate"
              label="Publication Date"
              fullWidth={true}
              sx={{ mb: 2 }}
            />
          </Grid>

          <Grid item xs={12} sm={12} md={6}>
            <PInput
              name="summary"
              label="Summary"
              fullWidth={true}
              sx={{ mb: 2 }}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <PInput
              name="url"
              label="Blog Url"
              fullWidth={true}
              sx={{ mb: 2 }}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <PFileUploader name="file" label="Blog Image" sx={{ mb: 2 }} />
          </Grid>
          <Grid item xs={12} sm={12} md={12}>
            <JoditEditor
              ref={editor}
              value={content}
              onChange={(newContent) => setContent(newContent)}
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
