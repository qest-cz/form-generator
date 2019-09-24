import { Select as FormikSelect } from '@jbuschke/formik-antd';
import React from 'react';

const { Option } = FormikSelect;

interface Options {
    label: string;
    value: any;
}

export interface Props {
    options: Options[];
    name: string;
}

const Select = ({ options, name }: Props) => {
    return (
        <FormikSelect name={name}>
            {options.map(({ label, value }) => (
                <Option value={value} key={value}>
                    {label || value}
                </Option>
            ))}
        </FormikSelect>
    );
};

export default Select;
