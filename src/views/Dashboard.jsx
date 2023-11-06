import { Box, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { setBreacrumb } from '../store/slices/contextSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { selectBreadcrumbType } from '../store/selectors/contextSelectors';
import { BREADCRUMB_PATH_TYPE } from '../store/constants/breadcrumb.const';

const Dashboard = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const pathType = useSelector(selectBreadcrumbType);

  useEffect(() => {
    if (pathType !== BREADCRUMB_PATH_TYPE.DASHBOARD) {
      dispatch(
        setBreacrumb({
          data: {
            main: BREADCRUMB_PATH_TYPE.DASHBOARD,
            subTree: null,
          },
        }),
      );
    }
  }, [pathType, dispatch]);

  return (
    <Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <img
          src={'./assets/images/blokino-logo.svg'}
          alt="---"
          width={'200px'}
          height={'200px'}
          style={{
            marginBottom: '20px',
          }}
        ></img>
        <Typography textAlign={'center'} variant="h2" fontWeight={'bold'}>
          {t('DASHBOARD.TITLE')}
        </Typography>
      </Box>
      <Box></Box>
    </Box>
  );
};

export default Dashboard;
