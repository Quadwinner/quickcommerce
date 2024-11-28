const MainContent = () => {
    return (
      <div className="main-content p-6">
        <div className="hero-section flex justify-around items-center bg-gray-100 p-6 rounded-md">
          <img
            src="/images/grocery1.png"
            alt="Products"
            className="rounded-md"
          />
          <img
            src="/images/delivery.png"
            alt="Delivery Person"
            className="rounded-md"
          />
        </div>
        <div className="product-section mt-6">
          <h2 className="text-2xl font-semibold mb-4">Popular Products</h2>
          <div className="product-categories flex space-x-6 text-lg font-semibold text-gray-700">
            <a href="#" className="hover:text-green-600">ALL</a>
            <a href="#" className="hover:text-green-600">Baking Materials</a>
            <a href="#" className="hover:text-green-600">Vegetables</a>
            <a href="#" className="hover:text-green-600">Meats</a>
            <a href="#" className="hover:text-green-600">Milk & Dairies</a>
            <a href="#" className="hover:text-green-600">Fresh Fruits</a>
          </div>
        </div>
      </div>
    );
  };
  const App = () => {
    return (
      <div className="App">
        <MainContent />
      </div>
    );
  };
  export default App;