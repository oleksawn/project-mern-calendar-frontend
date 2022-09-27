import { useState } from 'react';
import PopMenuDrawer from '../../common/Drawer/PopMenuDrawer';
import Tasks from '../../common/Tasks/Tasks';
import InlineMenuDrawer from '../../common/Drawer/InlineMenuDrawer';
import SpheresMenu from './SpheresMenu';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

const spheres = [
  { title: 'sources', color: '#5cc5ef' },
  { title: 'health', color: '#bbcf4a' },
  { title: 'people', color: '#ffb745' },
  { title: 'adore', color: '#fe7a47' },
  { title: 'no', color: '#a3a599' },
];

const Spheres = ({ windowSize, dateForView }) => {
  const [, , LARGE_WINDOW, HEIGHT] = windowSize;
  const [open, setOpen] = useState(false);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };

  const menuWidth = 18;

  return (
    <div className="spheres_container">
      {LARGE_WINDOW ? (
        <InlineMenuDrawer
          size={{ height: HEIGHT }}
          menuWidth={{ width: menuWidth }}
          menuComponent={() => {
            return (
              <SpheresMenu
                chapters={spheres}
                size={{ width: menuWidth, height: HEIGHT }}
                open={open}
                handleDrawerOpen={handleDrawerOpen}
                handleDrawerClose={handleDrawerClose}
              />
            );
          }}
        >
          <Tasks />
        </InlineMenuDrawer>
      ) : (
        <>
          <PopMenuDrawer
            size={{ width: 350, height: HEIGHT }}
            menuWidth={{ width: menuWidth }}
            open={open}
            handleDrawerClose={handleDrawerClose}
            menuComponent={() => {
              return (
                <SpheresMenu
                  chapters={spheres}
                  size={{ width: menuWidth, height: HEIGHT }}
                  open={open}
                  handleDrawerOpen={handleDrawerOpen}
                  handleDrawerClose={handleDrawerClose}
                />
              );
            }}
          >
            <Tasks />
          </PopMenuDrawer>

          <IconButton
            onClick={() => {
              if (open) handleDrawerClose();
              else handleDrawerOpen();
            }}
            sx={{
              marginBottom: 1,
              marginLeft: -1,
              borderRight: '1px solid var(--color-mark)',
              color: 'var(--color-mark)',
              backgroundColor: 'var(--color-white)',
              position: 'fixed',
              left: 0,
              bottom: 0,
              zIndex: 10000,
              '&:hover': {
                backgroundColor: 'var(--color-light)',
              },
            }}
          >
            <MenuIcon />
          </IconButton>
        </>
      )}
    </div>
  );
};
export default Spheres;
