import { Dialog, Transition } from "@headlessui/react";
import { Icon } from "@iconify/react";
import { Button } from "@mantine/core";
import { Fragment, memo } from "react";


type ConfirmationModalProps = {
    isOpen: boolean;
    variant?: string;
    message?: string;
    subMessage?: string;
    withCancel?: boolean;
    withConfirm?: boolean;
    handleClose?: () => void;
    handleConfirm?: () => void;
    labelCancel?: string;
    labelConfirm?: string;
    isLoadingConfirm?: boolean;
    width?: string;
    buttonWidth?: string;
}

type TVariantValue = {
    icon: string;
    mantineColor: string;
    colorPrimary: string;
    colorSecondary: string;
}

type TVariantProps =  {
    [key: string]: TVariantValue;  
}

const ConfirmationModal = memo(({
  isOpen,
  variant = "danger",
  message = "Are you sure want to perform this action?",
  subMessage = "",
  withCancel = true,
  withConfirm = true,
  handleClose = () => {},
  handleConfirm = () => {},
  labelCancel = "Tidak",
  labelConfirm = "Iya",
  isLoadingConfirm = false,
  width = "22vw",
  buttonWidth,
} : ConfirmationModalProps)=> {
  const variantProps = {
    safe: {
      icon: "ic:round-check-circle",
      mantineColor: "primary",
      colorPrimary: "#016DB2",
      colorSecondary: "#93E2F7",
    },
    warning: {
      icon: "mingcute:warning-fill",
      mantineColor: "yellow",
      colorPrimary: "#F5BB5C",
      colorSecondary: "#FBE7C5",
    },
    danger: {
      icon: "ic:round-warning",
      mantineColor: "red",
      colorPrimary: "#CB3A31",
      colorSecondary: "#FFDDDD",
    },
  } as TVariantProps;

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={() => true}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel
                className={`w-[${width}] p-8 transform overflow-hidden rounded-md bg-white text-left align-middle shadow-xl transition-all`}
              >
                <div className="grid gap-4 justify-items-center">
                  {/* ICON */}
                  <div
                    className="flex items-center justify-center w-28 h-28 rounded-full"
                    style={{
                      background:
                        variantProps[variant].colorSecondary,
                    }}
                  >
                    <Icon
                      icon={variantProps[variant].icon}
                      width={70}
                      color={variantProps[variant].colorPrimary}
                    />
                  </div>
                  {/* ICON */}

                  <div
                    className="flex flex-col gap-2 text-center mb-5"
                    style={{ width: `calc(${width}-2rem)` }}
                  >
                    <span className="font-medium text-xl">
                      {message}
                    </span>
                    <span className="text-sm font-medium">
                      {subMessage}
                    </span>
                  </div>
                </div>
                <div className="flex justify-center gap-3">
                  {withCancel && (
                    <Button
                      color={variantProps[variant].mantineColor}
                      variant="outline"
                      onClick={handleClose}
                      disabled={isLoadingConfirm}
                      style={{ width: buttonWidth || "auto" }}
                    >
                      {labelCancel}
                    </Button>
                  )}
                  {withConfirm && (
                    <Button
                      color={variantProps[variant].mantineColor}
                      onClick={handleConfirm}
                      variant="filled"
                      loading={isLoadingConfirm}
                      style={{ width: buttonWidth || "auto" }}
                    >
                      {labelConfirm}
                    </Button>
                  )}
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
});

 

export default ConfirmationModal;
