import React from "react";

import Paper from "../../../node_modules/@material-ui/core/Paper";
import { Chart, PieSeries } from "../../../node_modules/@devexpress/dx-react-chart-material-ui";
import { Animation } from "../../../node_modules/@devexpress/dx-react-chart";
import { makeStyles, withStyles } from "../../../node_modules/@material-ui/core/styles";
import clsx from "../../../node_modules/clsx";
import Stepper from "../../../node_modules/@material-ui/core/Stepper";
import Step from "../../../node_modules/@material-ui/core/Step";
import StepLabel from "../../../node_modules/@material-ui/core/StepLabel";
import Check from "../../../node_modules/@material-ui/icons/Check";
import SettingsIcon from "../../../node_modules/@material-ui/icons/Settings";
import GroupAddIcon from "../../../node_modules/@material-ui/icons/GroupAdd";
import VideoLabelIcon from "../../../node_modules/@material-ui/icons/VideoLabel";
import StepConnector from "../../../node_modules/@material-ui/core/StepConnector";
import Button from "../../../node_modules/@material-ui/core/Button";
import Typography from "../../../node_modules/@material-ui/core/Typography";
import GradeIcon from "../../../node_modules/@material-ui/icons/Grade";
import TextField from "../../../node_modules/@material-ui/core/TextField";
const data = [
  { direction: "Творчество", area: 102 },
  { direction: "Учеба", area: 74 },
  { direction: "Общественная деятельность", area: 7 },
  { direction: "Добровольчество", area: 7 },
  { direction: "Наука", area: 65 },
  { direction: "Спорт", area: 5 },
];

const useColorlibStepIconStyles = makeStyles({
  root: {
    backgroundColor: "#ccc",
    zIndex: 1,
    color: "#fff",
    width: 50,
    height: 50,
    display: "flex",
    borderRadius: "50%",
    justifyContent: "center",
    alignItems: "center",
  },
  active: {
    backgroundImage:
      "linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)",
    boxShadow: "0 4px 10px 0 rgba(0,0,0,.25)",
  },
  completed: {
    backgroundImage:
      "linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)",
  },
});

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  button: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

const ColorlibConnector = withStyles({
  alternativeLabel: {
    top: 22,
  },
  active: {
    "& $line": {
      backgroundImage:
        "linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)",
    },
  },
  completed: {
    "& $line": {
      backgroundImage:
        "linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)",
    },
  },
  line: {
    height: 3,
    border: 0,
    backgroundColor: "#eaeaf0",
    borderRadius: 1,
  },
})(StepConnector);

function ColorlibStepIcon(props) {
  const classes = useColorlibStepIconStyles();
  const { active, completed } = props;

  const icons = {
    1: <GradeIcon />,
    2: <GradeIcon />,
    3: <GradeIcon />,
    4: <GradeIcon />,
  };

  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active,
        [classes.completed]: completed,
      })}
    >
      {icons[String(props.icon)]}
    </div>
  );
}

function getSteps() {
  return ["0 PP", "100 PP", "1000 PP", "10 000 PP"];
}

function ProfileStats() {

  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(1);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <>
      <div class="profile-stats">
        <div class="main__title-box-start">
          <h3 class="main__title">Уровень профиля:</h3>

          <div class="main__title-icon"></div>

          <div class="profile-stats__charts-progress">
            <Stepper
              alternativeLabel
              activeStep={activeStep}
              connector={<ColorlibConnector />}
            >
              {steps.map((label) => (
                <Step key={label}>
                  <StepLabel StepIconComponent={ColorlibStepIcon}>
                    {label}
                  </StepLabel>
                </Step>
              ))}
            </Stepper>

            <ul className="profile-stats__chart-info">
              <li className="profile-stats__chart-info_text">0 PP</li>

              <li className="profile-stats__chart-info_text">100 PP</li>

              <li className="profile-stats__chart-info_text">1000 PP</li>

              <li className="profile-stats__chart-info_text">10 000 PP</li>
            </ul>
          </div>
        </div>

        <div class="main__title-box-start">
          <h3 class="main__title">Моя статистика:</h3>

          <div class="main__title-icon"></div>

          <div class="profile-stats__charts-pies">
            <Chart data={data} height="250" width="250">
              <PieSeries valueField="area" argumentField="direction" />
              <Animation />
            </Chart>

            <Chart data={data} height="250" width="250">
              <PieSeries valueField="area" argumentField="direction" />
              <Animation />
            </Chart>

            <ul className="profile-stats__chart-info">
              <li className="profile-stats__chart-info_text">
                {data[0].direction}
              </li>

              <li className="profile-stats__chart-info_text">
                {data[1].direction}
              </li>

              <li className="profile-stats__chart-info_text">
                {data[2].direction}
              </li>

              <li className="profile-stats__chart-info_text">
                {data[3].direction}
              </li>

              <li className="profile-stats__chart-info_text">
                {data[4].direction}
              </li>

              <li className="profile-stats__chart-info_text">
                {data[5].direction}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProfileStats;
