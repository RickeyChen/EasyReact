// 组建通信-父传子
// 1. 父组件传递数据：在子组建标签上绑定属性
// 2. 子组建接收数据：使用props.xxx
function Son(props) {
    // props为只读数据，不能修改，需要父组建修改
    console.log(props);
    return (<div>
            <div>props.name from parent: {props.name}</div>
            <div>props.name from parent: {props.children}</div>
        </div>
    )
}


function App2() {
    const name = "this is Rickey";
    return (
        <div>
            <Son
                name={name}
                age={18}
                isTrue={false}
                list={['react', 'vue']}
                cb={() => {
                    console.log("aaa")
                }}
                child={<div>aaa</div>}
            />

            <Son name={"使用children属性"}>
                <span>this is a sapn</span>
            </Son>
        </div>
    )
}

export default App2