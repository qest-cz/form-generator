import { Form, Formik, FormikProps, FormikValues } from 'formik';
import React from 'react';

import Row from './components/Row';
import { FormDefinition } from './types';
import { useTransformFields } from './useTransformFields';

const formGenerator = ({
    onSubmit,
    fields,
    gutter,
    validation = {},
    initialValues = {},
}: FormDefinition) => {
    const {
        initialValues: fieldInitialValues,
        validationSchema: fieldValidationSchema,
        rowSplitFields,
    } = useTransformFields(fields, gutter);
    return (
        <Formik
            initialValues={{ ...initialValues, ...fieldInitialValues }}
            validationSchema={{ ...validation, ...fieldValidationSchema }}
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
