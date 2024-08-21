import { useField } from "formik";
import Autocomplete from "@mui/material/Autocomplete";
import { FormHelperText, TextField } from "@mui/material";
export default function CustomDatalist({
  label,
  values,
  name,
  handleChange,
  disabled,
  getOptionLabel,
  value,
  ...props
}) {
  const [field, meta] = useField(name);
  return (
    <div className="p-0">
      <p>{label}</p>
      <Autocomplete
        size="small"
        {...props}
        {...field}
        disablePortal
        renderInput={(params) => <TextField {...params} />}
        options={values}
        fullWidth
        disabled={disabled}
        onChange={handleChange}
        getOptionLabel={getOptionLabel}
        value={value}
      />
      {meta.touched && meta.error ? (
        <FormHelperText error>{meta.error}</FormHelperText>
      ) : null}
    </div>
  );
}
