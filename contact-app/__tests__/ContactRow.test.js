import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter as Router } from 'react-router-dom';
import ContactRow from '../src/components/ContactRow';

describe('ContactRow Component', () => {
  const contact = {
    id: 1,
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    photo: 'https://example.com/photo.jpg',
  };

  it('renders the contact row component', () => {
    render(
      <Router>
        <table>
          <tbody>
            <ContactRow contact={contact} />
          </tbody>
        </table>
      </Router>
    );

    const contactRowElement = screen.getByRole('row');
    expect(contactRowElement).toBeInTheDocument();
  });

  it('renders the contact name', () => {
    render(
      <Router>
        <table>
          <tbody>
            <ContactRow contact={contact} />
          </tbody>
        </table>
      </Router>
    );

    const contactNameElement = screen.getByText('John Doe');
    expect(contactNameElement).toBeInTheDocument();
  });

  it('renders the contact age', () => {
    render(
      <Router>
        <table>
          <tbody>
            <ContactRow contact={contact} />
          </tbody>
        </table>
      </Router>
    );

    const contactAgeElement = screen.getByText('30 years old');
    expect(contactAgeElement).toBeInTheDocument();
  });

  it('renders the edit contact link', () => {
    render(
      <Router>
        <table>
          <tbody>
            <ContactRow contact={contact} />
          </tbody>
        </table>
      </Router>
    );

    const editContactLinkElement = screen.getByRole('link', { name: 'Edit Contact' });
    expect(editContactLinkElement).toBeInTheDocument();
    expect(editContactLinkElement).toHaveAttribute('href', '/contacts/edit/1');
  });

  it('renders the delete contact link', () => {
    render(
      <Router>
        <table>
          <tbody>
            <ContactRow contact={contact} />
          </tbody>
        </table>
      </Router>
    );

    const deleteContactLinkElement = screen.getByRole('link', { name: 'Delete Contact' });
    expect(deleteContactLinkElement).toBeInTheDocument();
    expect(deleteContactLinkElement).toHaveAttribute('href', '/contacts/delete/1');
  });
});
