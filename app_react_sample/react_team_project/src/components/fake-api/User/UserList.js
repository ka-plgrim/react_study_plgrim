import {Link} from "react-router-dom";

export default function UserList({ users }) {
    return (
        <ul>
            {users.map(user => (
                <li key={user.id}>
                    <Link to={`/fake-api/user/${user.id}`}>{user.username}</Link>
                </li>
            ))}
        </ul>
    )
}