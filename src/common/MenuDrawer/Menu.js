import { Grid } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

const Menu = ({ chapters, classes, handleDrawerToggle }) => {
  return (
    <Grid
      item
      container
      direction="column"
      sx={{ overflow: 'hidden', textIndent: 300, ...classes }}
    >
      <Grid item xs={0.5} sx={{ textIndent: 0, marginLeft: 0 }}>
        <IconButton onClick={handleDrawerToggle} sx={{ padding: 0 }}>
          <MenuIcon />
        </IconButton>
      </Grid>

      <Grid item xs={0.5} sx={{ backgroundColor: '#fcfdfe' }}>
        all
      </Grid>

      {chapters.map(({ title, color }, i) => {
        return (
          <Grid key={i} item xs={11 / chapters.length} sx={{ backgroundColor: color }}>
            {title}
          </Grid>
        );
      })}
    </Grid>
  );
};
export default Menu;
