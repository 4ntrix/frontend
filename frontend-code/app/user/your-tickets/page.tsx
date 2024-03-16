import React from 'react';
import {NavbarDemo} from'../../nav'
const ProfilePage: React.FC = () => {
  // Sample user data
  const user = {
    name: 'Naruto Singh',
    profilePicture: 'https://i.pinimg.com/564x/aa/af/93/aaaf936bac3fb07452b798ec0280aec8.jpg',
    aadharNo: '1234 5678 9012'
  };

  // Sample array of purchased cards
  const purchasedCards = [
    { id: 1, name: 'Card 1', imageUrl: 'https://i.pinimg.com/236x/a9/00/8d/a9008d702f734a3ca67eeb2bc25a1b6c.jpg' },
    { id: 2, name: 'Card 2', imageUrl: 'https://i.pinimg.com/236x/a9/00/8d/a9008d702f734a3ca67eeb2bc25a1b6c.jpg' },
    { id: 3, name: 'Card 3', imageUrl: 'https://i.pinimg.com/236x/a9/00/8d/a9008d702f734a3ca67eeb2bc25a1b6c.jpg' },
    { id: 4, name: 'Card 3', imageUrl: 'https://i.pinimg.com/236x/a9/00/8d/a9008d702f734a3ca67eeb2bc25a1b6c.jpg' },

    // Add more cards as needed
  ];

  return (
    <>
    <div className="mt-2">
    <NavbarDemo></NavbarDemo>
    </div>
    <div className="p-4">
    <div className="absolute right-0 mx-6 my-1">
      <div className="flex items-center mb-4">
        <img src={user.profilePicture} alt="Profile" className="w-12 h-12 rounded-full mr-2" />
        <div>
          <h1 className="text-xl font-bold">{user.name}</h1>
          <p className="text-gray-500">{user.aadharNo}</p>
        </div>
      </div>
    </div>
    <div className="mt-10">
    <h2 className="text-lg font-semibold mb-2">Purchased Tickets</h2>
      <div className="grid grid-cols-4 gap-4">
        {purchasedCards.map(card => (
          <div key={card.id} className=" bg-gray-900 border-2 border-indigo-900 rounded-3xl p-6 shadow-lg shadow-indigo-700/60">
            <img src={card.imageUrl} alt={card.name} className="w-full h-48 object-cover rounded-3xl" />
            <p className="text-center mt-2">{card.name}</p>
          </div>
        ))}
      </div>
    </div>
    </div>
    </>
  );
};

export default ProfilePage;
