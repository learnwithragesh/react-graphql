import React, { useState, useEffect } from 'react';

import Add from './add';
import List from './list';

import { getAll, add, update, del } from './utils/queries';
import fetchGraphQL from './utils/fetchGraphQL';

function App() {

  let [data, setData] = useState([]);

  let getData = () => {
    fetchGraphQL(getAll()).then(response => {
      setData(response.data.todo);
    }).catch(error => {
      console.error(error);
    });
  }

  let addData = (content, open) => {
    fetchGraphQL(add(content, open)).then(response => {
      getData();
    }).catch(error => {
      console.error(error);
    });
  }

  let updateData = (id, content, open) => {
    fetchGraphQL(update(id, content, open)).then(response => {
      getData();
    }).catch(error => {
      console.error(error);
    });
  }

  let deleteData = (id) => {
    fetchGraphQL(del(id)).then(response => {
      getData();
    }).catch(error => {
      console.error(error);
    });
  }

  useEffect(getData, []);

  return (
    <div>
      <List data={data} update={updateData} delete={deleteData}/>
      <Add add={addData}/>
    </div>
  );
}

export default App;
