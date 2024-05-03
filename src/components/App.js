import React from "react";
import "./App.css";
import Header from "./Header";
import ContactList from "./CantactList";
import AddContact from "./AddContact";

function App() {
  const contacts = [
    {
      id: "1",
      name: "aston",
      email: "aston@gmail.com",
    },
    {
      id: "2",
      name: "martin",
      email: "martin@gmail.com",
    },
  ];

  return (
    <div className="ui container">
      <Header />
      <AddContact />
      <ContactList contacts={contacts}/>
    </div>
  );
}

export default App;
