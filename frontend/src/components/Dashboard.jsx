

const Dashboard = () => {
  return (
    <main className="p-5  grow  bg-white my-2 mr-2 rounded-3xl">
      <div>
        <h1 className="text-color:#393939 font-black text-2xl flex p-4 ">
          Dashboard Holberton - Coally
        </h1>
      </div>

      <div className="flex gap-5">
        <div className="bg-orange-400 text-white p-5 flex items-center gap-2 flex-row rounded-tl-3xl rounded-br-3xl rounded-tr-md rounded-bl-md">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
            />
          </svg>
          <div>
            <h3>Ultima Actualización</h3>
            <h2 className="font-bold text-2xl leading-4">10/10/2023</h2>
          </div>
        </div>
        <div className="bg-orange-400 text-white p-5 flex items-center gap-2 flex-row rounded-tr-3xl rounded-bl-3xl rounded-tl-md rounded-br-md">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
            />
          </svg>
          <div>
            <h3>Ultima Actualización</h3>
            <h2 className="font-bold text-2xl leading-4">10/10/2023</h2>
          </div>
        </div>
      </div>
      
    </main>
  );
}

export default Dashboard