import * as React from 'react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { dimensionsStyles } from '../../../styles/dimensions';

const {
  DialogTitle,
  Dialog,
  DialogContent,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Box,
  DialogActions,
  Button,
} = require('@mui/material');

export default function ListDevicesDialog(props) {
  const { onClose, open, devices } = props;
  const { t } = useTranslation();
  const [selectedDevice, setSelectedDevice] = useState();
  const dimensionsClasses = dimensionsStyles();

  const handleClose = () => {
    onClose(selectedDevice);
  };

  const handleRadioChange = (event) => {
    setSelectedDevice(event.target.value);
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>{t('DEVICES.LIST')}</DialogTitle>
      <DialogContent
        style={{
          width: '300px',
        }}
      >
        <Box>
          <FormControl>
            <FormLabel id="demo-radio-buttons-group-label">{t('DEVICES.BOARDS')}</FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="female"
              value={selectedDevice}
              onChange={handleRadioChange}
              name="radio-buttons-group"
            >
              {devices &&
                devices.map((item, key) => (
                  <FormControlLabel
                    key={key}
                    label={item.name}
                    value={item.port}
                    control={<Radio />}
                  ></FormControlLabel>
                ))}
            </RadioGroup>
          </FormControl>

          <Box>
            <Button
              className={dimensionsClasses['mr-1']}
              color="warning"
              variant="contained"
              size="small"
            >
              {t('DEVICES.ACTIONS.SETUP')}
            </Button>
          </Box>
        </Box>
      </DialogContent>

      <DialogActions>
        <Button onClick={handleClose}>{t('COMMON.CLOSE')}</Button>
        <Button onClick={handleClose} autoFocus>
          {t('COMMON.SELECT')}
        </Button>
      </DialogActions>
    </Dialog>
  );
}
