import Image from "next/image";

const customerHistories = [
  {
    content:
      "A experiência de compra foi incrível! O site é super fácil de navegar e encontrei tudo o que precisava rapidamente. A entrega foi rápida e o produto chegou em perfeitas condições. Com certeza voltarei a comprar aqui!",
    author: {
      name: "Ana Paula",
      role: "Designer Gráfico",
      avatar: "/vercel.svg",
    },
  },
  {
    content:
      "A experiência de compra foi incrível! O site é super fácil de navegar e encontrei tudo o que precisava rapidamente. A entrega foi rápida e o produto chegou em perfeitas condições. Com certeza voltarei a comprar aqui!",
    author: {
      name: "Jackson Silva",
      role: "Cervejeiro",
      avatar: "/vercel.svg",
    },
  },
];

export const CustomerHistorySection = () => {
  return (
    <section className="container py-8 md:py-10">
      <div className="flex flex-col items-center gap-12">
        <h2 className="text-heading-xl text-gray-100 font-sans">
          Quem utiliza, aprova!
        </h2>
        <div className="grid gap-8 md:grid-cols-2">
          {customerHistories.map((customerStory) => (
            <div
              key={customerStory.author.name}
              className="flex flex-col gap-6 round-lg bg-gray-500 p-6 md:p-12"
            >
              <p className="text-balance text-gray-200">
                {customerStory.content}
              </p>
              <div className="flex items-center gap-3">
                <div className="relative h-10 w-10 overflow-hidden rounded-full">
                  <Image
                    src={customerStory.author.avatar}
                    alt={customerStory.author.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col">
                  <strong className="text-gray-200 text-sm">
                    {customerStory.author.name}
                  </strong>
                  <span className="text-xs text-gray-300">
                    {customerStory.author.role}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
