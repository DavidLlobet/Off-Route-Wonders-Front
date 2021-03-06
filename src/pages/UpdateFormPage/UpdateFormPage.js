import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import usePlace from "../../hooks/usePlace";
import "./UpdateFormPage.scss";

const UpdateFormPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { updatePlace, place, loadPlace } = usePlace();
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    loadPlace(id);
  }, [loadPlace, id]);

  const initialData = {
    title: "",
    country: "",
    images: "",
    text: "",
    longitude: "",
    latitude: "",
  };

  const [placeData, setPlaceData] = useState(initialData);

  useEffect(() => {
    if (place.country?.name) {
      setPlaceData({
        title: place.title,
        country: place.country.name,
        images: place.images,
        text: place.text,
        longitude: place.coordinates.longitude,
        latitude: place.coordinates.latitude,
      });
    }
  }, [place]);

  const [isDisable, setIsDisable] = useState(true);

  const checkForm = () => {
    if (
      placeData.title !== "" &&
      placeData.country !== "" &&
      placeData.text !== ""
    ) {
      setIsDisable(false);
    }
  };

  const changePlaceData = (event) => {
    setPlaceData({
      ...placeData,
      [event.target.id]: event.target.value,
    });
    checkForm();
  };

  const onSubmit = (event) => {
    event.preventDefault();
    const newPlace = {
      title: placeData.title,
      country: placeData.country,
      text: placeData.text,
      coordinates: {
        longitude: placeData.longitude,
        latitude: placeData.latitude,
      },
    };

    updatePlace(newPlace, id);
    navigate("/home");
  };

  return (
    <>
      <form
        className="update-form"
        noValidate
        autoComplete="off"
        onSubmit={onSubmit}
      >
        <p className="update-form__title">Escoge un país de la lista: </p>
        <label htmlFor="countries"></label>
        <select
          className="update-form__country"
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
        <p className="update-form__title">Nombre del lugar: </p>
        <label htmlFor="place"></label>
        <input
          type="text"
          id="title"
          name="place"
          value={placeData.title}
          className="update-form__text"
          onChange={changePlaceData}
        ></input>
        <p className="update-form__title">Coordenadas del lugar </p>
        <p className="update-form__title">Longitud: </p>
        <label htmlFor="longitude"></label>
        <input
          type="number"
          className="update-form__text"
          id="longitude"
          value={placeData.longitude}
          onChange={changePlaceData}
        />
        <p className="update-form__title">Latitud: </p>
        <label htmlFor="latitude"></label>
        <input
          type="number"
          className="update-form__text"
          id="latitude"
          value={placeData.latitude}
          onChange={changePlaceData}
        />
        {/* <p className="create-form__title">
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
        /> */}
        <p className="update-form__text-title">
          Escribe el contenido del artículo aquí:{" "}
        </p>
        <textarea
          className="update-form__text-area"
          name="message"
          rows="10"
          cols="30"
          id="text"
          value={placeData.text}
          onChange={changePlaceData}
        ></textarea>
        <button
          type="submit"
          className="update-form__button"
          disabled={isDisable}
        >
          Modificar
        </button>
      </form>
    </>
  );
};

export default UpdateFormPage;
