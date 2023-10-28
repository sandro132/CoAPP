
const NuevoPassword = () => {
  return (
    <>
      <h1 className="text-color:#393939 font-black text-4xl flex ">
        Reestablece tu password
      </h1>

      <form className="my-10 bg-white shadow rounder-lg p-10">
       
        <div className="my-5">
          <label
            className="uppercase text-gray-600 block text-xl font-bold"
            htmlFor="password"
          >
           Nuevo Password
          </label>
          <input
            id="password"
            type="password"
            placeholder="Escribe tu Nuevo Password "
            className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
          />
        </div>

        <input
          type="submit"
          value="Guardar Nuevo Password"
          className="bg-sky-700 mb-5 w-full py-3 text-white uppercase font-bold rounded hover:cursor-pointer hover:bg-sky-800 transition-colors"
        />
      </form>
    </>
  );
}

export default NuevoPassword