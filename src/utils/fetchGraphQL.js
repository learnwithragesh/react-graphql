async function fetchGraphQL(text, variables) {
  
  console.log(text)

  let formData = new FormData();
  formData.append('query', text);

  const response = await fetch('http://localhost:8000/graphql/', {
    method: 'POST',
    body: formData,
  });

  return await response.json();

}
  
  export default fetchGraphQL;