import { useEffect, useRef, useState } from 'react';
import Blockly from 'blockly';
import { useDispatch, useSelector } from 'react-redux';
import { setChallenge } from '../../../store/slices/contextSlice';
import { Box, Button } from '@mui/material';
import ListDevicesDialog from '../Dialogs/ListDevicesDialog';
import { useTranslation } from 'react-i18next';
import {
  selectEditorActions,
  selectTaskSelected,
  selectToolBox,
} from '../../../store/selectors/contextSelectors';
import { INITIAL_DEVICE, setDevice, setDevices } from '../../../store/slices/devicesSlice';
import { selectDeviceSelected, selectDevices } from '../../../store/selectors/devicesSelectors';
import SearchIcon from '@mui/icons-material/Search';
import SendIcon from '@mui/icons-material/Send';
import Chip from '@mui/material/Chip';
import { dimensionsStyles } from '../../../styles/dimensions';
import { EVENTS } from '../../constants/events.const';
import { javascriptGenerator } from 'blockly/javascript';

const ipcRenderer = window.require('electron').ipcRenderer;

const Editor = () => {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const workspaceRef = useRef(null);
  const dispatch = useDispatch();
  const toolBox = useSelector(selectToolBox);
  const dimensionsClasses = dimensionsStyles();

  const task = useSelector(selectTaskSelected);
  const devices = useSelector(selectDevices);
  const deviceSelected = useSelector(selectDeviceSelected);
  const actions = useSelector(selectEditorActions);

  useEffect(() => {
    if (task && task.name !== 'LED') {
      dispatch(
        setChallenge({
          data: 'LED',
        }),
      );
    }
  }, [task, dispatch]);

  useEffect(() => {
    const workspace = Blockly.inject(workspaceRef.current, {
      toolbox: toolBox,
    });
    return () => {
      workspace.dispose();
    };
  }, [toolBox]);

  // CHANNEL RESPONSE REPLY LIST DEVICES

  useEffect(() => {
    ipcRenderer.on(EVENTS.REPLY_LIST_DEVICES, (event, result) => {
      dispatch(
        setDevices({
          data: result,
        }),
      );
    });

    return () => {
      ipcRenderer.removeAllListeners(EVENTS.REPLY_LIST_DEVICES);
    };
  }, []);

  // CHANNEL RESPONSE EXECUTE
  useEffect(() => {
    ipcRenderer.on(task.channel, (event, result) => {
      console.log('EXECUTE REPONSE');
    });

    return () => {
      ipcRenderer.removeAllListeners(task.channel);
    };
  }, [task]);

  const getDevices = () => {
    ipcRenderer.send(EVENTS.LIST_DEVICES);
    setOpen(true);
  };

  const handlerDeleteDevice = () => {
    dispatch(setDevice(INITIAL_DEVICE));
  };

  const handleClose = (device) => {
    setOpen(false);
    dispatch(
      setDevice({
        data: {
          port: device,
          name: device,
          fullName: device,
          os: 'linux',
        },
      }),
    );
  };

  const execute = () => {
    let code = '';
    if (workspaceRef && workspaceRef.current) {
      code = javascriptGenerator.workspaceToCode();
    }

    const data = {
      code,
      device: deviceSelected.name,
      validate_code: {
        variable: task.variables,
      },
      channel: task.channel,
    };
    ipcRenderer.send(EVENTS.EXECUTE, data);
  };

  return (
    <Box
      sx={{
        width: '100%',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          marginBottom: '20px',
        }}
      >
        <Box>
          {deviceSelected && deviceSelected.name !== '' && (
            <Chip
              color="info"
              disabled={false}
              size="medium"
              variant="filled"
              label={deviceSelected.name}
              onDelete={() => handlerDeleteDevice()}
            />
          )}
        </Box>

        <Box>
          <Button
            className={dimensionsClasses['mr-1']}
            color="warning"
            variant="contained"
            size="small"
          >
            {t('EDITOR.ACTIONS.IMPORT_CODE.TITLE')}
          </Button>

          <Button
            className={dimensionsClasses['mr-1']}
            color="warning"
            variant="contained"
            size="small"
          >
            {t('EDITOR.ACTIONS.EXPORT_CODE.TITLE')}
          </Button>

          <Button
            className={dimensionsClasses['mr-1']}
            color="warning"
            variant="contained"
            size="small"
          >
            {t('EDITOR.ACTIONS.SETUP_DEVICE.TITLE')}
          </Button>

          <Button
            className={dimensionsClasses['mr-1']}
            onClick={getDevices}
            endIcon={<SearchIcon />}
            variant="contained"
            size="small"
          >
            {t('EDITOR.ACTIONS.DEVICES.TITLE')}
          </Button>

          <Button
            onClick={execute}
            variant="contained"
            size="small"
            color="success"
            endIcon={<SendIcon />}
          >
            {t('EDITOR.ACTIONS.EXECUTE.TITLE')}
          </Button>
        </Box>
      </Box>

      <ListDevicesDialog devices={devices} open={open} onClose={handleClose}></ListDevicesDialog>

      <div ref={workspaceRef} style={{ height: 'calc(100vh - 180px)', width: '100%' }}></div>
    </Box>
  );
};

export default Editor;
