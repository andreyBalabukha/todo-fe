import axios from 'axios';
import { IDuty } from '../interfaces/Duty';

const api = axios.create({
  baseURL: 'http://localhost:3001/todo',
});

export const fetchDutiesApi = async (): Promise<IDuty[]> => {
  try {
    const response = await api.get<IDuty[]>('/');
    return response.data;
  } catch (error) {
    console.error('Failed to fetch tasks:', error);
    throw error;
  }
};

export const addDutyApi = async (title: string): Promise<IDuty> => {
  try {
    const response = await api.post<IDuty>('/', { title });
    return response.data;
  } catch (error) {
    console.error('Failed to add task:', error);
    throw error;
  }
};

export const onToggleCompleteApi = async (
  id: string,
  completed: boolean
): Promise<void> => {
  try {
    await api.put(`/${id}`, { completed });
  } catch (error) {
    console.error('Failed to update task:', error);
    throw error;
  }
};

export const updateDutyTitleApi = async ({
  id,
  title,
}: {
  id: string;
  title: string;
}): Promise<void> => {
  try {
    await api.put(`/update/${id}`, { title });
  } catch (error) {
    console.error('Failed to update task:', error);
    throw error;
  }
};

export const deleteDutyApi = async (id: string): Promise<void> => {
  try {
    await api.delete(`/${id}`);
  } catch (error) {
    console.error('Failed to delete task:', error);
    throw error;
  }
};
