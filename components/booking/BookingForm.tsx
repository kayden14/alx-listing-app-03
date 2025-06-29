const BookingForm = () => (
  <div className="bg-white p-6 shadow-md rounded-lg">
    <h2 className="text-xl font-semibold mb-4">Contact Detail</h2>
    <form className="space-y-6">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block">First Name</label>
          <input type="text" className="border p-2 w-full mt-1" />
        </div>
        <div>
          <label className="block">Last Name</label>
          <input type="text" className="border p-2 w-full mt-1" />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block">Email</label>
          <input type="email" className="border p-2 w-full mt-1" />
        </div>
        <div>
          <label className="block">Phone Number</label>
          <input type="text" className="border p-2 w-full mt-1" />
        </div>
      </div>

      <h2 className="text-xl font-semibold">Pay with</h2>
      <div>
        <label className="block">Card Number</label>
        <input type="text" className="border p-2 w-full mt-1" />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block">Expiration Date</label>
          <input type="text" className="border p-2 w-full mt-1" />
        </div>
        <div>
          <label className="block">CVV</label>
          <input type="text" className="border p-2 w-full mt-1" />
        </div>
      </div>

      <h2 className="text-xl font-semibold">Billing Address</h2>
      <div>
        <label className="block">Street Address</label>
        <input type="text" className="border p-2 w-full mt-1" />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block">City</label>
          <input type="text" className="border p-2 w-full mt-1" />
        </div>
        <div>
          <label className="block">State</label>
          <input type="text" className="border p-2 w-full mt-1" />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block">Zip Code</label>
          <input type="text" className="border p-2 w-full mt-1" />
        </div>
        <div>
          <label className="block">Country</label>
          <input type="text" className="border p-2 w-full mt-1" />
        </div>
      </div>

      <button type="submit" className="w-full bg-green-500 text-white py-2 rounded-md">
        Confirm & Pay
      </button>
    </form>
  </div>
);

export default BookingForm;
