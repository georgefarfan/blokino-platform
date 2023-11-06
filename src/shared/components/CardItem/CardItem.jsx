import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

export default function CardItem(props) {
  const { title, description, url, showBanner, bannerPath, redirect } = props;
  const { t } = useTranslation();
  const history = useHistory();

  const onClick = () => {
    if (redirect) {
      history.push(url);
    }
  };

  return (
    <Card sx={{ maxWidth: 345, minHeight: 300 }}>
      <CardActionArea>
        {showBanner && <CardMedia component="img" height="140" image={bannerPath} alt="..." />}
        <CardContent>
          <Typography gutterBottom variant="h5" fontWeight={'bold'} component="div">
            {t(title)}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {t(description)}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions
        sx={{
          display: 'flex',
          justifyContent: 'flex-end',
        }}
      >
        <Button variant="outlined" size="small" color="primary" onClick={onClick}>
          {t('COMMON.GO')}
        </Button>
      </CardActions>
    </Card>
  );
}
