import { Form, Icon } from '@components/common/UI';
import { Button } from '@components/common/UI/Button';
import Modal from '@components/common/UI/Modal';
import { SaveIcon } from '@heroicons/react/outline';
import { useForm } from 'react-hook-form';

const CreateEditModal = ({ title, isOpen, toggleModal }) => {
  const methods = useForm();
  return (
    <Modal title={title} isOpen={isOpen} toggleModal={toggleModal} size="lg">
      <Form methods={methods} onSubmit={() => {}}>
        <div className="flex flex-col gap-8">
          <div className="flex flex-row justify-end gap-4">
            <Button type="button" fill="none" onClick={toggleModal}>
              Cancelar
            </Button>
            <Button type="submit" onClick={() => {}} endIcon={SaveIcon}>
              <span>Guardar</span>
            </Button>
          </div>
        </div>
      </Form>
    </Modal>
  );
};

export default CreateEditModal;
