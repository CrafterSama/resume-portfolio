import { FC } from 'react';
import { CgSpinner } from 'react-icons/cg';

import { Button } from '@components/common/UI/Button';
import RoundedButton from '@components/common/UI/RoundedButton';
import { PencilIcon } from '@heroicons/react/outline';

type FormHeaderProps = {
  title: string;
  subtitle?: string;
  cancelAction?: () => void;
  editAction?: () => void;
  disabled?: boolean;
  primaryActionText?: string;
  secondaryActionText?: string;
  isSaving?: boolean;
  overAll?: boolean;
};

const FormHeader: FC<FormHeaderProps> = ({
  title,
  subtitle = '',
  cancelAction = () => {
    //
  },
  editAction = () => {
    //
  },
  disabled = false,
  primaryActionText = 'Guardar',
  secondaryActionText = 'Cancelar',
  isSaving = false,
  overAll = true,
}) => {
  return (
    <div
      className={`w-full flex flex-col md:flex-row justify-between content-center p-4 bg-gray-100 rounded-t-lg sticky top-0 ${
        overAll && 'z-20'
      }`}
    >
      <h3 className="w-full md:w-3/4 text-xl font-semibold text-gray-400 leading-tight m-0 flex justify-center md:justify-start items-center mb-4 md:mb-0">
        {title} {subtitle && `| ${subtitle}`}
      </h3>
      <div className="action-buttons w-full md:w-1/4 flex flex-row gap-4 justify-end items-center">
        {isSaving && <CgSpinner className="w-5 h-5 animate-spin" color="gray" size={20} />}
        {disabled ? (
          <RoundedButton onClick={editAction}>
            <PencilIcon className="w-6 h-6" />
          </RoundedButton>
        ) : (
          <>
            <Button type="button" fill="none" onClick={cancelAction}>
              {secondaryActionText}
            </Button>
            <Button type="submit" isDisabled={isSaving}>
              {primaryActionText}
            </Button>
          </>
        )}
      </div>
    </div>
  );
};

export default FormHeader;
