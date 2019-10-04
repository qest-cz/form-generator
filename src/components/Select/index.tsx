import { Select as FormikSelect } from '@jbuschke/formik-antd';
import { SelectProps } from 'antd/lib/select';
import React from 'react';

const { Option } = FormikSelect;

interface Options {
    label: string;
    value: any;
}

export interface Props extends SelectProps {
    options: Options[];
    name: string;
}

const Select = ({ options, name, ...rest }: Props) => {
    return (
        <FormikSelect name={name} {...rest}>
            {options.map(({ label, value }) => (
                <Option value={value} key={value}>
                    {label || value}
                </Option>
            ))}
        </FormikSelect>
    );
};

export default Select;
