export interface InputProps {
  id: string;
  type: string;
  name?: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLElement>;
  placeholder?: string;
}
