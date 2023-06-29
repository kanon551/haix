import React from 'react'
import Card from './Card'

const SocialMedia = () => {

   const userContactInitialData = [
    {
        firstName: 'Ethan',
        lastName: 'Smith',
        status: 'Inactive',
        id: 0,
    },
    {
        firstName: 'Ava',
        lastName: 'Johnson',
        status: 'Inactive',
        id: 1,
    },
    {
        firstName: 'Noah',
        lastName: 'Williams',
        status: 'Active',
        id: 2,
    },
    {
        firstName: 'Sophia',
        lastName: 'Jones',
        status: 'Active',
        id: 3,
    },
    {
        firstName: 'Liam',
        lastName: 'Brown',
        status: 'Active',
        id: 4,
    }
    , {
        firstName: 'Isabella',
        lastName: 'Davis',
        status: 'Inactive',
        id: 5,
    }
    , {
        firstName: 'Jackson',
        lastName: 'Miller',
        status: 'Inactive',
        id: 6,
    }
    , {
        firstName: 'Mia',
        lastName: 'Wilson',
        status: 'Active',
        id: 7,
    }, {
        firstName: 'Aiden',
        lastName: 'Moore',
        status: 'Inactive',
        id: 8,
    },
    {
        firstName: 'Charlotte',
        lastName: 'Taylor',
        status: 'Active',
        id: 9,
    }
]


  function onUpdateCardClickResponse(choice: boolean, index: number, contact: { firstName: string; lastName: string; status: string; id: number }): void {
    throw new Error('Function not implemented.')
  }

  function deleteOnClick(id: number): void {
    throw new Error('Function not implemented.');
  }

  return (
    <div className="p-4 sm:ml-40">
    <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14" style={{ height: '100vh' }}>
            <div className='mb-4 w-fit cursor-pointer'>
                <svg width="2rem" height="2rem" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <rect x="0" fill="none" width="24" height="24" />
                    <g>
                        <path d="M21 14v5c0 1.105-.895 2-2 2H5c-1.105 0-2-.895-2-2V5c0-1.105.895-2 2-2h5v2H5v14h14v-5h2z" />
                        <path d="M21 7h-4V3h-2v4h-4v2h4v4h2V9h4" />
                    </g>
                </svg>
            </div>
            <div className="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4">
                {userContactInitialData.map((contact, index) => (
                    <Card key={index} object={contact} toggleModal={(choice: boolean) => onUpdateCardClickResponse(choice, index, contact)} deleteUser={() => deleteOnClick(contact.id)} />
                ))}
            </div>
    </div>
  </div>
  )
}

export default SocialMedia
