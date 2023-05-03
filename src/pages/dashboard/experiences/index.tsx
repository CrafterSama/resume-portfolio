import { useState } from 'react';

import { useGetExperiences } from 'src/services/use-experiences';

import DashboardLayout from '@components/common/Layouts/DashboardLayout';
import TableComponent, { Rows } from '@components/common/UI/Table';
import { useUser } from '@supabase/auth-helpers-react';
import { Button } from '@components/common/UI/Button';
import Modal from '@components/common/UI/Modal';
import { TrashIcon } from '@heroicons/react/outline';
import CreateEditModal from '@components/modules/dashboard/Experiences/CreateEditModal';

const Experiences = () => {
  const [openCreateModal, setOpenCreateModal] = useState<boolean>(false);
  const {
    data: experiences,
    isLoading,
    isError,
  }: { data: any[]; isLoading: boolean; isError: boolean } = useGetExperiences();
  console.log('experiences', experiences);
  const user = useUser();

  const columns = [
    {
      name: 'Position',
      accessor: (row) => row,
      cell: ({ position }) => <span>{position}</span>,
    },
    {
      name: 'Company Name',
      accessor: (row) => row,
      cell: ({ company_name }) => <span>{company_name}</span>,
    },
    {
      name: 'Remote',
      accessor: (row) => row,
      cell: ({ remote }) => <span>{remote ? 'is Remote' : 'is not Remote'}</span>,
    },
    {
      name: 'From',
      accessor: (row) => row,
      cell: ({ from }) => <span>{new Date(from).getDate()}</span>,
    },
    {
      name: 'To',
      accessor: (row) => row,
      cell: ({ to, actual_job }) => <span>{actual_job ? 'Present' : new Date(to).getDate()}</span>,
    },
  ];

  const onOpenModal = () => setOpenCreateModal(!openCreateModal);

  return (
    <DashboardLayout>
      <div className="p-4">
        <div className="flex flex-row justify-between items-center pt-4 px-4">
          <h1 className="text-2xl font-bold">Experiences</h1>
          <Button onClick={onOpenModal}>Create</Button>
        </div>
        <CreateEditModal
          title="Guardar Experiencia"
          isOpen={openCreateModal}
          toggleModal={() => setOpenCreateModal(!openCreateModal)}
        />
        <TableComponent columns={columns}>
          {experiences?.length >= 1 &&
            experiences?.map((experience) => <Rows key={experience.id} columns={columns} row={experience} />)}
        </TableComponent>
      </div>
    </DashboardLayout>
  );
};

export default Experiences;
