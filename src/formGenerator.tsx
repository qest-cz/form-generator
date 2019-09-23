import { Form, Formik, FormikActions, FormikProps, FormikValues } from 'formik';
import React from 'react';
import Row from './components/Row';
import { FieldDefinition } from './types';
import { useTransformFields } from './useTransformFields';

export type FormDefinition = {
    onSubmit: (values: FormikValues, formProps: FormikActions<FormikValues>) => Promise<any> | void;
    fields: FieldDefinition[];
    gutter?: number;
    initialValues?: { [key: string]: any };
};

const formGenerator = ({ onSubmit, fields, gutter, initialValues = {} }: FormDefinition): JSX.Element => {
    const transformedFields = useTransformFields(fields.filter(Boolean), initialValues, gutter);

    return (
        <Formik initialValues={transformedFields.initialValues} validationSchema={transformedFields.validationSchema} onSubmit={onSubmit}>
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
