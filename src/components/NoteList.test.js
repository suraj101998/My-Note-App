import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';
import NoteList from './NoteList';

const mockNotes = [
  { id: 1, content: 'Note 1' },
  { id: 2, content: 'Note 2' },
];

test('renders NoteList component', () => {
  render(<NoteList notes={mockNotes} />);
  expect(screen.getByText('Note 1')).toBeInTheDocument();
  expect(screen.getByText('Note 2')).toBeInTheDocument();
});
