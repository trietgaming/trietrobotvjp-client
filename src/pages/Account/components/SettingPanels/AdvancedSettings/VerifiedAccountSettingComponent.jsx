import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { useRef, memo, useMemo, useCallback } from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import Typography from "@mui/material/Typography";
import LockIcon from "@mui/icons-material/Lock";
import Button from "@mui/material/Button";
import PublicIcon from "@mui/icons-material/Public";
import { useFormikContext } from "formik";
import ActionButton from "../ActionButton";
import Divider from "@mui/material/Divider";
import Tooltip from "@mui/material/Tooltip";
import Badge from "@mui/material/Badge";
import useUser from "@appHooks/useUser";
import CreatePinCodeModal from "./CreatePinCodeModal";
import Paper from "@mui/material/Paper";

const SettingFlex = ({ children, ...props }) => (
  <Paper sx={{ visibility: { md: "hidden" }, my: 1.5 }}>
    <Container
      sx={{
        display: "flex",
        justifyContent: { sm: "space-between", xs: "space-evenly" },
        my: 2.5,
        flexDirection: {
          xs: "column",
          sm: "row",
        },
        visibility: "visible",
      }}
      {...props}
    >
      {children}
    </Container>
  </Paper>
);

const BooleanSwitcherComponent = memo(
  ({
    userSetting,
    label,
    trueValue,
    falseValue,
    currentValue,
    setFieldValue,
  }) => {
    console.log("rerender ", userSetting);
    return (
      <SettingFlex>
        <Typography
          sx={{
            alignItems: "center",
            display: "flex",
            mb: { xs: 3, sm: 0 },
          }}
        >
          {label}
        </Typography>
        <ToggleButtonGroup
          color="info"
          value={currentValue}
          onChange={(e, value) =>
            value !== null && setFieldValue(userSetting, value)
          }
          exclusive
        >
          <ToggleButton
            value={true}
            component={Button}
            startIcon={<PublicIcon />}
          >
            {trueValue}
          </ToggleButton>
          <ToggleButton
            value={false}
            component={Button}
            startIcon={<LockIcon />}
          >
            {falseValue}
          </ToggleButton>
        </ToggleButtonGroup>
      </SettingFlex>
    );
  }
);

const BooleanSwitchers = () => {
  const { values, setFieldValue } = useFormikContext();

  const _setFieldValue = useCallback((userSetting, value) => {
    setFieldValue(userSetting, value);
  }, []);

  const settingTranslator = useRef({
    isTradeable: {
      label: "Mọi người có thể trao đổi hoặc chuyển tiền",
      false: "Không",
      true: "Có",
    },
    isInventoryPublic: {
      label: "Thông tin kho đồ",
      false: "Riêng tư",
      true: "Công khai",
    },
    isBalancePublic: {
      label: "Thông tin số tiền, tài sản",
      false: "Riêng tư",
      true: "Công khai",
    },
  }).current;

  const Components = useMemo(
    () =>
      Object.entries(values)
        .filter(([, settingValue]) => typeof settingValue === "boolean")
        .map(([userSetting], index) => {
          const translatedSetting = settingTranslator[userSetting];
          console.log(userSetting);
          return (
            <BooleanSwitcherComponent
              userSetting={userSetting}
              label={translatedSetting.label}
              trueValue={translatedSetting.true}
              falseValue={translatedSetting.false}
              currentValue={values[userSetting]}
              setFieldValue={_setFieldValue}
              key={index}
            />
          );
        }),
    Object.values(values)
  );
  return <>{Components}</>;
};

const VerifiedAccountSettingComponent = () => {
  const { values, errors } = useFormikContext();
  const hasPinCode = useUser()?.account?.hasPinCode;

  console.log(errors);
  console.log(values);

  return (
    <>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Typography variant="h5" textAlign="center" sx={{ mb: 4 }}>
          {"Bảo mật"}
        </Typography>
        <SettingFlex>
          <Typography
            sx={{ alignItems: "center", display: "flex", mb: { xs: 3, sm: 0 } }}
          >
            Mã PIN 4 chữ số
            <Tooltip
              title={`
              Mã dùng để xác minh các giao dịch như: trao đổi, chuyển tiền, tham gia các hoạt động có biến động số dư... Do bạn đặt ra để đảm bảo bảo mật cho số dư của bạn
              `}
              enterTouchDelay={0}
              leaveTouchDelay={6}
            >
              <Badge
                badgeContent="?"
                variant="standard"
                color="info"
                sx={{ ml: 2, cursor: "default" }}
              >
                <br />
              </Badge>
            </Tooltip>
          </Typography>
          {hasPinCode ? (
            <Button variant="contained" color="warning">
              Đổi mật mã
            </Button>
          ) : (
            <CreatePinCodeModal />
          )}
        </SettingFlex>
        <Divider sx={{ my: 6 }} />
        <Typography variant="h5" textAlign="center" sx={{ mb: 4 }}>
          {"Hiển thị & Trạng thái"}
        </Typography>
        <BooleanSwitchers />
      </Box>
      <ActionButton />
    </>
  );
};

export default VerifiedAccountSettingComponent;
