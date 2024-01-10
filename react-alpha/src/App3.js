// 子传父

import {useState} from "react";

function Son ({ onGetSonMsg }) {
    const msg = "msg from Son component:)"
    return(
        <div>
            this is Son
            <button onClick={() => onGetSonMsg(msg)}>send msg from Son</button>
        </div>
    )
}

function App3 (){
    const [msg, setMsg] = useState('')

    const getMsg = (msg) => {
        console.log(msg);
        setMsg(msg)
    }

    return(
        <div>
            value from Son component: {msg}
            <Son onGetSonMsg={getMsg} />
        </div>
    )

}

export default App3