import { Form } from '@jbuschke/formik-antd';
import { Field as FormikField, FieldProps as FormikFieldProps, FormikProps, FormikValues } from 'formik';
import get from 'lodash/get';
import React from 'react';

import { formComponentMapping } from '../../componentMapping';
import { CUSTOM_COMPONENT_KEY, DEFAULT_COMPONENT } from '../../constants';
import { RenderReadyFormField } from '../../types';

export interface FieldProps {
  field: RenderReadyFormField;
  formProps: FormikProps<any>;
}

const Field = (props: FieldProps) => {
  const {
    field: { component, inputStyle, style, label, custom, propMapping, name, ...fieldProps },
    formProps
  } = props;

  if (component === CUSTOM_COMPONENT_KEY && !!custom) {
    return custom(formProps);
  }

  const Component = get(
    formComponentMapping,
    component as string,
    formComponentMapping[DEFAULT_COMPONENT]
  );

  return (
    <FormikField name={name}>
      {(formikFieldProps: FormikFieldProps<FormikValues>) => {
        const mappedProps =
          propMapping && propMapping({ ...props.field, fieldProps: formikFieldProps });

        return (
          <Form.Item {...fieldProps} style={style} label={label} name={name}>
            <Component {...mappedProps} {...fieldProps} name={name} style={inputStyle} />
          </Form.Item>
        );
      }}
    </FormikField>
  );
};

export default Field;
