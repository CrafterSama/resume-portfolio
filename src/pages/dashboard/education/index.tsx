import DashboardLayout from '@components/common/Layouts/DashboardLayout';
import { useUser } from '@supabase/auth-helpers-react';

const Education = () => {
  const skills = [];
  const user = useUser();

  return (
    <DashboardLayout>
      <div>{skills.map((skill) => 'skill')}</div>
    </DashboardLayout>
  );
};

export default Education;
