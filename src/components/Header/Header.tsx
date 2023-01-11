import { AppBar } from '@mui/material';
import { Typography } from '@mui/material';
import { Toolbar } from '@mui/material';
import { Button } from '@mui/material';
import { InputBase } from '@mui/material';
import { Box } from '@mui/system';
import { Container } from '@mui/system';

export function Header() {
  return (
    <AppBar>
      <Toolbar>
        <Container>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography>VideoGames</Typography>
            <Box fontStyle={{ backgroundColor: 'white' }}>
              <InputBase />
            </Box>
            <Button color="inherit">Login</Button>
          </Box>
        </Container>
      </Toolbar>
    </AppBar>
  );
}
