import { MenuItem, SxProps, TextField } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";

type TProps = {
  name: string;
  size?: "small" | "medium";
  label?: string;
  required?: boolean;
  fullWidth?: boolean;
  sx?: SxProps;
  items: string[];
};

const SelectedField = ({
  items,
  name,
  fullWidth = true,
  label,
  required,
  size = "small",
  sx,
}: TProps) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <TextField
          {...field}
          sx={{
            ...sx,
          }}
          size={size}
          select
          label={label}
          required={required}
          fullWidth={fullWidth}
        >
          {items.map((item) => (
            <MenuItem key={item} value={item}>
              {item}
            </MenuItem>
          ))}
        </TextField>
      )}
    />
  );
};

export default SelectedField;
