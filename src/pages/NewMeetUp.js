import React from "react";
import NewMeetUpForm from "../components/meetup/NewMeetUpForm";
import { useHistory } from "react-router-dom";

function NewMeetUp() {
  const history = useHistory();
  function addMeetupHandler(meetupData) {
    fetch("https://reactforum-fbc1d-default-rtdb.firebaseio.com/meetups.json", {
      method: "POST",
      body: JSON.stringify(meetupData),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => {
      history.replace("/");
    });
  }
  return (
    <div>
      <h1>Add New Meet Up</h1>
      <NewMeetUpForm onAddMeetup={addMeetupHandler} />
    </div>
  );
}

export default NewMeetUp;
