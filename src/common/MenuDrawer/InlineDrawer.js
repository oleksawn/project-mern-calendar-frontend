import { Grid, Box, Drawer } from '@mui/material';
import Menu from './Menu';

const InlineDrawer = ({ children, menuChapters, size }) => {
  console.log(children);
  return (
    <Grid
      container
      direction="row"
      sx={{
        height: size.height,
        width: '100%',
        overflow: 'hidden',
      }}
    >
      <Menu
        chapters={menuChapters}
        classes={{ height: size.height, width: size.menuWidth }}
      />

      <Grid
        item
        sx={{
          width: `calc(100% - ${size.menuWidth}px)`,
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <Drawer
          sx={{
            '& .MuiPaper-root': {
              position: 'absolute',
              width: '100%',
            },
            height: size.height,
            overflow: 'auto',
          }}
          variant="permanent"
          anchor="left"
        >
          <Box
            sx={{
              '& .MuiPaper-root': {
                position: 'static',
              },
            }}
          >
            {children}
          </Box>
        </Drawer>
      </Grid>
    </Grid>
  );
};
export default InlineDrawer;
