

# 表单组

## Simple Usage

```js
class Demo extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [{ textValue: 'test' }],
    };
  }

  render() {
    return (
      <FormGroup
        onChange={this.groupChange}
        data={this.state.data}
        title={index => `表单组${index}`}
        className="other-classname"
      >
        <TextField
          label="标题"
          placeholder="请输入"
          layout="v"
          name="textValue"
        />
        <SelectField
          label="月份"
          name="selectValue"
        />
      </FormGroup>
    );
  }
}
```

## Props
FormGroup是一个受控组件，会复制子组件，并将子组件中包含name字段并实现onChange/onSelect/onOk/onConfirm接口的子组件的值拼接起来，通过onChange函数将数据变动传递出来，

### className

描述：自定义样式的 `class` 名称。
类型：`string`
默认：`''`
必选：否

示例：

```
<FormGroup className="other-classname">
```


### title
描述：标题。
类型：`function` | `string`
默认：'表单组'
必选：否

示例：

当title为函数时，参数传递给title函数用于生成标题
当title为字符串时，标题会自动生成为 title + index

```
<FormGroup title={index => `表单组${index}`} />
<FormGroup title="表单组" />
```


### onChange

描述：内部任何表单域变化触发的事件。
类型：`function`
默认：无
必选：否

FormGroup包裹的任何表单域发生变化都会触发该函数，
FormGroup不影响表单域触发自身的onChange事件，并且会在表单域onChange的第二个参数传递数字，表明当前改变的表单域位于表单组的第几组

示例：

type格式
  'modify' | 'add' | 'delete'
value格式
  新增或删除操作：只传变动的组的序号
  {
    index: 1,
  }
  编辑操作：传变动的组的序号，field name，和变动值
  {
    index: 1,
    name: 'selectField',
    value: 'xxx'
  }
data格式为全量的表单组数据
  [
    { inputValue: 'xx' },
    { inputValue: 'xx' },
    { inputValue: 'xx' },
  ]
```
onSelect(type, value, data) {

}

...

<FormGroup onSelect={this.onSelect}></FormGroup>
```