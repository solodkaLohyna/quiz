import { Link } from 'react-router-dom'
export const NotFoundPage = () => {
    return (
        <>
            <ul className='flex items-center flex-col my-32'>
                <li><div className="text-purple-600 font-bold text-7xl ">404 Not Found</div></li>
                <li><Link to="/" className='font-bold text-5xl'>Home</Link></li>
            </ul>
        </>
    )
}