"use client";
import { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

export default function Home() {
  const [compaign, setCampaign] = useState("All");

  const handleCompaignSelectChange = (event: SelectChangeEvent) => {
    setCampaign(event.target.value as string);
  };

  return (
    <main>
      <FormControl>
        <InputLabel id="demo-simple-select-label">Age</InputLabel>
        <Select
          labelId="compaign-select-label"
          id="compaign-select"
          value={compaign}
          label="Age"
          onChange={handleCompaignSelectChange}
        >
          <MenuItem value={"All"}>All</MenuItem>
          <MenuItem value={"Item 1"}>Item 1</MenuItem>
          <MenuItem value={"Item 2"}>Item 2</MenuItem>
        </Select>
      </FormControl>
    </main>
  );
}
