import * as React from 'react';
import { Grid, Drawer, Box } from '@mui/material';
import Menu from './Menu';

export default function MenuDrawer({ children, menuChapters, size }) { 
  const [open, setOpen] = React.useState(false);
  const handleDrawerToggle = () => {
    if (open) setOpen(false);
    else setOpen(true);
  };

  return (
    <Box sx={{position: 'relative'}}>
      <Drawer
        variant="permanent"
        open={open}
        sx={{
          boxSizing: 'border-box',
          height: size.height,
        }}
      >
        <Grid
          container
          direction="row"
          sx={{
            height: size.height,
            ...(open && {
              width: size.contentWidth,
              transition: 'width ease 0.6s',
              overflow: 'auto',
            }),
            ...(!open && {
              transition: 'width ease 0.6s',
              width: size.menuWidth,
              overflow: 'hidden',
            }),
          }}
        >
          <Menu
            chapters={menuChapters}
            classes={{ height: size.height, width: size.menuWidth }}
            handleDrawerToggle={handleDrawerToggle}
          />

          <Grid
            item
            sx={{
              width: `calc(100% - ${size.menuWidth}px)`,
            }}
          >
            {children}
          </Grid>
        </Grid>
      </Drawer>
    </Box>
  );
}
