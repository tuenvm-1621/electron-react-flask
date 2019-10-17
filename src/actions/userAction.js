import { createActions } from 'redux-actions';

export const {
    createUser,
    getUsers,
    updateUser,
    deleteUser,
    addUser,
    fetchUsers,
    editUser,
    removeUser
} = createActions({
    'CREATE USER': data => ({data}),
    'GET USER': id => ({id}),
    'UPDATE USER': data => ({data}),
    'DELETE USER': id => ({id}),
    'ADD USER': data => ({data}),
    'FETCH USER': data => ({data}),
    'EDIT USER': data => ({data}),
    'REMOVE USER': id => ({id}),
})