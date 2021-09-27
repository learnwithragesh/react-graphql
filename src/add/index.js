import { useState } from 'react';

function Add(props) {

    let [text, setText] = useState('');

    return (
        <div style={{margin: '10px'}}>
            <input type="text" onChange={(e) => setText(e.target.value)}/>
            <input type="button" value="Add" 
                style={{marginLeft: '10px'}} onClick={(e) => props.add(text, true)}/>
        </div>
    )

}

export default Add;