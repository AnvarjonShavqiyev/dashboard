import { useState } from "react";
import { Dialog, DialogTitle, DialogContent, TextField, DialogActions, Button } from "@mui/material";
import { addProduct, setTotalCoins } from "../utils/storage";

interface AddProductDialogProps {
  open: boolean;
  onClose: () => void;
}

const AddProductDialog: React.FC<AddProductDialogProps> = ({ open, onClose }) => {
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");

  const handleAdd = () => {
    if (!amount || !description) return;
    addProduct({ 
      amount: Number(amount), 
      description, 
      date: new Date().toISOString() 
    });
    setAmount("");
    setDescription("");
    setTotalCoins()
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Xo'rozqand qo'shish</DialogTitle>
      <DialogContent>
        <TextField
          label="Amount"
          fullWidth
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          margin="dense"
        />
        <TextField
          label="Description"
          fullWidth
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          margin="dense"
        />
      </DialogContent>
      <DialogActions>
        <Button  sx={{
    backgroundColor: "#F48FB1",
    color: "#fff", 
    "&:hover": { backgroundColor: "#F06292" }, 
  }} onClick={onClose}>Bekor qilish</Button>
        <Button  sx={{
    backgroundColor: "#F48FB1", 
    color: "#fff", 
    "&:hover": { backgroundColor: "#F06292" }, 
  }} onClick={handleAdd} color="primary">Qo'shish</Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddProductDialog;
