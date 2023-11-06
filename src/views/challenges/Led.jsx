import { Box, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { setBreacrumb, setTask } from '../../store/slices/contextSlice';
import { useTranslation } from 'react-i18next';
import CardItem from '../../shared/components/CardItem/CardItem';
import { TASK_DATA } from '../../store/constants/context.const';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { useEffect } from 'react';
import { selectBreadcrumbType } from '../../store/selectors/contextSelectors';
import {
  BREADCRUMB_PATH_TYPE,
  BREADCRUMB_SUBTREE_PATH_TYPE,
  BREADCRUMB_TASK_TYPE,
} from '../../store/constants/breadcrumb.const';
import { LED_CHALLENGES_ITEMS } from '../../shared/constants/led.const';
import { flexBoxStyles } from '../../styles/flex-box';
import { dimensionsStyles } from '../../styles/dimensions';

export default function Led() {
  const { t } = useTranslation();
  const history = useHistory();
  const dispatch = useDispatch();
  const pathType = useSelector(selectBreadcrumbType);
  const classes = flexBoxStyles();
  const dimensionsClasses = dimensionsStyles();

  useEffect(() => {
    if (pathType !== BREADCRUMB_PATH_TYPE.LED) {
      dispatch(
        setBreacrumb({
          data: {
            main: BREADCRUMB_PATH_TYPE.LED,
            subTree: BREADCRUMB_SUBTREE_PATH_TYPE.MAIN,
          },
        }),
      );
    }
  }, [pathType, dispatch]);

  const onRedirect = (challenge, task) => {
    dispatch(
      setTask({
        data: {
          path: {
            main: challenge,
            taskPath: BREADCRUMB_TASK_TYPE.TASKS,
            subTree: task,
          },
          task: TASK_DATA[challenge][task],
        },
      }),
    );
    history.push('/taskManager');
  };

  return (
    <Box className={dimensionsClasses['mt-4']}>
      <Typography variant="h5" className={dimensionsClasses['mb-2']}>
        {t('CHALLENGES.LED.TASKS.SUMMARY')}
      </Typography>
      <Box className={classes.gridBox}>
        {LED_CHALLENGES_ITEMS.map((c, key) => (
          <Box key={key} onClick={() => onRedirect(c.challengeName, c.task)}>
            <CardItem
              bannerPath={'./assets/images/electronic-parts/led-banner.jpg'}
              title={c.title}
              description={c.description}
              redirect={false}
              showBanner={true}
            ></CardItem>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
