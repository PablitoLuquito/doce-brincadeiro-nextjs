export default function Modal(props) {
  return (
    <div
      className="relative z-10"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
      onClick={props.backdropClick}
    >
      <div className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75"></div>

      <div className="fixed inset-0 z-10 overflow-y-auto">
        <div className="flex items-end justify-center min-h-full p-4 text-center sm:items-center sm:p-0">
          <div className="relative overflow-hidden text-left transition-all -translate-y-full bg-white rounded-lg shadow-xl md:transform md:translate-y-0 sm:my-8 sm:max-w-lg sm:w-full">
            <div className="px-4 pt-5 pb-4 bg-white sm:p-6 sm:pb-4">
              <div className="sm:flex sm:items-start">
                <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                  <h3
                    className="text-lg font-medium leading-6 text-gray-900"
                    id="modal-title"
                  >
                    {props.title}
                  </h3>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">{props.message}</p>
                  </div>
                  <div className="mt-2">{props.children}</div>
                </div>
              </div>
            </div>
            <div className="px-4 py-3 bg-gray-50 sm:px-6 sm:flex sm:flex-row-reverse">
              <button
                type="button"
                onClick={props.submitCLick}
                className="inline-flex justify-center w-full px-4 py-2 text-base font-medium text-white uppercase bg-orange-400 border border-transparent rounded-md shadow-sm hover:bg-orange-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 sm:ml-3 sm:w-auto sm:text-sm"
              >
                {props.submit}
              </button>
              <button
                type="button"
                onClick={props.cancelClick}
                className="inline-flex justify-center w-full px-4 py-2 mt-3 text-base font-medium text-gray-700 uppercase bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
              >
                {props.cancel}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
