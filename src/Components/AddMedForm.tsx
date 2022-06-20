import React, { ChangeEvent, FormEvent, useState } from "react";
import { FormControl, FormLabel, Input } from "@chakra-ui/react";

//name
//dosage
//frequency

export function AddMedForm() {
  const [drug, setDrug] = useState({
    name: "",
    dosage: "",
    frequency: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setDrug({ ...drug, [e.target.name]: e.target.value });
  };

  return (
    <form id="addMed">
      <FormControl isRequired>
        <FormLabel htmlFor="name">Name</FormLabel>
        <Input
          id="name"
          name="name"
          value={drug.name}
          onChange={handleChange}
          placeholder="Drug Name"
          variant="filled"
        />
      </FormControl>
      <FormControl isRequired>
        <FormLabel htmlFor="dosage">Dosage</FormLabel>
        <Input
          id="dosage"
          name="dosage"
          value={drug.dosage}
          onChange={handleChange}
          placeholder="Dosage"
          variant="filled"
        />
      </FormControl>
      <FormControl isRequired>
        <FormLabel htmlFor="frequency">Times per Day</FormLabel>
        <Input
          id="frequency"
          name="frequency"
          value={drug.frequency}
          onChange={handleChange}
          placeholder="Frequency"
          variant="filled"
        />
      </FormControl>
    </form>
  );
}
