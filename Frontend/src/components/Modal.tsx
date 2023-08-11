import { motion } from "framer-motion";
import { Cancel } from "iconoir-react";

type ModalProps = {
  isOpen: boolean;
  setOpen: (open: boolean) => void;
  onClose: () => void;
  children: React.ReactNode;
};

const Modal: React.FC<ModalProps> = ({
  isOpen,
  setOpen,
  onClose,
  children,
}) => {
  const closeModal = () => {
    setOpen(false);
    onClose();
  };

  return (
    <>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
          className="bg-transparent fixed inset-0 flex items-start justify-center z-50  backdrop-blur-sm max-h-screen overflow-y-auto"
        >
          <div className="bg-secondary rounded-lg p-8 w-full md:w-1/2 lg:w-1/3">
            <div className="flex justify-end">
              <button
                className="text-red-700 hover:text-red-500"
                onClick={closeModal}
              >
                <Cancel />
              </button>
            </div>
            <div className="">{children}</div>
          </div>
        </motion.div>
      )}
    </>
  );
};

export default Modal;
