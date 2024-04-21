import { useCommentState } from "../../context/comment/context";

export default function CommentList() {
    const commentState = useCommentState();
    console.log(commentState.comments);
    const current = localStorage.getItem("userData");
    let currentMember
    if (current) currentMember = JSON.parse(current);
    const User = currentMember.name.toString();
    return (
        <div className="mt-4">
            <h3 className="text-lg font-medium">Comments</h3>
            <div className="mt-2">
                {commentState.comments.map((comment) => (
                    <div key={comment.id} className="comment">
                        <div className="mr-3">{comment.description}</div>
                        <div className="mr-3">{comment.createdAt}</div>
                        <div className="mr-3">{comment.User ? comment.User.name : User}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}