import NiceModal, { useModal } from "@ebay/nice-modal-react";
import ConfirmationModal from "./ConfirmationModal";
import closeNiceModal from "../utils/helpers/closeNiceModal";
 
type ConfirmationProps = {
    message?: string;
    subMessage?: string;
    isLoading?: boolean;
    handleConfirm?: () => void;
    handleCancel?: () => void;
    variant?: string;
    withCancel?: boolean;
    withConfirm?: boolean;
    labelCancel?: string;
    labelConfirm?: string;
    modalWidth?: string;
    buttonWidth?: string;
    
    // MODAL_IDS.GENERAL.CONFIRMATION
    modalId: string;
};

const Confirmations = NiceModal.create(
  ({
    message,
    subMessage,
    isLoading,
    handleConfirm,
    handleCancel = () => false,
    variant = "safe",
    withCancel = true,
    withConfirm = true,
    labelCancel = "Tidak",
    labelConfirm = "Ya",
    modalWidth = "350px",
    buttonWidth,
    modalId,
  }: ConfirmationProps) => {
    const modal = useModal(modalId);

    return (
      <ConfirmationModal
        isOpen={modal.visible}
        variant={variant}
        message={message}
        subMessage={subMessage}
        handleClose={
          handleCancel !== null
            ? handleCancel
            : () => closeNiceModal(modalId)
        }
        handleConfirm={handleConfirm}
        withCancel={withCancel}
        withConfirm={withConfirm}
        labelCancel={labelCancel}
        labelConfirm={labelConfirm}
        isLoadingConfirm={isLoading}
        width={modalWidth}
        buttonWidth={buttonWidth}
      />
    );
  },
);

export default Confirmations;
