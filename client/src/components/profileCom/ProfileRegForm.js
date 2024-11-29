import React, { useState} from 'react'
import axios from 'axios';
import '../../pages/GroundAuth/GroundForm/Form';
import { useNavigate} from "react-router-dom";
export default function ProfileRegForm() {

    const [allvalue, setvalue] = useState({
        inname: "",
        owntype: "",
        status: "",
        yearest: "",
        INadmin: "",
        infatype: "",
        reginum: "",
        otherd: "",
        notlable: "",
        houseno: "",
        landmark: "",
        locality: "",
        postal: "",
        state1: "",
        district: "",
        subdistrict: "",
        city: "",
        contact: "",
        designation: "",
        email: "",
        fax: "",
        mno: "",
        anumber: "",
        geolocation: "",
        sportdec: "",
        eventtype: "",
        mstrengt: "",
        wstrength: "",
        pass: "",
        cpass: "",
        street: "", 
    })

    const navigate = useNavigate ();
    const second = () => {
        navigate("/groundAuthorityregistion/steptwo")
    }


    const eventhandler = (e) => 
    {
      const newdata={...allvalue}
      newdata[e.target.name]=e.target.value
      setvalue(newdata)
      
    }
    const submitHandler = async (e) => 
    {
        e.preventDefault();
        
        const objvalue = {
        
        }
        
        await axios.post('http://localhost/Database/crud_html/savedata.php',{inname: allvalue.inname,
        owntype: allvalue.owntype,
        status: allvalue.status,
        yearest: allvalue.yearest,
        INadmin: allvalue.INadmin,
        infatype: allvalue.infatype,
        reginum: allvalue.reginum,
        otherd: allvalue.otherd,
        notlable: allvalue.notlable,
        houseno: allvalue.houseno,
        landmark: allvalue.landmark,
        locality: allvalue.locality,
        postal: allvalue.postal,
        state1: allvalue.state1,
        district: allvalue.district,
        subdistrict: allvalue.subdistrict,
        city: allvalue.city,
        contact: allvalue.contact,
        designation: allvalue.designation,
        email: allvalue.email,
        fax: allvalue.fax,
        mno: allvalue.mno,
        anumber: allvalue.anumber,
        geolocation: allvalue.geolocation,
        sportdec: allvalue.sportdec,
        eventtype: allvalue.eventtype,
        mstrengt: allvalue.mstrengt,
        wstrength: allvalue.wstrength,
        pass: allvalue.pass,
        cpass: allvalue.cpass,
        street: allvalue.street, })
        // props.send({ ...objvalue })
    console.log(objvalue)
    }
  return (
    <>
    <div className="container">
               
                <hr className='line' />
               

                <form onSubmit={(e)=>submitHandler(e)}>

                    
                        <div >
                            <div className="formfirst" >

                                <h4 className="subhead"> SPORTS TRAINING CENTER INFORMATION </h4>
                                <hr className='line' />
                                <div className="fields">
                                    <div className="Input-Box">
                                        <label>Name of the infrastructure</label><br />
                                        <input type="text" id="innmae" value={allvalue.inname} onChange={(e)=>eventhandler(e)} name='inname' className="input" required />
                                    </div><div className="Input-Box " >
                                        <label>Ownership Type</label>
                                        <br />
                                        <select className="form-control" id="owntype" value={allvalue.owntype} onChange={(e)=>eventhandler(e)} name="owntype" required>
                                            <option value="disabled">Select Type</option>
                                            <option value="Central Government">Central Government</option>
                                            <option value="Private / NGO">Private / NGO</option>
                                            <option value="Sports Authority of India">Sports Authority of India</option>
                                            <option value="State Government">State Government</option>
                                        </select>
                                    </div>

                                    <div className="Input-Box">
                                        <label>Status</label>
                                        <br />
                                        <select className="form-control" value={allvalue.status} onChange={(e)=>eventhandler(e)} id="status" name="status" required>
                                            <option value="" disabled>Select Status</option>
                                            <option value="Company">Company</option>
                                            <option value="Firm">Firm</option>
                                            <option value="Individual">Individual</option>
                                            <option value="Non-profit organisation">Non-profit organisation</option>
                                            <option value="Society">Society</option>
                                            <option value="Trust">Trust</option>
                                        </select>
                                    </div>

                                    <div className="Input-Box">
                                        <label>Year of Establishment</label>
                                        <br />
                                        <select className="form-control" onChange={(e)=>eventhandler(e)} value={allvalue.yearest} id="yearest" name="yearest" required>
                                            <option value="">Select Year</option>
                                            <option>1980</option>
                                            <option>1981</option>
                                            <option>1982</option>
                                            <option>1983</option>
                                            <option>1984</option>
                                            <option>1985</option>
                                            <option>1986</option>
                                            <option>1987</option>
                                            <option>1988</option>
                                            <option>1989</option>
                                            <option>1990</option>
                                            <option>1991</option>
                                            <option>1992</option>
                                            <option>1993</option>
                                            <option>1994</option>
                                            <option>1995</option>
                                            <option>1996</option>
                                            <option>1997</option>
                                            <option>1998</option>
                                            <option>1999</option>
                                            <option>2000</option>
                                            <option>2001</option>
                                            <option>2002</option>
                                            <option>2003</option>
                                            <option>2004</option>
                                            <option>2005</option>
                                            <option>2006</option>
                                            <option>2007</option>
                                            <option>2008</option>
                                            <option>2009</option>
                                            <option>2010</option>
                                            <option>2011</option>
                                            <option>2012</option>
                                            <option>2013</option>
                                            <option>2014</option>
                                            <option>2015</option>
                                            <option>2016</option>
                                            <option>2017</option>
                                            <option>2018</option>
                                            <option>2019</option>
                                            <option>2020</option>
                                            <option>2021</option>
                                            <option>2022</option>
                                        </select>
                                    </div>

                                    <div className="Input-Box">
                                        <label>Name of the Administrator</label><br />
                                        <input type="text" id="INadmin" onChange={(e)=>eventhandler(e)} name='INadmin' value={allvalue.INadmin} className="input" required />
                                    </div>

                                    <div className="Input-Box " >
                                        <label>Infrastructure type</label>
                                        <br />
                                        <select className="form-control" id="infatype" onChange={(e)=>eventhandler(e)} name="infatype" value={allvalue.infatype} required>
                                            <option value="">Select Type</option>
                                            <option value="Single-Facility">Single-Facility</option>
                                            <option value="Multi-Facility">Multi-Facility</option>
                                        </select>
                                    </div>

                                    <div className="Input-Box">
                                        <label>Registration number</label><br />
                                        <input type="number" id="reginum" onChange={(e)=>eventhandler(e)} name='reginum' value={allvalue.reginum} className="input" required />
                                    </div>


                                    <div className="Input-Box">
                                        <label>Any other detail</label><br />
                                        <input type="text" id="otherd" onChange={(e)=>eventhandler(e)} name='otherd' className="input" value={allvalue.otherd} required />
                                    </div>

                                </div>


                                <h4 className="subhead">ADDRESS</h4>
                                <hr className='line' />
                                <div className="fields">
                                    <div className="Input-Box">
                                        <label></label>
                                        <br /><br />
                                        <select className="form-control" id="notlable" value={allvalue.notlable} onChange={(e)=>eventhandler(e)} name="notlable" required>
                                            <option disabled value="">select</option>
                                            <option value="C/o">C/o</option>
                                            <option value="D/o">D/o</option>
                                            <option value="N/o">N/o</option>
                                        </select>
                                    </div>


                                    <div className="Input-Box">
                                        <label>House/Plot/Building Number</label><br />

                                        <input type="text" id="houseno" onChange={(e)=>eventhandler(e)} name='houseno' className="input" value={allvalue.houseno} required maxLength={50} />
                                    </div>

                                    <div className="Input-Box">
                                        <label>Street</label>
                                        <br />
                                        <input type="text" id="street" onChange={(e)=>eventhandler(e)} name='street' value={allvalue.street} className="input" required maxLength={50} />
                                    </div>

                                    <div className="Input-Box">
                                        <label>Landmark</label><br />
                                        <input type="text" id="landmark" onChange={(e)=>eventhandler(e)} name='landmark' value={allvalue.landmark} className="input" required maxLength={50} />
                                    </div>

                                    <div className="Input-Box">
                                        <label>Locality</label><br />
                                        <input type="text" id="locality" onChange={(e)=>eventhandler(e)} name='locality' value={allvalue.locality} className="input" required maxLength={50} />
                                    </div>
                                    <div className="Input-Box">
                                        <label>Postal Code</label><br />
                                        <input type="text" id="postal" onChange={(e)=>eventhandler(e)} name="postal" value={allvalue.postal} className="input" required maxLength={6} minLength={6} />
                                    </div>

                                    <div className="Input-Box">
                                        <label>State</label><br />
                                        <select className="form-control" id="state1" onChange={(e)=>eventhandler(e)} name="state1" value={allvalue.state1} required>
                                            <option value="" disabled>Select State</option>
                                            <option value="1">Andaman and Nicobar Islands</option>
                                            <option value="2">Andhra Pradesh</option>
                                            <option value="3">Arunachal Pradesh</option>
                                            <option value="4">Assam</option>
                                            <option value="5">Bihar</option>
                                            <option value="6">Chandigarh</option>
                                            <option value="7">Chhattisgarh</option>
                                            <option value="8">Dadra and Nagar Haveli and Daman and Diu</option>
                                            <option value="9">Daman and Diu</option>
                                            <option value="10">Delhi</option>
                                            <option value="11">Goa</option>
                                            <option value="12">Gujarat</option>
                                            <option value="13">Haryana</option>
                                            <option value="14">Himachal Pradesh</option>
                                            <option value="15">Jammu and Kashmir</option>
                                            <option value="16">Jharkhand</option>
                                            <option value="17">Karnataka</option>
                                            <option value="18">Kerala</option>
                                            <option value="37">Ladakh</option>
                                            <option value="19">Lakshadweep</option>
                                            <option value="20">Madhya Pradesh</option>
                                            <option value="21">Maharashtra</option>
                                            <option value="22">Manipur</option>
                                            <option value="23">Meghalaya</option>
                                            <option value="24">Mizoram</option>
                                            <option value="25">Nagaland</option>
                                            <option value="26">Odisha</option>
                                            <option value="27">Puducherry</option>
                                            <option value="28">Punjab</option>
                                            <option value="29">Rajasthan</option>
                                            <option value="30">Sikkim</option>
                                            <option value="31">Tamil Nadu</option>
                                            <option value="36">Telangana</option>
                                            <option value="32">Tripura</option>
                                            <option value="33">Uttar Pradesh</option>
                                            <option value="34">Uttarakhand</option>
                                            <option value="35">West Bengal</option>
                                        </select>
                                    </div>

                                    <div className="Input-Box">
                                        <label>District</label><br />
                                        <input type="text" id="district" onChange={(e)=>eventhandler(e)} name='district' value={allvalue.district} className="input" required maxLength={50} />
                                    </div>

                                    <div className="Input-Box">
                                        <label>Sub District</label><br />
                                        <input type="text" id="" onChange={(e)=>eventhandler(e)} name='subdistrict' value={allvalue.subdistrict} className="input" required maxLength={50} />
                                    </div>
                                    <div className="Input-Box">
                                        <label>City</label>
                                        <br />
                                        <input type="text" id="city" onChange={(e)=>eventhandler(e)} name='city' value={allvalue.city} className="input" required maxLength={50} />
                                    </div>

                                    <div className="Input-Box">
                                        <label>Contact Person</label>
                                        <br />
                                        <input type="text" id="contact" onChange={(e)=>eventhandler(e)} name='contact' value={allvalue.contact} className="input" required maxLength={50} />
                                    </div>

                                    <div className="Input-Box">
                                        <label>Designation</label>
                                        <br />
                                        <input type="text" id="designation" onChange={(e)=>eventhandler(e)} name='designation' value={allvalue.designation} className="input" required maxLength={50} />
                                    </div>

                                    <div className="Input-Box">
                                        <label>Email ID</label>
                                        <br />
                                        <input type="text" id="email" onChange={(e)=>eventhandler(e)} name='email' value={allvalue.email} className="input" required maxLength={50} />
                                    </div>

                                    <div className="Input-Box">
                                        <label>Fax. Number</label>
                                        <br />
                                        <input type="number" id="fax" onChange={(e)=>eventhandler(e)} name='fax' value={allvalue.fax} className="input" required maxLength={10} minLength={10} />
                                    </div>

                                    <div className="Input-Box">
                                        <label>Mobile Number</label>
                                        <br />
                                        <input type="number" id="mno" onChange={(e)=>eventhandler(e)} name='mno' value={allvalue.mno} className="input" required maxLength={10} minLength={10} />
                                    </div>

                                    <div className="Input-Box">
                                        <label>Alternate Number</label>
                                        <br />
                                        <input type="number" id="anumber" onChange={(e)=>eventhandler(e)} name='anumber' value={allvalue.anumber} className="input" required maxLength={10} minLength={10} />
                                    </div>
                                </div>

                                <h4 className="subhead">LOCATION</h4>
                                <hr className='line' />
                                <div className="fields">
                                    <div className="Input-Box">
                                        <label>Geographical location</label>
                                        <br />
                                        <input id="geolocation" onChange={(e)=>eventhandler(e)} name='geolocation' value={allvalue.geolocation} className="input" required />
                                    </div>
                                    <div> <button type="button" className="">click here to get location</button></div>
                                </div><h4 className="subhead">SPORTS</h4>
                                <hr className='line' />
                                <div className="fields">
                                    <div className="Input-Box">
                                        <lable>Sports Discipline</lable><br />
                                        <select className="form-control" value={allvalue.sportdec} id="sportdec" onChange={(e)=>eventhandler(e)} name="sportdec" required>
                                            <option value="" disabled>Select Sports Discipline</option>
                                            <option value="1">Archery</option>
                                            <option value="16">Athletics</option>
                                            <option value="15">Badminton</option>
                                            <option value="14">Basketball</option>
                                            <option value="13">Boxing</option>
                                            <option value="35">Canoeing &amp; Kayaking</option>
                                            <option value="52">Chess</option>
                                            <option value="19">Cycling</option>
                                            <option value="39">Diving</option>
                                            <option value="41">Equestrian</option>
                                            <option value="21">Fencing</option>
                                            <option value="12">Football</option>
                                            <option value="23">Gatka</option>
                                            <option value="58">Golf</option>
                                            <option value="11">Gymnastics</option>
                                            <option value="34">Handball</option>
                                            <option value="10">Hockey</option>
                                            <option value="45">Ice Hockey</option>
                                            <option value="9">Judo</option>
                                            <option value="8">Kabaddi</option>
                                            <option value="24">Kalaripayattu</option>
                                            <option value="37">Karate</option>
                                            <option value="7">Kho-Kho</option>
                                            <option value="42">Khomlainai</option>
                                            <option value="50">Korfball</option>
                                            <option value="30">Lawn Bowl</option>
                                            <option value="22">Mallakhamb</option>
                                            <option value="44">Mukna</option>
                                            <option value="27">Para - Athletics</option>
                                            <option value="26">Para - Badminton</option>
                                            <option value="29">Para - Powerlifting</option>
                                            <option value="28">Para - Swimming</option>
                                            <option value="46">Pencak Silat</option>
                                            <option value="48">Powerlifting</option>
                                            <option value="49">RollBall</option>
                                            <option value="20">Rowing</option>
                                            <option value="36">Rugby</option>
                                            <option value="40">Sailing</option>
                                            <option value="31">Sepaktakraw</option>
                                            <option value="6">Shooting</option>
                                            <option value="43">Silambam</option>
                                            <option value="38">Softball</option>
                                            <option value="47">Sqay</option>
                                            <option value="5">Swimming</option>
                                            <option value="18">Table Tennis</option>
                                            <option value="33">Taekwondo</option>
                                            <option value="53">Tamo Martial Art</option>
                                            <option value="17">Tennis</option>
                                            <option value="25">Thang-Ta</option>
                                            <option value="4">Volleyball</option>
                                            <option value="66">Water Polo</option>
                                            <option value="3">Weightlifting</option>
                                            <option value="2">Wrestling</option>
                                            <option value="32">Wushu</option>
                                            <option value="51">Yogasana</option>
                                        </select>
                                    </div>

                                    {/* <div className="Input-Box">
                                        <lable>Event Type</lable><br />
                                        <select className="form-control" value={allvalue.eventtype} id="eventtype" onChange={(e)=>eventhandler(e)} name="eventtype" required>
                                            <option disabled value="">select</option>
                                            <option value=""></option>
                                            <option value=""></option>
                                            <option value=""></option>
                                        </select>
                                    </div> */}

                                    <div className="Input-Box">
                                        <lable>Sanctioned Strength (Men)</lable><br />
                                        <input type="number" id="mstrengt" onChange={(e)=>eventhandler(e)} name='mstrengt' value={allvalue.mstrengt} className="input" required maxLength="20" minLength="0" />

                                    </div>
                                    <div className="Input-Box">
                                        <lable>Sanctioned Strength (Women)</lable><br />
                                        <input type="number" id="wstrength" onChange={(e)=>eventhandler(e)} name='wstrength' value={allvalue.wstrength} className="input" required maxLength="20" minLength="0" />
                                    </div>

                                    <button type="button" className=""> Add <br /> More </button>



                                
                                
                                <hr className='line' />
                               


                                </div>
                                <div className="fields">

                                    <div className="">

                                        <input type="checkbox" id="terms" onChange={(e)=>eventhandler(e)} name="terms_conditions"
                                            className="" />
                                        <label className="custom-control-label" htmlFor="terms">I agree to<a
                                            href="/Content/website_pdf/Registration_Terms_conditions.pdf"
                                            target="_blank"> Terms and Conditions</a>

                                        </label>
                                    </div>

                                    <div className="">
                                        <button type="reset" id="coachclearform" value="Reset"
                                            className="">Clear Form</button>
                                        <button type="submit"  onClick={second}   value="Submit" className="">Save and Continue</button>
                                    </div>
                                </div>

                                {/**/}
                            </div>
                        </div>
                    
                </form>
            </div>






        </>
  )
}
