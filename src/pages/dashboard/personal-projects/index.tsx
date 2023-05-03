import DashboardLayout from '@components/common/Layouts/DashboardLayout';
import { useUser } from '@supabase/auth-helpers-react';

const PersonalProjects = () => {
  const projects = [];
  const user = useUser();

  return (
    <DashboardLayout>
      <div>{projects.map((project) => 'project')}</div>
    </DashboardLayout>
  );
};

export default PersonalProjects;
