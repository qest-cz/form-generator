import { useMemo } from 'react';

import { FormField } from '../../types';

const useGetIntialValues = (fields: FormField[]): Record<string, FormField["initialValue"]> => {
  return useMemo(() => {
    const initialValues: Record<string, FormField["initialValue"]> = {};

    fields.map(({ initialValue, name }) => {
      const isRegistredComponent = name;
      if (isRegistredComponent) {
        initialValues[name] = initialValue;
      }
    });
    return initialValues;
  }, [fields]);
};

export default useGetIntialValues;
