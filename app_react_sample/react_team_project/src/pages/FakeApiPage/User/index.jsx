import {getUsers} from "../../../components/fake-api/User/api/user";
import {useEffect, useState} from "react";
import UserList from "../../../components/fake-api/User/UserList";

const UserPage = () => {
    const [userList, setUserList] = useState([]);

    const users = async () => {
        const response = await getUsers();
        setUserList(response.data);
    }

    useEffect(() => {
        users();
    }, []);

    return (
        <section>
            <div>
                <h3>회원 목록</h3>
                <UserList users={userList}/>
            </div>
        </section>
    )
}

export default UserPage;