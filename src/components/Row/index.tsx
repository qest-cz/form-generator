import AntdCol from 'antd/lib/col';
import AntdRow from 'antd/lib/row';
import { FormikProps, FormikValues } from 'formik';
import React, { useMemo } from 'react';
import { DEFAULT_COMPONENT } from '../../constants';
import { FormRow } from '../../types';
import Field from '../Field';

interface Props extends FormRow {
    formProps: FormikProps<FormikValues>;
}

const Row = ({ children, formProps, ...rowProps }: Props) => {
    return (
        <AntdRow {...rowProps}>
            {children.map(({ col, rowStart, rowEnd, ...field }, key) => {
                const { label, propMapping, name, component, ...rest } = field;
                const MyField = useMemo(() => Field(component === undefined ? DEFAULT_COMPONENT : component), [component]);

                return (
                    <AntdCol {...col} key={field.name || key}>
                        <MyField field={field} formProps={formProps} componentProps={rest} />
                    </AntdCol>
                );
            })}
        </AntdRow>
    );
};

export default Row;
