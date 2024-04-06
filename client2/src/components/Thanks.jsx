import { useNavigate } from 'react-router-dom';

const Thanks = () => {
    const navigate = useNavigate();
    return (
        <div className='bg-gray-900 p-20 text-white h-dvh'>
            <div className='border p-5'>
                <h1 className='text-2xl font-bold text-center w-full text-green-400'>Thanks for your Response</h1>
                <p>We will get back to you soon!</p>
                <button onClick={() => { navigate("/selection/fresher") }} className='bg-white text-gray-900 p-3 m-3 rounded font-bold'>Submit Another Response</button>
            </div>
        </div>
    );
}

export default Thanks;