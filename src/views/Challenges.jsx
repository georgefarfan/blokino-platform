import { Box, Chip, Divider, Stack } from '@mui/material';
import CardItem from '../shared/components/CardItem/CardItem';
import { useDispatch, useSelector } from 'react-redux';
import { setBreacrumb } from '../store/slices/contextSlice';
import { useTranslation } from 'react-i18next';
import { selectBreadcrumbType } from '../store/selectors/contextSelectors';
import { useEffect } from 'react';
import { BREADCRUMB_PATH_TYPE } from '../store/constants/breadcrumb.const';
import { CHALLENGES_ITEMS } from '../shared/constants/challenges.const';
import { flexBoxStyles } from '../styles/flex-box';
import { dimensionsStyles } from '../styles/dimensions';

const Challenges = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const pathType = useSelector(selectBreadcrumbType);
  const classes = flexBoxStyles();
  const dimensionsClasses = dimensionsStyles();

  useEffect(() => {
    if (pathType !== BREADCRUMB_PATH_TYPE.CHALLENGES) {
      dispatch(
        setBreacrumb({
          data: {
            main: BREADCRUMB_PATH_TYPE.CHALLENGES,
            subTree: null,
          },
        }),
      );
    }
  }, [pathType, dispatch]);

  return (
    <Box>
      <Box className={classes.flexColumn}>
        {CHALLENGES_ITEMS.map((ITEM, cKey) => {
          return (
            <Box key={cKey} className={dimensionsClasses['mb-4']}>
              <Stack direction="row" spacing={1}>
                <Chip label={t(ITEM.LABEL)} color={ITEM.COLOR} />
              </Stack>
              <Divider
                sx={{
                  margin: '30px 0px',
                }}
              ></Divider>
              <Box className={classes.gridBox}>
                {ITEM.ITEMS.map((c, key) => (
                  <CardItem
                    title={c.title}
                    key={key}
                    description={c.description}
                    url={c.url}
                    redirect={true}
                    showBanner={true}
                    bannerPath={
                      'https://www.pngall.com/wp-content/uploads/1/Electronic-PNG-Picture.png'
                    }
                  ></CardItem>
                ))}
              </Box>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default Challenges;
