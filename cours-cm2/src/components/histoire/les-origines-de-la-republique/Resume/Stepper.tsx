import React from "react";

import {
  Grid,
  Stepper as MuiStepper,
  Step,
  StepLabel,
  StepIconProps,
  IconButton,
  Box,
  makeStyles,
} from "@material-ui/core";

import { Theme } from "@material-ui/core/styles";

import ArrowForwardRoundedIcon from "@material-ui/icons/ArrowForwardRounded";
import ArrowBackRoundedIcon from "@material-ui/icons/ArrowBackRounded";

export interface ResumeStep {
  label: string;
  fragment: React.ReactFragment;
}

export interface StepperProperties {
  activeStep: number;
  steps: ResumeStep[];
  onActiveStepChange: (step: number) => void;
}

function ResumeStepIcons(props: StepIconProps) {
  return <div></div>;
}

const useResumeStepperStyle = makeStyles((theme: Theme) => ({
  active: {
    color: `${theme.palette.secondary.main}!important`,
  },
}));

export default function Stepper(props: StepperProperties) {
  const classes = useResumeStepperStyle();
  return (
    <Box>
      <MuiStepper activeStep={props.activeStep}>
        {props.steps.map(({ label }) => (
          <Step key={label}>
            <StepLabel StepIconComponent={ResumeStepIcons} classes={{ active: classes.active }}>
              {label}
            </StepLabel>
          </Step>
        ))}
      </MuiStepper>
      <Grid style={{ marginTop: "1rem" }} container justifyContent="center">
        <Grid item>
          <IconButton
            color="primary"
            disabled={props.activeStep <= 0}
            onClick={() => {
              props.onActiveStepChange(Math.max(props.activeStep - 1, 0));
            }}
          >
            <ArrowBackRoundedIcon />
          </IconButton>
          <IconButton
            color="primary"
            disabled={props.activeStep >= props.steps.length - 1}
            onClick={() => {
              props.onActiveStepChange(Math.min(props.activeStep + 1, props.steps.length - 1));
            }}
          >
            <ArrowForwardRoundedIcon />
          </IconButton>
        </Grid>
      </Grid>
    </Box>
  );
}
