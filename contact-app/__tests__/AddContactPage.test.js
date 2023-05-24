import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter as Router } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addContact } from '../src/store/action/actionCreator';
import AddContactPage from '../src/pages/AddContactPage'

jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
}));

jest.mock('../src/store/action/actionCreator', () => ({
  addContact: jest.fn(),
}));

describe('AddContactPage Component', () => {
  beforeEach(() => {
    useDispatch.mockReturnValue(jest.fn());
  });

  it('renders the AddContactPage component', () => {
    render(
      <Router>
        <AddContactPage />
      </Router>
    );

    const addContactPageElement = screen.getByText('Add New Contact');
    expect(addContactPageElement).toBeInTheDocument();
  });

  it('submits the new contact form with valid data', () => {
    const mockDispatch = jest.fn();
    useDispatch.mockReturnValue(mockDispatch);

    render(
      <Router>
        <AddContactPage />
      </Router>
    );

    const firstNameInput = screen.getByLabelText('First Name');
    const lastNameInput = screen.getByLabelText('Last Name');
    const ageInput = screen.getByLabelText('Age');
    const photoInput = screen.getByLabelText('Link Photo');
    const submitButton = screen.getByRole('button', { name: 'Add to My Contacts' });

    fireEvent.change(firstNameInput, { target: { value: 'John' } });
    fireEvent.change(lastNameInput, { target: { value: 'Doe' } });
    fireEvent.change(ageInput, { target: { value: '30' } });
    fireEvent.change(photoInput, { target: { value: 'https://example.com/photo.jpg' } });

    fireEvent.click(submitButton);

    expect(mockDispatch).toHaveBeenCalledTimes(1);
    expect(addContact).toHaveBeenCalledWith({
      firstName: 'John',
      lastName: 'Doe',
      age: '30',
      photo: 'https://example.com/photo.jpg',
    });
  });

  it('displays an error message when the form has missing fields', () => {
    render(
      <Router>
        <AddContactPage />
      </Router>
    );

    const submitButton = screen.getByRole('button', { name: 'Add to My Contacts' });

    fireEvent.click(submitButton);

    const errorMessage = screen.getByText('First name cannot be empty!');
    expect(errorMessage).toBeInTheDocument();
  });
});
