import { ActionIcon, Input, NumberInput, clsx } from "@mantine/core";
import { useRef } from "react";

type CustomNumberInput = {
  label?: string;
  description?: string;
  placeholder?: string;
  value: number;
  min: number;
  max: number;
  rightSideText?: string;
  hideControls?: boolean;
  onChange: (value: number) => void;
  classNames?: {
    root: string;
    inputRoot: string;
  };
};

export function CustomNumberInput({
  label,
  description,
  placeholder,
  value,
  min,
  max,
  rightSideText,
  hideControls = false,
  onChange = () => {},
  classNames = {
    root: "",
    inputRoot: "",
  },
}: CustomNumberInput) {
  const handlers = useRef();
  return (
    <Input.Wrapper
      label={label}
      description={description}
      inputWrapperOrder={["label", "input", "error", "description"]}
      classNames={{
        root: classNames.root,
        description: "mt-2 text-sm",
      }}
    >
      <div className="flex items-start">
        <NumberInput
          handlersRef={handlers}
          placeholder={placeholder}
          min={min}
          max={max}
          value={value}
          onChange={onChange}
          hideControls
          classNames={{
            root: clsx("rounded-r-none", classNames.inputRoot),
            input: "rounded-r-none",
          }}
        />
        <div className="flex border border-gray-300 rounded-r">
          {rightSideText && (
            <span className="p-[4.75px] bg-gray-100">
              {rightSideText}
            </span>
          )}
          {!hideControls && (
            <>
              <ActionIcon
                size="lg"
                onClick={() => handlers.current.decrement()}
              >
                <span className="text-2xl">-</span>
              </ActionIcon>
              <div className="border-l">
                <ActionIcon
                  size="lg"
                  onClick={() => handlers.current.increment()}
                >
                  <span className="text-2xl">+</span>
                </ActionIcon>
              </div>
            </>
          )}
        </div>
      </div>
    </Input.Wrapper>
  );
}
