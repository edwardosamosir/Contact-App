import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter as Router } from 'react-router-dom';
import Sidebar from '../src/components/Sidebar';

describe('Sidebar Component', () => {
  it('renders the sidebar component', () => {
    render(
      <Router>
        <Sidebar />
      </Router>
    );

    const sidebarElement = screen.getByLabelText('Sidebar');
    expect(sidebarElement).toBeInTheDocument();
  });

  it('renders the Qontakte logo', () => {
    render(
      <Router>
        <Sidebar />
      </Router>
    );

    const qontakteLogoElement = screen.getByAltText('Qontakte Logo');
    expect(qontakteLogoElement).toBeInTheDocument();
  });

  it('renders the My Contacts link', () => {
    render(
      <Router>
        <Sidebar />
      </Router>
    );

    const myContactsLinkElement = screen.getByText('My Contacts');
    expect(myContactsLinkElement).toBeInTheDocument();
    expect(myContactsLinkElement.closest('a')).toHaveAttribute('href', '/');
  });

  it('renders the Add New Contact link', () => {
    render(
      <Router>
        <Sidebar />
      </Router>
    );

    const addContactLinkElement = screen.getByText('Add New Contact');
    expect(addContactLinkElement).toBeInTheDocument();
    expect(addContactLinkElement.closest('a')).toHaveAttribute('href', '/contacts/add');
  });
});
