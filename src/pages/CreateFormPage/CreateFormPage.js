import { useEffect, useState } from "react";
import usePlaces from "../../hooks/usePlaces";
import { useNavigate } from "react-router";

import "./CreateFormPage.scss";
import { Toaster } from "react-hot-toast";

const CreateFormPage = () => {
  let navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const initialData = {
    title: "",
    country: "",
    text: "",
    coordinates: { longitude: 0, latitude: 0 },
  };

  const [placeData, setPlaceData] = useState(initialData);
  const { createPlace } = usePlaces();
  const [isDisable, setIsDisable] = useState(true);

  const checkForm = () => {
    if (
      placeData.title !== "" &&
      placeData.text !== "" &&
      placeData.country !== "Escoge un país" &&
      placeData.coordinates.longitude !== 0 &&
      placeData.coordinates.latitude !== 0
    ) {
      setIsDisable(false);
    }
  };

  const changePlaceData = (event) => {
    setPlaceData({
      ...placeData,
      [event.target.id]:
        event.target.type === "file"
          ? event.target.files[0]
          : event.target.value,
    });
    checkForm();
  };

  const changeCoordinatesData = (event) => {
    setPlaceData({
      ...placeData,
      coordinates: {
        ...placeData.coordinates,
        [event.target.id]: event.target.value,
      },
    });
    checkForm();
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

    await createPlace(formData);
    setTimeout(() => {
      navigate("/home");
    }, 2000);
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
        <label htmlFor="country"></label>
        <select
          className="create-form__country"
          data-testid="country"
          id="country"
          name="country"
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
          data-testid="title"
          name="place"
          className="create-form__text"
          onChange={changePlaceData}
        ></input>
        <p className="create-form__title">Coordenadas del lugar </p>
        <p className="create-form__title">Longitud: </p>
        <label htmlFor="longitude"></label>
        <input
          type="number"
          className="create-form__text"
          id="longitude"
          data-testid="longitude"
          onChange={changeCoordinatesData}
        />
        <p className="create-form__title">Latitud: </p>
        <label htmlFor="latitude"></label>
        <input
          type="number"
          className="create-form__text"
          id="latitude"
          data-testid="latitude"
          onChange={changeCoordinatesData}
        />
        <p className="create-form__title">Haz click para agregar una imagen:</p>
        <label htmlFor="images"></label>
        <input
          type="file"
          multiple
          className="create-form__images"
          id="images"
          data-testid="images"
          onChange={changePlaceData}
        />
        <p className="create-form__text-title">
          Escribe el contenido del artículo aquí:{" "}
        </p>
        <label htmlFor="text"></label>
        <textarea
          className="create-form__text-area"
          name="message"
          rows="10"
          cols="30"
          id="text"
          data-testid="text"
          onChange={changePlaceData}
        ></textarea>
        <button
          type="submit"
          className="login-form__button"
          disabled={isDisable}
        >
          Crear
        </button>
      </form>
      <Toaster />
    </>
  );
};

export default CreateFormPage;
