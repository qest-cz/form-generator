import AntdCol from 'antd/lib/col';
import AntdRow from 'antd/lib/row';
import { FormikProps, FormikValues } from 'formik';
import React from 'react';

import Map from '../../../Map';
import { FormRow } from '../../types';
import Field from '../Field';

interface Props extends FormRow {
    formProps: FormikProps<FormikValues>;
}

const Row = ({ children, formProps, ...rowProps }: Props) => {
    return (
        <AntdRow {...rowProps}>
            <Map collection={children} keySelector="name">
                {({ col, ...field }, key) => (
                    <AntdCol {...col} key={key}>
                        <Field field={field} formProps={formProps} />
                    </AntdCol>
                )}
            </Map>
        </AntdRow>
    );
};

export default Row;
