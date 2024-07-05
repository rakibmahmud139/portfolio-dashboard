import {
  Box,
  Chip,
  FormControl,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  SxProps,
} from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";

interface ITextField {
  name: string;
  size?: "small" | "medium";
  placeholder?: string;
  label?: string;
  required?: boolean;
  fullWidth?: boolean;
  sx?: SxProps;
  items: string[];
}

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const PSelected = ({
  items,
  name,
  label,
  size = "small",
  required,
  fullWidth = true,
  sx,
}: ITextField) => {
  const { control, formState } = useFormContext();
  const isError = formState.errors[name] !== undefined;

  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <FormControl fullWidth={fullWidth} sx={sx} error={isError}>
          <InputLabel>{label}</InputLabel>
          <Select
            {...field}
            multiple
            size={size}
            input={<OutlinedInput label={label} />}
            value={Array.isArray(field.value) ? field.value : []}
            onChange={(event) => field.onChange(event.target.value)}
            renderValue={(selected) => (
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                {selected.map((value) => (
                  <Chip key={value} label={value} />
                ))}
              </Box>
            )}
            MenuProps={MenuProps}
          >
            {items.map((item) => (
              <MenuItem key={item} value={item}>
                {item}
              </MenuItem>
            ))}
          </Select>
          {isError && (
            <p style={{ color: "red" }}>
              {formState.errors[name]?.message as string}
            </p>
          )}
        </FormControl>
      )}
    />
  );
};

export default PSelected;
