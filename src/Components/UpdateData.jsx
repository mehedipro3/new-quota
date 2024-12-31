import { useLoaderData } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Swal from "sweetalert2";

const UpdateData = () => {
  const data = useLoaderData();
  const {_id, name, medical_history, injury_date, age, gender, contact_details, occupation, blood_group, current_status, treatment_type, fund_amount_bdt, fund_status, transaction_date, receiver_amount_bdt, transaction_methods, transaction_id, required_support, incident_spot, img } = data ;

  const handleUpdateData = (e) => {
      e.preventDefault();
      const form = e.target;
      const name = form.name.value;
      const medical_history = form.medical_history.value;
      const injury_date = form.injury_date.value;
      const age = form.age.value;
      const gender = form.gender.value;
      const contact_details = form.contact_details.value;
      const occupation = form.occupation.value;
      const blood_group = form.blood_group.value;
      const current_status = form.current_status.value;
      const treatment_type = form.treatment_type.value;
      const fund_amount_bdt = form.fund_amount_bdt.value;
      const fund_status = form.fund_status.value;
      const transaction_date = form.transaction_date.value;
      const receiver_amount_bdt = form.receiver_amount_bdt.value;
      const transaction_methods = form.transaction_methods.value;
      const transaction_id = form.transaction_id.value;
      const required_support = form.required_support.value;
      const incident_spot = form.incident_spot.value;
      const img = form.img.value;
      const formUpdatedData = { name, medical_history, injury_date, age, gender, contact_details, occupation, blood_group, current_status, treatment_type, fund_amount_bdt, fund_status, transaction_date, receiver_amount_bdt, transaction_methods, transaction_id, required_support, incident_spot, img }
      console.log(formUpdatedData);
      
      fetch(`http://localhost:5000/datas/${_id}`, {
        method: 'PUT',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(formUpdatedData)
      })
        .then(res => res.json())
        .then(data => {
          console.log(data);
            Swal.fire({
              title: "successful",
              text: "Data Updated Successfully",
              icon: "success",
              draggable: true
            });
            form.reset();
        })
  
    };
  return (
    <div>
      <Navbar></Navbar>
      <div className="p-5 container mx-auto">
        <h1 className="text-3xl font-bold mb-4 text-red-500">Update Information For : {name}</h1>
        <form onSubmit={handleUpdateData} className="space-y-4">
        <p className="text-sm text-red-400">Name :</p>
          <input
            type="text"
            name="name"
            defaultValue={name}
            placeholder="Name"
            className="input input-bordered w-full"
            required
          />
          <p className="text-sm text-red-400">Medical History :</p>
          <textarea
            name="medical_history"
            defaultValue={medical_history}
            placeholder="Medical History"
            className="textarea textarea-bordered w-full"
          ></textarea>
          <p className="text-sm text-red-400">Injury Date :</p>
          <input
            name="injury_date"
            defaultValue={injury_date}
            placeholder="injury_date"
            className="input input-bordered w-full"
          />
          <p className="text-sm text-red-400">Age :</p>
          <input
            type="number"
            name="age"
            defaultValue={age}
            placeholder="Age"
            className="input input-bordered w-full"
            required
          />
          <p className="text-sm text-red-400">Gender :</p>
          <select
            name="gender"
            defaultValue={gender}
            className="select select-bordered w-full"
            required
          >
            defaultValue={gender}
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
          <p className="text-sm text-red-400">Contact Details :</p>
          <input
            type="text"
            name="contact_details"
            defaultValue={contact_details}
            placeholder="Contact Details"
            className="input input-bordered w-full"
            required
          />
          <p className="text-sm text-red-400">Occupation :</p>
          <input
            type="text"
            name="occupation"
            defaultValue={occupation}
            placeholder="Occupation"
            className="input input-bordered w-full"
          />
          <p className="text-sm text-red-400">Blood Group :</p>
          <input
            type="text"
            name="blood_group"
            defaultValue={blood_group}
            placeholder="Blood Group"
            className="input input-bordered w-full"
          />
          <p className="text-sm text-red-400">Current Status :</p>
          <input
            type="text"
            name="current_status"
            defaultValue={current_status}
            placeholder="Current Status"
            className="input input-bordered w-full"
          />
          <p className="text-sm text-red-400">Treatment Type :</p>
          <input
            type="text"
            name="treatment_type"
            defaultValue={treatment_type}
            placeholder="Treatment Type"
            className="input input-bordered w-full"
          />
          <p className="text-sm text-red-400">Fund Amount (BDT) :</p>
          <input
            type="number"
            name="fund_amount_bdt"
            defaultValue={fund_amount_bdt}
            placeholder="Fund Amount (BDT)"
            className="input input-bordered w-full"
          />
          <p className="text-sm text-red-400">Fund Status :</p>
          <input
            type="text"
            name="fund_status"
            defaultValue={fund_status}
            placeholder="Fund Status"
            className="input input-bordered w-full"
          />
          <p className="text-sm text-red-400">Transaction Date :</p>
          <input
            name="transaction_date"
            defaultValue={transaction_date}
            placeholder="transaction_date"
            className="input input-bordered w-full"
          />
          <p className="text-sm text-red-400">Receiver Amount (BDT) :</p>
          <input
            type="number"
            name="receiver_amount_bdt"
            defaultValue={receiver_amount_bdt}
            placeholder="Receiver Amount (BDT)"
            className="input input-bordered w-full"
          />
          <p className="text-sm text-red-400">Transaction Methods :</p>
          <input
            type="text"
            name="transaction_methods"
            defaultValue={transaction_methods}
            placeholder="Transaction Methods"
            className="input input-bordered w-full"
          />
          <p className="text-sm text-red-400">Transaction ID :</p>
          <input
            type="text"
            name="transaction_id"
            defaultValue={transaction_id}
            placeholder="Transaction ID"
            className="input input-bordered w-full"
          />
          <p className="text-sm text-red-400">Required Support :</p>
          <textarea
            name="required_support"
            placeholder="Required Support"
            defaultValue={required_support}
            className="textarea textarea-bordered w-full"
          ></textarea>
          <p className="text-sm text-red-400">Incident Spot :</p>
          <input
            type="text"
            name="incident_spot"
            defaultValue={incident_spot}
            placeholder="Incident Spot"
            className="input input-bordered w-full"
          />
          <p className="text-sm text-red-400">Image URL :</p>
          <input
            type="text"
            name="img"
            defaultValue={img}
            placeholder="Image URL"
            className="input input-bordered w-full"
          />
          <button type="submit" className="btn bg-blue-400 text-white w-full">
           Update Data
          </button>
        </form>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default UpdateData;