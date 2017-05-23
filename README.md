# react-bhy-textfield
#### page loading demo:
https://baohaoyu.github.io/react-bhy-textfield/test/index.html


#### props

| name            | type          | default value         | explain     |
| -------------   | ------------- | ------------| -------     |
| className       | string        | ''                    | 根节点的class |
| labelWith       | string        |                       | label的宽度 |
| layout          | string        |                       | 布局 x:水平布局  y:垂直布局 |
| theme           | string        | 'border'              | 样式：border:带有边框  line:只有下边框 |
| language        | string        |                       | TODO 语言：'en' or 'cn',目前只有cn |
| size            | string        |                       | input的尺寸 sm:小尺寸  |
| showLabel       | bool          |                       | 是否显示label |
| inputWith       | string        |                       | input的宽度 |
| full            | bool          | false                 | 组件宽度是否填满父组件 |
| label           | string        | ''                    | label的内容 |
| type            | string        |                       | input标签的type |
| title           | string        |                       | input标签的title |
| name            | string        |                       | input标签的name |
| placeholder     | string        |                       | input标签的placeholder |
| passSetValue    | bool          |                       | 通过验证才设置input的值 |
| value           | any           | ''                    | input标签的value |
| defaultValue    | any           |                       | input标签的defaultValue |
| max             | number        |                       | 最多字符长度 |
| min             | number        |                       | 最小字符长度 |
| maxErrorText    | string        | [label]不可以超过[max]个字符！ | 超过最多字符限制后显示的警告,会自动他[label]替换成props.label,[max]替换成props.max |
| minErrorText    | string        | [label]不可少于[min]个字符！  | 少于最少字符限制后显示的警告 |
| rexs            | array         |                       | 正则表达式 [{rex:'正则表达式',passIsRight:true 正则表达式匹配表示正确 false 正则表达式匹配表示错误,errorText:没有通过验证显示的警告内容}] |
| rex             | rex           |                       | 单个正则表达式 |
| rexErrorText    | string        | [label]格式不对！          | 没有通过正则表单时验证，显示的警告内容 |
| emptyErrorText  | string        |  请填写[label]！                     | 空表单显示的警告内容 |
| rexPassIsRight  | string        |       bool                | true: 通过props.rex 验证表示正确，false：通过props.rex 验证表示错误 |
| require         | bool          | true                  | 不可为空 |
| onChange        | func          | () => {}              | input值改变后触发 ，参数({e,errorText,pass}}) |
| onFocus         | func          | () => {}              | input获得焦点后触发 ，参数({e,errorText,pass}}) |
| onBlur          | func          | () => {}              | input失去焦点变后触发 ，参数({e,errorText,pass}}) |
| errorText       | string        | ''                    | 外部传入的警告内容，如果errorText有具体内容的话，组件会一直显示警告状态 |
| lineBorderColor | string        |                       | porps.theme == 'line'的时候,input的下边横线的颜色 |
| lineFocusColor  | string        |                       | porps.theme == 'line'的时候 ,input获得焦点后动画线的颜色 |
| lineErrorColor  | string        |                       | porps.theme == 'line'的时候 ,警告状态下，input获得焦点后动画线的颜色 |
| errorTextColor  | string        |                       | 警告状态下，错误提示，label，input的颜色 |
| iconClass       | string        |                       | input左侧的小图标的class,推销使用 font awesome |
| iconOffset      | object        | {left: 0, top: 0}     | input左侧的小图标的位置偏移 |
| inputHeight     | number        |                       | input的高度 |


