export interface IDuty {
  id: string;
  title: string;
  completed: boolean;
}

export interface IDutyListProps {
  tasks: IDuty[];
  getDuties: () => Promise<void>;
  setUpdateDutyId: (id: string) => void;
}

export interface IDutyInputProps {
  input: string;
  setInput: (input: string) => void;
}
