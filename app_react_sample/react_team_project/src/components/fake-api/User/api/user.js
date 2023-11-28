import { fakeApiRequest } from '../../../../utils/axios';

export const getUsers = async () => {
    const users = await fakeApiRequest.get('/users');
    return users;
};

export const getUserInfo = async (userId) => {
    const userInfo = await fakeApiRequest.get(('/users/' + userId));
    return userInfo;
}