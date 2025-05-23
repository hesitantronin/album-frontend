import React from 'react';
import { BrowserRouter as Router, Link, Routes, Route  } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Container } from '@mui/material';
import { Navigate } from 'react-router-dom';
import AlbumOverview from './components/AlbumOverview';
import AlbumDetail from './components/AlbumDetail';
import Create from './components/CreateAlbum';

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
          <Route path="/" element={<Navigate to="/albumoverview" />} />
          <Route path="/albumoverview" element={<AlbumOverview />} />
          <Route path="/albumdetail/:id" element={<AlbumDetail />} />
          <Route path='/new' element={<Create />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
