import { useState } from 'react';

let style = {
    true: {
        margin: "10px", 
        textDecoration: 'none'
    },
    false: {
        margin: "10px", 
        textDecoration: 'line-through'
    }
}

function List(props) {

    let [edit, setEdit] = useState(0);
    let [editContent, setEditContent] = useState('');

    let editable = (todo) => {
        setEdit(todo.id);
        setEditContent(todo.content);
    }

    return (
        <div>
            {
                props.data.map((todo) => {
                    let { id, content, open } = todo;
                    return(
                        <div style={style[open]}>
                            <input type="checkbox" checked={open} 
                                onChange={() => props.update(id, content, !open)}/>
                            <span style={{marginLeft: 2}}>
                                {
                                    edit !== id && 
                                    <span onClick={() => editable(todo)}>
                                        {content}
                                    </span>
                                }
                                {
                                    edit === id &&
                                    <span>
                                        <input type="text" value={editContent}
                                            onChange={(e) => setEditContent(e.target.value)}/>
                                        <input type="button" value="Update"
                                            onClick={() => {
                                                props.update(id, editContent, open);
                                                setEdit(0);
                                            }}/>
                                        <input type="button" value="Cancel"
                                            onClick={() => setEdit(0)}/>
                                        <input type="button" value="Delete"
                                            onClick={() => props.delete(id)}/>
                                    </span>
                                }
                            </span>
                        </div>
                    );
                })
            }
        </div>
    );

}

export default List;