import { Grid, Box, Drawer } from '@mui/material';

const InlineMenuDrawer = ({ children, menuComponent, size, menuWidth }) => {
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
      {menuComponent()}
      <Grid
        item
        sx={{
          width: `calc(100% - ${menuWidth.width}px)`,
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <Drawer
          sx={{
            '.MuiPaper-root.MuiDrawer-paper': {
              position: 'absolute',
              width: '100%',
            },
            height: size.height,
            overflow: 'auto',
          }}
          variant="permanent"
          anchor="left"
        >
          <Box>
            {children}
          </Box>
        </Drawer>
      </Grid>
    </Grid>
  );
};
export default InlineMenuDrawer;
