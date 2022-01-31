import { memo, useMemo, useCallback, useRef } from "react";
import SettingFlex from "./SettingFlex";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import Typography from "@mui/material/Typography";
import LockIcon from "@mui/icons-material/Lock";
import Button from "@mui/material/Button";
import PublicIcon from "@mui/icons-material/Public";
import { useFormikContext } from "formik";

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
    isTradable: {
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

export default BooleanSwitchers;
