import { Select as FormikSelect } from '@jbuschke/formik-antd';
import map from 'lodash/map';
import React from 'react';

import { FormField } from '../../types';

const { Option } = FormikSelect;

const Select = ({ options, ...props }: FormField) => {
  return (
    <FormikSelect name={props.name}>
      {map(options, ({ label, value }) => (
        <Option value={value} key={value}>
          {label || value}
        </Option>
      ))}
    </FormikSelect>
  );
};

export default Select;
