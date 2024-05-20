document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('crud-form');
    const tableBody = document.querySelector('#crud-table tbody');
    let editIndex = null;
    let data = [];
  
    form.addEventListener('submit', (event) => {
      event.preventDefault();
  
      const name = document.getElementById('name').value;
      const mobile = document.getElementById('mobile').value;
      const address = document.getElementById('address').value;
  
      if (editIndex === null) {
        addEntry(name, mobile, address);
      } else {
        updateEntry(editIndex, name, mobile, address);
      }
  
      form.reset();
      editIndex = null;
      renderTable();
    });
  
    function addEntry(name, mobile, address) {
      data.push({ name, mobile, address });
    }
  
    function updateEntry(index, name, mobile, address) {
      data[index] = { name, mobile, address };
    }
  
    function deleteEntry(index) {
      data.splice(index, 1);
    }
  
    function renderTable() {
      tableBody.innerHTML = '';
      data.forEach((entry, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
          <td>${entry.name}</td>
          <td>${entry.mobile}</td>
          <td>${entry.address}</td>
          <td class="actions">
            <button class="edit-button" data-index="${index}">Edit</button>
            <button class="delete-button" data-index="${index}">Delete</button>
          </td>
        `;
        tableBody.appendChild(row);
      });
  
      document.querySelectorAll('.edit-button').forEach(button => {
        button.addEventListener('click', (e) => {
          const index = e.target.getAttribute('data-index');
          const entry = data[index];
          document.getElementById('name').value = entry.name;
          document.getElementById('mobile').value = entry.mobile;
          document.getElementById('address').value = entry.address;
          editIndex = index;
        });
      });
  
      document.querySelectorAll('.delete-button').forEach(button => {
        button.addEventListener('click', (e) => {
          const index = e.target.getAttribute('data-index');
          deleteEntry(index);
          renderTable();
        });
      });
    }
  });
  