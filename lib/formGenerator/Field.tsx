import { Form } from '@jbuschke/formik-antd';
import { FormikProps } from 'formik';
import get from 'lodash/get';
import React from 'react';

import { formComponentMapping } from './componentMapping';
import { CUSTOM_COMPONENT_KEY, DEFAULT_COMPONENT } from './constants';
import { RenderReadyFormField } from './types';

export interface FieldProps {
    field: RenderReadyFormField;
    key: string;
    formProps: FormikProps<any>;
}

const Field = (props: FieldProps) => {
    const {
        field: { component, inputStyle, style, label, custom, propMapping, ...fieldProps },
        formProps,
    } = props;

    if (component === CUSTOM_COMPONENT_KEY && !!custom) {
        return custom(formProps);
    }

    const mappedProps = propMapping && propMapping(props);

    const Component = get(
        formComponentMapping,
        component as string,
        formComponentMapping[DEFAULT_COMPONENT],
    );

    return (
        <Form.Item {...fieldProps} style={style} label={label}>
            <Component {...fieldProps} {...mappedProps} style={inputStyle} />
        </Form.Item>
    );
};

export default Field;
