const remoteURL = "http://localhost:5002"

export default {

    getAll() {
        return fetch(`${remoteURL}/sipocs`).then(result => result.json())
    },

    getOne(id) {
        return fetch(`${remoteURL}/sipocs/${id}`).then(result => result.json())
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
}