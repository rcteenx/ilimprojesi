export default function Flow3({ flow }) {
  return (
    <section className=" text-gray-800 pb-4">
      <div className="grid grid-cols-1 md:grid-cols-3  md:text-left gap-4">
        {flow.items.map((i, index) => (
          <div key={index} className="text-center lg:text-left relative">
            <img
              src={`/assets/yazilar/${i.img}`}
              alt={i.title}
              className="w-full h-full object-fill rounded-xl "
            />
            <div className="absolute inset-0 bg-black opacity-40 rounded-xl"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <h3 className="text-white text-xl font-bold">
                <a href="#">{i.title}</a>
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
