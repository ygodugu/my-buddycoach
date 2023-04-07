import React,{useState,useEffect} from "react";
import { useHistory,useParams,Link } from "react-router-dom";
import axios from "axios";
import "./updateUser.css";

// user profile detalils 
const initialState = {
    personalDetails: [
    {
        firstName:"",
        middleName:"",
        lastName:"",
        emailID:"",
        mobileNumber:"",
        dateOfBirth:""
    } ],
// user academic detailes 
academicDetails: [
    {
        higherEducationalQualification:"",    
        schoolOrInstitute:"",
        degree:"",
        fieldOfStudy:"",
        startDate:"",
        endDate:"",
        grade:"",
        activitie:"",
        description_1:"",
        certificatePath:"",
        description : "",
    } ],
// user Emplyee detailes
employmentDetails: [
    {
        type : "",
        title : "",
        organizationOrInstitute : "",
        location : "",
        startDate : "",
        endDate : "",
        industryOrDomain : "",
        description : "",
        profileHeadline : "",
        skills : "",
    }  ],
    // userTechnicalSkills 
    userTechnicalSkills: [
    {
        skillTitle : "",
        skillDescription : "",
    }  ],
    softSkills: [
        {
            skills : ""
        }],
    // extraCurricularActivities
    extraCurricularActivities: [
   { 
        interests : "",
        achievements : "",
   }   ],
    // languagesKnown
    languagesKnown: [
   { 
        languageName : "",
        proficiency : "",
   }  ],
    // familyDetails
    usersFamilyDetails: [
   { 
        fatherName : "",
        motherName : "",
        fatherOccupation : "",
        motherOccupation : "",
    }  ],
    // communicationAddress
    usersPhysicalAddressDetails: [
  {  
        communicationHnoOrFlatno : "",
        communicationBlockOrApartment : "",
        communicationStreet: "",
        communicationLocalityOrVillage : "",
        communicationDistrict : "",
        communicationState : "",
        communicationPinCode : "",
        postalAddress : "",
        latitude : "",
        longitude: "",
        communicationGoogleAddress: "",
        // permanentAddress
        permanentHnoOrFlatno : "",
        permanentBlockorApartment : "",
        permanentStreet: "",
        permanentLocalityOrVillage : "",
        permanentDistrict : "",
        permanentState : "",
        permanentPinCode : "",
        permanentPostalAddress : "",
        latitude : "",
        longitude: "",
        permanentGoogleAddress: "",
    } ],
    //  goals
    usersGoals: [
    {
        shortTerm : "",
        longTerm: "",
    } ],
    // personalityTraits
    usersPersonalityTraits: [
    {
        strengths : "",
        weakness : "",
    } ],  
};

const UpdateUser = () => {

    // const [getData, setGetData] = useState([])

    const[state,setState] = useState(initialState);
   

    const { personalDetails:[ { firstName,middleName,lastName,emailID,mobileNumber,dateOfBirth } ],
      academicDetails:[ { higherEducationalQualification,schoolOrInstitute,degree,fieldOfStudy,startDate,endDate,grade,activitie,description_1,certificatePath }],
      employmentDetails : [{type,title,organizationOrInstitute,location,industryOrDomain,profileHeadline,}],
      userTechnicalSkills : [{skillTitle}],
      softSkills : [{skills}],
      extraCurricularActivities : [{interests,achievements}],
      languagesKnown : [{languageName}],
      usersFamilyDetails : [{fatherName,motherName,fatherOccupation,motherOccupation,}],
      usersPhysicalAddressDetails : [{communicationHnoOrFlatno,communicationBlockOrApartment,communicationStreet,communicationLocalityOrVillage,communicationDistrict,communicationState,communicationPinCode,postalAddress,latitude,longitude,communicationGoogleAddress,}],
      usersGoals : [{shortTerm,longTerm,}],
      usersPersonalityTraits : [{strengths,weakness,}] 
    }  = state;

         
    const history = useHistory();

    const {userID} = useParams();

    // const loadData = async () => {
    //   const resp = await axios.get(`http://192.168.0.118:8080/profile/${userID}`,
    //   {
    //     headers: {
    //         'Accept': '*/*',
    //         'Content-Type': 'application/json',
    //         "Authorization": `${localStorage.getItem('token')}` 
    //         },
    // });
    // setState(resp.data);
    //   JSON.stringify(resp.data)
    //   console.log(resp.data) 
    //    };
    //   useEffect(() => {
    //     loadData();
    //   },[]);



    // useEffect(() => {
    //     axios.get(`http://192.168.0.118:8080/profile/${userID}`)
    //     .then((resp) => {setGetData(resp.data[0]);console.log(getData)})
    //   }, [])


    // debugger

    //   useEffect(() => {
    //     axios.get(`http://192.168.0.118:8080/profile/${userID}`,
    //     {
    //       headers: {
    //           'Accept': '*/*',
    //           'Content-Type': 'application/json',
    //           "Authorization": `${"token_for_girish_donthoju"}`
    //           },
    //     })
    //     .then((resp) => setState({...resp.data[0] }));
    //   }, [userID ])
    

    // useEffect(() => {
    //     axios.get(`http://192.168.0.118:8080/profile/${userID}`)
    //     .then((resp) => setGetData({...resp.data[0] }));
    //     console.log(getData)
    // }, [userID]);

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
        console.log("higherEducationalQualification : "  + higherEducationalQualification)    
        console.log("schoolOrInstitute : "  + schoolOrInstitute)
        console.log("degree :" + degree)
        console.log("fieldOfStudy :" + fieldOfStudy) 
        console.log("startDate: " + startDate)
        console.log("endDate :" + endDate )
        console.log("grade : " + grade )
        console.log("activitie:" + activitie)
        console.log("description_1:" + description_1)
        console.log("certificatePath:" + certificatePath)
        console.log("type :" + type)
        console.log("title :" + title)
        console.log("organizationOrInstitute :" + organizationOrInstitute)
        console.log("location : "+ location)
        console.log("startDate : "+ startDate)
        console.log("endDate : " + endDate)
        console.log("industryOrDomain :"  + industryOrDomain)
        // console.log("description :"  + description)
        console.log("profileHeadline :" + profileHeadline)
        console.log("skills : " + skills)
        console.log("skillTitle :" + skillTitle)
        // console.log("skillDescription : " + skillDescription)
        console.log("interests : " + interests)
        console.log("achievements : " + achievements)
        console.log("languageName : " + languageName)
        // console.log("proficiency : " + proficiency)
        console.log("fatherName : " + fatherName)
        console.log("motherName : " +  motherName) 
        console.log("fatherOccupation : "  + fatherOccupation) 
        console.log("motherOccupation : " + motherOccupation ) 
        console.log("communicationHnoOrFlatno :" +  communicationHnoOrFlatno)
        console.log("communicationBlockOrApartment :" + communicationBlockOrApartment )
        console.log("communicationStreet:" + communicationStreet )
        console.log("communicationLocalityOrVillage :" + communicationLocalityOrVillage )
        console.log("communicationDistrict :" + communicationDistrict)
        console.log("communicationState : " + communicationState )
        console.log("communicationPinCode :" + communicationPinCode)
        console.log("postalAddress :"  + postalAddress)
        console.log("latitude :"  + latitude)
        console.log("longitude: " + longitude)
        // console.log("permanentHnoOrFlatno: " + permanentHnoOrFlatno)
        // console.log("permanentBlockorApartment :" +  permanentBlockorApartment)
        // console.log("permanentStreet:" + permanentStreet )
        // console.log("permanentLocalityOrVillage :" + permanentLocalityOrVillage )
        // console.log("permanentDistrict :" + permanentDistrict)
        // console.log("permanentState : " + permanentState )
        // console.log("permanentPinCode :" + permanentPinCode)
        // console.log("permanentPostalAddress :"  + permanentPostalAddress)
        // console.log("latitude :"  + latitude)
        // console.log("longitude: " + longitude)
        // console.log("permanentGoogleAddress: " + permanentGoogleAddress)
        console.log( "shortTerm : "  + shortTerm)
        console.log( "longTerm : " + longTerm)
        console.log("strengths : " + strengths)
        console.log("weakness : " + weakness )
        axios.put(`http://192.168.0.118:8080/user/${userID}`, {
            headers: {
                'Accept': '*/*',
                'Content-Type': 'application/json',
                "Authorization": `${localStorage.getItem('token')}`
                },
        firstName : firstName,
        middleName : middleName,
        lastName : lastName,
        emailID : emailID,
        mobileNumber : mobileNumber,
        dateOfBirth : dateOfBirth,
        higherEducationalQualification : higherEducationalQualification,
        schoolOrInstitute : schoolOrInstitute,
        degree : degree,
        fieldOfStudy : fieldOfStudy,
        startDate : startDate,
        endDate : endDate,
        grade : grade,
        activitie : activitie,
        description_1 : description_1,
        certificatePath : certificatePath,
        type : type,
        title : title,
        organizationOrInstitute : organizationOrInstitute,
        location : location,
        startDate : startDate,
        endDate : endDate,
        industryOrDomain : industryOrDomain,
        // description : description,
        profileHeadline : profileHeadline,
        skills : skills,
        skillTitle : skillTitle,
        // skillDescription : skillDescription,
        interests : interests,
        achievements : achievements,
        languageName : languageName,
        // proficiency : proficiency,
        fatherName : fatherName,
        motherName : motherName,
        fatherOccupation : fatherOccupation,
        motherOccupation  : motherOccupation,
        communicationHnoOrFlatno : communicationHnoOrFlatno,
        communicationBlockOrApartment : communicationBlockOrApartment,
        communicationStreet: communicationStreet,
        communicationLocalityOrVillage : communicationLocalityOrVillage,
        communicationDistrict : communicationDistrict,
        communicationState : communicationState,
        communicationPinCode : communicationPinCode,
        postalAddress : postalAddress,
        latitude : latitude,
        longitude: longitude,
        communicationGoogleAddress: communicationGoogleAddress,
        // permanentHnoOrFlatno : permanentHnoOrFlatno,
        // permanentBlockorApartment : permanentBlockorApartment,
        // permanentStreet: permanentStreet,
        // permanentLocalityOrVillage : permanentLocalityOrVillage,
        // permanentDistrict : permanentDistrict,
        // permanentState : permanentState,
        // permanentPinCode : permanentPinCode,
        // permanentPostalAddress : permanentPostalAddress,
        latitude : latitude,
        longitude: longitude,
        // permanentGoogleAddress: permanentGoogleAddress,
        shortTerm : shortTerm,
        longTerm: longTerm,
        strengths : strengths,
        weakness : weakness,
         })
        .then(() => {
          setState({ personalDetails:[ {firstName : '', middleName : '',lastName : '',emailID : '',mobileNumber : '',dateOfBirth : '' } ],
           
            employmentDetails : [{type : '',title : '',organizationOrInstitute : '',location : '',industryOrDomain : '',profileHeadline : '',}],
            userTechnicalSkills : [{skillTitle : ''}],
            softSkills : [{skills : ''}],
            extraCurricularActivities : [{interests : '',achievements : ''}],
            languagesKnown : [{languageName : ''}],
            usersFamilyDetails : [{fatherName : '',motherName : '',fatherOccupation : '',motherOccupation : '',}],
            usersPhysicalAddressDetails : [{communicationHnoOrFlatno : '',communicationBlockOrApartment : '',communicationStreet : '',communicationLocalityOrVillage : '',communicationDistrict : '',communicationState : '',communicationPinCode : '',postalAddress : '',latitude : '',longitude : '',communicationGoogleAddress : '',}],
            usersGoals : [{shortTerm : '',longTerm : '',}],
            usersPersonalityTraits : [{strengths : '',weakness : '',}] });
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

    

    //   const handleroom = (e, id) => {
    //     const { value } = e.target;
    //     setState(([initialState]) =>
    //     [initialState].map((list, index) =>
    //         index === id ? { ...list, [initialState]: value } : list
    //       )
    //     );
    //   };


    return (
        <div className="UpdateUser">
            <div>
                    <div>
                            <div style={{marignTop:"40px"}}>
                            <h2 className="tile">PersonalDetailes</h2>
                            
                                <form style={{
                                    margin:"auto",
                                    padding: "15px",
                                    maxWidth:"400px",
                                }}>
                                <label htmlFor="firstName">FirstName</label>
                                <input
                                    type="text"
                                    id="firstName"
                                    name="firstName"
                                    placeholder="firstName"        
                                    value={firstName}
                                    // onChange={(e) => handleroom(e, i)}
                                    onChange={handleInputChange}
                                    />
                                <label htmlFor="middleName">middleName</label>
                                <input
                                    type="middleName"
                                    id="middleName"
                                    name="personalDetails.middleName"
                                    placeholder="middleName"
                                    value={middleName}
                                    // onChange={(e) => handleroom(e, i)}
                                    onChange={handleInputChange}
                                    />
                                <label htmlFor="lastName">lastName</label>
                                <input
                                    type="lastName"
                                    id="lastName"
                                    name="personalDetails.lastName"
                                    placeholder="lastName"
                                    value={lastName}
                                    // onChange={(e) => handleroom(e, i)}
                                    onChange={handleInputChange}
                                    />
                                <label htmlFor="emailID">emailID</label>
                                <input
                                    type="emailID"
                                    id="emailID"
                                    name="personalDetails.emailID"
                                    placeholder="emailID"
                                    value={emailID}
                                    // onChange={(e) => handleroom(e, i)}
                                    onChange={handleInputChange}
                                    />
                                <label htmlFor="mobileNumber">mobileNumber</label>
                                <input
                                    type="mobileNumber"
                                    id="mobileNumber"
                                    name="personalDetails.mobileNumber"
                                    placeholder="mobileNumber"
                                    value={mobileNumber}
                                    // onChange={(e) => handleroom(e, i)}
                                    onChange={handleInputChange}
                                    />
                                <label htmlFor="dateOfBirth">dateOfBirth</label>
                                <input
                                    type="Date"
                                    id="dateOfBirth"
                                    name="personalDetails.dateOfBirth"
                                    placeholder="mobdateOfBirthileNumber"
                                    value={dateOfBirth}
                                    // onChange={(e) => handleroom(e, i)}
                                    onChange={handleInputChange}
                                    />
                                </form>
                          
                            </div>          
                    </div>
                    {/* This form is AcademicDetails */}
                        <div>
                            <div>
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
                                            list="data3"
                                            type="TEXT"
                                            id="higherEducationalQualification"
                                            name="higherEducationalQualification"
                                            placeholder=""
                                            value={higherEducationalQualification}
                                            onChange={handleInputChange}
                                            />
                                        <datalist id="data3">
                                            <select>
                                                <option value="Post Graduation">Post Graduation</option>
                                                <option value=" Graduation"> Graduation</option>
                                                <option value=" under Graduation">Under Graduation</option>
                                            </select>
                                        </datalist>
                                        <label htmlFor="schoolOrInstitute">SchoolOrInstituteName</label>
                                        <input
                                            type="TEXT"
                                            id="schoolOrInstitute"
                                            name="schoolOrInstitute"
                                            placeholder=""
                                            value={schoolOrInstitute}
                                            onChange={handleInputChange}
                                            />
                                        <label htmlFor="degree">Degree</label>
                                        <input
                                            type="VARCHAR(64)"
                                            id="degree"
                                            name="degree"
                                            placeholder=""
                                            value={degree}
                                            onChange={handleInputChange}
                                            />
                                        <label htmlFor="fieldOfStudy">FieldOfStudy </label>
                                        <input
                                            type="VARCHAR(64)"
                                            id="fieldOfStudy"
                                            name="fieldOfStudy"
                                            placeholder=""
                                            value={fieldOfStudy}
                                            onChange={handleInputChange}
                                            />
                                        <label htmlFor="startDate">StartDate </label>
                                        <input
                                            type="date"
                                            id="startDate"
                                            name="startDate"
                                            placeholder=""
                                            value={startDate}
                                            onChange={handleInputChange}
                                            />
                                        <label htmlFor="endDate">EndDate </label>
                                        <input
                                            type="date"
                                            id="endDate"
                                            name="endDate"
                                            placeholder=""
                                            value={endDate}
                                            onChange={handleInputChange}
                                            />
                                        <label htmlFor="grade">Grade </label>
                                        <input
                                            type="VARCHAR(64)"
                                            id="grade"
                                            name="grade"
                                            placeholder=""
                                            value={grade}
                                            onChange={handleInputChange}
                                            />
                                        <label htmlFor="activitie">Activities </label>
                                        <input
                                            type="TEXT"
                                            id="activitie"
                                            name="activitie"
                                            placeholder=""
                                            value={activitie}
                                            onChange={handleInputChange}
                                            />
                                        <label htmlFor="description">Description </label>
                                        <input
                                            type="TEXT"
                                            id="description_1"
                                            name="description_1"
                                            placeholder=""
                                            value={description_1}
                                            onChange={handleInputChange}
                                            />
                                        <label htmlFor="certificatePath">AddCertificate </label>
                                        <input
                                            type="FILE"
                                            id="certificatePath"
                                            name="certificatePath"
                                            placeholder=""
                                            onChange={handleInputChange}
                                            />
                                    </form>
                                </div>
                        
                            </div>
                        </div>

                        {/* This is the EmploymentDetails for the   */}
                        <div>
                            <div>
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
                                        list="data2"
                                        type="TEXT"
                                        id="type"
                                        name="type"
                                        placeholder=""
                                        value={type}
                                        onChange={handleInputChange}
                                        />
                                    <datalist id="data2">
                                        <select>
                                            <option value="Course / Certificate">Course / Certificate</option>
                                            <option value="FullTime"> FullTime</option>
                                            <option value="PartTime">PartTime</option>
                                        </select>
                                    </datalist>
                                    <label htmlFor="title">Title</label>
                                    <input
                                        type="TEXT"
                                        id="title"
                                        name="title"
                                        placeholder=""
                                        value={title}
                                        onChange={handleInputChange}
                                        />
                                    <label htmlFor="organizationOrInstitute">OrganizationOrInstitute</label>
                                    <input
                                        type="VARCHAR(64)"
                                        id="organizationOrInstitute"
                                        name="organizationOrInstitute"
                                        placeholder=""
                                        value={organizationOrInstitute}
                                        onChange={handleInputChange}
                                        />
                                    <label htmlFor="location">location </label>
                                    <input
                                        type="VARCHAR(64)"
                                        id="location"
                                        name="location"
                                        placeholder=""
                                        value={location}
                                        onChange={handleInputChange}
                                        />
                                    <label htmlFor="startDate">StartDate </label>
                                    <input
                                        type="date"
                                        id="startDate"
                                        name="startDate"
                                        placeholder=""
                                        value={startDate}
                                        onChange={handleInputChange}
                                        />
                                    <label htmlFor="endDate">EndDate </label>
                                    <input
                                        type="date"
                                        id="endDate"
                                        name="endDate"
                                        placeholder=""
                                        value={endDate}
                                        onChange={handleInputChange}
                                        />
                                    <label htmlFor="industryOrDomain">IndustryOrDomain </label>
                                    <input
                                        type="VARCHAR(64)"
                                        id="industryOrDomain"
                                        name="industryOrDomain"
                                        placeholder=""
                                        value={industryOrDomain}
                                        onChange={handleInputChange}
                                        />
                                    <label htmlFor="description">Description </label>
                                    <input
                                        type="TEXT"
                                        id="description"
                                        name="description"
                                        placeholder=""
                                        // value={description}
                                        onChange={handleInputChange}
                                        />
                                    <label htmlFor="profileHeadline">ProfileHeadline </label>
                                    <input
                                        type="TEXT"
                                        id="profileHeadline"
                                        name="profileHeadline"
                                        placeholder=""
                                        value={profileHeadline}
                                        onChange={handleInputChange}
                                        />
                                </form>
                            </div>
                      
                        </div>
                    </div>
                    {/* This user TechnicalSkills form  */}
                    <div>
                        <div>
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
                                        value={skillTitle}
                                        onChange={handleInputChange}
                                        />
                                </form>
                            </div>
                                         
                        </div>
                    </div>
                     {/* This user softSkills form  */}
                     <div>
                        <div>
                            <h2 className="tile">SoftSkills</h2>
                         
                                <div style={{marignTop:"40px"}}>
                                    <form style={{
                                        margin:"auto",
                                        padding: "15px",
                                        maxWidth:"400px",
                                        alignItems:"center"
                                    }}>
                                    <label htmlFor="skillTitle">SoftSkills </label>
                                    <input
                                        type="TEXT"
                                        id="skillTitle"
                                        name="skillTitle"
                                        placeholder=""
                                        value={skillTitle}
                                        onChange={handleInputChange}
                                        />
                                </form>
                            </div>
                                          
                        </div>
                    </div>
                    {/* This is the ExtraCurricularActivities form  */}
                    <div>
                        <div>
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
                                        value={interests}
                                        onChange={handleInputChange}
                                        />
                                    <label htmlFor="achievements">achievements </label>
                                    <input
                                        type="TEXT"
                                        id="achievements"
                                        name="achievements"
                                        placeholder=""
                                        value={achievements}
                                        onChange={handleInputChange}
                                        />
                                </form>
                            </div>
                              
                        </div>
                    </div>
                     {/* This is the languagesKnown from  */}
                    <div>
                        <div>
                            <h2 className="tile">languagesKnown</h2>
                            
                                <div style={{marignTop:"40px"}}>
                                    <form style={{
                                        margin:"auto",
                                        padding: "15px",
                                        maxWidth:"400px",
                                        alignItems:"center"
                                    }}>
                                    <label htmlFor="languageName">languageName </label>
                                    <input
                                        type="TEXT"
                                        id="languageName"
                                        name="languageName"
                                        placeholder=""
                                        value={languageName}
                                        onChange={handleInputChange}
                                        />
                                </form>
                            </div>
                  
                        </div>
                    </div>
                    {/* This is the FamilyDetails from  */}
                    <div>
                        <div>
                            <h2 className="tile">FamilyDetails</h2>
                         
                                <div style={{marignTop:"40px"}}>
                                    <form style={{
                                        margin:"auto",
                                        padding: "15px",
                                        maxWidth:"400px",
                                        alignItems:"center"
                                    }}>
                                    <label htmlFor="fatherName">fatherName </label>
                                    <input
                                        type="TEXT"
                                        id="fatherName"
                                        name="fatherName"
                                        placeholder=""
                                        value={fatherName}
                                        onChange={handleInputChange}
                                        />
                                    <label htmlFor="motherName">motherName </label>
                                    <input
                                        type="TEXT"
                                        id="motherName"
                                        name="motherName"
                                        placeholder=""
                                        value={motherName}
                                        onChange={handleInputChange}
                                        />
                                    <label htmlFor="fatherOccupation">fatherOccupation </label>
                                    <input
                                        type="TEXT"
                                        id="fatherOccupation"
                                        name="fatherOccupation"
                                        placeholder=""
                                        value={fatherOccupation}
                                        onChange={handleInputChange}
                                        />
                                    <label htmlFor="motherOccupation">motherOccupation </label>
                                    <input
                                        type="TEXT"
                                        id="motherOccupation"
                                        name="motherOccupation"
                                        placeholder=""
                                        value={motherOccupation}
                                        onChange={handleInputChange}
                                        />
                                </form>
                            </div>
                            
                        </div>
                    </div>
                    {/* This is the usersPhysicalAddressDetails */}
                    <div>
                        <div>
                            <h2 className="tile">CommunicationAddress</h2>
                         
                                <div style={{marignTop:"40px"}}>
                                    <form style={{
                                        margin:"auto",
                                        padding: "15px",
                                        maxWidth:"400px",
                                        alignItems:"center"
                                    }}>
                                    <label htmlFor="communicationHnoOrFlatno">communicationHnoOrFlatno</label>
                                    <input
                                        type="TEXT"
                                        id="communicationHnoOrFlatno"
                                        name="communicationHnoOrFlatno"
                                        placeholder=""
                                        value={communicationHnoOrFlatno}
                                        onChange={handleInputChange}
                                        />
                                    <label htmlFor="communicationBlockOrApartment">communicationBlockOrApartment</label>
                                    <input
                                        type="TEXT"
                                        id="communicationBlockOrApartment"
                                        name="communicationBlockOrApartment"
                                        placeholder=""
                                        value={communicationBlockOrApartment}
                                        onChange={handleInputChange}
                                        />
                                    <label htmlFor="communicationStreet">communicationStreet</label>
                                    <input
                                        type="VARCHAR(64)"
                                        id="communicationStreet"
                                        name="communicationStreet"
                                        placeholder=""
                                        value={communicationStreet}
                                        onChange={handleInputChange}
                                        />
                                    <label htmlFor="communicationLocalityOrVillage">communicationLocalityOrVillage </label>
                                    <input
                                        type="VARCHAR(64)"
                                        id="communicationLocalityOrVillage"
                                        name="communicationLocalityOrVillage"
                                        placeholder=""
                                        value={communicationLocalityOrVillage}
                                        onChange={handleInputChange}
                                        />
                                    <label htmlFor="communicationDistrict">communicationDistrict </label>
                                    <input
                                        type="TEXT"
                                        id="communicationDistrict"
                                        name="communicationDistrict"
                                        placeholder=""
                                        value={communicationDistrict}
                                        onChange={handleInputChange}
                                        />
                                    <label htmlFor="communicationState">communicationState </label>
                                    <input
                                        type="TEXT"
                                        id="communicationState"
                                        name="communicationState"
                                        placeholder=""
                                        value={communicationState}
                                        onChange={handleInputChange}
                                        />
                                    <label htmlFor="pinCode">pinCode </label>
                                    <input
                                        type="VARCHAR(64)"
                                        id="communicationPinCode"
                                        name="communicationPinCode"
                                        placeholder=""
                                        value={communicationPinCode}
                                        onChange={handleInputChange}
                                        />
                                    <label htmlFor="communicationGoogleAddress">communicationGoogleAddress </label>
                                    <input
                                        type="TEXT"
                                        id="communicationGoogleAddress"
                                        name="communicationGoogleAddress"
                                        placeholder=""
                                        value={communicationGoogleAddress}
                                        onChange={handleInputChange}
                                        />
                                </form>
                            </div>
                           
                        </div> 
                    </div>
                    {/* This is the usersPhysicalAddressDetails */}
                    <div>
                        <div>
                            <h2 className="tile">PermanentAddress</h2>
                           
                                <div style={{marignTop:"40px"}}>
                                    <form style={{
                                        margin:"auto",
                                        padding: "15px",
                                        maxWidth:"400px",
                                        alignItems:"center"
                                    }}>
                                    <label htmlFor="permanentHnoOrFlatno">permanentHnoOrFlatno</label>
                                    <input
                                        type="TEXT"
                                        id="permanentHnoOrFlatno"
                                        name="permanentHnoOrFlatno"
                                        placeholder=""
                                        // value={permanentHnoOrFlatno}
                                        onChange={handleInputChange}
                                        />
                                    <label htmlFor="permanentBlockorApartment">permanentBlockorApartment</label>
                                    <input
                                        type="TEXT"
                                        id="permanentBlockorApartment"
                                        name="permanentBlockorApartment"
                                        placeholder=""
                                        // value={permanentBlockorApartment}
                                        onChange={handleInputChange}
                                        />
                                    <label htmlFor="permanentStreet">permanentStreet</label>
                                    <input
                                        type="VARCHAR(64)"
                                        id="permanentStreet"
                                        name="permanentStreet"
                                        placeholder=""
                                        // value={permanentStreet}
                                        onChange={handleInputChange}
                                        />
                                    <label htmlFor="permanentLocalityOrVillage">permanentLocalityOrVillage </label>
                                    <input
                                        type="VARCHAR(64)"
                                        id="permanentLocalityOrVillage"
                                        name="permanentLocalityOrVillage"
                                        placeholder=""
                                        // value={permanentLocalityOrVillage}
                                        onChange={handleInputChange}
                                        />
                                    <label htmlFor="permanentDistrict">permanentDistrict </label>
                                    <input
                                        type="TEXT"
                                        id="permanentDistrict"
                                        name="permanentDistrict"
                                        placeholder=""
                                        // value={permanentDistrict}
                                        onChange={handleInputChange}
                                        />
                                    <label htmlFor="permanentState">permanentState </label>
                                    <input
                                        type="TEXT"
                                        id="permanentState"
                                        name="permanentState"
                                        placeholder=""
                                        // value={permanentState}
                                        onChange={handleInputChange}
                                        />
                                    <label htmlFor="permanentPinCode">permanentPinCode </label>
                                    <input
                                        type="VARCHAR(64)"
                                        id="permanentPinCode"
                                        name="permanentPinCode"
                                        placeholder=""
                                        // value={permanentPinCode}
                                        onChange={handleInputChange}
                                        />
                                    <label htmlFor="permanentPostalAddress">permanentPostalAddress </label>
                                    <input
                                        type="TEXT"
                                        id="permanentPostalAddress"
                                        name="permanentPostalAddress"
                                        placeholder=""
                                        // value={permanentPostalAddress}
                                        onChange={handleInputChange}
                                        />
                                    <label htmlFor="permanentGoogleAddress">permanentGoogleAddress </label>
                                    <input
                                        type="TEXT"
                                        id="permanentGoogleAddress"
                                        name="permanentGoogleAddress"
                                        placeholder=""
                                        // value={permanentGoogleAddress}
                                        onChange={handleInputChange}
                                        />
                                </form>
                            </div>
                         
                        </div>
                    </div>
                      {/* This is the usersGoals from  */}
                    <div>
                        <div>
                            <h2 className="tile">goals</h2>
                           
                                <div style={{marignTop:"40px"}}>
                                    <form style={{
                                        margin:"auto",
                                        padding: "15px",
                                        maxWidth:"400px",
                                        alignItems:"center"
                                    }}>
                                    <label htmlFor="shortTerm">shortTerm </label>
                                    <input
                                        type="TEXT"
                                        id="shortTerm"
                                        name="shortTerm"
                                        placeholder=""
                                        value={shortTerm}
                                        onChange={handleInputChange}
                                        />
                                    <label htmlFor="longTerm">longTerm </label>
                                    <input
                                        type="TEXT"
                                        id="longTerm"
                                        name="longTerm"
                                        placeholder=""
                                        value={longTerm}
                                        onChange={handleInputChange}
                                        />
                                </form>
                            </div>
                       
                        </div>
                    </div>
                    {/* This is the usersPersonalityTraits from  */}
                    <div>
                        <div>
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
                                        value={strengths}
                                        onChange={handleInputChange}
                                        />
                                    <label htmlFor="weakness">weakness </label>
                                    <input
                                        type="TEXT"
                                        id="weakness"
                                        name="weakness"
                                        placeholder=""
                                        value={weakness}
                                        onChange={handleInputChange}
                                        />
                                </form>
                             </div>
                            
                        </div>
                    </div>
                </div>
                    <button type="submit" className="submitButton" onClick={handleSubmit}>SAVE </button>
                        <Link to="/User">
                            <button  type="button" className="goback">GoBack</button>
                        </Link> 
            </div>
    )
    };

export default UpdateUser;