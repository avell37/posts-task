import { useState } from "react";
import { useJsonService } from "../api/jsonService";
import { Loading } from "../atoms/Loading";
import { Error } from "../atoms/Error";

const CreateForm = ({
    handleSubmit,
    title,
    body,
    loading,
    isOpen,
    onClose,
    setBody,
    setTitle,
}) => {
    return (
        <>
            <div
                className={`fixed inset-0 z-10 ${isOpen ? "" : "hidden"}`}
                onClick={onClose}
            >
                <div className="absolute inset-0 bg-black opacity-50"></div>
            </div>
            <div
                className={`fixed inset-0 overflow-y-auto z-20 ${
                    isOpen ? "" : "hidden"
                }`}
            >
                <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                    <div
                        className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby="modal-headline"
                    >
                        <form
                            onSubmit={handleSubmit}
                            className="bg-cyan-950 px-4 pt-5 pb-4 sm:p-6 sm:pb-4"
                        >
                            <button
                                type="button"
                                onClick={onClose}
                                className="absolute top-4 right-4 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                <span className="sr-only">Закрыть</span>
                                <svg
                                    className="h-6 w-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>
                            <h3
                                className="text-lg leading-6 font-medium text-white"
                                id="modal-headline"
                            >
                                Создать новый пост
                            </h3>
                            <input
                                type="text"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                placeholder="Заголовок"
                                className="mt-3 mb-2 p-2 border rounded w-full border-slate-500 bg-gray-500 pl-2 hover:bg-gray-600 focus:bg-gray-600 transition-all"
                            />
                            <textarea
                                style={{ resize: "none" }}
                                value={body}
                                onChange={(e) => setBody(e.target.value)}
                                placeholder="Текст поста"
                                className="mb-2 p-2 border rounded w-full border-slate-500 bg-gray-500 pl-2 hover:bg-gray-600 focus:bg-gray-600 transition-all"
                            />
                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full inline-flex justify-center py-2 px-4 mt-3 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                Создать пост
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export const CreatePostForm = ({ isOpen, onClose, onPostCreated }) => {
    const { createPost, loading, error, clearError } = useJsonService();
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const newPost = await createPost({ title, body, userId: 1 });
            setTitle("");
            setBody("");
            onClose();
            onPostCreated(newPost);
        } catch (err) {
            throw err;
        }
    };

    const errorMessage = error ? <Error /> : null;
    const spinner = loading ? <Loading /> : null;
    const content = !(loading || error) ? (
        <CreateForm
            handleSubmit={handleSubmit}
            body={body}
            title={title}
            loading={loading}
            isOpen={isOpen}
            onClose={onClose}
            setTitle={setTitle}
            setBody={setBody}
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
