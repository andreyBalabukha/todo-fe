import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import DutyInput from './DutyInput';
import '@testing-library/jest-dom';

describe('DutyInput', () => {
  it('renders input element with correct placeholder', () => {
    const mockSetInput = jest.fn();
    render(<DutyInput input="" setInput={mockSetInput} />);
    const inputElement = screen.getByPlaceholderText('Add a new task');
    expect(inputElement).toBeInTheDocument();
  });

  it('allows user to enter text', () => {
    const mockSetInput = jest.fn();
    render(<DutyInput input="" setInput={mockSetInput} />);
    const inputElement = screen.getByPlaceholderText('Add a new task');
    fireEvent.change(inputElement, { target: { value: 'New Duty' } });
    expect(mockSetInput).toHaveBeenCalledWith('New Duty');
  });

  it('displays the correct initial input value', () => {
    const mockSetInput = jest.fn();
    render(<DutyInput input="Initial Duty" setInput={mockSetInput} />);
    const inputElement = screen.getByPlaceholderText('Add a new task');
    expect(inputElement.value).toBe('Initial Duty');
  });
});
