import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useFormikContext } from "formik";
import ActionButton from "../../components/ActionButton";
import SettingFetcher from "./SettingFetcher";
import BooleanSwitchers from "./BooleanSwitchers";

const VerifiedAccountSettingComponent = () => {
  const { values, errors } = useFormikContext();

  console.log(errors);
  console.log(values);

  return (
    <>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Typography variant="h5" textAlign="center" sx={{ mb: 4 }}>
          {"Hiển thị & Trạng thái"}
        </Typography>
        <BooleanSwitchers />
        <SettingFetcher />
      </Box>
      <ActionButton />
    </>
  );
};

export default VerifiedAccountSettingComponent;
