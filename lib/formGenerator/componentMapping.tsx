import {
    AutoComplete,
    Cascader,
    Checkbox,
    DatePicker,
    Input,
    InputNumber,
    Radio,
    Rate,
    Slider,
    Switch,
    TimePicker,
    Transfer,
    TreeSelect,
} from '@jbuschke/formik-antd';
import Button from 'antd/lib/button';
import React from 'react';

import Select from './components/Select';
import { ExtendedFormField } from './types';

export const formComponentMapping: Record<string, (params: ExtendedFormField) => JSX.Element> = {
    autocomplete: (params: ExtendedFormField) => <AutoComplete {...params} />,
    button: (params: any) => <Button {...params} />,
    cascader: (params: any) => <Cascader {...params} />,
    checkbox: (params: ExtendedFormField) => <Checkbox {...params} />,
    checkboxGroup: (params: ExtendedFormField) => <Checkbox.Group {...params} />,
    datePicker: (params: ExtendedFormField) => <DatePicker {...params} />,
    input: ({ form, ...params }: ExtendedFormField) => <Input {...params} />,
    inputNumber: ({ form, ...params }: ExtendedFormField) => <InputNumber {...params} />,
    radio: (params: any) => <Radio {...params} />,
    radioGroup: (params: ExtendedFormField) => <Radio.Group {...params}/>,
    rate: (params: ExtendedFormField) => <Rate {...params} />,
    select: (params: any) => <Select {...params} />,
    slider: (params: ExtendedFormField) => <Slider {...params} />,
    switch: (params: ExtendedFormField) => <Switch {...params} />,
    timePicker: (params: ExtendedFormField) => <TimePicker {...params} />,
    transfer: (params: any) => <Transfer {...params} />,
    treeSelect: (params: any) => <TreeSelect {...params} />,
};
