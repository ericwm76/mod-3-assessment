export const getOrders = () => {
  return fetch('http://localhost:3001/api/v1/orders')
      .then(response => response.json())
}

export const postOrder = async (name, ingredients) => {
  const options = {
    method: 'POST',
    body: JSON.stringify({
      name,
      ingredients
    }),
    headers: {
      'Content-Type': 'application/json'  
    }
  }

  let response = await fetch('http://localhost:3001/api/v1/orders', options);

  if(!response.ok) {
    console.log(response.status)
  }

  let data = response.json();

  return data;
}