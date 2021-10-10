import InputMask from 'react-input-mask';
import TextArea from 'ui/components/input/Textarea/Textarea'
import { OutlinedTextFieldProps } from '@mui/material';

export interface TextAreaMaskProps extends OutlinedTextFieldProps {
  mask: string;
}

const TextAreaMask: React.FC<TextAreaMaskProps> = ({
  mask,
  ...props
}) => {
  return (
    <InputMask mask={mask}>
    {() => {
      return <TextArea { ...props} />;
    }}
    </InputMask>
  )
}

