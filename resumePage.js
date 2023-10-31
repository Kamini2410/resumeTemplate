const fetchJson = async () => {
  try {
    const data = await fetch('Data (1).json');
    const response = await data.json();
    return response;
  } catch (error) {
    console.log(error);
  }
};


const generateResume = (data) => {

  const resume = document.createElement('div');
  
  resume.innerHTML = `
  <div id="d1">
   <section id="s1"> 
   <div>
    <h1>${ data.basics.name}</h1>
    </div>
    <div id="d2">
       <p id="p1">${data.basics.AppliedFor}</p> <img id="profilePic" src="download.jpg"/>
    </div>
    </section>
    
  <aside id="personalInfo">
    <p class="mainHeading">Personal information</p>
    <p class="list">${data.basics.phone}</p>
    <p class="list">${data.basics.email}</p>
    <p class="mainHeading">Technical skills</p>
    <p class="list">${data.skills.keywords[0]}</p>
    <p class="list">${data.skills.keywords[1]}</p>
    <p class="list">${data.skills.keywords[2]}</p>
    <p class="list">${data.skills.keywords[3]}</p>
    <p class="mainHeading">Hobbies</p>
    <p class="list">${data.interests.hobbies[0]}</p>
    <p class="list">${data.interests.hobbies[1]}</p>
    <p class="list">${data.interests.hobbies[2]}</p>
  </aside>
  <div id="mainInfo">
  <p class="head1">Work experience in previous Company</>
     <p class="subHead1"><b>Company Name</b>:${data.work["Company Name"]}</p>
      <p class="subHead1"><b>Position</b>:${data.work["Position"]}</p>
      <p class="subHead1"><b>Start Date:</b>${data.work["Start Date"]}</p>
      <p class="subHead1"><b>End Date:</b>${data.work["End Date"]}</p>
      <p class="subHead1"><b>Summary:</b>${data.work["Summary"]}</p>
  <p class="head1">Projects </>
      <p class="subHead1">${data.projects["description"]}</p>
  <p class="head1">Education </p> 
  <ul>
    <li class="subHead1"><b>UG</b>:${data.education.UG["institute"]},${data.education.UG["course"]},${data.education.UG["Start Date"]},${data.education.UG["End Date"]},${data.education.UG["cgpa"]}</li>
    <li class="subHead1"><b>PU</b>:${data.education["Senior Secondary"].institute},${data.education["Senior Secondary"].cgpa}</li>
    <li class="subHead1"><b>PU</b>:${data.education["High School"].institute},${data.education["High School"].cgpa}</li>
  </ul>
  <p class="head1">Intership </p> 
  <ul>
    <li class="subHead1"><b>Company Name</b>:${data.Internship["Company Name"]}</li>
    <li class="subHead1"><b>Position</b>:${data.Internship["Position"]}</li>
    <li class="subHead1"><b>Start Date:</b>${data.Internship["Start Date"]}</li>
    <li class="subHead1"><b>End Date:</b>${data.Internship["End Date"]}</li>
    <li class="subHead1"><b>Summary:</b>${data.Internship["Summary"]}</li>
    </ul>
  <p class="head1">Achievements </p>  
  <ul>
  <li class="subHead1">${data.Internship["Summary"]}</li>
  </ul>
  </div>
<div>
  `;
  return resume;
};

const search=(searchTerm)=>{
  fetchJson().then((data) => {
    data.resume.forEach(element => {
      let searchTerm=document.getElementById("search-term").value;
      if(element.basics.AppliedFor==searchTerm){
        const resume = generateResume(element);
        document.body.appendChild(resume);
      }
      
    })
     
    });
};




