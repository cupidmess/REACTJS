export default function Button({ handlePlusClick }) {
  return (
    <div className='flex justify-center my-4'>
      <button
        onClick={handlePlusClick}
        className='px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300'
      >
        Add to Cart
      </button>
    </div>
  );
}