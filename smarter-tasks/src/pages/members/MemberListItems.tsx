//import React from 'react';
import { deleteMembers } from "../../context/members/actions";
import { useMembersDispatch, useMembersState } from "../../context/members/context";

export default function MemberListItem() {
    const { members, isLoading, isError, errorMessage } = useMembersState() || {}; // Destructure directly
    const dispatchMembers = useMembersDispatch();
    console.log(members)

    if (isLoading) {
        return <span>Loading....</span>;
    }

    if (isError) {
        return <span>{errorMessage}</span>;
    }

    return (
        <>
            {members?.map((member: any) => {
                if (member.hasOwnProperty('user')) {
                    member = member.user
                };

                return (
                    <div key={member.id} className="bg-white rounded-lg shadow-md p-4 mb-4 member">
                        <div>
                            <h5 className="text-lg font-semibold">{member.name}</h5>
                            <h6 className="text-gray-600">{member.email}</h6>
                        </div>
                        <div className="mt-2">
                            <button
                                className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
                                onClick={() => deleteMembers(dispatchMembers, member.id)}
                            >
                                Remove
                            </button>
                        </div>
                    </div>
                );
            })}
        </>
    );
}
