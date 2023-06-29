import React from 'react';


export interface ContactProps {
    id: number;
    firstName: string;
    lastName: string;
    status: string;
}

export interface CardProps {
    object: ContactProps;
    deleteUser: () => void;
    toggleModal: (choice: boolean) => void;
}


const Card = ({ object, toggleModal, deleteUser }: CardProps) => {

    let backgroundColorClass = '';

    if (object.status === 'Inactive') {
        backgroundColorClass = 'bg-red-500';
    } else if (object.status === 'Active') {
        backgroundColorClass = 'bg-green-500';
    } else {
        backgroundColorClass = 'bg-blue-500';
    }

    return (
        <div className="relative flex items-center justify-center rounded bg-white h-28">
            <div className="text-1xl font-cursive text-gray-400 dark:text-gray-500" style={{ color: 'orange' }}>
                {object.firstName} {object.lastName}
                <h2 className={`text-sm ${backgroundColorClass} font-normal text-center absolute top-0 left-0 z-1 px-2 py-1 text-white`} style={{ borderTopRightRadius: '50%', borderBottomRightRadius: '50%' }}>
                    {object.status}
                </h2>
            </div>
            <div className="absolute top-0 right-0 cursor-pointer" onClick={deleteUser}>
                <svg width="1rem" height="1rem" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M10 12V17"
                        stroke="#000000"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M14 12V17"
                        stroke="#000000"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M4 7H20"
                        stroke="#000000"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M6 10V18C6 19.6569 7.34315 21 9 21H15C16.6569 21 18 19.6569 18 18V10"
                        stroke="#000000"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z"
                        stroke="#000000"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            </div>
            <div className="absolute top-0 right-5 cursor-pointer" onClick={() => toggleModal(true)}>
                <svg width="1rem" height="1rem" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <title />
                    <g id="Complete">
                        <g id="edit">
                            <g>
                                <path d="M20,16v4a2,2,0,0,1-2,2H4a2,2,0,0,1-2-2V6A2,2,0,0,1,4,4H8" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                                <polygon fill="none" points="12.5 15.8 22 6.2 17.8 2 8.3 11.5 8 16 12.5 15.8" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                            </g>
                        </g>
                    </g>
                </svg>
            </div>
        </div>
    )
}

export default Card
