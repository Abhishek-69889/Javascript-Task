let profile_container = document.getElementById("profile_container");
let btn=document.querySelector("button");
let inp=document.querySelector("input");

async function getData(username){
  try {
    let response = await fetch(`https://api.github.com/users/${username}`);
    let data = await response.json();
    return data;
  } 
  catch (error) {
    console.log(error);
  }

  };
// console.log(getData("abhishek-69889"));

btn.addEventListener("click",async ()=>{
  profile_container.style.display="block"
  profile_container.innerText='';
  let data = await getData(inp.value)
  let profile={
    Name:data.name,
    Bio:data.bio,
    Repo:data.public_repos,
    Followers:data.followers
  };

  Object.entries(profile).forEach(([key,value]) =>{
    console.log(`${key} : ${value}`);
    let div = document.createElement("div");
      let h5 = document.createElement("h5");
      let p = document.createElement("p");

      h5.style.color="aquamarine"
      h5.innerText=key+":";
      p.innerText=value;
      div.appendChild(h5);
      div.appendChild(p);
      profile_container.appendChild(div);
  })

  })

