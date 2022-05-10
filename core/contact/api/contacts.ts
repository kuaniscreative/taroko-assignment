export async function getContacts() {
  return fetch('/api/contacts')
    .then((res) => {
      return res.json();
    })
}

export interface GetContactParams {
  id: number;
}

export async function getContact(params: GetContactParams) {
  const {
    id
  } = params;  

  return fetch(`/api/contacts/${id}`)
    .then((res) => {
      return res.json();
    })
}

export interface CreateContactParams {
  firstName?: string;
  lastName?: string;
  job?: string;
  description?: string;
}

export async function createContact(params: CreateContactParams) {
  const {
    firstName,
    lastName,
    job,
    description,
  } = params;

  const body = JSON.stringify({
    contact: {
      "first_name": firstName,
      "last_name": lastName,
      job,
      description
    }
  })

  return fetch('/api/contacts', {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body,
  })
    .then((res) => {
      return res.json();
    })
}

export interface UpdateContactParams {
  id: number;
  firstName?: string;
  lastName?: string;
  job?: string;
  description?: string;
}

export async function updateContact(params: UpdateContactParams) {
  const {
    id,
    firstName,
    lastName,
    job,
    description,
  } = params;

  const body = JSON.stringify({
    contact: {
      "first_name": firstName,
      "last_name": lastName,
      job,
      description
    }
  })

  return fetch(`/api/contacts/${id}`, {
    method: 'PATCH',
    headers: {
      'content-type': 'application/json'
    },
    body,
  })
    .then((res) => {
      return res.json();
    })
}

export interface DeleteContactParams {
  id: number;
}

export async function deleteContact(params: DeleteContactParams) {
  const {
    id,
  } = params;

  return fetch(`/api/contacts/${id}`, {
    method: 'DELETE'
  })
    .then((res) => {
      return res.json();
    })
}
