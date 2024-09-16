var insiteName=document.getElementById("siteName")
var insiteURL=document.getElementById("siteURL")
var insiteSearch=document.getElementById("searchin")

var sites
if (localStorage.getItem("sitesList")==null) {
    sites=[]
}
else{
    sites=JSON.parse(localStorage.getItem("sitesList")) 
    showData()
}
function addSite() {
   if (document.getElementById("subBtn").innerHTML==`<p class="p-0 m-0 text-white">Update</p>`) {
    document.getElementById("subBtn").innerHTML=`<p class="p-0 m-0 text-white">Submit</p>`
    var siteUpdate={
        siteName:insiteName.value,
        siteURL:insiteURL.value
    }
    sites.splice(updateIdex,1,siteUpdate)
   } else {
    var site={
        siteName:insiteName.value,
        siteURL:insiteURL.value
    } 
    sites.push(site)    
}

showData()
localStorage.setItem("sitesList",JSON.stringify(sites))
clearForm()
}
function showData() {
    var temp =''
    for (let i = 0; i < sites.length; i++) {
      
        temp+=`<tr>
        <td><p class="p-0  m-0 fw-bold fs-5">`+sites[i].siteName+`</p></td>
        <td><a class="text-decoration-none" href="`+sites[i].siteURL+`"><button class="btn btn-info mx-auto d-block mb-2" id="vistBtn" type="button"><p class="p-0 m-0 text-white">Visit</p></button></a> </td>
        <td><button onclick="updatesite(`+i+`)" class="btn btn-warning mx-auto d-block mb-2" id="updateBtn" type="button"><p class="p-0 m-0 text-white">Update</p></button></td>
        <td><button onclick="deleteSite(`+i+`)" class="btn btn-danger mx-auto d-block mb-2" id="deleteBtn" type="button"><p class="p-0 m-0 text-white">Delete</p></button></td>
    </tr>`
    }
    document.getElementById("dataShow").innerHTML=temp
}
function deleteSite(index) {
   sites.splice(index,1)
   showData()
   localStorage.setItem("sitesList",JSON.stringify(sites))
 
}
function clearForm() {
    insiteName.value=''
    insiteURL.value=''
}
var updateIdex=-1
function updatesite(index) {
    updateIdex=index
    insiteName.value=sites[index].siteName
    insiteURL.value=sites[index].siteURL
    document.getElementById("subBtn").innerHTML=`<p class="p-0 m-0 text-white">Update</p>`
}
function search(){
    var result=''
    var searchVal=insiteSearch.value.toLowerCase()
    for (let i = 0; i < sites.length; i++) {
      if (sites[i].siteName.toLowerCase().includes(searchVal)) {
        result+=`<tr>
        <td><p class="p-0  m-0 fw-bold fs-5">`+sites[i].siteName.toLowerCase().replace(searchVal,"<span class='bg-info'>"+searchVal+"</span>")+`</p></td>
        <td><a class="text-decoration-none" href="`+sites[i].siteURL+`"><button class="btn btn-info mx-auto d-block mb-2" id="vistBtn" type="button"><p class="p-0 m-0 text-white">Visit</p></button></a> </td>
        <td><button onclick="updatesite(`+i+`)" class="btn btn-warning mx-auto d-block mb-2" id="updateBtn" type="button"><p class="p-0 m-0 text-white">Update</p></button></td>
        <td><button onclick="deleteSite(`+i+`)" class="btn btn-danger mx-auto d-block mb-2" id="deleteBtn" type="button"><p class="p-0 m-0 text-white">Delete</p></button></td>
    </tr>`
      }
        
    }
    document.getElementById("dataShow").innerHTML=result
}
