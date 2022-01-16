import { memo, useState } from "react";
import Button from "@mui/material/Button";
import CreatePinCodeModalForm from "./CreatePinCodeModalForm";

const CreatePinCodeModal = memo(() => {
  const [isOpen, setOpen] = useState(false);
  const handleToggleModal = () => setOpen((prev) => !prev);

  return (
    <>
      <Button variant="contained" color="success" onClick={handleToggleModal}>
        Tạo mã ngay
      </Button>
      {isOpen && <CreatePinCodeModalForm {...{ isOpen, handleToggleModal }} />}
    </>
  );
});

export default CreatePinCodeModal;
