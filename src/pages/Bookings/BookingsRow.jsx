const BookingsRow = ({ booking ,handleDelete,handleBookingConfirm}) => {
  const {_id, date, serviceTitle, price, img ,status} = booking;

  return (
    <>
      <tr>
        <th>
          <button onClick={()=>handleDelete(_id)} className="btn btn-circle btn-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </th>
        <td>
          <div className="avatar">
            <div className="mask mask-squircle w-24 h-24">
              <img
                src={img || "https://i.pravatar.cc/500?img=32"}
                alt="Avatar Tailwind CSS Component"
              />
            </div>
          </div>
        </td>
        <td>{serviceTitle}</td>
        <td>{date}</td>
        <td>{price}</td>
        <th>
          {
            status === "Confirmed" ? "Confirmed" : <button onClick={()=>handleBookingConfirm(_id)} className="btn btn-xs">Please Confirm</button>
          }
        </th>
      </tr>
    </>
  );
};

export default BookingsRow;
