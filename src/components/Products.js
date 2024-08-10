import Button from "./Button";

const product = [
  {
    id: 1,
    name: "Chair",
    price: 1000,
    image: "https://cachair.com/wp-content/uploads/mon2.png",
  },
  {
    id: 2,
    name: "Sofa",
    price: 5000,
    image:
      "https://t4.ftcdn.net/jpg/04/23/65/57/240_F_423655780_VSZ03nlUy0s1RP39cRWUHLj2bbWi2ebO.jpg",
  },
  {
    id: 3,
    name: "Laptop",
    price: 150000,
    image: "https://m.media-amazon.com/images/I/51hJIsWMagL._SX679_.jpg",
  },
  {
    id: 4,
    name: "Phone",
    price: 10000,
    image:
      "https://www.digitaltrends.com/wp-content/uploads/2022/08/iPhone-SE-2022-Starlight-Back-in-Hand.jpg?p=1",
  },
];

function Products({ handleCount }) {
  return (
    <div className='flex flex-row  my-5 justify-center'>
      {product.map((p) => (
        <div key={p.id} className='my-3 pr-6 border-2 rounded  p-6'>
          <img src={p.image} alt={p.name} className='w-60 h-60' />
          <h2 className='font-bold text-center p-2'>{p.name}</h2>
          <h3 className='font-underline text-center font-bold text-gray-500 '>
            Rs {p.price}
          </h3>
          <Button handlePlusClick={handleCount} />
        </div>
      ))}
    </div>
  );
}
export default Products;