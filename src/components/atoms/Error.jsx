import ErrorMsg from '../../resources/ErrorMsg.gif';

export const Error = () => {
    return (
        <div className="flex flex-col items-center mt-10">
            <img src={ErrorMsg} alt="error" />
            <div className='text-white font-medium'>Ошибка! Попробуйте перезагрузить страницу :3</div>
        </div>
    );
};