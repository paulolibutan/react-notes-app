const NoteForm = ({ headerText }) => {
  return (
    <div className="flex justify-center items-center sm:mt-10">
      <div className="flex flex-col shadow-2xl p-10 w-full sm:max-w-[500px] relative">
        <h1 className="font-bold text-xl mb-5">{headerText}</h1>
        <form className="flex flex-col gap-5">
          <div className="flex flex-col w-full">
            <label htmlFor="title">Title</label>
            <input type="text" className="px-2 py-1 border rounded-md" />
          </div>

          <div className="flex flex-col w-full">
            <label htmlFor="content">Content</label>
            <textarea className="px-2 py-1 border rounded-md" rows={10} />
          </div>

          <div className="flex flex-col gap-3 justify-center items-center">
            <button
              type="submit"
              className="bg-emerald-500 py-2 rounded-md text-white hover:bg-emerald-600 w-full"
            >
              Save
            </button>
            <button
              type="button"
              className="bg-slate-500 py-2 rounded-md text-white hover:bg-slate-600 w-full"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NoteForm;
