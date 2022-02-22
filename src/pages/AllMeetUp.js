import React from "react";
import MeetUpList from "../components/meetup/MeetUpList";
import { useState, useEffect } from "react";

function AllMeetUp() {
  const [isLoading, setLoading] = useState(true);
  const [loadingMeetups, setLoadingMeetups] = useState([]);

  useEffect(() => {
    setLoading(true);
    fetch("https://reactforum-fbc1d-default-rtdb.firebaseio.com/meetups.json")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const meetups = [];
        for (const key in data) {
          const meetup = {
            id: key,
            ...data[key],
          };
          meetups.push(meetup);
        }
        setLoading(false);
        setLoadingMeetups(meetups);
      });
  }, []);
  if (isLoading)
    return (
      <section>
        <p>Loading..</p>
      </section>
    );
  return (
    <section>
      <h1> All Meetups</h1>
      <MeetUpList meetups={loadingMeetups} />
    </section>
  );
}

export default AllMeetUp;
