import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import EditContactPage from '../src/pages/EditContactPage';
import store from '../src/store'; 

describe('EditContactPage', () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <Router>
          <EditContactPage />
        </Router>
      </Provider>
    );
  });

  it('should render the Edit Contact form', () => {

    const firstNameInput = screen.getByLabelText('First Name');
    const lastNameInput = screen.getByLabelText('Last Name');
    const ageInput = screen.getByLabelText('Age');
    const photoInput = screen.getByLabelText('Link Photo');
    const editButton = screen.getByRole('button', { name: 'Edit Contact' });


    expect(firstNameInput).toBeInTheDocument();
    expect(lastNameInput).toBeInTheDocument();
    expect(ageInput).toBeInTheDocument();
    expect(photoInput).toBeInTheDocument();
    expect(editButton).toBeInTheDocument();
  });

  it('should display an error message when submitting the form with empty fields', async () => {

    const editButton = screen.getByRole('button', { name: 'Edit Contact' });

 
    fireEvent.click(editButton);

 
    const errorMessage = await screen.findByText('First name cannot be empty!');
    expect(errorMessage).toBeInTheDocument();
  });

  it('should dispatch the updateContact action when submitting the form with valid input', async () => {
   
    const mockDispatch = jest.fn();

   
    render(
      <Provider store={{ ...store, dispatch: mockDispatch }}>
        <Router>
          <EditContactPage />
        </Router>
      </Provider>
    );


    const firstNameInput = screen.getByLabelText('First Name');
    const lastNameInput = screen.getByLabelText('Last Name');
    const ageInput = screen.getByLabelText('Age');
    const photoInput = screen.getByLabelText('Link Photo');
    const editButton = screen.getByRole('button', { name: 'Edit Contact' });


    fireEvent.change(firstNameInput, { target: { value: 'John' } });
    fireEvent.change(lastNameInput, { target: { value: 'Doe' } });
    fireEvent.change(ageInput, { target: { value: '25' } });
    fireEvent.change(photoInput, { target: { value: 'example.com/photo.jpg' } });


    fireEvent.click(editButton);

    expect(mockDispatch).toHaveBeenCalledWith(
      expect.objectContaining({
        type: 'UPDATE_CONTACT',
        payload: {
          firstName: 'John',
          lastName: 'Doe',
          age: '25',
          photo: 'example.com/photo.jpg',
        },
      })
    );

    
  });
});
