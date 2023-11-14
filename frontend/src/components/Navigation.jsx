

const Navigation = () => {
  return (
    <aside className="body mx-3 my-2 text-white p-5 rounded-2xl">
      <img
        className="display:flex align-items:center justify-content:center mb-4"
        src="https://coally-images.s3.amazonaws.com/logo-coally-n.png"
        alt="Logo Coally"
        loading="lazy"
        width="150"
        height="115"
        decoding="async"
        data-nimg="1"
      />

      <nav className="navegacionIzquierda">
        <nav>
          <a
            href=""
            className="bg-white flex items-center text-primary gap-2 px-3 py-1 mb-2 rounded-xl"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
              />
            </svg>
            <span>Dashboard</span>
          </a>
        </nav>

        <div className="justify-items-end">
          <div className="">
            <a
              href="."
              className="block px-3 py-1 mb-2 flex items-center gap-2 "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
                />
              </svg>
              <span>Logout</span>
            </a>
          </div>
        </div>
      </nav>
    </aside>
  );
}

export default Navigation