import MenuDrawer from '../../common/MenuDrawer/MenuDrawer';
import Tasks from '../../common/Tasks/Tasks';
import InlineDrawer from '../../common/MenuDrawer/InlineDrawer';

const spheres = [
  { title: 'sources', color: '#5cc5ef' },
  { title: 'health', color: '#bbcf4a' },
  { title: 'people', color: '#ffb745' },
  { title: 'adore', color: '#fe7a47' },
  { title: 'no', color: '#a3a599' },
];

const Spheres = ({ windowSize, dateView }) => {
  const [, , LARGE_WINDOW, EXTRA_WINDOW, HEIGHT] = windowSize;
  const SHOW_SPHERES = LARGE_WINDOW || EXTRA_WINDOW;
  return (
    <div className="spheres_container">
      {SHOW_SPHERES ? (
        <InlineDrawer
          menuChapters={spheres}
          size={{ menuWidth: 18, height: HEIGHT }}
        >
          <Tasks />
        </InlineDrawer>
      ) : (
        <MenuDrawer
          menuChapters={spheres}
          size={{ menuWidth: 18, height: HEIGHT, contentWidth: 350 }}
        >
          <Tasks />
        </MenuDrawer>
      )}
    </div>
  );
};
export default Spheres;
