import { Form, Formik, FormikProps, FormikValues } from 'formik';
import React from 'react';
import Row from './components/Row';
import { FormDefinition } from './types';
import { useTransformFields } from './useTransformFields';
import mergeDeep from './utils/mergeDeep';

const formGenerator = ({ onSubmit, fields, gutter, initialValues = {} }: FormDefinition) => {
    const {
        initialValues: fieldInitialValues,
        validationSchema: fieldValidationSchema,
        rowSplitFields,
    } = useTransformFields(fields, gutter);

    return (
        <Formik
            initialValues={mergeDeep(initialValues, fieldInitialValues)}
            validationSchema={fieldValidationSchema}
            onSubmit={onSubmit}
        >
            {(formProps: FormikProps<FormikValues>) => {
                return (
                    <Form>
                        {rowSplitFields.map((row, index) => (
                            <Row {...row} key={index} formProps={formProps} />
                        ))}
                    </Form>
                );
            }}
        </Formik>
    );
};

export default formGenerator;
