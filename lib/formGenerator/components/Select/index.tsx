import { Select as FormikSelect } from '@jbuschke/formik-antd';
import { ExtendedFormField } from '../../types';
import map from 'lodash/map';
import React from 'react';

const { Option } = FormikSelect;

const Select = ({ options, ...props }: ExtendedFormField) => {
    return (
        <FormikSelect name={props.name}>
            {map(options, ({ label, value }) =>(
                <Option value={value} key={value}>{label || value}</Option>
            ))}
        </FormikSelect>
    );
};

export default Select;
