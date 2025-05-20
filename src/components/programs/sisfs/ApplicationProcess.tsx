
const ApplicationProcess = () => {
  return (
    <>
      <h3 className="text-xl font-semibold mb-4">Application Process</h3>
      <ol className="relative border-l border-gray-200 ml-3">
        <li className="mb-10 ml-6">
          <span className="absolute flex items-center justify-center w-8 h-8 bg-blue-200 rounded-full -left-4 ring-4 ring-white">
            <span className="text-blue-800 font-bold">1</span>
          </span>
          <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900">Incubator Selection</h3>
          <p className="mb-2 text-base font-normal text-gray-600">Apply through a SISFS-approved incubator in your region or sector.</p>
        </li>
        <li className="mb-10 ml-6">
          <span className="absolute flex items-center justify-center w-8 h-8 bg-blue-200 rounded-full -left-4 ring-4 ring-white">
            <span className="text-blue-800 font-bold">2</span>
          </span>
          <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900">Evaluation by Incubator</h3>
          <p className="mb-2 text-base font-normal text-gray-600">Your startup will be evaluated based on innovation, market potential, and team capability.</p>
        </li>
        <li className="mb-10 ml-6">
          <span className="absolute flex items-center justify-center w-8 h-8 bg-blue-200 rounded-full -left-4 ring-4 ring-white">
            <span className="text-blue-800 font-bold">3</span>
          </span>
          <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900">Funding Approval</h3>
          <p className="mb-2 text-base font-normal text-gray-600">If selected, you'll receive the approved funding in milestone-based tranches.</p>
        </li>
        <li className="ml-6">
          <span className="absolute flex items-center justify-center w-8 h-8 bg-blue-200 rounded-full -left-4 ring-4 ring-white">
            <span className="text-blue-800 font-bold">4</span>
          </span>
          <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900">Ongoing Support</h3>
          <p className="mb-2 text-base font-normal text-gray-600">Receive mentoring, networking opportunities, and resources to help you succeed.</p>
        </li>
      </ol>
    </>
  );
};

export default ApplicationProcess;
