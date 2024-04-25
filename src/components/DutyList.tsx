import React from 'react';
import { List, Button, Checkbox } from 'antd';
import { IDuty, IDutyListProps } from '../interfaces/Duty';
import { deleteDutyApi, onToggleCompleteApi } from '../services/DutyService';

const DutyList: React.FC<IDutyListProps> = ({
  tasks,
  getDuties,
  setUpdateDutyId,
}) => {
  const onDeleteDuty = async (id: string) => {
    await deleteDutyApi(id);
    await getDuties();
  };

  const onUpdate = async (id: string) => {
    setUpdateDutyId(id);
  };
  return (
    <List
      dataSource={tasks}
      renderItem={(item: IDuty) => (
        <List.Item
          actions={[
            <Button type="link" onClick={() => onUpdate(item.id)}>
              Update
            </Button>,
            <Button type="link" onClick={() => onDeleteDuty(item.id)}>
              Delete
            </Button>,
          ]}
        >
          <Checkbox
            checked={item.completed}
            onChange={async (e) => {
              await onToggleCompleteApi(item.id, e.target.checked);
              await getDuties();
            }}
          >
            {item.title}
          </Checkbox>
        </List.Item>
      )}
    />
  );
};

export default DutyList;
