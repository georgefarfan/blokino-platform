import { Box } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { setBreacrumb } from '../../store/slices/contextSlice';
import Editor from '../../shared/components/Editor/Editor';
import {
  BREADCRUMB_PATH_TYPE,
  BREADCRUMB_SUBTREE_PATH_TYPE,
} from '../../store/constants/breadcrumb.const';
import { selectBreadcrumbType } from '../../store/selectors/contextSelectors';
import { useEffect } from 'react';

export default function Motor() {
  const dispatch = useDispatch();
  const pathType = useSelector(selectBreadcrumbType);

  useEffect(() => {
    if (pathType !== BREADCRUMB_PATH_TYPE.MOTOR) {
      dispatch(
        setBreacrumb({
          data: {
            main: BREADCRUMB_PATH_TYPE.MOTOR,
            subTree: BREADCRUMB_SUBTREE_PATH_TYPE.MAIN,
          },
        }),
      );
    }
  }, [pathType, dispatch]);

  return <Box></Box>;
}
