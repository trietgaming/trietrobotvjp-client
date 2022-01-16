import { forwardRef, useState } from "react";
import { useFormikContext } from "formik";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import ReactPinInput from "react-code-input";

const PinField = forwardRef(
  ({ keyName = "pinCode", onComplete, onBack }, mainRef) => {
    const [wannaBack, setWannaBack] = useState(true);
    const {
      setFieldValue,
      values: { [keyName]: currentValue },
      errors: { [keyName]: error },
    } = useFormikContext();

    const handleChange = async (value) => {
      setFieldValue(keyName, value);
      if (onComplete && value.length === 4) onComplete(keyName);
      if (onBack && value.length === 0 && wannaBack) onBack(keyName);
      onBack && value.length === 0 ? setWannaBack(true) : setWannaBack(false);
    };

    return (
      <>
        <Container
          sx={{
            display: "flex",
            width: "100%",
            justifyContent: "center",

            ".react-code-input": {
              display: "flex!important",
              justifyContent: "center",
              "*:focus": {
                transform: "scale(1.1)",
                borderColor: "secondary.main",
              },
              "*": {
                color: "inherit !important",
                margin: "0.25rem!important",
                backgroundColor: "input.main",
                border: "1px solid rgba(112,112,112,0.2)",
                borderRadius: "0.5rem !important",
                fontSize: "2rem !important",
                height: "3.5rem !important",
                outline: "none !important",
                textAlign: "center !important",
                transitionDuration: "250ms!important",
                transitionProperty:
                  "background, color, border, box-shadow, transform !important",
                width: "3.25rem!important",
                borderColor: error ? "error.main" : undefined,
              },
              "input::-webkit-outer-spin-button, input::-webkit-inner-spin-button":
                {
                  WebkitAppearance: "none",
                  margin: 0,
                },
              "input[type=number]": {
                MozAppearance: "textfield",
              },
            },
          }}
          className={error && "error"}
        >
          <ReactPinInput
            ref={mainRef}
            fields={4}
            secret
            type="number"
            value={currentValue}
            inputMode="number"
            autoSelect={true}
            isValid={!error}
            onChange={handleChange}
            inputStyle={{
              backgroundColor: "inherit !important",
              borderColor: "inherit !important",
            }}
            inputStyleInvalid={{ nothing: true }}
            filterChars={[]}
          />
        </Container>
        {error && (
          <Typography color="error.main" textAlign="center" variant="subtitle1">
            {error}
          </Typography>
        )}
      </>
    );
  }
);

export default PinField;
