/* eslint-disable @typescript-eslint/no-explicit-any */
import { Icon } from "@iconify/react";
import {
  ActionIcon,
  Button,
  Checkbox,
  Input,
  Loader,
  MantineSize,
  Radio,
  clsx,
} from "@mantine/core";
import { useClickOutside, useElementSize } from "@mantine/hooks";
import _ from "lodash";
import {
  Attributes,
  FC,
  ReactElement,
  ReactNode,
  RefObject,
  createElement,
  forwardRef,
  isValidElement,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import trimString from "../utils/helpers/trimString";

type Value = string | number | null;

type ItemObject = {
  label: string | ReactElement;
  value: Value;
  src?: string;
};
type Item = Value | ItemObject;
type NewValue = Item | Item[] | null;

export const getProp = (v: Item, field: string) => {
  if (typeof v === "object" && v !== null) {
    if (field === "label") {
      if (isValidElement(v?.label)) {
        return v?.label;
      }
      return `${v?.label}`;
    }
    return (v as any)[field];
  }
  return v;
};

type SelectedValueProps = {
  value: Item;
  handleRemove: (value: Item) => void;
  disableRemove?: boolean;
  labelComponent?: FC;
};

export function SelectedValue({
  value,
  handleRemove,
  disableRemove,
  labelComponent,
}: SelectedValueProps) {
  return (
    <div className="flex gap-2 items-center justify-between pl-4 pr-2 py-1 border border-grey2 rounded">
      {labelComponent ? (
        createElement(labelComponent, { ...(value as Attributes) })
      ) : (
        <p className="text-darkGrey text-sm">
          {!!getProp(value, "label") &&
            trimString(getProp(value, "label"), 32)}
        </p>
      )}
      {!disableRemove && (
        <ActionIcon
          variant="transparent"
          onClick={() => handleRemove(value)}
        >
          <Icon icon="bi:x" width={25} className="text-grey2" />
        </ActionIcon>
      )}
    </div>
  );
}

type CustomMantineSelectProps = {
  renderValueOutside?: boolean;
  multiple?: boolean;
  searchLoading?: boolean;
  searchFetching?: boolean;
  value: Value | Value[];
  valueKey?: string;
  onChange: (
    newValue: Value[] | null,
    action?: "add" | "remove" | "replace",
    newValueObject?: NewValue,
  ) => void;
  onBlur?: () => void;
  classNames: {
    input?: string;
    dropdown?: string;
    dropdownItem?: string;
    root?: string;
    label?: string;
  };
  data: Item[];
  disabled?: boolean;
  label?: string;
  placeholder?: string;
  size?: string | MantineSize;
  searchable?: boolean;
  searchValue?: string;
  onSearchChange?: (v: string) => void;
  itemComponent?: FC | ReactNode;
  valueComponent?: FC | ReactNode;
  error?: string;
  description?: string;
  inputWrapperOrder?:
    | ("input" | "label" | "error" | "description")[]
    | undefined;
  allowRemoveOnDisabled?: boolean;
  alwaysOpen?: boolean;
  createNewItemLabel?: string;
  canCreateNewItem?: boolean;
  icon?: string | null;
  rightSection?: string | null;
  onCreateNewItem: (newItem: string | undefined) => void;
  customRenderer?:
    | ((
        tempSelected: Item[],
        onRemove: (v: Item) => void,
      ) => ReactNode)
    | null;
  emptyLabel?: string;
  isPopover?: boolean;
  withCount?: boolean;
  withRadio?: boolean;
  searchByFetchOnly?: boolean;
};

/**
 * Simple documentations for CustomMantineSelect
 * @param {Object} props
 * @param {boolean} props.renderValueOutside - render selected value outside of the component
 * @param {boolean} props.multiple - allow multiple selection
 * @param {boolean} props.searchLoading - state when loading first time
 * @param {boolean} props.searchFetching - state when fetching next page (currently unused)
 * @param {any} props.value - selected value
 * @param {string} props.valueKey - valueKey is used to determine the source of the selected item
 * @param {(value, action, objects) => {}} props.onChange - (value, action, objects) => {}, action: add, remove
 *
 *
 * Example:
 * src/Modules/DevelopmentPlan/Components/CMCForum/Messaging/ModalAttachCourse.jsx
 *
 */

export const CustomMantineSelect = forwardRef(
  (
    {
      renderValueOutside = false,
      multiple = false,
      searchLoading = false, // state when loading first time
      searchFetching = false, // state when fetching next page (currently unused)
      value,
      valueKey, // valueKey is used to determine the source of the selected item
      onChange, // (value, action, objects) => {}, action: add, remove
      onBlur,
      classNames,
      data,
      disabled,
      label,
      placeholder,
      size = "base",
      searchable,
      searchValue,
      onSearchChange = () => {},
      itemComponent,
      valueComponent,
      error,
      description,
      inputWrapperOrder,
      allowRemoveOnDisabled = false,
      alwaysOpen = false,
      createNewItemLabel = "Create new",
      canCreateNewItem = false,
      icon = null,
      rightSection = null,
      onCreateNewItem = () => null,
      customRenderer = null,
      emptyLabel = "Item tidak ditemukan.",
      isPopover = false,
      withCount = false,
      withRadio = false, // only for single select
      searchByFetchOnly = false,
    }: CustomMantineSelectProps,
    ref,
  ) => {
    const { ref: inputRef, width } = useElementSize();
    const [open, setOpen] = useState(alwaysOpen);

    const processedValue = (() => {
      if (multiple) {
        return value?.map((v) => {
          const found = data?.find((d) => d.value === v);
          return found || v;
        });
      }
      return data?.find((d) => d.value === value) || value;
    })();

    const [tempSelected, setTempSelected] = useState<NewValue>(
      processedValue as NewValue,
    );

    const getValueOnly = (values: NewValue) => {
      if (multiple) {
        return (
          Array?.isArray(values) && values?.length ? values : []
        )?.map((v) => getProp(v, "value"));
      }
      return [getProp(values as Item, "value")];
    };

    useEffect(() => {
      const valueOnlyTempSelected = getValueOnly(tempSelected);
      const valueOnlyProcessed = getValueOnly(
        processedValue as NewValue,
      );
      if (!_.isEqual(valueOnlyTempSelected, valueOnlyProcessed)) {
        setTempSelected(processedValue as NewValue);
      }

      // const valueOnlyTempSelected = getValueOnly(tempSelected);
      // const valueOnlyProcessed = getValueOnly(processedValue);

      // if (
      //   !!valueOnlyTempSelected &&
      //   !_.isEqual(valueOnlyTempSelected, valueOnlyProcessed)
      // ) {
      //   setOpen(false);
      //   setTempSelected(multiple ? [] : null);
      // }
    }, [tempSelected, processedValue]);

    const handleRemoveValue = (currValue: Item) => {
      const tmpCurrValue =
        typeof currValue === "object"
          ? { ...currValue, src: valueKey }
          : { label: currValue, value: currValue, src: valueKey };
      if (multiple) {
        const newTempSelected = tempSelected?.filter(
          (v: Item) =>
            getProp(v, "value") !==
            getProp(tmpCurrValue as ItemObject, "value"),
        );
        onChange(
          value?.filter(
            (v: Value) =>
              v !== getProp(tmpCurrValue as ItemObject, "value"),
          ),
          "remove",
          newTempSelected,
        );
        setTempSelected(newTempSelected);
      } else {
        onChange(null, "replace");
        setTempSelected(null);
      }
    };

    const handleChange = (currValue: Item, checked: boolean) => {
      const tmpCurrValue =
        typeof currValue === "object"
          ? { ...currValue, src: valueKey }
          : { label: currValue, value: currValue, src: valueKey };
      if (multiple) {
        if (checked) {
          const newTempSelected = [
            ...((tempSelected as Item[]) || []),
            tmpCurrValue,
          ];
          onChange(
            [
              ...((value as Value[]) || []),
              getProp(tmpCurrValue as Item, "value"),
            ],
            "add",
            newTempSelected as NewValue,
          );
          setTempSelected(newTempSelected as NewValue);
        } else {
          const filteredValue = value.filter(
            (v) => v !== getProp(tmpCurrValue as Item, "value"),
          );
          const newTempSelected = (tempSelected || []).filter(
            (v) =>
              getProp(v, "value") !==
              getProp(tmpCurrValue as Item, "value"),
          );
          onChange(filteredValue, "remove", newTempSelected);
          setTempSelected(newTempSelected);
        }
      } else {
        if (!withRadio) setOpen(false);
        onChange(
          getProp(tmpCurrValue as Item, "value"),
          "replace",
          tmpCurrValue as NewValue,
        );
        setTempSelected(tmpCurrValue as Item);
      }
    };

    const handleSearchChange = (e: string) => {
      if (!open) {
        setOpen(true);
      }
      onSearchChange(e);
    };

    const tempData = useMemo(() => {
      if (searchLoading) {
        return [];
      }
      if (!searchByFetchOnly && searchValue && !!data?.length) {
        return data?.filter(
          (v) =>
            getProp(v, "label")
              ?.toLowerCase()
              ?.includes(searchValue?.toLowerCase()),
        );
      }
      return data;
    }, [data, searchValue, searchLoading]);

    const isSelected = useCallback(
      (currValue: Item) => {
        if (!multiple) {
          return (
            getProp(tempSelected as Item, "value") ===
            getProp(currValue, "value")
          );
        }
        const valueOnlyTempSelected = getValueOnly(tempSelected);
        return valueOnlyTempSelected?.includes(
          getProp(currValue, "value"),
        );
      },
      [tempSelected, multiple],
    );

    const valueExist = useMemo(() => {
      if (!searchValue || !data || !tempSelected) return null;
      if (!multiple) {
        return !!data?.find(
          (d) =>
            d.label
              ?.toLowerCase()
              .includes(searchValue?.toLowerCase()),
        );
      }
      return (
        !!data?.find(
          (d) =>
            d.label
              ?.toLowerCase()
              .includes(searchValue?.toLowerCase()),
        ) ||
        !!tempSelected?.find(
          (d) =>
            d.label
              ?.toLowerCase()
              .includes(searchValue?.toLowerCase()),
        )
      );
    }, [data, tempSelected, searchValue]);

    const getInputRightSide = () => {
      if (searchLoading) {
        return <Loader size="sm" />;
      }
      return (
        <Icon
          icon={
            searchable ? "ic:round-search" : "akar-icons:chevron-down"
          }
          width={searchable ? 20 : 12}
          color="#878D96"
        />
      );
    };

    useEffect(() => {
      if (disabled) {
        setOpen(false);
        setTempSelected(null);
      }
    }, [disabled]);

    const renderItem = useCallback(
      (item: ItemObject) => {
        if (itemComponent) {
          return createElement(itemComponent as FC, {
            ...(item as Attributes),
          });
        }
        return (
          <p className="text-start cursor-pointer w-full">
            {getProp(item, "label")}
          </p>
        );
      },
      [itemComponent],
    );

    const renderValueItem = (item: ItemObject) => {
      return (
        <SelectedValue
          key={getProp(item, "value")}
          value={item}
          handleRemove={handleRemoveValue}
          disableRemove={allowRemoveOnDisabled ? false : disabled}
          labelComponent={valueComponent as FC}
        />
      );
    };

    const getTextValue = useCallback(() => {
      if (multiple) return null;
      if (tempSelected) return tempSelected.label;
      if (searchValue) return null;
      return "";
    }, [tempSelected, searchValue, multiple]);

    const rootRef = useClickOutside(() =>
      alwaysOpen ? () => {} : setOpen(false),
    );

    const [focused, setFocused] = useState(false);
    const buttonHeight = useMemo(() => {
      if (size === "xs") return 26;
      if (size === "sm") return 34;
      if (size === "base") return 36;
      if (size === "md") return 42;
      if (size === "lg") return 50;
      if (size === "xl") return 58;
    }, [size]);

    return (
      <div
        ref={rootRef}
        className={clsx(
          "relative flex flex-col gap-2",
          classNames?.root,
        )}
      >
        <Input.Wrapper
          ref={inputRef}
          label={label}
          classNames={{
            label: classNames?.label || "",
            error: "mt-2",
          }}
          error={error || ""}
          description={description}
          size={size as MantineSize}
          inputWrapperOrder={inputWrapperOrder}
        >
          <button
            type="button"
            style={{ height: buttonHeight }}
            className={clsx(
              "flex justify-between items-center w-full border-[1.75px] rounded text-start",
              "transition-all delay-[10m]",
              focused ? "border-primary3" : "border-gray-300",
              icon ? "pl-1.5 pr-3" : "px-3",
              searchable ? "cursor-text" : "cursor-pointer",
              size ? `text-${size}` : "text-sm",
              classNames?.input,
            )}
            onClick={
              disabled
                ? () => {}
                : () => setOpen(alwaysOpen ? true : !open)
            }
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
          >
            {icon && <div className="pr-2.5">{icon}</div>}
            {!searchable ? (
              <p
                className={clsx(
                  (!value || !value?.length) && "text-gray-400/80",
                )}
              >
                {value && !multiple ? getTextValue() : placeholder}
              </p>
            ) : (
              <Input
                variant="unstyled"
                size={size as MantineSize}
                aria-label="search-input"
                className="w-full placeholder:text-gray-400/80"
                placeholder={placeholder}
                value={getTextValue()}
                onChange={(e) => handleSearchChange(e.target.value)}
                onFocus={() => setFocused(true)}
                onBlur={(e) => {
                  setFocused(false);
                  onBlur?.(e);
                }}
                onKeyDown={(e) => {
                  if (!multiple && e.key === "Backspace") {
                    if (tempSelected) {
                      handleRemoveValue(tempSelected as Item);
                    }
                  }
                }}
              />
            )}
            <div
              className={clsx(
                "flex p-1",
                !searchable ? "pointer-events-none" : "",
                withCount && "w-fit",
              )}
            >
              {withCount && !!tempSelected?.length && (
                <div className="flex items-center justify-center bg-primary3 cursor-default rounded-full min-w-[1.25rem] w-fit h-5 mr-2">
                  <p className="text-white text-sm">
                    {tempSelected?.length}
                  </p>
                </div>
              )}
              {rightSection || getInputRightSide()}
            </div>
          </button>
        </Input.Wrapper>

        {/* ITEM DROPDOWN */}
        <div
          ref={ref as RefObject<HTMLDivElement>}
          style={{ width, maxHeight: "200px" }}
          className={clsx(
            "bg-white flex flex-col rounded border overflow-y-auto scroll-style-3",
            !(open && !searchLoading) && "hidden",
            isPopover && "absolute z-10 top-10",
            classNames?.dropdown,
          )}
        >
          {!!data?.length &&
            !!tempData?.length &&
            tempData.map((v) => (
              <button
                key={getProp(v, "value")}
                type="button"
                className={clsx(
                  "flex justify-between gap-2 items-center hover:bg-bg2 py-2 px-4",
                  isSelected(v) &&
                    "bg-primary1 text-primary3 hover:bg-primary1",
                  classNames?.dropdownItem,
                )}
                onClick={() => handleChange(v, !isSelected(v))}
              >
                {renderItem(v)}
                {!multiple && withRadio && (
                  <Radio
                    classNames={{ input: "cursor-pointer" }}
                    onChange={(e) => {
                      e.stopPropagation();
                      handleChange(v, e.currentTarget.checked);
                    }}
                    checked={isSelected(v)}
                  />
                )}
                {multiple && (
                  <Checkbox
                    classNames={{ input: "cursor-pointer" }}
                    onChange={(e) => {
                      e.stopPropagation();
                      handleChange(v, e.currentTarget.checked);
                    }}
                    checked={isSelected(v)}
                  />
                )}
              </button>
            ))}

          {canCreateNewItem && !valueExist && (
            <Button
              variant="white"
              className="w-fit text-grey2"
              onClick={() => {
                onCreateNewItem(searchValue);
                onSearchChange("");
              }}
              leftIcon={<Icon icon="ic:baseline-add" width={20} />}
            >
              {createNewItemLabel}
            </Button>
          )}

          {!canCreateNewItem &&
            !valueExist &&
            (!data?.length || !tempData?.length) && (
              <p className="text-center py-5 text-grey2">
                {emptyLabel}
              </p>
            )}

          {searchFetching && (
            <Loader size="sm" className="my-1 mx-auto shrink-0" />
          )}
        </div>

        {/* SELECTED VALUE */}
        {/* Will only rendered if renderValueOutside is true */}
        {(() => {
          if (
            renderValueOutside &&
            (!!tempSelected || !!tempSelected?.length)
          ) {
            return (
              <div className="flex gap-2 items-center flex-wrap">
                {multiple
                  ? tempSelected?.map((v) => renderValueItem(v))
                  : renderValueItem(tempSelected as ItemObject)}
              </div>
            );
          }
          return null;
        })()}

        {/* CUSTOM RENDERER OF SELECTED VALUE */}
        {/* Will only rendered if customRenderer is true */}
        {typeof customRenderer === "function" &&
          customRenderer(tempSelected as Item[], (val) => {
            if (multiple) {
              return handleRemoveValue(val);
            }
            return handleRemoveValue(tempSelected as Item);
          })}
      </div>
    );
  },
);
