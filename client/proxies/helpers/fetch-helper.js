class FetchHelper {
  getJson(url, headers) {
    return fetch(url, {
      mode: 'no-cors',
      method: 'GET',
      headers: headers || new Headers({
        'Content-Type': 'application/json'
      })
    }).then(res => {
      return res.json();
    });
  }

  postJson(url, headers, body) {
    return fetch(url, {
      mode: 'no-cors',
      method: 'POST',
      headers: headers || new Headers({
        'Content-Type': 'application/json'
      }),
      body: JSON.stringify(body || {})
    }).then(res => {
      if (!res.ok) {
        throw new Error(res.statusText);
      }

      return res.json();
    });
  }

  deleteJson(url, headers, body) {
    return fetch(url, {
      method: 'DELETE',
      headers: headers || new Headers(),
      body: JSON.stringify(body || {})
    }).then(res => {
      return res.json();
    })
  }
}

const fetchHelper = new FetchHelper();
export { fetchHelper };
