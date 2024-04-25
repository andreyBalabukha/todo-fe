import React, { useEffect, useState } from 'react';
import DutyInput from './components/DutyInput';
import DutyList from './components/DutyList';
import { IDuty } from './interfaces/Duty';
import {
  addDutyApi,
  fetchDutiesApi,
  updateDutyTitleApi,
} from './services/DutyService';
import { Button } from 'antd';

const App: React.FC = () => {
  const [tasks, setDuties] = useState<IDuty[]>([]);
  const [input, setInput] = useState<string>('');
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [updatedDutyId, setUpdatedDutyId] = useState<string>('');

  const handleDuty = async () => {
    if (!input.trim()) {
      return;
    }
    if (isEditing) {
      await updateDutyTitleApi({ id: updatedDutyId, title: input });
    } else {
      await addDutyApi(input);
    }
    await getDuties();
  };
  const getDuties = async () => {
    try {
      const fetchedDuties = await fetchDutiesApi();
      setDuties(fetchedDuties);
    } catch (error) {
      console.error('Error fetching tasks:', error);
      setDuties([]);
    }

    setInput('');
    setUpdatedDutyId('');
    setIsEditing(false);
  };

  const setUpdateDutyId = async (id: string) => {
    setIsEditing(true);
    const task: IDuty | undefined = tasks.find((task) => task.id === id);
    if (!task) {
      return;
    }
    setUpdatedDutyId(task.id);
    setInput(task.title);
  };

  useEffect(() => {
    getDuties();
  }, []);

  return (
    <div style={{ margin: '20px' }}>
      <DutyInput input={input} setInput={setInput} />
      <DutyList
        getDuties={getDuties}
        setUpdateDutyId={setUpdateDutyId}
        tasks={tasks}
      />
      <Button disabled={!input} type="primary" onClick={handleDuty}>
        {isEditing ? 'Update Duty' : 'Create Duty'}
      </Button>
    </div>
  );
};

export default App;
