export default function TopBar({ lastArticle2, lastArticle3 }) {
  return (
    <section className=" text-gray-800 pb-4 md:border-b">
      <div className="grid grid-cols-1 md:grid-cols-3  md:text-left gap-4">
        {lastArticle2.items.map((i, index) => (
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
        <div className="w-full">
          {lastArticle3.items.map((i, index) => (
            <div
              key={index}
              className="text-center lg:text-left border rounded-xl px-4 py-2 my-1"
            >
              <h4>
                <a href="#">{i.title}</a>
              </h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
