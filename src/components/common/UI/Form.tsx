import { FormProvider } from 'react-hook-form';

const FormWithContext = ({ methods, onSubmit, children, ...props }) => {
  return (
    <FormProvider {...methods} {...props}>
      <form className="w-full flex flex-col rounded-lg shadow-lg" onSubmit={methods.handleSubmit(onSubmit)}>
        {children}
      </form>
    </FormProvider>
  );
};

export default FormWithContext;
