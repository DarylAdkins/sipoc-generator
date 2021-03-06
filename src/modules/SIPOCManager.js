const remoteURL = "http://localhost:5002"

export default {

    getAll() {
        return fetch(`${remoteURL}/sipocs?_expand=supplier&archived=false&userId=${sessionStorage.getItem("credentials")}`).then(result => result.json())
    },

    getOne(id) {
        return fetch(`${remoteURL}/sipocs/${id}?_expand=supplier`).then(result => result.json())
    },

    post(newSipoc) {
        return fetch(`${remoteURL}/sipocs`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newSipoc)
        }).then(data => data.json())
    },

    softDelete(id) {
        return fetch(`${remoteURL}/sipocs/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({archived: true})
        })
        .then(result => result.json())
      },
      update(editedSipoc) {
        return fetch(`${remoteURL}/sipocs/${editedSipoc.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(editedSipoc)
        }).then(data => data.json());
    },
    searchAll(search) {
        return fetch(`${remoteURL}/sipocs?q=${search}&_expand=supplier&userId=${sessionStorage.getItem("credentials")}&_sort=step&_order=asc`).then(result => result.json())
    },
}



