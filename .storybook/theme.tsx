import { Icon } from "@iconify/react";
import type {
  MantineTheme,
  MantineThemeOverride,
} from "@mantine/core";
import { createEmotionCache } from "@mantine/core";

const MANTINE_PRIMARY_COLOR = [
  "#CBEBFF",
  "#88D2FF",
  "#4EBCFF",
  "#1CA9FF",
  "#0096F9",
  "#0080D3",
  "#016DB2",
  "#005B96",
  "#004C7D",
  "#003F68",
  "#003456",
  "#C9F3FB",
];

const MANTINE_BACKGROUND_COLOR = [
  "#F2F4F6",
  "#F2F4F8",
  "#F6F6F6",
  "#FBFBFB",
];

export const myCache = createEmotionCache({ key: "mantine" });

const defaultInputStyles = {
  input: {
    ":disabled": {
      opacity: 1,
      color: "black",
    },
  },
};

const MantineCompDefaultProps = {
  Radio: {
    classNames: {
      radio: "cursor-pointer disabled:checked:bg-primary3",
    },
  },
  Checkbox: {
    classNames: {
      input: "cursor-pointer",
    },
  },
  Input: { styles: { ...defaultInputStyles } },
  NumberInput: {
    styles: { ...defaultInputStyles },
    parser: (value: string) => value.replace(/[^0-9]/g, ""),
    formatter: (value: string) =>
      !Number.isNaN(parseFloat(value))
        ? `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ".")
        : "",
  },
  Textarea: { styles: { ...defaultInputStyles } },
  TextInput: { styles: { ...defaultInputStyles } },
  Select: {
    rightSection: <Icon icon="akar-icons:chevron-down" width={12} />,
    styles: {
      rightSection: { pointerEvents: "none" },
      ...defaultInputStyles,
    },
  },
  DatePicker: {
    rightSection: (
      <Icon
        icon="ic:round-date-range"
        color="#C1C7CD"
        width={24}
        className="mr-2"
      />
    ),
    styles: { ...defaultInputStyles },
  },
  Button: {
    styles: (theme: MantineTheme, params) => ({
      root: {
        borderColor:
          params.variant === "outline" && params.color === "red"
            ? theme.colors.red[8]
            : undefined,
        color:
          params.variant === "outline" && params.color === "red"
            ? theme.colors.red[8]
            : undefined,
        backgroundColor:
          params.variant === "filled" && params.color === "red"
            ? theme.colors.red[8]
            : undefined,
        "&:hover": {
          backgroundColor:
            params.variant === "filled" && params.color === "red"
              ? theme.colors.red[9]
              : undefined,
        },
        "&:disabled": {
          borderColor:
            params.variant === "outline"
              ? theme.colors.gray[5]
              : undefined,
          backgroundColor:
            params.variant === "outline" ? "transparent" : undefined,
        },
      },
    }),
  },
};

export const theme: MantineThemeOverride = {
  fontFamily: "Inter, Roboto, system-ui",
  colors: {
    primary: MANTINE_PRIMARY_COLOR as [string],
    bg: MANTINE_BACKGROUND_COLOR as [string],
  },
  primaryColor: "primary", // key of theme.colors
  respectReducedMotion: true,
  components: {
    Radio: {
      defaultProps: MantineCompDefaultProps.Radio,
    },
    Checkbox: {
      defaultProps: MantineCompDefaultProps.Checkbox,
    },
    Input: {
      defaultProps: MantineCompDefaultProps.Input,
    },
    NumberInput: {
      defaultProps: MantineCompDefaultProps.NumberInput,
    },
    Textarea: {
      defaultProps: MantineCompDefaultProps.Textarea,
    },
    TextInput: {
      defaultProps: MantineCompDefaultProps.TextInput,
    },
    Select: {
      defaultProps: MantineCompDefaultProps.Select,
    },
    DatePicker: {
      defaultProps: MantineCompDefaultProps.DatePicker,
    },
    Button: {
      defaultProps: MantineCompDefaultProps.Button,
    },
  },
};
