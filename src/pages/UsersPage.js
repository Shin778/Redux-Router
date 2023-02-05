
// import React, { useState } from "react";
// import Cars from "../components/Cars";
// import users from '../db/users_db';

// function UsersPage() {
//     let [selectedCar, setSelectedCar] = useState(users[0].first_name);
//     let [input, setInput] = useState('');

//     function searchCar(event) {
//         const { value } = event.target;
//         setInput(value.toLowerCase())
//     };

//     return (
//         <div className="App">
//             <div><input onChange={searchCar} placeholder="Car name:" /></div>
//             {users
//                 .filter(item => item.first_name.toLowerCase().includes(input))
//                 .map(({ first_name: name }) => {
//                     return (
//                         <Cars onClick={() => setSelectedCar(name)} key={name} name={name}></Cars>
//                     )
//                 })}

//             <div style={{ color: 'green' }}>Selected Car: {selectedCar}</div>
//             <div>{input}</div>
//         </div>
//     );
// };

// export default UsersPage;




