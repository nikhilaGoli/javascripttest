const fetch_cached = (url) => {

  axios.get(url).then(response => {
    let data = response.data;
    let key = url;
    let cachedata = JSON.parse(localStorage.getItem(key));
    if (cachedata === null) {
      console.log("cache datta");
     localStorage.setItem(key, JSON.stringify(data));
      return;
    }
   console.log(cachedata)
  }) .catch(error => {
console.log(error);
      return error;
  });
}

fetch_cached("https://reqres.in/api/users?page=1");