export default function HobbyList() {
    const hobbies = ['Programowanie', 'Muzyka', 'Sport', 'Podróże'];
  
    return (
      <ul>
        {hobbies.map((hobby, index) => (
          <li key={index}>{hobby}</li>
        ))}
      </ul>
    );
  }
  