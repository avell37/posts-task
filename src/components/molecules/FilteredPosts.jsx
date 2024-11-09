import { Post } from '../organisms/Post'
import { Comments } from "../organisms/Comments";
import { Loading } from '../atoms/Loading';
import { Error } from '../atoms/Error';

export const FilteredPosts = ({loading, error, toggleLikeStatus, deleteExistingPost, filteredPosts, openComments}) => {
    const content = !(loading || error)
        ? filteredPosts.map((posts, index) => (
            <div key={posts.id || index}>
                <Post
                    posts={posts}
                    toggleLikeStatus={toggleLikeStatus}
                    toggleComments={() => toggleComments(posts.post.id)}
                    onDeletePost={deleteExistingPost}
                />
                {openComments === posts.post.id && <Comments posts={posts} />}
            </div>
        ))
    : null;

    return (
        <>
            {loading && <Loading />}
            {error && <Error />}
            {content}
        </>
    )
};

