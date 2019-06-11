import { Form, Formik, FormikProps, FormikValues } from 'formik';
import React from 'react';

import Map from '../Map';
import Row from './components/Row';
import { FormDefinition } from './types';
import { useTransformFields } from './useTransformFields';

const formGenerator = ({ onSubmit, fields, gutter }: FormDefinition) => {
  const { initialValues, validationSchema, rowSplitFields } = useTransformFields(fields, gutter);
  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
      {(formProps: FormikProps<FormikValues>) => {
        return (
          <Form>
            <Map collection={rowSplitFields}>
              {(row, key) => <Row {...row} key={key} formProps={formProps} />}
            </Map>
          </Form>
        );
      }}
    </Formik>
  );
};

export default formGenerator;
