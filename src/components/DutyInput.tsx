import React from 'react';
import { Input } from 'antd';
import { IDutyInputProps } from '../interfaces/Duty';

const DutyInput: React.FC<IDutyInputProps> = ({ input, setInput }) => {
  return (
    <>
      <Input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add a new task"
      />
    </>
  );
};

export default DutyInput;
