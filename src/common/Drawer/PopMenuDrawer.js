import * as React from 'react';
import { Grid, Drawer, Box } from '@mui/material';

const PopMenuDrawer= ({ children, menuComponent, size, menuWidth, open, handleDrawerClose }) => { 
  return (
    <Box sx={{ position: 'relative' }}>
      <Drawer
        variant="permanent"
        open={open}
        sx={{
          boxSizing: 'border-box',
          height: size.height,
          overflow: 'hidden',
        }}
        onClose={handleDrawerClose}
      >
        <Grid
          container
          direction="row"
          sx={{
            height: size.height,
            overflow: 'hidden',
            ...(open && {
              width: size.width,
              transition: 'width ease 0.6s',
            }),
            ...(!open && {
              transition: 'width ease 0.6s',
              width: menuWidth,
            }),
          }}
        >
          {menuComponent()}
          <Grid
            item
            sx={{
              height: size.height,
              width: `calc(100% - ${menuWidth.width}px)`,
              overflow: 'auto',
            }}
          >
            {children}
          </Grid>
        </Grid>
      </Drawer>
    </Box>
  );
}
export default PopMenuDrawer;