import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import usePlace from "../../hooks/usePlace";
// import "./CreateFormPage.scss";

const UpdateFormPage = () => {
  const { updatePlace, place, loadPlace } = usePlace();
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    loadPlace(id);
  }, [loadPlace, id]);

  const initialData = {
    title: place?.title,
    country: place?.country?.name,
    images: place?.images,
    text: place?.text,
    longitude: place?.coordinates?.longitude,
    latitude: place?.coordinates?.latitude,
  };

  const [placeData, setPlaceData] = useState(initialData);

  const changePlaceData = (event) => {
    setPlaceData({
      ...placeData,
      [event.target.id]:
        event.target.type === "file"
          ? event.target.files[0]
          : event.target.value,
    });
    // checkForm();
  };

  const changeCoordinatesData = (event) => {
    setPlaceData({
      ...placeData,
      coordinates: {
        ...placeData.coordinates,
        [event.target.id]: event.target.value,
      },
    });
    // checkForm();
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();

    formData.append("title", placeData.title);
    formData.append("country", placeData.country);
    formData.append("text", placeData.text);
    formData.append("images", placeData.images);
    formData.append("coordinates[longitude]", placeData.coordinates.longitude);
    formData.append("coordinates[latitude]", placeData.coordinates.latitude);

    await updatePlace(formData, id);
    // navigate("/home");
  };

  return (
    <>
      <form
        className="create-form"
        noValidate
        autoComplete="off"
        onSubmit={onSubmit}
      >
        <p className="create-form__title">Escoge un país de la lista: </p>
        <label htmlFor="countries"></label>
        <select
          className="create-form__country"
          id="country"
          name="country"
          value={placeData.country}
          onChange={changePlaceData}
        >
          <option value="Escoge un país">Escoge un país</option>
          <option value="Albania">Albania</option>
          <option value="Filipinas">Filipinas</option>
          <option value="Vietnam">Vietnam</option>
        </select>
        <p className="create-form__title">Nombre del lugar: </p>
        <label htmlFor="place"></label>
        <input
          type="text"
          id="title"
          name="place"
          value={placeData.title}
          className="create-form__text"
          onChange={changePlaceData}
        ></input>
        <p className="create-form__title">Coordenadas </p>
        <p className="create-form__title">Longitud: </p>
        <label htmlFor="longitude"></label>
        <input
          type="number"
          className="create-form__text"
          id="longitude"
          value={placeData.coordinates.longitude}
          onChange={changeCoordinatesData}
        />
        <p className="create-form__title">Latitud: </p>
        <label htmlFor="latitude"></label>
        <input
          type="number"
          className="create-form__text"
          id="latitude"
          value={placeData.coordinates.latitude}
          onChange={changeCoordinatesData}
        />
        <p className="create-form__title">
          Haz click para agregar una o más imágenes:
        </p>
        <label htmlFor="images"></label>
        <input
          type="file"
          multiple
          className="create-form__images"
          id="images"
          value={placeData.file}
          onChange={changePlaceData}
        />
        <p className="create-form__text-title">
          Escribe el contenido del artículo aquí:{" "}
        </p>
        <textarea
          name="message"
          rows="10"
          cols="30"
          id="text"
          value={placeData.text}
          onChange={changePlaceData}
        ></textarea>
        <button
          type="submit"
          className="login-form__button"
          // disabled={isDisable}
        >
          Modificar
        </button>
      </form>
    </>
  );
};

export default UpdateFormPage;
