import AntdCol from 'antd/lib/col';
import AntdRow from 'antd/lib/row';
import { FormikProps, FormikValues } from 'formik';
import React from 'react';

import { FormRow } from '../../types';
import Field from '../Field';

interface Props extends FormRow {
    formProps: FormikProps<FormikValues>;
}

const Row = ({ children, formProps, ...rowProps }: Props) => {
    return (
        <AntdRow {...rowProps}>
            {children.map(({ col, rowStart, rowEnd, ...field }, key) => (
                <AntdCol {...col} key={field.name}>
                    <Field field={field} formProps={formProps} />
                </AntdCol>
            ))}
        </AntdRow>
    );
};

export default Row;
