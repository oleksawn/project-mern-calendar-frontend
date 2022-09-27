import { Grid } from '@mui/material';

const Menu = ({
  chapters,
  size,
  open,
  handleDrawerOpen,
  handleDrawerClose,
}) => {
  return (
    <>
      <Grid
        item
        container
        direction="column"
        sx={{ overflow: 'hidden', textIndent: 300, ...size, cursor: 'pointer' }}
      >
        {chapters.map(({ title, color }, i) => {
          return (
            <Grid
              key={i}
              item
              xs={11 / chapters.length}
              sx={{ backgroundColor: color }}
            >
              {title}
            </Grid>
          );
        })}
        <Grid
          item
          xs={1}
          sx={{
            backgroundColor: '#fcfdfe',
            position: 'relative',
            overflow: 'visible',
          }}
        ></Grid>
      </Grid>
    </>
  );
};
export default Menu;
