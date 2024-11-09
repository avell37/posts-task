import { useState } from "react";
import { Like } from "../atoms/Like";
import { Close } from "../atoms/Close";
import { Comment } from "../atoms/Comment";
import { useJsonService } from "../api/jsonService";
import { Loading } from "../atoms/Loading";
import { Error } from "../atoms/Error";

const PostContent = ({
    posts,
    like,
    handleLike,
    onCommentClick,
    onDeletePost,
}) => {
    const { post } = posts;

    const handleDelete = () => {
        onDeletePost(post.id);
    };

    return (
        <div className="flex border-solid rounded-t border-2 border-gray-700 w-2/5 h-auto m-auto mt-10 flex-col relative">
            <div className="flex justify-between relative w-full">
                <div className="text-white p-2 text-2xl w-10/12">
                    {post.title}
                </div>
                <Close
                    onDelete={handleDelete}
                    className="w-16 h-6 border-2 border-white mt-3"
                ></Close>
            </div>

            <div className="text-white p-2 h-auto">{post.body}</div>
            <div className="pb-6">
                <Like like={like} handleLike={handleLike} />
                <Comment onCommentClick={onCommentClick} />
            </div>
        </div>
    );
};

export const Post = ({
    posts,
    toggleLikeStatus,
    toggleComments,
    onDeletePost,
}) => {
    const { post } = posts;

    const { loading, error, clearError } = useJsonService();

    const handleLike = () => {
        toggleLikeStatus(post.id);
    };

    const errorMessage = error ? <Error /> : null;
    const spinner = loading ? <Loading /> : null;
    const content = !(loading || error) ? (
        <PostContent
            posts={posts}
            like={post.like}
            handleLike={handleLike}
            onCommentClick={toggleComments}
            onDeletePost={onDeletePost}
        />
    ) : null;

    return (
        <>
            {errorMessage}
            {spinner}
            {content}
        </>
    );
};
