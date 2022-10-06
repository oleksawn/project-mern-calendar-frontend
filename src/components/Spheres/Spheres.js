import { useState } from 'react';
import { useSelector } from 'react-redux/es/exports';
import dayjs from 'dayjs';

import { Paper } from '@mui/material';
import PopMenuDrawer from '../../common/Drawer/PopMenuDrawer';
import InlineMenuDrawer from '../../common/Drawer/InlineMenuDrawer';
import SpheresMenu from './SpheresMenu';
import Task from '../../common/Task/Task';

import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { CircularProgress } from '@mui/material';

const spheres = [
  { title: 'sources', color: '#5cc5ef' },
  { title: 'health', color: '#bbcf4a' },
  { title: 'people', color: '#ffb745' },
  { title: 'adore', color: '#fe7a47' },
  { title: 'default', color: '#a3a599' },
];

const Spheres = ({ windowSize, dateForView }) => {
  const { tasks, error, status } = useSelector((state) => state.tasks) || [];
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
    <Paper className="spheres_container" sx={{ backgroundColor: 'block.dark' }}>
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
          {status === 'loading' && <CircularProgress />}
          {error && <p>{error.message}</p>}
          {tasks.length > 0 &&
            tasks.map((task) => {
              return <Task task={task} key={task._id} block="spheres" />;
            })}
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
            {status === 'loading' && <CircularProgress />}
            {error && <p>{error.message}</p>}
            {tasks.length > 0 &&
              tasks.map((task) => {
                return <Task task={task} key={task._id} block="spheres" />;
              })}
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
    </Paper>
  );
};
export default Spheres;
