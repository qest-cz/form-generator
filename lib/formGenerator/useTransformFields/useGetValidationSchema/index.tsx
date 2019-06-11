import { useMemo } from 'react';
import * as Yup from 'yup';

import { FormField } from '../../types';

const useGetValidationSchema = (fields: FormField[]): Yup.Schema<{}> => {
  return useMemo(() => {
    const validationSchemaShape: Record<string, Yup.Schema<{}>> = {};

    fields.map(({ validation, name, component = "" }) => {
      const isRegistredComponent = name;
      if (isRegistredComponent) {
        if (!!validation) {
          validationSchemaShape[name] = validation;
        }
      }
    });

    const validationSchema = Yup.object().shape({
      ...validationSchemaShape
    });

    return validationSchema;
  }, [fields]);
};

export default useGetValidationSchema;
