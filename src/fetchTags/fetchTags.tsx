const fetchTags = () => {
  fetch('https://dapplets-hiring-api.herokuapp.com/api/v1/tags')
  .then(res => {
    return res.json();
  })
  .catch(err => console.log(err));
}

export default fetchTags;
