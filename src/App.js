import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import { linkStyles } from './styles/link';
import { flexBoxStyles } from './styles/flex-box';
import { utilsStyles } from './styles/utils';

import Challenges from './views/Challenges';
import { Box, Divider, Drawer, List, ListItem } from '@mui/material';
import { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { useTranslation } from 'react-i18next';
import Dashboard from './views/Dashboard';
import FullEditor from './views/FullEditor';
import BreadcrumbsPaths from './shared/components/Breadcrumb/Breadcrumb';
import TaskContainer from './views/challenges/TaskContainer';

import Led from './views/challenges/Led';
import LedRGB from './views/challenges/LedRGB';
import Button from './views/challenges/Button';
import SwitchView from './views/challenges/Switch';
import Bumper from './views/challenges/Bumper';
import Lcd from './views/challenges/Lcd';

import Potentiometer from './views/challenges/Potentiometer';
import Joystick from './views/challenges/Joystick';
import Buzzer from './views/challenges/Buzzer';

import MatrixLED from './views/challenges/MatrixLED';
import ServoMotor from './views/challenges/ServoMotor';
import Motion from './views/challenges/Motion';
import Proximity from './views/challenges/Proximity';
import KeyPad from './views/challenges/KeyPad';
import Motor from './views/challenges/Motor';

function App() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const { t } = useTranslation();
  const classes = linkStyles();
  const flexClasses = flexBoxStyles();
  const utilsClasses = utilsStyles();

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setIsDrawerOpen(open);
  };

  return (
    <Router>
      <Box className={utilsClasses.containerFluid}>
        <Box className={flexClasses.flexCenter}>
          <MenuIcon onClick={toggleDrawer(true)}></MenuIcon>

          <Box
            sx={{
              marginLeft: '10px',
            }}
          >
            <BreadcrumbsPaths></BreadcrumbsPaths>
          </Box>
        </Box>

        <Divider
          style={{
            marginTop: '20px',
            marginBottom: '30px',
          }}
        />

        <Drawer anchor="left" open={isDrawerOpen} onClose={toggleDrawer(false)}>
          <List>
            <ListItem>
              <Link className={classes.customLink} to="/">
                {t('SIDEBAR.HOME')}
              </Link>
            </ListItem>
            <ListItem>
              <Link className={classes.customLink} to="/challenges">
                {t('SIDEBAR.CHALLENGES')}
              </Link>
            </ListItem>
            <ListItem>
              <Link className={classes.customLink} to="/editor">
                {t('SIDEBAR.EDITOR')}
              </Link>
            </ListItem>
          </List>
        </Drawer>

        <Switch>
          <Route path="/editor">
            <FullEditor />
          </Route>
          <Route path="/challenges">
            <Challenges />
          </Route>
          <Route path="/led">
            <Led />
          </Route>
          <Route path="/ledRGB">
            <LedRGB></LedRGB>
          </Route>
          <Route path="/button">
            <Button></Button>
          </Route>
          <Route path="/switch">
            <SwitchView></SwitchView>
          </Route>
          <Route path="/bumper">
            <Bumper></Bumper>
          </Route>
          <Route path="/lcd">
            <Lcd></Lcd>
          </Route>{' '}
          <Route path="/potentiometer">
            <Potentiometer></Potentiometer>
          </Route>
          <Route path="/joystick">
            <Joystick></Joystick>
          </Route>
          <Route path="/buzzer">
            <Buzzer></Buzzer>
          </Route>
          <Route path="/matrixLED">
            <MatrixLED></MatrixLED>
          </Route>
          <Route path="/servoMotor">
            <ServoMotor></ServoMotor>
          </Route>
          <Route path="/motion">
            <Motion></Motion>
          </Route>
          <Route path="/proximity">
            <Proximity></Proximity>
          </Route>
          <Route path="/keyPAD">
            <KeyPad></KeyPad>
          </Route>
          <Route path="/motor">
            <Motor></Motor>
          </Route>
          <Route path="/taskManager">
            <TaskContainer></TaskContainer>
          </Route>
          <Route path="/">
            <Dashboard />
          </Route>
        </Switch>
      </Box>
    </Router>
  );
}

export default App;
