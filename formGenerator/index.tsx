import { Form, Formik, FormikProps } from 'formik';
import React from 'react';

import Map from '../Map';
import Field from './Field';
import { FormDefinition } from './types';
import { useCreateFormikParams } from './useCreateFormikParams';

export const formGenerator = ({ onSubmit, fields }: FormDefinition) => {
  const { initialValues, validationSchema, renderReadyFields } = useCreateFormikParams(fields);

  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
      {(formProps: FormikProps<any>) => (
        <Form>
          <Map collection={renderReadyFields} keySelector="name">
            {(field, key) => <Field field={field} key={key} formProps={formProps} />}
          </Map>
        </Form>
      )}
    </Formik>
  );
};
