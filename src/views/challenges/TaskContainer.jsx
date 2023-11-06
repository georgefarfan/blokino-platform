import { Box } from '@mui/material';
import { useSelector } from 'react-redux';
import Editor from '../../shared/components/Editor/Editor';
import { selectTaskSelectedSummary } from '../../store/selectors/contextSelectors';
import { flexBoxStyles } from '../../styles/flex-box';
import DescriptionSlider from '../../shared/components/DescriptionSlider/DescriptionSlider';
import { dimensionsStyles } from '../../styles/dimensions';

export default function TaskContainer() {
  const flexClasses = flexBoxStyles();
  const dimensionsClasses = dimensionsStyles();
  const taskSummary = useSelector(selectTaskSelectedSummary);

  return (
    <Box className={flexClasses.flexColumn}>
      <Box className={flexClasses.flexRow}>
        <Box className={dimensionsClasses['p-4']}>
          {taskSummary && taskSummary.length > 0 && (
            <DescriptionSlider steps={taskSummary}></DescriptionSlider>
          )}
        </Box>
        <Editor></Editor>
      </Box>
    </Box>
  );
}
