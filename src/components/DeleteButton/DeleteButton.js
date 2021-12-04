const DeleteButton = ({ place, deleteOnClick }) => {
  return (
    <button className="button" onClick={() => deleteOnClick(place.id)}>
      Eliminar
    </button>
  );
};

export default DeleteButton;
