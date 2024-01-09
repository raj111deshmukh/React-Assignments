import { Component } from "react";

class LoginForm extends Component{
  state= {
      name: "",
      isNameValid: false,
      mail: "",
      isMailValid: false,
      password: "",
      isPasswordValid: false,
      gender: "",
      interest: "",
      age: "18",
      dob: "",
     
      showSelectedDiv: false,
    };
    
    onNameInput = (event) => {
      const uName = event.target.value;
      const isValid = uName.length > 0;

      this.setState({
        name: uName,
        isNameValid: isValid,
      });
      
    };

      onMailInput = (event) => {
        const uMail = event.target.value;
        const isValid = uMail.includes('@'); 
        this.setState({
          mail: uMail,
          isMailValid: isValid,
        });
        
    };
        onPasswordInput = (event) => {
          const uPAssword = event.target.value;
          const isValid = uPAssword.length >= 8;
      
          this.setState({
            password: uPAssword,
            isPasswordValid: isValid,
          });
        };

        onAgeInput = (event) => {
          const selectedAge = parseInt(event.target.value, 10);
          this.setState({
            age: selectedAge,
            isAgeValid: true, // You may add validation logic for age here
          });
        };

        onGenderInput = (event) => {
          const selectedGender = event.target.value;
          this.setState({
            gender: selectedGender,
          });
        };

        onInterestInput = (event) => {
          const selectedInterest = event.target.value;
          console.log(selectedInterest);
          const updatedInterest = this.state.interest.includes(selectedInterest)
            ? this.state.interest.filter((interest) => interest !== selectedInterest)
            : [...this.state.interest, selectedInterest];
      
          this.setState({
            interest: updatedInterest,
          });
        };
      
        onDobInput = (event) => {
          const selectedDOB = event.target.value;
          this.setState({
            dob: selectedDOB,
          });
        };
        
        onSubmit = () => {

      
          
          alert("Congratulations");

          this.setState({
            showSelectedDiv: true,
          });
        };
    
  render(){
    return(
        <form className="form" style={{ textAlign: "left" }}>
            <h3>Login Form</h3>
        <div>
        <label className="labels">Name: <br></br>
          <input className="inputs" type="text"  id="name" name="name" value={this.state.name} onChange= {this.onNameInput}/><br></br>
          {!this.state.isNameValid && (
              <span className="error">Enter valid Name</span>
            )}
          </label>
        </div>
        <div>
        <label className="labels">Email:<br></br>
          <input  className="inputs" type="text"  id="mail" name="mail"  value={this.state.mail} onChange= {this.onMailInput}/><br></br>
          {!this.state.isMailValid && (
              <span className="error">Enter valid Email</span>
            )}
          </label>
        </div>
        <div>
        <label className="labels">Password:<br></br>
          <input  className="inputs" type="password"  id="pwd" name="pwd"  value={this.state.password} onChange= {this.onPasswordInput}/><br></br>
          {!this.state.isPasswordValid && (
              <span className="error">Password must be 8 charcters long</span>
            )}
          </label>
        </div>
        <div>
        <label className="labels">Gender:<br></br>
        <label>
              <input
                type="radio"
                id="female"
                name="gender"
                value="female"
                checked={this.state.gender === "female"}
                onChange={this.onGenderInput}
              />
              Female
            </label>
            <label>
              <input
                type="radio"
                id="male"
                name="gender"
                value="male"
                checked={this.state.gender === "male"}
                onChange={this.onGenderInput}
              />
              Male
            </label>
            </label>
        </div>
        <div>
        <label className="labels">Interest:<br></br>
        <input
              type="checkbox"
              id="sports"
              name="interest"
              value="sports"
              checked={this.state.interest.includes("sports")}
              onChange={this.onInterestInput}
            />
            <label>Sports</label>
            <input
              type="checkbox"
              id="music"
              name="interest"
              value="music"
              checked={this.state.interest.includes("music")}
              onChange={this.onInterestInput}
            />
            <label>Music</label>
            </label>
        </div>
        <div>
        <label className="labels">Age:<br></br>
          <input type="range" min="16" max="100" id="ageRange" value="18"
              onChange={this.onAgeInput} /><br></br>
          <span className="error">Age={this.state.age}</span>
          </label>
        </div>
        <div>
        <label className="labels">Date of birth:<br></br>
          <input  className="inputs" type="date"  id="dob" name="dob" value={this.state.dob} onChange={this.onDobInput}/><br></br>
          <span className="error" >Enter valid DOB</span>
          </label><br></br>
        </div>
        <div><br></br>
          <button className="input-sm" type="button"  id="submitBtn" name="submitBtn" 
          onClick={this.onSubmit}> 
          
          Submit </button>

           {this.state.showSelectedDiv && (
          <div style={{ marginLeft: "20px" }}>
          <h3>User Inputs</h3>
          {/* <div>{this.state.selectedInputs}</div> */}
          <p>
            <b>Name:</b> {this.state.name} <br />
            <b>Email:</b> {this.state.mail} <br />
            <b>Age:</b> {this.state.age} <br />
            <b>Gender:</b> {this.state.gender} <br />
            <b>Interest:</b> {this.state.interest} <br />
            <b> DOB:</b> {this.state.dob} <br />
            </p>
          </div>
        )}
        
        </div>
        </form>
    );
  }
       
}

export default LoginForm;