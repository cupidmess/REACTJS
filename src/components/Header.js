function Header({ count }) {
  return (
    <div className='relative p-3 border-2 border-red-200 bg-yellow-100'>
      <h2 className='text-red-500 font-bold text-4xl text-center mx-auto'>
        Start Buying Today!
      </h2>
      <p className='absolute right-3 top-1/2 transform -translate-y-1/2 px-4 py-2 bg-red-500 text-white text-2xl font-semibold hover:bg-red-600'>
        {count}
      </p>
    </div>
  );
}

export default Header;