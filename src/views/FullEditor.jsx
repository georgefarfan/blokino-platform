import { Box } from '@mui/material';

import '../shared/components/Blocks/index.js';

import Editor from '../shared/components/Editor/Editor.jsx';
import { flexBoxStyles } from '../styles/flex-box.jsx';
import { BREADCRUMB_PATH_TYPE } from '../store/constants/breadcrumb.const.js';
import { selectBreadcrumbType } from '../store/selectors/contextSelectors.js';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { setTask } from '../store/slices/contextSlice.js';
import { TASK_DATA } from '../store/constants/context.const.js';

export default function FullEditor() {
  const flexClasses = flexBoxStyles();
  const dispatch = useDispatch();
  const pathType = useSelector(selectBreadcrumbType);

  useEffect(() => {
    if (pathType !== BREADCRUMB_PATH_TYPE.FULL_EDITOR) {
      dispatch(
        setTask({
          data: {
            path: {
              main: BREADCRUMB_PATH_TYPE.FULL_EDITOR,
              taskPath: null,
              subTree: null,
            },
            task: TASK_DATA.FULL_EDITOR,
          },
        }),
      );
    }
  }, [pathType, dispatch]);

  return (
    <Box className={flexClasses.flexColumn}>
      <Box className={flexClasses.flexRow}>
        <Editor></Editor>
      </Box>
    </Box>
  );
}
