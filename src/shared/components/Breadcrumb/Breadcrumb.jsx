import { Breadcrumbs, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { selectBreadcrumbPaths } from '../../../store/selectors/contextSelectors';
import { linkStyles } from '../../../styles/link';

function BreadcrumbsPaths() {
  const { t } = useTranslation();
  const breadcrumb = useSelector(selectBreadcrumbPaths);
  const classes = linkStyles();

  return (
    <Breadcrumbs aria-label="breadcrumb">
      {breadcrumb &&
        breadcrumb.map((b, key) => {
          let step;
          switch (b.position) {
            case 'Breadcrumb':
              step = (
                <Link className={classes.breadcrumbLink} key={key} to={b.path}>
                  {t(b.name)}
                </Link>
              );
              break;
            case 'End':
              step = (
                <Typography key={key} color="text.primary">
                  {t(b.name)}
                </Typography>
              );
              break;
            default:
              break;
          }
          return step;
        })}
    </Breadcrumbs>
  );
}

export default BreadcrumbsPaths;
