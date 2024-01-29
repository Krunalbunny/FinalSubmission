import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './Navbar';

describe('Navbar Component', () => {
  test('renders Navbar component correctly', () => {
    render(
      <Router>
        <Navbar logout={() => {}} />
      </Router>
    );

    // Check if the "Shop" and "My cart" links are present
    expect(screen.getByText('Shop')).toBeInTheDocument();
    expect(screen.getByText('My cart')).toBeInTheDocument();
    
    // Check if the "Logout" button is present
    expect(screen.getByText('Logout')).toBeInTheDocument();
  });

  // Add more test cases as needed
});
