// Updated List.js to include a card container

import React from 'react';

const List = ({ people, removeBirthday }) => {
  return (
    <div className="card-container"> {/* Added a container div */}
      <h1 id='bd'>BIRTHDAY ALERT !!!</h1> {/* Birthday reminder */}
      {people.map((person) => (
        <div key={person.id} className="person-card">
          <div className="person-card-content">
            <img src={person.image} alt={person.name} />
            <div className="person-info">
              <p>Name: {person.nam}</p>
              <p>D.O.B: {person.dob}</p>
              <p>{person.age} years</p>
            </div>
          </div>
          <button className="remove-button" onClick={() => removeBirthday(person.id)}>Remove</button>
        </div>
      ))}
    </div>
  );
};

export default List;
