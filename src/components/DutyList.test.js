import '../../matchMedia.js';
import React from 'react';
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent } from '@testing-library/react';
import DutyList from './DutyList';

jest.mock('../services/DutyService');

describe('DutyList', () => {
  const mockGetDuties = jest.fn();
  const mockSetUpdateDutyId = jest.fn();
  const mockTasks = [
    { id: '1', title: 'Task 1', completed: false },
    { id: '2', title: 'Task 2', completed: true },
  ];

  it('renders tasks', () => {
    const { getByText } = render(
      <DutyList tasks={mockTasks} getDuties={mockGetDuties} setUpdateDutyId={mockSetUpdateDutyId} />
    );

    expect(getByText('Task 1')).toBeInTheDocument();
    expect(getByText('Task 2')).toBeInTheDocument();
  });

  it('calls setUpdateDutyId when a task is updated', () => {
    const { getAllByText } = render(
      <DutyList tasks={mockTasks} getDuties={mockGetDuties} setUpdateDutyId={mockSetUpdateDutyId} />
    );

    fireEvent.click(getAllByText('Update')[0]);

    expect(mockSetUpdateDutyId).toHaveBeenCalledWith('1');
  });

  // Add similar tests for deleteDuty, updateDutyTitle, and toggleDuty
});
