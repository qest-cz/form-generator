import { Form } from '@jbuschke/formik-antd';
import { Field as FormikField, FieldProps as FormikFieldProps, FormikProps, FormikValues } from 'formik';
import React, { useMemo } from 'react';
import { FieldDefinition } from 'src/types';
import { formComponentMapping } from '../../componentMapping';
import { CUSTOM_COMPONENT_KEY, DEFAULT_COMPONENT } from '../../constants';

const { Item } = Form;

export interface FieldProps {
    field: FieldDefinition;
    formProps: FormikProps<FormikValues>;
}

const Field = ({ field, formProps }: FieldProps): JSX.Element => {
    const { inputStyle, style, label, propMapping, component, custom, fieldProps, name, ...componentProps } = field;
    const Component = useMemo(() => formComponentMapping[component === undefined ? DEFAULT_COMPONENT : component], [component]);

    if (component === CUSTOM_COMPONENT_KEY && !!custom) {
        return custom(formProps);
    }

    return (
        <FormikField name={name}>
            {(formikFieldProps: FormikFieldProps<FormikValues>) => {
                const mappedProps = propMapping && propMapping({ ...field, fieldProps: formikFieldProps });

                return (
                    <Item {...fieldProps} {...componentProps} style={style} label={label} name={name}>
                        <Component {...fieldProps} {...componentProps} {...mappedProps} name={name} style={inputStyle} />
                    </Item>
                );
            }}
        </FormikField>
    );
};

export default Field;
