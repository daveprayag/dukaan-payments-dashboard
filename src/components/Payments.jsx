function Payments() {
  return (
    <>
      <main className="py-10 bg-gray-100">
        <div className="px-4 sm:px-6 lg:px-8 gap-6">
          <div>
            <div className="flex justify-between">
              <h3 className="text-xl font-medium leading-6 text-black">
                Overview
              </h3>
              <div className="flex justify-end">
                <div
                  className="relative inline-block text-left"
                  data-headlessui-state=""
                >
                  <div>
                    <button
                      className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-normal text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                      id="headlessui-menu-button-:Rearnla:"
                      type="button"
                      aria-haspopup="menu"
                      aria-expanded="false"
                      data-headlessui-state=""
                    >
                      Last Month
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                        data-slot="icon"
                        className="-mr-1 h-5 w-5 text-gray-400"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div className="overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6">
                <dt className="truncate text-md font-regular text-[#4D4D4D]">
                  Online orders
                </dt>
                <dd className="mt-1 text-[32px] font-regular tracking-tight  text-[#1A181E]">
                  231
                </dd>
              </div>
              <div className="overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6">
                <dt className="truncate text-md font-regular text-[#4D4D4D]">
                  Amount recieved
                </dt>
                <dd className="mt-1 text-[32px] font-medium tracking-tight  text-[#1A181E]">
                  ₹ 23,92,312.19
                </dd>
              </div>
            </dl>
          </div>
          <div className="mt-5">
            <div className="sm:flex sm:items-center">
              <div className="sm:flex-auto">
                <h1 className="text-xl font-regular leading-6 text-[#1A181E]">
                  Transactions | This Month
                </h1>
              </div>
            </div>
            <div className="mt-7 flow-root">
              <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                  <div className="overflow-hidden rounded-lg bg-white shadow">
                    <div className="px-4 py-5 sm:p-6">
                      <div className="flex-1 flex items-center">
                        <label htmlFor="search" className="sr-only">
                          Search by Order ID
                        </label>
                        <div className="relative flex items-center">
                          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              aria-hidden="true"
                              data-slot="icon"
                              className="h-5 w-5 text-gray-400"
                            >
                              <path
                                fillRule="evenodd"
                                d="M9 3.5a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11ZM2 9a7 7 0 1 1 12.452 4.391l3.328 3.329a.75.75 0 1 1-1.06 1.06l-3.329-3.328A7 7 0 0 1 2 9Z"
                                clipRule="evenodd"
                              ></path>
                            </svg>
                          </div>
                          <input
                            id="search"
                            className="block w-1/8 h-[40px] rounded-md border-0 bg-white py-1.5 pl-10 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            placeholder="Search by order ID..."
                            type="search"
                            name="search"
                          />
                        </div>
                        <div className="ml-auto">
                          <span className="isolate inline-flex rounded-md shadow-sm">
                            <button
                              type="button"
                              className="relative inline-flex items-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-normal text-[#4D4D4D] ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10 mr-3"
                            >
                              Sort
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                aria-hidden="true"
                                data-slot="icon"
                                className="ml-0.5 h-5 w-5 text-gray-400"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M2.24 6.8a.75.75 0 0 0 1.06-.04l1.95-2.1v8.59a.75.75 0 0 0 1.5 0V4.66l1.95 2.1a.75.75 0 1 0 1.1-1.02l-3.25-3.5a.75.75 0 0 0-1.1 0L2.2 5.74a.75.75 0 0 0 .04 1.06Zm8 6.4a.75.75 0 0 0-.04 1.06l3.25 3.5a.75.75 0 0 0 1.1 0l3.25-3.5a.75.75 0 1 0-1.1-1.02l-1.95 2.1V6.75a.75.75 0 0 0-1.5 0v8.59l-1.95-2.1a.75.75 0 0 0-1.06-.04Z"
                                  clipRule="evenodd"
                                ></path>
                              </svg>
                            </button>
                            <button
                              type="button"
                              className="relative -ml-px inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                aria-hidden="true"
                                data-slot="icon"
                                className="ml-0.5 h-5 w-5 text-gray-400"
                              >
                                <path d="M10.75 2.75a.75.75 0 0 0-1.5 0v8.614L6.295 8.235a.75.75 0 1 0-1.09 1.03l4.25 4.5a.75.75 0 0 0 1.09 0l4.25-4.5a.75.75 0 0 0-1.09-1.03l-2.955 3.129V2.75Z"></path>
                                <path d="M3.5 12.75a.75.75 0 0 0-1.5 0v2.5A2.75 2.75 0 0 0 4.75 18h10.5A2.75 2.75 0 0 0 18 15.25v-2.5a.75.75 0 0 0-1.5 0v2.5c0 .69-.56 1.25-1.25 1.25H4.75c-.69 0-1.25-.56-1.25-1.25v-2.5Z"></path>
                              </svg>
                            </button>
                          </span>
                        </div>
                      </div>
                      <table className="min-w-full mt-3">
                        <thead>
                          <tr className="bg-gray-100">
                            <th
                              scope="col"
                              className="py-3.5 pl-4 pr-3 text-left text-sm font-medium text-[#4D4D4D] sm:pl-0 rounded-l-lg"
                            >
                              <a href="#" className="group inline-flex pl-2">
                                Order ID
                              </a>
                            </th>
                            <th
                              scope="col"
                              className="px-3 py-3.5 text-left text-sm font-medium text-[#4D4D4D]"
                            >
                              <a href="#" className="group inline-flex">
                                Order Date
                                <span className="ml-2 flex-none rounded bg-gray-200 text-gray-900 group-hover:bg-gray-200 my-auto">
                                  <svg
                                    width="8"
                                    height="6"
                                    viewBox="0 0 8 6"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M3.43025 5.23409L0.606918 1.3286C0.548707 1.24507 0.517907 1.15037 0.517581 1.05392C0.517255 0.957461 0.547415 0.862617 0.60506 0.778818C0.662705 0.69502 0.745826 0.625189 0.846154 0.576272C0.946481 0.527357 1.06052 0.50106 1.17692 0.5H6.82358C6.93998 0.50106 7.05402 0.527357 7.15435 0.576272C7.25468 0.625189 7.3378 0.69502 7.39544 0.778818C7.45309 0.862617 7.48325 0.957461 7.48292 1.05392C7.4826 1.15037 7.45179 1.24507 7.39358 1.3286L4.57025 5.23409C4.51083 5.31526 4.42716 5.38238 4.32732 5.42895C4.22747 5.47553 4.11483 5.5 4.00025 5.5C3.88567 5.5 3.77303 5.47553 3.67319 5.42895C3.57334 5.38238 3.48967 5.31526 3.43025 5.23409Z"
                                      fill="#4D4D4D"
                                    />
                                  </svg>
                                </span>
                              </a>
                            </th>
                            <th
                              scope="col"
                              className="px-3 py-3.5 text-right text-sm font-medium text-[#4D4D4D]"
                            >
                              <a href="#" className="group inline-flex">
                                Order Amount
                              </a>
                            </th>
                            <th
                              scope="col"
                              className="px-3 py-3.5 text-right text-sm font-medium text-[#4D4D4D] rounded-r-lg"
                            >
                              <a href="#" className="group inline-flex">
                                Transaction Fees
                                <span className="ml-2 flex-none rounded text-gray-400 group-hover:visible group-focus:visible my-auto">
                                  <svg
                                    width="14"
                                    height="14"
                                    viewBox="0 0 14 14"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      clipRule="evenodd"
                                      d="M7.0002 1.63353C4.03627 1.63353 1.63353 4.03627 1.63353 7.0002C1.63353 9.96412 4.03627 12.3669 7.0002 12.3669C9.96412 12.3669 12.3669 9.96412 12.3669 7.0002C12.3669 4.03627 9.96412 1.63353 7.0002 1.63353ZM0.700195 7.0002C0.700195 3.5208 3.5208 0.700195 7.0002 0.700195C10.4796 0.700195 13.3002 3.5208 13.3002 7.0002C13.3002 10.4796 10.4796 13.3002 7.0002 13.3002C3.5208 13.3002 0.700195 10.4796 0.700195 7.0002Z"
                                      fill="#4D4D4D"
                                    />
                                    <path
                                      fillRule="evenodd"
                                      clipRule="evenodd"
                                      d="M7.00019 6.62382C7.25793 6.62382 7.46686 6.83276 7.46686 7.09049L7.46687 9.44604C7.46687 9.70377 7.25794 9.9127 7.00021 9.9127C6.74247 9.9127 6.53354 9.70377 6.53354 9.44604L6.53353 7.09049C6.53353 6.83276 6.74246 6.62382 7.00019 6.62382Z"
                                      fill="#4D4D4D"
                                    />
                                    <path
                                      fillRule="evenodd"
                                      clipRule="evenodd"
                                      d="M7.52801 4.75852C7.52801 5.05002 7.29171 5.28633 7.00021 5.28633C6.70871 5.28633 6.4724 5.05002 6.4724 4.75852C6.4724 4.46702 6.70871 4.23072 7.00021 4.23072C7.29171 4.23072 7.52801 4.46702 7.52801 4.75852Z"
                                      fill="#4D4D4D"
                                    />
                                  </svg>
                                </span>
                              </a>
                            </th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                          <tr>
                            <td className="whitespace-nowrap py-4 pl-2 pr-3 text-sm font-medium text-sky-600">
                              #28109
                            </td>
                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-700">
                              7 July, 2023
                            </td>
                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-700 text-right">
                              ₹1278.23
                            </td>
                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-700 text-right">
                              ₹22
                            </td>
                          </tr>
                          <tr>
                            <td className="whitespace-nowrap py-4 pl-2 pr-3 text-sm font-medium text-sky-600 ">
                              #28109
                            </td>
                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-700">
                              7 July, 2023
                            </td>
                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-700 text-right">
                              ₹1278.23
                            </td>
                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-700 text-right">
                              ₹22
                            </td>
                          </tr>
                          <tr>
                            <td className="whitespace-nowrap py-4 pl-2 pr-3 text-sm font-medium text-sky-600">
                              #28109
                            </td>
                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-700">
                              7 July, 2023
                            </td>
                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-700 text-right">
                              ₹1278.23
                            </td>
                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-700 text-right">
                              ₹22
                            </td>
                          </tr>
                          <tr>
                            <td className="whitespace-nowrap py-4 pl-2 pr-3 text-sm font-medium text-sky-600">
                              #28109
                            </td>
                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-700">
                              7 July, 2023
                            </td>
                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-700 text-right">
                              ₹1278.23
                            </td>
                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-700 text-right">
                              ₹22
                            </td>
                          </tr>
                          <tr>
                            <td className="whitespace-nowrap py-4 pl-2 pr-3 text-sm font-medium text-sky-600">
                              #28109
                            </td>
                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-700">
                              7 July, 2023
                            </td>
                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-700 text-right">
                              ₹1278.23
                            </td>
                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-700 text-right">
                              ₹22
                            </td>
                          </tr>
                          <tr>
                            <td className="whitespace-nowrap py-4 pl-2 pr-3 text-sm font-medium text-sky-600">
                              #28109
                            </td>
                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-700">
                              7 July, 2023
                            </td>
                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-700 text-right">
                              ₹1278.23
                            </td>
                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-700 text-right">
                              ₹22
                            </td>
                          </tr>
                          <tr>
                            <td className="whitespace-nowrap py-4 pl-2 pr-3 text-sm font-medium text-sky-600">
                              #28109
                            </td>
                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-700">
                              7 July, 2023
                            </td>
                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-700 text-right">
                              ₹1278.23
                            </td>
                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-700 text-right">
                              ₹22
                            </td>
                          </tr>
                          <tr>
                            <td className="whitespace-nowrap py-4 pl-2 pr-3 text-sm font-medium text-sky-600">
                              #28109
                            </td>
                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-700">
                              7 July, 2023
                            </td>
                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-700 text-right">
                              ₹1278.23
                            </td>
                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-700 text-right">
                              ₹22
                            </td>
                          </tr>
                          <tr>
                            <td className="whitespace-nowrap py-4 pl-2 pr-3 text-sm font-medium text-sky-600">
                              #28109
                            </td>
                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-700">
                              7 July, 2023
                            </td>
                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-700 text-right">
                              ₹1278.23
                            </td>
                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-700 text-right">
                              ₹22
                            </td>
                          </tr>
                          <tr>
                            <td className="whitespace-nowrap py-2 pl-2 pr-3 text-sm font-medium text-sky-600">
                              #28109
                            </td>
                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-700">
                              7 July, 2023
                            </td>
                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-700 text-right">
                              ₹1278.23
                            </td>
                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-700 text-right">
                              ₹22
                            </td>
                          </tr>
                          <tr>
                            <td className="whitespace-nowrap py-2 pl-2 pr-3 text-sm font-medium text-sky-600">
                              #28109
                            </td>
                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-700">
                              7 July, 2023
                            </td>
                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-700 text-right">
                              ₹1278.23
                            </td>
                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-700 text-right">
                              ₹22
                            </td>
                          </tr>
                          <tr>
                            <td className="whitespace-nowrap py-4 pl-2 pr-3 text-sm font-medium text-sky-600">
                              #28109
                            </td>
                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-700">
                              7 July, 2023
                            </td>
                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-700 text-right">
                              ₹1278.23
                            </td>
                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-700 text-right">
                              ₹22
                            </td>
                          </tr>
                          <tr>
                            <td className="whitespace-nowrap py-4 pl-2 pr-3 text-sm font-medium text-sky-600">
                              #28109
                            </td>
                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-700">
                              7 July, 2023
                            </td>
                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-700 text-right">
                              ₹1278.23
                            </td>
                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-700 text-right">
                              ₹22
                            </td>
                          </tr>
                          <tr>
                            <td className="whitespace-nowrap py-4 pl-2 pr-3 text-sm font-medium text-sky-600">
                              #28109
                            </td>
                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-700">
                              7 July, 2023
                            </td>
                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-700 text-right">
                              ₹1278.23
                            </td>
                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-700 text-right">
                              ₹22
                            </td>
                          </tr>
                          <tr>
                            <td className="whitespace-nowrap py-4 pl-2 pr-3 text-sm font-medium text-sky-600">
                              #28109
                            </td>
                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-700">
                              7 July, 2023
                            </td>
                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-700 text-right">
                              ₹1278.23
                            </td>
                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-700 text-right">
                              ₹22
                            </td>
                          </tr>
                          <tr>
                            <td className="whitespace-nowrap py-4 pl-2 pr-3 text-sm font-medium text-sky-600">
                              #28109
                            </td>
                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-700">
                              7 July, 2023
                            </td>
                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-700 text-right">
                              ₹1278.23
                            </td>
                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-700 text-right">
                              ₹22
                            </td>
                          </tr>
                          <tr>
                            <td className="whitespace-nowrap py-4 pl-2 pr-3 text-sm font-medium text-sky-600">
                              #28109
                            </td>
                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-700">
                              7 July, 2023
                            </td>
                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-700 text-right">
                              ₹1278.23
                            </td>
                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-700 text-right">
                              ₹22
                            </td>
                          </tr>
                          <tr>
                            <td className="whitespace-nowrap py-4 pl-2 pr-3 text-sm font-medium text-sky-600">
                              #28109
                            </td>
                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-700">
                              7 July, 2023
                            </td>
                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-700 text-right">
                              ₹1278.23
                            </td>
                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-700 text-right">
                              ₹22
                            </td>
                          </tr>
                          <tr>
                            <td className="whitespace-nowrap py-4 pl-2 pr-3 text-sm font-medium text-sky-600">
                              #28109
                            </td>
                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-700">
                              7 July, 2023
                            </td>
                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-700 text-right">
                              ₹1278.23
                            </td>
                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-700 text-right">
                              ₹22
                            </td>
                          </tr>
                          <tr>
                            <td className="whitespace-nowrap py-4 pl-2 pr-3 text-sm font-medium text-sky-600">
                              #28109
                            </td>
                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-700">
                              7 July, 2023
                            </td>
                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-700 text-right">
                              ₹1278.23
                            </td>
                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-700 text-right">
                              ₹22
                            </td>
                          </tr>
                          <tr>
                            <td className="whitespace-nowrap py-4 pl-2 pr-3 text-sm font-medium text-sky-600">
                              #28109
                            </td>
                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-700">
                              7 July, 2023
                            </td>
                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-700 text-right">
                              ₹1278.23
                            </td>
                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-700 text-right">
                              ₹22
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      <nav className="flex justify-center">
                        <ul className="inline-flex justify-center items-center text-sm p-5">
                          <li>
                            <a
                              href="#"
                              className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-700 bg-white border border-gray-300 rounded-md mr-5 font-medium"
                            >
                              <svg
                                width="6"
                                height="12"
                                viewBox="0 0 6 12"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="mr-3 text-gray-600"
                              >
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M5.78033 0.96967C5.48744 0.676777 5.01256 0.676777 4.71967 0.96967L0.21967 5.46967C0.0790172 5.61032 -9.53674e-07 5.80109 -9.53674e-07 6C-9.53674e-07 6.19891 0.0790172 6.38968 0.21967 6.53033L4.71967 11.0303C5.01256 11.3232 5.48744 11.3232 5.78033 11.0303C6.07322 10.7374 6.07322 10.2626 5.78033 9.96967L1.81066 6L5.78033 2.03033C6.07322 1.73744 6.07322 1.26256 5.78033 0.96967Z"
                                  fill="#4D4D4D"
                                />
                              </svg>
                              Previous
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="flex items-center justify-center px-3 h-8 leading-tight text-gray-700 bg-white rounded-md"
                            >
                              1
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="flex items-center justify-center px-3 h-8 leading-tight text-gray-700 bg-white rounded-md"
                            >
                              2
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              aria-current="page"
                              className="flex items-center justify-center px-3 h-8 leading-tight text-gray-100 bg-sky-600 rounded-md"
                            >
                              3
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="flex items-center justify-center px-3 h-8 leading-tight text-gray-700 bg-white rounded-md"
                            >
                              4
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="flex items-center justify-center px-3 h-8 leading-tight text-gray-700 bg-white rounded-md"
                            >
                              5
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="flex items-center justify-center px-3 h-8 leading-tight text-gray-700 bg-white rounded-md"
                            >
                              6
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="flex items-center justify-center px-3 h-8 leading-tight text-gray-700 bg-white rounded-md"
                            >
                              7
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="flex items-center justify-center px-3 h-8 leading-tight text-gray-700 bg-white rounded-md"
                            >
                              8
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="flex items-center justify-center px-3 h-8 leading-tight text-gray-700 bg-white rounded-md"
                            >
                              9
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="flex items-center justify-center px-3 h-8 leading-tight text-gray-700 bg-white rounded-md"
                            >
                              10
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="flex items-center justify-center px-3 h-8 ml-5 leading-tight text-gray-700 bg-white border border-gray-300 rounded-md font-medium"
                            >
                              Next
                              <svg
                                width="6"
                                height="12"
                                viewBox="0 0 6 12"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="ml-3 text-gray-500"
                              >
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M0.21967 0.96967C0.512563 0.676777 0.987437 0.676777 1.28033 0.96967L5.78033 5.46967C5.92098 5.61032 6 5.80109 6 6C6 6.19891 5.92098 6.38968 5.78033 6.53033L1.28033 11.0303C0.987437 11.3232 0.512564 11.3232 0.21967 11.0303C-0.0732229 10.7374 -0.0732229 10.2626 0.21967 9.96967L4.18934 6L0.21967 2.03033C-0.0732233 1.73744 -0.0732233 1.26256 0.21967 0.96967Z"
                                  fill="#4D4D4D"
                                />
                              </svg>
                            </a>
                          </li>
                        </ul>
                      </nav>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Payments;
