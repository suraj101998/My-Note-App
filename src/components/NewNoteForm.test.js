import '@testing-library/jest-dom';
import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import NewNoteForm from './NewNoteForm';

test('renders NewNoteForm component', () => {
  render(<NewNoteForm />);
  expect(screen.getByPlaceholderText('Enter your note...')).toBeInTheDocument();
});
