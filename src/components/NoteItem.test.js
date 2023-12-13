import '@testing-library/jest-dom';
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import NoteItem from './NoteItem';

const mockNote = { id: 1, content: 'Test Note' };
const mockEditNote = jest.fn();
const mockDeleteNote = jest.fn();


test('renders NoteItem component', () => {
  render(<NoteItem note={mockNote} editNote={mockEditNote} deleteNote={mockDeleteNote}/>);
  expect(screen.getByText('Test Note')).toBeInTheDocument();
});

test('switches to editing mode when edit button is clicked', () => {
  render(<NoteItem note={mockNote} editNote={mockEditNote} deleteNote={mockDeleteNote}/>);
  fireEvent.click(screen.getByText('Edit'));
  expect(screen.getByDisplayValue('Test Note')).toBeInTheDocument();
});