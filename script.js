function copyText(txt) {
    navigator.clipboard.writeText(txt).then(
      () =>{
        //alert(`copied text:` + txt);
      },
      () =>{
        alert("failed");
      },
    );
}
mask=(password)=>{
let res="";
for(let i=0;i<password.length;i++){
  res+="*";
}
return res;
}
const dlt_d=(website)=>{
   let cur_d = localStorage.getItem("passwords");
   let arr = JSON.parse(cur_d);
   arr=arr.filter((e)=>{
    return e.website!=website;
   })
   localStorage.setItem("passwords", JSON.stringify(arr));
   ss();
}
const ss = () => {
  let tb = document.querySelector("table");
  let data = localStorage.getItem("passwords");
  if (data == null) {
    tb.innerHTML = "no data to show";
  } else {
    tb.innerHTML = `<tr>
            <th style="padding-right: 10px;">website</th>
            <th style="padding-right: 10px;">username</th>
            <th style="padding-right: 10px;">password</th>
            <th style="padding-right: 10px;">delete</th>
        </tr>`;
    let arr = JSON.parse(data);
    let str = "";
    for (let index = 0; index < arr.length; index++) {
      const element = arr[index];
      str += 
        `<tr>
          <td>${element.website} <img src='data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-copy"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>' alt="Copy Icon" width="10" height="10" onclick="copyText('${element.website}')">
</td>
          <td>${element.username}<img src='data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-copy"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>' alt="Copy Icon" width="10" height="10" onclick="copyText('${element.username}')">
</td>
          <td>${mask(element.password)}<img src='data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-copy"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>' alt="Copy Icon" width="10" height="10" onclick="copyText('${element.password}')">

</td>
          <td><button id="${element.website}" class="db" onclick="dlt_d('${element.website}')">delete</button></td>
        </tr>`
    }
    tb.innerHTML = tb.innerHTML + str;
    website.value = "";
    username.value = "";
    password.value = "";
  }
}
ss();
document.querySelector(".btn").addEventListener("click", (e) => {
  e.preventDefault();
  console.log("username.value", "website.value", "password.value");
  let passwords = localStorage.getItem("passwords");
  if (passwords == null) {
    let json = [];
    json.push({
      username: username.value,
      website: website.value,
      password: password.value,
    });
    
    localStorage.setItem("passwords", JSON.stringify(json));
  } else {
    let json = JSON.parse(localStorage.getItem("passwords"));
    json.push({
      username: username.value,
      website: website.value,
      password: password.value,
    });

    localStorage.setItem("passwords", JSON.stringify(json));
  }
  ss();
});
