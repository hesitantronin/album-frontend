import React from 'react';
import { BrowserRouter as Router, Link, Routes, Route  } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Container } from '@mui/material';
import AlbumOverview from './components/AlbumOverview';

// App component

function App() {
  return (
    <Router>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
              Album App
            </Link>
          </Typography>
        </Toolbar>
      </AppBar>
      <Container>
        <Routes>
          <Route path="/albumoverview" element={<AlbumOverview />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
