import React from 'react';
import { deleteMembers } from "../../context/members/action";
import { useMembersDispatch, useMembersState } from "../../context/members/context";

export default function MemberListItem() {
    const { members, isLoading, isError, errorMessage } = useMembersState() || {}; // Destructure directly
    const dispatchMembers = useMembersDispatch();

    if (isLoading) {
        return <span>Loading....</span>;
    }

    if (isError) {
        return <span>{errorMessage}</span>;
    }

    return (
        <>
            {members?.map((member: any) => (
                <div key={member.id}>
                    <div>
                        <h5>{member.name}</h5>
                        <h6>{member.email}</h6>
                    </div>
                    <div>
                        <button onClick={() => deleteMembers(dispatchMembers, member.id)}>remove</button>
                    </div>
                </div>
            ))}
        </>
    );
}
