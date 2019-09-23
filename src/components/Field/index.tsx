import { Form } from '@jbuschke/formik-antd';
import { Field as FormikField, FieldProps as FormikFieldProps, FormikProps, FormikValues } from 'formik';
import React, { useMemo } from 'react';
import { ComponentMappingPros, formComponentMapping } from '../../componentMapping';
import { CUSTOM_COMPONENT_KEY } from '../../constants';
import { SingleField } from '../../types';

const { Item } = Form;

export interface FieldProps<T extends keyof ComponentMappingPros> {
    field: SingleField;
    formProps: FormikProps<FormikValues>;
    componentProps: ComponentMappingPros[T];
}

const Field = (component: keyof ComponentMappingPros) => ({
    field,
    formProps,
    componentProps,
}: FieldProps<typeof component>): JSX.Element => {
    const { inputStyle, style, label, propMapping, name } = field;
    const Component = useMemo(() => formComponentMapping[component], [component]);

    if (component === CUSTOM_COMPONENT_KEY) {
        const custom = field.custom || componentProps.custom;
        return custom(formProps);
    }

    return (
        <FormikField name={name}>
            {(formikFieldProps: FormikFieldProps<FormikValues>) => {
                const mappedProps = propMapping && propMapping({ ...field, fieldProps: formikFieldProps });

                return (
                    <Item {...componentProps} style={style} label={label} name={name}>
                        <Component {...componentProps} {...mappedProps} name={name} style={inputStyle} />
                    </Item>
                );
            }}
        </FormikField>
    );
};

export default Field;
