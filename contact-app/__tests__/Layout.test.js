import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Layout from '../src/pages/Layout';

describe('Layout', () => {
  beforeEach(() => {
    render(
      <Router>
        <Layout />
      </Router>
    );
  });

  it('should render the Sidebar component', () => {
    const sidebarElement = screen.getByTestId('sidebar');
    expect(sidebarElement).toBeInTheDocument();
  });

  it('should render the Outlet component', () => {
    const outletElement = screen.getByTestId('outlet');
    expect(outletElement).toBeInTheDocument();
  });

  it('should have the correct class names for flex layout', () => {
    const flexContainer = screen.getByTestId('layout-flex-container');
    expect(flexContainer).toHaveClass('flex', 'flex-row');
  });

  it('should have the correct class names for the sidebar and main content area', () => {
    const sidebar = screen.getByTestId('sidebar');
    const mainContent = screen.getByTestId('main-content');
    expect(sidebar).toHaveClass('w-1/12');
    expect(mainContent).toHaveClass('w-8/12', 'mt-10');
  });
});
