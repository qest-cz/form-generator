import { Form, Formik, FormikConfig, FormikProps, FormikValues } from 'formik';
import React from 'react';

import Row from './components/Row';
import { FieldDefinition } from './types';
import { useTransformFields } from './useTransformFields';

export type FormDefinition = Omit<FormikConfig<FormikValues>, 'initialValues'> & CustomProps;
interface CustomProps {
    fields: FieldDefinition[];
    initialValues?: FormikConfig<FormikValues>['initialValues'];
    gutter?: number;
}

const formGenerator = ({ fields, gutter, initialValues = {}, ...formikConfig }: FormDefinition): JSX.Element => {
    const transformedFields = useTransformFields(fields.filter(Boolean), initialValues, gutter);

    return (
        <Formik initialValues={transformedFields.initialValues} validationSchema={transformedFields.validationSchema} {...formikConfig}>
            {(formProps: FormikProps<FormikValues>) => (
                <Form>
                    {transformedFields.rowSplitFields.map((row, index) => (
                        <Row {...row} key={index} formProps={formProps} />
                    ))}
                </Form>
            )}
        </Formik>
    );
};

export default formGenerator;
