import firebase from "./connect";

const database = firebase.database();

// export const addRoomToFirebase = task => {
//   const id = task.quality;

//   database.ref(`/rooms/${id}`).set(task);
// };
// export const addDateToFirebase = (task, choice, arr) => {
//   database.ref(`/rooms/${choice}/customers/${task.id}`).set(task);
//   database.ref(`/rooms/${choice}/dates/${task.id}`).set(arr);
// };
// export const removeRoomFromFirebase = task => {
//   database.ref(`/rooms/${task.quality}/dates/${task.id}`).remove();
//   database.ref(`/rooms/${task.quality}/customers/${task.id}`).remove();
// };

export default database;