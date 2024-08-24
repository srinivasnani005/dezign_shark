import { styled } from '@mui/material/styles';
import InputBase, { InputBaseProps } from '@mui/material/InputBase';
import { ReactNode } from 'react';

interface CustomInputProps extends InputBaseProps {
  endAdornment?: ReactNode;
}

const CustomInputWrapper = styled(InputBase)(({ theme }) => ({
  'label + &': {
    marginTop: theme.spacing(3),
  },
  '& .MuiInputBase-input': {
    position: 'relative',
    backgroundColor: '#F8F8F8',
    border: '1px solid #33333333',
    fontSize: 16,
    padding: '12px 14px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    borderRadius: '8px',
    '&::placeholder': {
      color: '#000',
    },
    '&:focus': {
      borderColor: '#7643EB80',
      boxShadow: '0px 3px 6px #7643EB4D',
      backgroundColor: '#F8F8F8',
    },
  },
  '& .MuiInputAdornment-positionEnd': {
    marginLeft: theme.spacing(1),
    position: 'absolute',
    right: 0,
    fontSize: '14px',
  },
}));

export default function CustomInput(props: CustomInputProps) {
  const { endAdornment, ...other } = props;
  return (
    <CustomInputWrapper
      {...other}
      endAdornment={endAdornment} 
    />
  );
}
