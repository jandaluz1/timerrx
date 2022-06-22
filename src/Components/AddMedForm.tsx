import React, { ChangeEvent, FormEvent, useState } from "react";
import {
  FormControl,
  FormLabel,
  Input,
  Stack,
  Checkbox,
  CheckboxGroup,
} from "@chakra-ui/react";

//name
//dosage
//frequency
//push notification
//email notification
//ready to be taken
//epoch time of next dose

interface IProps {
  close: () => void;
}

interface MedState {
  name: string;
  dosage: string;
  frequency: number;
  pushNotification: boolean;
  emailNotification: boolean;
  isReady: boolean;
  nextDose: number;
}

export function AddMedForm({ close }: IProps) {
  const [drug, setDrug] = useState<MedState>({
    name: "",
    dosage: "",
    frequency: 1,
    pushNotification: true,
    emailNotification: false,
    isReady: false,
    nextDose: Date.now() + 60000,
  });

  const _meds = localStorage.getItem("meds");
  let meds: any[];
  _meds ? (meds = JSON.parse(_meds)) : (meds = []);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setDrug({ ...drug, [e.target.name]: e.target.value });
  };

  const handleCheck = (e: ChangeEvent<HTMLInputElement>) => {
    setDrug({ ...drug, [e.target.name]: !e.target.checked });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(drug);
    localStorage.setItem("meds", JSON.stringify([...meds, drug]));
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
      <FormLabel>Notification</FormLabel>
      <CheckboxGroup defaultValue={["push"]}>
        <Stack spacing={["1", "5"]} direction={["row", "column"]}>
          <Checkbox name="pushNotification" value="push" onChange={handleCheck}>
            Push Notification
          </Checkbox>
          <Checkbox disabled>Email</Checkbox>
        </Stack>
      </CheckboxGroup>
    </form>
  );
}
