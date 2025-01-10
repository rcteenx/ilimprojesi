export default function TopMenu({ topMenu }) {
  return (
    <section className="text-gray-800 my-2">
      <div className="flex md:flex-row justify-around">
        {topMenu.items.map((i, index) => (
          <div
            key={index}
            className="text-center lg:text-left rounded-xl px-4 py-2 my-1"
          >
            <h4>
              <a href="#">{i.title}</a>
            </h4>
          </div>
        ))}
      </div>
    </section>
  );
}
