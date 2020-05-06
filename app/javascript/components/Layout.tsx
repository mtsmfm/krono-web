import * as React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';

export const Layout: React.FC = ({ children }) => {
  const [open, setOpen] = React.useState(false);

  return <React.Fragment>
    <CssBaseline />
    <AppBar>
      <Toolbar>
        <IconButton color="inherit" onClick={() => setOpen(true)} edge="start">
          <MenuIcon />
        </IconButton>
        <Typography>
          Krono
      </Typography>
      </Toolbar>
    </AppBar>
    <Drawer open={open} onClose={() => setOpen(false)}>
      <Button>
        Foo
      </Button>
      <Button>
        Bar
      </Button>
      <Button>
        Baz
      </Button>
    </Drawer>
    <main>
      {children}
    </main>
  </React.Fragment>
}
