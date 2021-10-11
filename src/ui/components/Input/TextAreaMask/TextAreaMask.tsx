import InputMask from 'react-input-mask';
import TextArea from 'ui/components/Input/TextArea/TextArea'
import { OutlinedTextFieldProps } from '@mui/material';

export interface TextAreaMaskProps extends OutlinedTextFieldProps {
  mask: string;
  value: string;
}

const TextAreaMask: React.FC<TextAreaMaskProps> = ({
  mask,
  value,
  onChange,
  ...props
}) => {
  return (
    <InputMask mask={mask} value={value} onChange={onChange}>
    {() => {
      return <TextArea { ...props} />;
    }}
    </InputMask>
  )
}

export default TextAreaMask;

