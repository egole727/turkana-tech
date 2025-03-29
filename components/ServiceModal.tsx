import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { X } from 'lucide-react';

interface ServiceDetails {
  icon: React.ElementType;
  title: string;
  description: string;
  longDescription?: string;
  features?: string[];
  benefits?: string[];
}

interface ServiceModalProps {
  isOpen: boolean;
  closeModal: () => void;
  service: ServiceDetails | null;
}

export function ServiceModal({ isOpen, closeModal, service }: ServiceModalProps) {
  if (!service) return null;

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-2xl transform overflow-hidden rounded-2xl bg-white dark:bg-gray-800 p-6 text-left align-middle shadow-xl transition-all">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center gap-4">
                    <service.icon className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                    <Dialog.Title className="text-2xl font-semibold text-gray-900 dark:text-white">
                      {service.title}
                    </Dialog.Title>
                  </div>
                  <button
                    onClick={closeModal}
                    className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                <div className="mt-4">
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    {service.longDescription}
                  </p>

                  {service.features && (
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">
                        Key Features
                      </h4>
                      <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
                        {service.features.map((feature, index) => (
                          <li key={index}>{feature}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {service.benefits && (
                    <div>
                      <h4 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">
                        Benefits
                      </h4>
                      <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
                        {service.benefits.map((benefit, index) => (
                          <li key={index}>{benefit}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}