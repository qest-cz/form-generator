import { Form, Formik, FormikProps, FormikValues } from 'formik';
import React from 'react';

import Map from '../Map';
import Field from './Field';
import { FormDefinition } from './types';
import { useCreateFormikParams } from './useCreateFormikParams';

const formGenerator = ({ onSubmit, fields }: FormDefinition) => {
  const { initialValues, validationSchema, renderReadyFields } = useCreateFormikParams(fields);
  console.log("validationSchema: ", validationSchema);
  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
      {(formProps: FormikProps<FormikValues>) => {
        return (
          <Form>
            <Map collection={renderReadyFields} keySelector="name">
              {(field, key) => <Field field={field} key={key} formProps={formProps} />}
            </Map>
          </Form>
        );
      }}
    </Formik>
  );
};

export default formGenerator;
