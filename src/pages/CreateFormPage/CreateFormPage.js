import "./CreateFormPage.scss";

const CreateFormPage = () => {
  return (
    <>
      <form
        className="create-form"
        noValidate
        autoComplete="off"
        // onSubmit={onSubmit}
      >
        <p className="create-form__title">Escoge un país de la lista: </p>
        <label htmlFor="countries"></label>
        <select
          className="create-form__country"
          id="country"
          name="country"
          required="true"
        >
          <option value="volvo">Albania</option>
          <option value="saab">Filipinas</option>
          <option value="fiat">Vietnam</option>
        </select>
        <p className="create-form__title">Nombre del lugar: </p>
        <label htmlFor="place"></label>
        <input
          type="text"
          id="title"
          name="place"
          className="create-form__text"
          // value={}
          required
          // onChange={changeUserData}
        ></input>
        <p className="create-form__text-title">
          Escribe el contenido del artículo aquí:{" "}
        </p>
        <textarea
          name="message"
          rows="10"
          cols="30"
          id="text"
          required
        ></textarea>
        <button type="submit" className="login-form__button">
          Crear
        </button>
      </form>
    </>
  );
};

export default CreateFormPage;
