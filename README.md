# EastReact
npx create-react-app <name>
npm start
jsx -> babel解析 -> js (供浏览器渲染)

# React学习网站
https://zh-hans.react.dev/learn/describing-the-ui

# JS数据排序库 - Lodash
npm i --save lodash

# classnames优化类名控制
npm install classnames
动态控制类名的显示
``` javascript
className={classNames('class1', {class2: type === item.type})}
```
class2: 要控制的类名
type === item.type: 条件


# useRef可以获取dom对象
```javascript
// 声明dom
const inputRef = useRef(null);
// 使用dom
console.log(inputRef.current)

return (
    // 配置dom
    <input ref="inputRef"/>
);
```

# 生成随机id - UUID
npm install uuid
import {v4 as uuidV4} from "uuid"

# 格式化时间 - dayjs
npm install dayjs

