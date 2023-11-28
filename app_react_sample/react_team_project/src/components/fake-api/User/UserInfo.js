import React from "react";

const UserInfo = ({ userInfo }) => {
    /**
     * Object.keys()
     * Object.values()
     * Object.entries()
     *
     * Array.map()
     * */

    return (
        <>
            <h2>회원 정보</h2>
            {
                userInfo.map(user =>
                    <div key={user.id}>
                        <h4>username: {user.username}</h4>
                        <h4>email: {user.email}</h4>
                        <h4>password: {user.password}</h4>
                        <h4>phone: {user.phone}</h4>
                    </div>
                )
            }
        </>
    );
};

export default UserInfo;
