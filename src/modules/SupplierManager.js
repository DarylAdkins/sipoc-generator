const remoteURL = "http://localhost:5002"

export default {

    getAll() {
        return fetch(`${remoteURL}/suppliers?archived=false&userID=${sessionStorage.getItem("credentials")}`).then(result => result.json())
    },

    getOne(id) {
        return fetch(`${remoteURL}/suppliers/${id}`).then(result => result.json())
    },

    post(newSupplier) {
        return fetch(`${remoteURL}/suppliers`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newSupplier)
        }).then(data => data.json())
    },
    update(editedSupplier) {
        return fetch(`${remoteURL}/suppliers/${editedSupplier.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(editedSupplier)
        }).then(data => data.json());
    },
    softDelete(id) {
        return fetch(`${remoteURL}/suppliers/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({archived: true})
        })
        .then(result => result.json())
      },
}