import Swal from 'sweetalert2'

const AddCoffee = () => {

    const handleCoffee = e =>{
        e.preventDefault()

        const form = e.target;
        const name  = form.name.value;
        // https://ibb.co/Xkz9Lfr
        const quantity  = form.quantity.value;
        const supplier  = form.supplier.value;
        const taste  = form.taste.value;
        const category  = form.category.value;
        const details  = form.details.value;
        const photo  = form.photo.value;
        //tush pic:  https://ibb.co/qpPq763
       const newCoffee = {name, quantity, supplier, taste, category, details, photo}

       console.log(newCoffee);
    //    send data to the server
    fetch('https://money-balance-server.vercel.app/coffee', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(newCoffee)
    })
    .then(res => res.json())
    .then(data => {
        console.log(data);
        if(data.insertedId){
            Swal.fire({
                title: 'Success!',
                text: 'User added Successfully',
                icon: 'success',
                confirmButtonText: 'Cool'
              })
        }
    })
        
    }
  return (
    <div className="bg-[#F4F3F0] p-24">
      <h2 className="text-3xl font-extrabold">Add Coffee</h2>
      <form onSubmit={handleCoffee}>
        {/* form name and quantity row */}
        <div className="md:flex">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Coffe Name</span>
            </label>
            <label className="input-group">
              {/* <span>Name</span> */}
              <input
                type="text"
                name="name"
                placeholder="Coffee Name"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text">available quantity</span>
            </label>
            <label className="input-group">
              {/* <span>Name</span> */}
              <input
                type="text"
                name="quantity"
                placeholder="avalable quantity"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>

        {/* form supplier and test row */}
        <div className="md:flex">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Supplier Name</span>
            </label>
            <label className="input-group">
              {/* <span>Name</span> */}
              <input
                type="text"
                name="supplier"
                placeholder="SupplierName"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text">Taste</span>
            </label>
            <label className="input-group">
              {/* <span>Name</span> */}
              <input
                type="text"
                name="taste"
                placeholder="Taste"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        {/* form category and details row */}
        <div className="md:flex">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Category Name</span>
            </label>
            <label className="input-group">
              {/* <span>Name</span> */}
              <input
                type="text"
                name="category"
                placeholder="Category Name"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text">Details</span>
            </label>
            <label className="input-group">
              {/* <span>Name</span> */}
              <input
                type="text"
                name="details"
                placeholder="details"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        {/* form photo url row */}
        <div className="">
          <div className="form-control md:w-full">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <label className="input-group">
              {/* <span>Name</span> */}
              <input
                type="text"
                name="photo"
                placeholder="Photo URL"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        {/* <button className="btn btn-block">block</button> */}
        <input type="submit" value="add Coffee" className="btn btn-block"/>
      </form>
    </div>
  );
};

export default AddCoffee;
