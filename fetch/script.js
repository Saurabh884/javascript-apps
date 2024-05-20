let globalData = [];

document.addEventListener("DOMContentLoaded", () => {
  const fetchData = async () => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const resData = await res.json();

      // Assign the fetched data to the global variable
      globalData = resData;

      // Return the data
      return globalData;
    } catch (error) {
      console.error("Error fetching data:", error);
      throw error;
    }
  };

  function displayData(data) {
    const container = document.getElementById("container");

    data.forEach((item) => {
      const div = document.createElement("div");
      div.innerHTML = `<h1>${item.title} </h1> ${item.body} `;
      container.appendChild(div);
    });
  }

  // Function to handle the resolved data
  const handleData = async () => {
    try {
      const data = await fetchData();
      console.log("Fetched data:", data);
      displayData(data);
    } catch (error) {
      console.error("Error handling data:", error);
    }
  };

  // Call the handleData function
  handleData();
});
