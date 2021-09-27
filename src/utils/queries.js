let getAll = () => `query {
    todo {
        id content open createdOn
    }
}`;

let add = (content, open) => `mutation {
    createTodo(content: "${content}", open: ${open}) {
        todo {
            id content open createdOn
        }
    }
}`;

let update = (id, content, open) => `mutation {
    updateTodo(id: ${id}, content: "${content}", open: ${open}) {
      todo {
        id content open createdOn
      }
    }
}`;

let del = (id) => `mutation {
    deleteTodo(id: ${id}) {
        ok
    }
}`;

module.exports = { getAll, add, update, del };