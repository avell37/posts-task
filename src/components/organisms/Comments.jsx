import { User } from "../atoms/User";

export const Comments = ({ posts }) => {
    const { comments } = posts;
    if (!comments) return null;

    return (
        <div className="flex flex-col border-solid rounded-b border-2 border-t-0 border-gray-700 w-2/5 h-auto m-auto relative pb-10 gap-1">
            <h3 className="text-white font-bold p-2">Комментарии:</h3>
            <div className="flex flex-col space-y-4 p-2">
                {comments.map((comment) => {
                    return (
                        <div key={comment.id} className="flex flex-col">
                            <User />
                            <div className="text-white underline">
                                {comment.email}
                            </div>
                            <div className="text-white font-bold">
                                {comment.name}
                            </div>
                            <div className="text-white font-light">
                                {comment.body}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
