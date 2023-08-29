import { Icon } from "@iconify/react";
import {
  ActionIcon,
  Button,
  Input,
  TextInput,
  clsx,
} from "@mantine/core";
import { useState } from "react";

interface TextInputListProps {
  label: string;
  placeholder?: string;
  error?: string;
  value: string[];
  onChange: (value: string[]) => void;
  classNames?: {
    rootInput?: string;
  };
}

export function TextInputList({
  label,
  placeholder,
  error,
  value = [],
  onChange = () => {},
  classNames = { rootInput: "" },
}: TextInputListProps) {
  const [textValue, setTextValue] = useState("");
  const handleAdd = () => {
    if (!value.includes(textValue)) {
      onChange([...value, textValue]);
    }
    setTextValue("");
  };
  const handleRemove = (v: string) => {
    const filtered = value.filter((item) => v !== item);
    onChange(filtered);
  };

  return (
    <div className="flex flex-col gap-3">
      <Input.Wrapper label={label}>
        <div className="flex gap-2 items-start">
          <TextInput
            placeholder={placeholder}
            value={textValue}
            onChange={(e) => setTextValue(e.target.value)}
            error={error}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleAdd();
              }
            }}
            classNames={{
              root: clsx(classNames.rootInput),
            }}
          />
          <Button onClick={handleAdd}>Tambah</Button>
        </div>
      </Input.Wrapper>
      <div className="flex gap-2 flex-wrap">
        {value?.map((v) => (
          <div className="flex gap-2 items-center justify-between pl-4 pr-2 py-1 border border-grey2 rounded">
            <p className="text-darkGrey text-sm">{v}</p>
            <ActionIcon
              variant="transparent"
              onClick={() => handleRemove(v)}
            >
              <Icon icon="bi:x" width={25} className="text-grey2" />
            </ActionIcon>
          </div>
        ))}
      </div>
    </div>
  );
}
