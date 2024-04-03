import React, { useEffect } from "react";

import { useMembersDispatch } from "../../context/members/context";
import { fetchMembers } from "../../context/members/actions";

import MemberListItem from './MemberListItems';
const MemberList: React.FC = () => {
    const dispatchMembers = useMembersDispatch();

    useEffect(() => {
        fetchMembers(dispatchMembers);
    }, []);

    return (
        <div>
            <MemberListItem />
        </div>
    )
}
export default MemberList;