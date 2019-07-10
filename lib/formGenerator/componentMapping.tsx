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
import { FormField } from './types';

const { Group: CheckBoxGroup } = Checkbox;
const { Group: RadioGroup } = Radio;
const { TextArea } = Input;

export const formComponentMapping: Record<string, (params: FormField) => JSX.Element> = {
    autocomplete: (params: FormField) => <AutoComplete {...params} />,
    button: (params: any) => <Button {...params} />,
    cascader: (params: any) => <Cascader {...params} />,
    checkbox: (params: FormField) => <Checkbox {...params} />,
    checkboxGroup: (params: FormField) => <CheckBoxGroup {...params} />,
    datePicker: (params: FormField) => <DatePicker {...params} />,
    input: (params: FormField) => <Input {...params} />,
    textArea: (params: any) => <TextArea {...params} />,
    inputNumber: (params: FormField) => <InputNumber {...params} />,
    radio: (params: any) => <Radio {...params} />,
    radioGroup: (params: FormField) => <RadioGroup {...params} />,
    rate: (params: FormField) => <Rate {...params} />,
    select: (params: any) => <Select {...params} />,
    slider: (params: FormField) => <Slider {...params} />,
    switch: (params: FormField) => <Switch {...params} />,
    timePicker: (params: FormField) => <TimePicker {...params} />,
    transfer: (params: any) => <Transfer {...params} />,
    treeSelect: (params: any) => <TreeSelect {...params} />,
};
