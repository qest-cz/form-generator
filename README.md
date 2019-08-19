# formGenerator

Util that creates formik form from basic object definition.

## Install

```bash
npm install @qest/form-generator
```

```bash
yarn add @qest/form-generator
```

## Basic form definition

```tsx
import formGenerator from '@qest/form-generator';
import { FormDefinition } from '@qest/form-generator/types';
import React from 'react';
import * as yup from 'yup';

const SignInForm = () => {
    const formDefinition: FormDefinition = {
        onSubmit: (values, { setSubmitting }) => {
            console.log(values);
            setSubmitting(false);
        },
        gutter: 16,
        fields: [
            {
                name: 'username',
                label: t('forms.SignInForm.username'),
                validation: yup.string().required(t('forms.validation.required')),
                rowStart: true,
                col: { span: 12 },
            },
            {
                name: 'password',
                type: 'password',
                label: t('forms.SignInForm.password'),
                validation: yup.string().required(t('forms.validation.required')),
                rowEnd: true,
                col: { span: 12 },
            },
        ]
    };

    return formGenerator(formDefinition);
};

export default SignInForm;

```
## Overloading current components or declaring new ones, per project

in root of application:

```tsx
formComponentMapping.projectSpecialSelect = (props: CombinedComponentProps) => {
    return <div>{JSON.stringify(props, null, 2)}</div>;
};
```

## Prop custom mapping

in form definition you can, map props  
(for instance, disable and toggle loading on button when submitting form):

```tsx
{
    component: 'button',
    children: 'Submit',
    htmlType: 'submit',
    propMapping: (fieldProps) => ({
        disabled: fieldProps.formProps.isSubmitting,
        loading: fieldProps.formProps.isSubmitting,
    }),
}
```

## Custom components in form definition

if you pass "custom" to component field, you can render anything trough "custom" prop:

```tsx
{
    name: 'custom',
    component: 'custom',
    custom: (props) => <div>{JSON.stringify(props, null, 2)}</div>,
}
```

## Validation and cross fieldValidation

validation accepts yup schema, and it supports crossField validation:  

```tsx
{
    name: 'input',
    label: 'input',
    component: 'input',
    validation: Yup.string().when('autocomplete', {
        is: (autocomplete) => !!autocomplete,
        then: Yup.string().required('required'),
    }),
    placeholder: 'placeholder',
}
```

From default it supports most of antd components:
  
| Component     | Link to doc                                                           |
| ------------- | --------------------------------------------------------------------- |
| AutoComplete  | [AutoCompleteProps](https://ant.design/components/auto-complete/#API) |
| Button        | [ButtonProps](https://ant.design/components/button/#API)              |
| Cascader      | [CascaderProps](https://ant.design/components/cascader/#API)          |
| Checkbox      | [CheckboxProps](https://ant.design/components/checkbox/#API)          |
| CheckboxGroup | [CheckboxProps](https://ant.design/components/checkbox/#API)          |
| DatePicker    | [DatePickerProps](https://ant.design/components/date-picker/#API)     |
| Input         | [InputProps](https://ant.design/components/input/#API)                |
| InputNumber   | [InputNumberProps](https://ant.design/components/input-number/#API)   |
| Radio         | [RadioGroupProps](https://ant.design/components/radio/#RadioGroup)    |
| Rate          | [RateProps](https://ant.design/components/rate/#API)                  |
| Select        | [SelectProps](https://ant.design/components/select/#API)              |
| Slider        | [SliderProps](https://ant.design/components/slider/#API)              |
| Switch        | [SwitchProps](https://ant.design/components/switch/#API)              |
| TimePicker    | [TimePickerProps](https://ant.design/components/input/#API)           |
| Transfer      | [TransferProps](https://ant.design/components/transfer/#API)          |
| TreeSelect    | [TreeSelectProps](https://ant.design/components/tree-select/#API)     |
