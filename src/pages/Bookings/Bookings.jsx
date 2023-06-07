import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import BookingsRow from "./BookingsRow";

const Bookings = () => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);

  const url = `https://car-doctor-server-cyan-iota.vercel.app/bookings?email=${user?.email}`;
  useEffect(() => {
    fetch(url, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("access-token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (!data?.error) {
          setBookings(data);
        } else {
          navigate("/login");
          console.log(data);
        }
      });
  }, [url, navigate]);

  const handleDelete = (id) => {
    const proceed = confirm("Are you sure?");
    if (proceed) {
      fetch(`https://car-doctor-server-cyan-iota.vercel.app/bookings/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            alert("Deleted Successfully");
            const remaining = bookings.filter((booking) => booking._id !== id);
            setBookings(remaining);
          }
        });
    }
  };
  const handleBookingConfirm = (id) => {
    const proceed = confirm("Are you sure?");
    if (proceed) {
      fetch(`https://car-doctor-server-cyan-iota.vercel.app/bookings/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: "Confirmed" }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.modifiedCount > 0) {
            alert("Confirmed Successfully");
            const remaining = bookings.filter((booking) => booking._id !== id);
            const confirmed = bookings.find((booking) => booking._id === id);
            confirmed.status = "Confirmed";
            const newBookings = [...remaining, confirmed];
            setBookings(newBookings);
          }
        });
    }
  };

  return (
    <div>
      <h1>My Bookings {bookings.length}</h1>
      <div className="overflow-x-auto">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>Delete</th>
              <th>Image</th>
              <th>Name of Service</th>
              <th>Date</th>
              <th>Price</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking) => (
              <BookingsRow
                key={booking._id}
                booking={booking}
                handleDelete={handleDelete}
                handleBookingConfirm={handleBookingConfirm}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Bookings;
