import React, { ChangeEvent, FormEvent, useState, useContext } from "react";
import {
  FormControl,
  FormLabel,
  Input,
  Stack,
  Checkbox,
  CheckboxGroup,
} from "@chakra-ui/react";

import { MedState } from "./interface";
import { MedsContext } from "./context";

//name
//dosage
//frequency
//epoch time of next dose
//last time taken

interface IProps {
  close: () => void;
}

const SECOND = 1000;
const MINUTE = SECOND * 60;
const HOUR = MINUTE * 60;

export function AddMedForm({ close }: IProps) {
  const [drug, setDrug] = useState<MedState>({
    name: "",
    dosage: 0,
    frequency: 0,
    lastDose: Date.now(),
    nextDose: null,
  });

  const { meds, setMeds } = useContext(MedsContext);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setDrug({ ...drug, [e.target.name]: e.target.value });
  };

  // const handleCheck = (e: ChangeEvent<HTMLInputElement>) => {
  //   setDrug({ ...drug, [e.target.name]: !e.target.checked });
  // };

  const setNextDose = (): void => {
    const hours = Math.floor(24 / drug.frequency!);
    drug.nextDose = Date.now() + HOUR * hours;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setNextDose();
    console.log(drug);
    localStorage.setItem("meds", JSON.stringify([...meds, drug]));
    setMeds((prevState) => [...prevState, drug]);
    close();
  };

  return (
    <form id="addMed" onSubmit={handleSubmit}>
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
        <FormLabel htmlFor="dosage">Dosage(mg)</FormLabel>
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
      {/* <FormLabel>Notification</FormLabel> */}
      {/* <CheckboxGroup defaultValue={["push"]}>
        <Stack spacing={["1", "5"]} direction={["row", "column"]}>
          <Checkbox name="pushNotification" value="push" onChange={handleCheck}>
            Push Notification
          </Checkbox>
          <Checkbox disabled>Email</Checkbox>
        </Stack>
      </CheckboxGroup> */}
    </form>
  );
}
