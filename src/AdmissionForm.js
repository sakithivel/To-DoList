import React, { useState } from 'react';
import './AdmissionForm.css'; function AdmissionForm() {
  // Initialize form state matching the exact fields from your image
  const [formData, setFormData] = useState({
    studentName: '',
    fatherName: '',
    dob: '',
    gender: '',
    regNo: '',
    email: '',
    mobile: '',
    parentMobile: '',
    community: '',
    firstGraduate: '',
    address: '',
    city: '',
    district: '',
    state: '',
    course: '',
    referredBy: ''
  });

  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  // Form submission & evaluation engine
  const handleSubmit = (e) => {
    e.preventDefault();

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+\$/;
    const phonePattern = /^\d{10}\$/;

    if (!emailPattern.test(formData.email)) {
      alert("Error: Please provide a valid email format layout.");
      return;
    }
    if (!phonePattern.test(formData.mobile) || !phonePattern.test(formData.parentMobile)) {
      alert("Error: Mobile phone lines must be exactly 10 digits long.");
      return;
    }
    console.log("Form payload approved for delivery:", formData);
    alert(`Success! Form submitted for ${formData.studentName} into the ${formData.course} course.`);
  };

  return (
    <div className='AdmissionBackgrount'>
      {/* <img src={Imagemec} className='backgrount'/> */}
    <div className="admission-container">
      <div className="admission-card">
        <h2>Online Admission Enquiry - 2026</h2>
     
        <div className="success-banner">
          <input type="checkbox" id="successToggle" checked readOnly />
          <label htmlFor="successToggle">Success</label>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="form-grid">
            
           
            <div className="form-group">
              <label>Name</label>
              <input type="text" name="studentName" value={formData.studentName} onChange={handleInputChange} required />
            </div>
            <div className="form-group">
              <label>Father Name</label>
              <input type="text" name="fatherName" value={formData.fatherName} onChange={handleInputChange} required />
            </div>

           
            <div className="form-group">
              <label>Date of Birth</label>
              <input type="date" name="dob" value={formData.dob} onChange={handleInputChange} required />
            </div>
            <div className="form-group">
              <label>Gender</label>
              <select name="gender" value={formData.gender} onChange={handleInputChange} required>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div className="form-group">
              <label>Register Number (+2 / Diploma / UG)</label>
              <input type="text" name="regNo" value={formData.regNo} onChange={handleInputChange} required />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input type="email" name="email" value={formData.email} onChange={handleInputChange} required />
            </div>

         
            <div className="form-group">
              <label>Mobile Number</label>
              <input type="tel" name="mobile" value={formData.mobile} onChange={handleInputChange} required />
            </div>
            <div className="form-group">
              <label>Parent Mobile Number</label>
              <input type="tel" name="parentMobile" value={formData.parentMobile} onChange={handleInputChange} required />
            </div>

        
            <div className="form-group">
              <label>Community</label>
              <select name="community" value={formData.community} onChange={handleInputChange} required>
                <option value="ST">ST</option>
                <option value="SC">SC</option>
                <option value="MBC">MBC</option>
                <option value="BC">BC</option>
                <option value="OC">OC</option>
              </select>
            </div>
            <div className="form-group">
              <label>First Graduate</label>
              <select name="firstGraduate" value={formData.firstGraduate} onChange={handleInputChange} required>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>

          
            <div className="form-group">
              <label>Address</label>
              <input type="text" name="address" value={formData.address} onChange={handleInputChange} required />
            </div>
            <div className="form-group">
              <label>City / Town</label>
              <input type="text" name="city" value={formData.city} onChange={handleInputChange} required />
            </div>

          
            <div className="form-group">
              <label>District</label>
              <input type="text" name="district" value={formData.district} onChange={handleInputChange} required />
            </div>
            <div className="form-group">
              <label>State</label>
              <select name="state" value={formData.state} onChange={handleInputChange} required>
                <option value="Namakkal">Namakkal</option>
                <option value="Tamil Nadu">Tamil Nadu</option>
                <option value="Other">Other</option>
              </select>
            </div>

         
            <div className="form-group full-width">
              <label>Course</label>
              <select name="course" value={formData.course} onChange={handleInputChange} required>
                <option value="AI & DS">AI & DS</option>
                <option value="CSE">CSE</option>
                <option value="ECE">ECE</option>
                <option value="IT">IT</option>
              </select>
            </div>

            
            <div className="form-group full-width">
              <label>Referred By</label>
              <input type="text" name="referredBy" value={formData.referredBy} onChange={handleInputChange} />
            </div>
          </div>

          <div className="submit-container">
            <button type="submit" className="apply-btn">Apply</button>
          </div>
        </form>
      </div>
    </div>
    </div>
  );
}
export default AdmissionForm
