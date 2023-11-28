import React, {useEffect, useState} from "react";
import UserInfo from "../../../components/fake-api/User/UserInfo";
import {useParams} from "react-router-dom";
import {getUserInfo} from "../../../components/fake-api/User/api/user";

const UserDetail = () => {
    const { id } = useParams();
    const [ userInfo, setUserInfo ] = useState([]);

    const user = async () => {
        const response = await getUserInfo(id);
        setUserInfo([response.data]);
    };

    useEffect(() => {
        user();
    }, []);

    return (
        <div>
            <UserInfo userInfo={userInfo} />
        </div>
    );
};

export default UserDetail;
