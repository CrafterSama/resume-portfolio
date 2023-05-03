import { Fragment } from 'react';

import { Dialog, Transition } from '@headlessui/react';
import Portal from '@components/hoc/Portal';

const Modal = ({ isOpen, toggleModal, title, size = 'md', children }) => {
  const modalSize = {
    sm: 'max-w-sm',
    md: 'max-w-md',
    lg: 'max-w-lg',
  };

  return (
    <Portal>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={toggleModal}>
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
                  className={`flex flex-col gap-4 w-full transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all ${modalSize[size]}`}
                >
                  <Dialog.Title as="h3" className="text-xl font-medium leading-6 text-gray-900">
                    {title}
                  </Dialog.Title>
                  {children}
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </Portal>
  );
};

export default Modal;
