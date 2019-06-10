# formGenerator

`name should be always unique per form, its used as key for each field`

Small util that creates formik form from basic object definition.

From default it support most of antd components:
  
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
    name: 'button',
    component: 'button',
    children: 'Submit',
    htmlType: 'submit',
    propMapping: (fieldProps) => ({
        disabled: get(fieldProps, ['formProps', 'isSubmitting']),
        loading: get(fieldProps, ['formProps', 'isSubmitting']),
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
