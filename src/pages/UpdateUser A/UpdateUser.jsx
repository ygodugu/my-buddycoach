import React,{useState,useEffect} from "react";
import { useHistory,useParams,Link } from "react-router-dom";
import axios from "axios";
import "./updateUser.css";

// user profile detalils 
const initialState = {
    firstName:"",
    middleName:"",
    lastName:"",
    emailID:"",
    mobileNumber:"",
    dateOfBirth:"",
// user academic detailes 
    higherEducationalQualification:"",    
    schoolOrInstituteName:"",
    degree:"",
    fieldOfStudy:"",
    startDate:"",
    endDate:"",
    grade:"",
    activities:"",
    description:"",
    addCertificate:"",
// user Emplyee detailes
    type : "",
    title : "",
    organisationOrInstituteName : "",
    location : "",
    startDate : "",
    endDate : "",
    industryOrDomain : "",
    description : "",
    profileHeadline : "",
    skills : "",
    // userTechnicalSkills 
    skillTitle : "",
    skillDescription : "",
    // extraCurricularActivities
    interests : "",
    achievements : "",
    // languagesKnown
    language : "",
    proficiency : "",
    // familyDetails
    fathersName : "",
    mothersName : "",
    fathersOccupation : "",
    mothersOccupation : "",
    // communicationAddress
    hNoOrFlatNo : "",
    blockOrAppartment : "",
    street: "",
    localityOrVillage : "",
    district : "",
    State : "",
    pinCode : "",
    postalAddress : "",
    latitude : "",
    longitude: "",
    googleAddress: "",
    // permanentAddress
     hNoOrFlatNo : "",
     blockOrAppartment : "",
     street: "",
     localityOrVillage : "",
     district : "",
     State : "",
     pinCode : "",
     postalAddress : "",
     latitude : "",
     longitude: "",
     googleAddress: "",
    //  goals
    shortTermGoal : "",
    longTermGoal: "",
    // personalityTraits
    strengths : "",
    weakness : "",
  };

const UpdateUser = () => {

    const[state,setState] = useState(initialState);
   
    const {firstName,middleName,lastName,emailID,mobileNumber,dateOfBirth,
        higherEducationalQualification,schoolOrInstituteName,degree,fieldOfStudy,startDate,endDate,grade,
        activities,description,addCertificate,type,title,organisationOrInstituteName,location,industryOrDomain,profileHeadline,skills,skillTitle,skillDescription,interests,achievements,language,proficiency,fathersName,mothersName,fathersOccupation,mothersOccupation,hNoOrFlatNo,blockOrAppartment,street,localityOrVillage,district,State,pinCode,postalAddress,latitude,longitude,googleAddress,shortTermGoal,longTermGoal,strengths,weakness,} = state;
 
    const history = useHistory();

    const {userID} = useParams();

    useEffect(() => {
        axios.get(`http://192.168.0.118:8080/user/${userID}`)
        .then((resp) => setState({...resp.data[0] }));
    }, [userID]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if( !firstName || !lastName || !emailID || !mobileNumber || !dateOfBirth ) {
            window.alert("please provied the values into each input feild ")
        }

    else {
        console.log("firstName : " + firstName)
        console.log("middleName : " + middleName)
        console.log("lastName : " + lastName)
        console.log("emailID : " + emailID)
        console.log("mobileNumber : " + mobileNumber)
        console.log("dateOfBirth : " + dateOfBirth)
        axios.put(`http://192.168.0.118:8080/user/${userID}`, {     
        firstName : firstName,
        middleName : middleName,
        lastName : lastName,
        emailID : emailID,
        mobileNumber : mobileNumber,
        dateOfBirth : dateOfBirth
         })
        .then(() => {
          setState({firstName: "", middleName: "", lastName: "", emailID: "", mobileNumber: "", dateOfBirth:"" });
        })
        .catch((err) => console.log(err.response.data));
        window.alert(" Concept updated scucessfully ")
      }
       setTimeout(() => history.push("/User"), 500)
    };

    const handleInputChange = (e) => {
        const {name,value} = e.target;
        setState({...state,[name]: value });
      };

    return (
        <div className="UpdateUser">
            <form className="mainForm">
                <div>
                    <div style={{marignTop:"40px"}}>
                        <h2 className="tile">PersonalDetailes</h2>
                        <form style={{
                            margin:"auto",
                            padding: "15px",
                            maxWidth:"400px",
                        }}>
                        <label htmlFor="firstName">firstName</label>
                        <input
                            type="text"
                            id="firstName"
                            name="firstName"
                            placeholder="firstName"
                            value={firstName}
                            onChange={handleInputChange}
                            />
                        <label htmlFor="middleName">middleName</label>
                        <input
                            type="middleName"
                            id="middleName"
                            name="middleName"
                            placeholder="middleName"
                            value={middleName}
                            onChange={handleInputChange}
                            />
                        <label htmlFor="lastName">lastName</label>
                        <input
                            type="lastName"
                            id="lastName"
                            name="lastName"
                            placeholder="lastName"
                            value={lastName}
                            onChange={handleInputChange}
                            />
                        <label htmlFor="emailID">emailID</label>
                        <input
                            type="emailID"
                            id="emailID"
                            name="emailID"
                            placeholder="emailID"
                            value={emailID}
                            onChange={handleInputChange}
                            />
                        <label htmlFor="mobileNumber">mobileNumber</label>
                        <input
                            type="mobileNumber"
                            id="mobileNumber"
                            name="mobileNumber"
                            placeholder="mobileNumber"
                            value={mobileNumber}
                            onChange={handleInputChange}
                            />
                        <label htmlFor="dateOfBirth">dateOfBirth</label>
                        <input
                            type="Date"
                            id="dateOfBirth"
                            name="dateOfBirth"
                            placeholder="mobdateOfBirthileNumber"
                            value={dateOfBirth}
                            onChange={handleInputChange}
                            />
                        </form>
                    </div>
                </div>
                    <h2 className="tile">AcademicDetails</h2>
                        <div style={{marignTop:"40px"}}>
                            <form style={{
                                margin:"auto",
                                padding: "15px",
                                maxWidth:"400px",
                                alignItems:"center"
                            }}>
                            <label htmlFor="higherEducationalQualification">HigherEducationalQualification</label>
                            <input
                                type="TEXT"
                                id="higherEducationalQualification"
                                name="higherEducationalQualification"
                                placeholder=""
                                value={higherEducationalQualification || ""}
                                onChange={handleInputChange}
                                />
                            <label htmlFor="schoolOrInstituteName">SchoolOrInstituteName</label>
                            <input
                                type="TEXT"
                                id="schoolOrInstituteName"
                                name="schoolOrInstituteName"
                                placeholder=""
                                value={schoolOrInstituteName || ""}
                                onChange={handleInputChange}
                                />
                            <label htmlFor="degree">Degree</label>
                            <input
                                type="VARCHAR(64)"
                                id="degree"
                                name="degree"
                                placeholder=""
                                value={degree || "" }
                                onChange={handleInputChange}
                                />
                            <label htmlFor="fieldOfStudy">FieldOfStudy </label>
                            <input
                                type="VARCHAR(64)"
                                id="fieldOfStudy"
                                name="fieldOfStudy"
                                placeholder=""
                                value={fieldOfStudy || ""}
                                onChange={handleInputChange}
                                />
                            <label htmlFor="startDate">StartDate </label>
                            <input
                                type="date"
                                id="startDate"
                                name="startDate"
                                placeholder=""
                                value={startDate || ""}
                                onChange={handleInputChange}
                                />
                            <label htmlFor="endDate">EndDate </label>
                            <input
                                type="date"
                                id="endDate"
                                name="endDate"
                                placeholder=""
                                value={endDate || ""}
                                onChange={handleInputChange}
                                />
                            <label htmlFor="grade">Grade </label>
                            <input
                                type="VARCHAR(64)"
                                id="grade"
                                name="grade"
                                placeholder=""
                                value={grade || ""}
                                onChange={handleInputChange}
                                />
                            <label htmlFor="activities">Activities </label>
                            <input
                                type="TEXT"
                                id="activities"
                                name="activities"
                                placeholder=""
                                value={activities || ""}
                                onChange={handleInputChange}
                                />
                            <label htmlFor="description">Description </label>
                            <input
                                type="TEXT"
                                id="description"
                                name="description"
                                placeholder=""
                                value={description || ""}
                                onChange={handleInputChange}
                                />
                            <label htmlFor="addCertificate">AddCertificate </label>
                            <input
                                type="FILE"
                                id="addCertificate"
                                name="addCertificate"
                                placeholder=""
                                value={addCertificate || ""}
                                onChange={handleInputChange}
                                />
                        </form>
                        <h2 className="tile">EmploymentDetails</h2>
                        <div style={{marignTop:"40px"}}>
                            <form style={{
                                margin:"auto",
                                padding: "15px",
                                maxWidth:"400px",
                                alignItems:"center"
                            }}>
                            <label htmlFor="Type">Type</label>
                            <input
                                type="TEXT"
                                id="type"
                                name="type"
                                placeholder=""
                                value={type || ""}
                                onChange={handleInputChange}
                                />
                            <label htmlFor="title">Title</label>
                            <input
                                type="TEXT"
                                id="title"
                                name="title"
                                placeholder=""
                                value={title || ""}
                                onChange={handleInputChange}
                                />
                            <label htmlFor="organisationOrInstituteName">OrganisationOrInstituteName</label>
                            <input
                                type="VARCHAR(64)"
                                id="organisationOrInstituteName"
                                name="organisationOrInstituteName"
                                placeholder=""
                                value={organisationOrInstituteName || "" }
                                onChange={handleInputChange}
                                />
                            <label htmlFor="location">location </label>
                            <input
                                type="VARCHAR(64)"
                                id="location"
                                name="location"
                                placeholder=""
                                value={location || ""}
                                onChange={handleInputChange}
                                />
                            <label htmlFor="startDate">StartDate </label>
                            <input
                                type="date"
                                id="startDate"
                                name="startDate"
                                placeholder=""
                                value={startDate || ""}
                                onChange={handleInputChange}
                                />
                            <label htmlFor="endDate">EndDate </label>
                            <input
                                type="date"
                                id="endDate"
                                name="endDate"
                                placeholder=""
                                value={endDate || ""}
                                onChange={handleInputChange}
                                />
                            <label htmlFor="industryOrDomain">IndustryOrDomain </label>
                            <input
                                type="VARCHAR(64)"
                                id="industryOrDomain"
                                name="industryOrDomain"
                                placeholder=""
                                value={industryOrDomain || ""}
                                onChange={handleInputChange}
                                />
                            <label htmlFor="description">Description </label>
                            <input
                                type="TEXT"
                                id="description"
                                name="description"
                                placeholder=""
                                value={description || ""}
                                onChange={handleInputChange}
                                />
                            <label htmlFor="profileHeadline">ProfileHeadline </label>
                            <input
                                type="TEXT"
                                id="profileHeadline"
                                name="profileHeadline"
                                placeholder=""
                                value={profileHeadline || ""}
                                onChange={handleInputChange}
                                />
                            <label htmlFor="skills">Skills </label>
                            <input
                                type="TEXT"
                                id="skills"
                                name="skills"
                                placeholder=""
                                value={skills || ""}
                                onChange={handleInputChange}
                                />
                        </form>
                    </div>
                    <h2 className="tile">TechnicalSkills</h2>
                        <div style={{marignTop:"40px"}}>
                            <form style={{
                                margin:"auto",
                                padding: "15px",
                                maxWidth:"400px",
                                alignItems:"center"
                            }}>
                            <label htmlFor="skillTitle">skillTitle </label>
                            <input
                                type="TEXT"
                                id="skillTitle"
                                name="skillTitle"
                                placeholder=""
                                value={skillTitle || ""}
                                onChange={handleInputChange}
                                />
                            <label htmlFor="skillDescription">skillDescription </label>
                            <input
                                type="TEXT"
                                id="skillDescription"
                                name="skillDescription"
                                placeholder=""
                                value={skillDescription || ""}
                                onChange={handleInputChange}
                                />
                        </form>
                    </div>
                    <h2 className="tile">ExtraCurricularActivities</h2>
                        <div style={{marignTop:"40px"}}>
                            <form style={{
                                margin:"auto",
                                padding: "15px",
                                maxWidth:"400px",
                                alignItems:"center"
                            }}>
                            <label htmlFor="interests">Interests </label>
                            <input
                                type="TEXT"
                                id="interests"
                                name="interests"
                                placeholder=""
                                value={interests || ""}
                                onChange={handleInputChange}
                                />
                            <label htmlFor="proficiency">proficiency </label>
                            <input
                                type="TEXT"
                                id="proficiency"
                                name="proficiency"
                                placeholder=""
                                value={proficiency || ""}
                                onChange={handleInputChange}
                                />
                        </form>
                    </div>
                    <h2 className="tile">languagesKnown</h2>
                        <div style={{marignTop:"40px"}}>
                            <form style={{
                                margin:"auto",
                                padding: "15px",
                                maxWidth:"400px",
                                alignItems:"center"
                            }}>
                            <label htmlFor="language">language </label>
                            <input
                                type="TEXT"
                                id="language"
                                name="language"
                                placeholder=""
                                value={language || ""}
                                onChange={handleInputChange}
                                />
                            <label htmlFor="achievements">Achievements </label>
                            <input
                                type="TEXT"
                                id="achievements"
                                name="achievements"
                                placeholder=""
                                value={achievements || ""}
                                onChange={handleInputChange}
                                />
                        </form>
                    </div>
                    <h2 className="tile">FamilyDetails</h2>
                        <div style={{marignTop:"40px"}}>
                            <form style={{
                                margin:"auto",
                                padding: "15px",
                                maxWidth:"400px",
                                alignItems:"center"
                            }}>
                            <label htmlFor="fathersName">fathersName </label>
                            <input
                                type="TEXT"
                                id="fathersName"
                                name="fathersName"
                                placeholder=""
                                value={fathersName || ""}
                                onChange={handleInputChange}
                                />
                            <label htmlFor="mothersName">mothersName </label>
                            <input
                                type="TEXT"
                                id="mothersName"
                                name="mothersName"
                                placeholder=""
                                value={mothersName || ""}
                                onChange={handleInputChange}
                                />
                            <label htmlFor="fathersOccupation">fathersOccupation </label>
                            <input
                                type="TEXT"
                                id="fathersOccupation"
                                name="fathersOccupation"
                                placeholder=""
                                value={fathersOccupation || ""}
                                onChange={handleInputChange}
                                />
                            <label htmlFor="mothersOccupation">mothersOccupation </label>
                            <input
                                type="TEXT"
                                id="mothersOccupation"
                                name="mothersOccupation"
                                placeholder=""
                                value={mothersOccupation || ""}
                                onChange={handleInputChange}
                                />
                        </form>
                    </div>
                    <h2 className="tile">CommunicationAddress</h2>
                        <div style={{marignTop:"40px"}}>
                            <form style={{
                                margin:"auto",
                                padding: "15px",
                                maxWidth:"400px",
                                alignItems:"center"
                            }}>
                            <label htmlFor="hNoOrFlatNo">hNoOrFlatNo</label>
                            <input
                                type="TEXT"
                                id="hNoOrFlatNo"
                                name="hNoOrFlatNo"
                                placeholder=""
                                value={hNoOrFlatNo || ""}
                                onChange={handleInputChange}
                                />
                            <label htmlFor="blockOrAppartment">blockOrAppartment</label>
                            <input
                                type="TEXT"
                                id="blockOrAppartment"
                                name="blockOrAppartment"
                                placeholder=""
                                value={blockOrAppartment || ""}
                                onChange={handleInputChange}
                                />
                            <label htmlFor="street">street</label>
                            <input
                                type="VARCHAR(64)"
                                id="street"
                                name="street"
                                placeholder=""
                                value={street || "" }
                                onChange={handleInputChange}
                                />
                            <label htmlFor="localityOrVillage">localityOrVillage </label>
                            <input
                                type="VARCHAR(64)"
                                id="localityOrVillage"
                                name="localityOrVillage"
                                placeholder=""
                                value={localityOrVillage || ""}
                                onChange={handleInputChange}
                                />
                            <label htmlFor="district">district </label>
                            <input
                                type="TEXT"
                                id="district"
                                name="district"
                                placeholder=""
                                value={district || ""}
                                onChange={handleInputChange}
                                />
                            <label htmlFor="State">State </label>
                            <input
                                type="TEXT"
                                id="State"
                                name="State"
                                placeholder=""
                                value={State || ""}
                                onChange={handleInputChange}
                                />
                            <label htmlFor="pinCode">pinCode </label>
                            <input
                                type="VARCHAR(64)"
                                id="pinCode"
                                name="pinCode"
                                placeholder=""
                                value={pinCode || ""}
                                onChange={handleInputChange}
                                />
                            <label htmlFor="postalAddress">postalAddress </label>
                            <input
                                type="TEXT"
                                id="postalAddress"
                                name="postalAddress"
                                placeholder=""
                                value={postalAddress || ""}
                                onChange={handleInputChange}
                                />
                            <label htmlFor="latitude">latitude </label>
                            <input
                                type="TEXT"
                                id="latitude"
                                name="latitude"
                                placeholder=""
                                value={latitude || ""}
                                onChange={handleInputChange}
                                />
                            <label htmlFor="longitude">longitude </label>
                            <input
                                type="TEXT"
                                id="longitude"
                                name="longitude"
                                placeholder=""
                                value={longitude || ""}
                                onChange={handleInputChange}
                                />
                            <label htmlFor="googleAddress">googleAddress </label>
                            <input
                                type="TEXT"
                                id="googleAddress"
                                name="googleAddress"
                                placeholder=""
                                value={googleAddress || ""}
                                onChange={handleInputChange}
                                />
                        </form>
                    </div>
                    <h2 className="tile">PermanentAddress</h2>
                        <div style={{marignTop:"40px"}}>
                            <form style={{
                                margin:"auto",
                                padding: "15px",
                                maxWidth:"400px",
                                alignItems:"center"
                            }}>
                            <label htmlFor="hNoOrFlatNo">hNoOrFlatNo</label>
                            <input
                                type="TEXT"
                                id="hNoOrFlatNo"
                                name="hNoOrFlatNo"
                                placeholder=""
                                value={hNoOrFlatNo || ""}
                                onChange={handleInputChange}
                                />
                            <label htmlFor="blockOrAppartment">blockOrAppartment</label>
                            <input
                                type="TEXT"
                                id="blockOrAppartment"
                                name="blockOrAppartment"
                                placeholder=""
                                value={blockOrAppartment || ""}
                                onChange={handleInputChange}
                                />
                            <label htmlFor="street">street</label>
                            <input
                                type="VARCHAR(64)"
                                id="street"
                                name="street"
                                placeholder=""
                                value={street || "" }
                                onChange={handleInputChange}
                                />
                            <label htmlFor="localityOrVillage">localityOrVillage </label>
                            <input
                                type="VARCHAR(64)"
                                id="localityOrVillage"
                                name="localityOrVillage"
                                placeholder=""
                                value={localityOrVillage || ""}
                                onChange={handleInputChange}
                                />
                            <label htmlFor="district">district </label>
                            <input
                                type="TEXT"
                                id="district"
                                name="district"
                                placeholder=""
                                value={district || ""}
                                onChange={handleInputChange}
                                />
                            <label htmlFor="State">State </label>
                            <input
                                type="TEXT"
                                id="State"
                                name="State"
                                placeholder=""
                                value={State || ""}
                                onChange={handleInputChange}
                                />
                            <label htmlFor="pinCode">pinCode </label>
                            <input
                                type="VARCHAR(64)"
                                id="pinCode"
                                name="pinCode"
                                placeholder=""
                                value={pinCode || ""}
                                onChange={handleInputChange}
                                />
                            <label htmlFor="postalAddress">postalAddress </label>
                            <input
                                type="TEXT"
                                id="postalAddress"
                                name="postalAddress"
                                placeholder=""
                                value={postalAddress || ""}
                                onChange={handleInputChange}
                                />
                            <label htmlFor="latitude">latitude </label>
                            <input
                                type="TEXT"
                                id="latitude"
                                name="latitude"
                                placeholder=""
                                value={latitude || ""}
                                onChange={handleInputChange}
                                />
                            <label htmlFor="longitude">longitude </label>
                            <input
                                type="TEXT"
                                id="longitude"
                                name="longitude"
                                placeholder=""
                                value={longitude || ""}
                                onChange={handleInputChange}
                                />
                            <label htmlFor="googleAddress">googleAddress </label>
                            <input
                                type="TEXT"
                                id="googleAddress"
                                name="googleAddress"
                                placeholder=""
                                value={googleAddress || ""}
                                onChange={handleInputChange}
                                />
                        </form>
                    </div>
                    <h2 className="tile">goals</h2>
                        <div style={{marignTop:"40px"}}>
                            <form style={{
                                margin:"auto",
                                padding: "15px",
                                maxWidth:"400px",
                                alignItems:"center"
                            }}>
                            <label htmlFor="shortTermGoal">shortTermGoal </label>
                            <input
                                type="TEXT"
                                id="shortTermGoal"
                                name="shortTermGoal"
                                placeholder=""
                                value={shortTermGoal || ""}
                                onChange={handleInputChange}
                                />
                            <label htmlFor="longTermGoal">longTermGoal </label>
                            <input
                                type="TEXT"
                                id="longTermGoal"
                                name="longTermGoal"
                                placeholder=""
                                value={longTermGoal || ""}
                                onChange={handleInputChange}
                                />
                        </form>
                    </div>
                    <h2 className="tile">PersonalityTraits</h2>
                        <div style={{marignTop:"40px"}}>
                            <form style={{
                                margin:"auto",
                                padding: "15px",
                                maxWidth:"400px",
                                alignItems:"center"
                            }}>
                            <label htmlFor="strengths">strengths </label>
                            <input
                                type="TEXT"
                                id="strengths"
                                name="strengths"
                                placeholder=""
                                value={strengths || ""}
                                onChange={handleInputChange}
                                />
                            <label htmlFor="weakness">weakness </label>
                            <input
                                type="TEXT"
                                id="weakness"
                                name="weakness"
                                placeholder=""
                                value={weakness || ""}
                                onChange={handleInputChange}
                                />
                        </form>
                    </div>
                </div>
                <button type="submit" className="submitButton">Edit USER </button>
                    <Link to="/User">
                        <button  type="button" className="goback">GoBack</button>
                    </Link> 
        </form>
    </div>
    )
    };

export default UpdateUser;