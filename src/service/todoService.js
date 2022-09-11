export const getAll = () => {
    const uri = "http://localhost:8081/todo";
    return fetch(uri).then(res => res.json());
};

export const get = (id) => {
    const uri = `http://localhost:8081/todo/${id}`;
    return fetch(uri).then(res => res.json());
};

export const save = (data) => {
    const uri = "http://localhost:8081/todo";
    return fetch(uri, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    }).then(res => res.json());
};

export const update = (id, data) => {
    const uri = `http://localhost:8081/todo/${id}`;
    return fetch(uri, {
        method: "PUT",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify()
    }).then(res => res.json());
};

export const deleteItem = (id) => {
    const uri = `http://localhost:8081/todo/${id}`;
    return fetch(uri, {
        method: "DELETE",
        headers: {
            "content-type": "application/json"
        }
    }).then(res => res.json());
};