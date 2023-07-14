
import React from "react";

const user = {
  name: 'Christopher Robin',
  imageUrl: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fmedia.npr.org%2Fassets%2Fimg%2F2011%2F07%2F13%2Fchristopherrobin-d13c9c20543fc6d051429ce97d7ac5cb47ac75f5.jpg&tbnid=nS1rvO2HUn5IaM&vet=12ahUKEwjA7In08oP-AhUuk4QIHQBtAxMQMygDegUIARDqAQ..i&imgrefurl=https%3A%2F%2Fwww.npr.org%2F2011%2F07%2F13%2F137816699%2Fwill-christopher-robin-ever-grow-up&docid=0KPOynmmJAlCxM&w=765&h=573&q=christopher%20robin&ved=2ahUKEwjA7In08oP-AhUuk4QIHQBtAxMQMygDegUIARDqAQ',
  imageSize: 90,
}

const Avatar = (props) => { 
  const user = { name,
    imageUrl, 
    imageSize } = props.user;
  

  return (
    <div>
      <h2>{users.name}</h2>
      <img src={users.imageUrl} alt={users.uname} width={users.imageSize}  />
    </div>
  );
}

export default Avatar;
  
