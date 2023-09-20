import axios from 'axios';

export async function getContacts() {
  const  {data}  =  await axios.get('/contacts');
  return data;
}
export async function addContact(data) {
  const result = await axios.post('/contacts',data);
  return result.data;
}

export async function deleteContact(id) {
  const {result }=  await axios.delete(`/contacts/${id}`);
  return await  result;
}
