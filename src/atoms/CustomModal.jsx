import * as React from 'react';
import Modal from '@mui/material/Modal';
import { Box } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  borderRadius: '10px',
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

export default function CustomModal({ children, open, setOpen, handleClose, ...props }) {
  return (
    <div>
      <Modal
        {...props}
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>{children}</Box>
      </Modal>
    </div>
  );
}
