"use client";
import {
  Stack,
  TextField,
  Button,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import * as React from "react";
export default function SearchBar() {
  const [value, setValue] = React.useState("");
  return (
    <Stack
      direction={"row"}
      sx={{
        alignItems: "center",
        justifyContent: "center",
        border: 1,
        borderColor: "#0D6EFD",
        borderRadius: 0,
        width: "35%",
      }}
    >
      <TextField
        id="outlined-basic"
        label="Outlined"
        variant="outlined"
        size="small"
        sx={{ borderRadius: 0, borderColor: "#0D6EFD", width: "80%" }}
      />
      <Select
        label={"category"}
        sx={{
          height: 40,
          borderRadius: 0
        }}
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      >
        <MenuItem value={"Ten"}>Ten</MenuItem>
        <MenuItem value={"Twenty"}>Twenty</MenuItem>
        <MenuItem value={"Thirty"}>Thirty</MenuItem>
      </Select>
      <Button
        variant="contained"
        sx={{ height: 40, borderRadius: 0, textTransform: "capitalize" }}
      >
        Search
      </Button>
    </Stack>
  );
}
