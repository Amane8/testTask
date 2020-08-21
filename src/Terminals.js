import React from 'react';

class Terminals extends React.Component {

  constructor(props) {
    super(props);
  }

  addTerminal = () => {
    let table = document.querySelector('#termianlTable');
    let name = document.querySelector('#name');
    let descr = document.querySelector('#descr');

    if(name.value == "") {
      window.alert('Введите название');
      return;
    }

    let row = document.createElement('tr');
    row.classList.add('row')
    row.innerHTML = `
    <td>${name.value.replace(/</ig, '&lt;').replace(/>/ig, '&gt;')}</td>
    <td>${descr.value.replace(/</ig, '&lt;').replace(/>/ig, '&gt;')}</td>
    <button class="deleteButton"></button>
    `;

    name.value = '';
    descr.value = '';
    table.prepend(row);
  }

  deleteRow = (event) => {
    if(event.target.classList == 'deleteButton') {
      if(window.confirm('Вы уверены?')) {
        event.target.closest('.row').remove();
      }
    }
  }

  render() {
    return(
      <div>
        <div id="addTerminal">
          <label for="name">Название терминала</label>
          <input id='name' type="text"></input>

          <label for="descr">Описание</label>
          <textarea id='descr'></textarea>

          <button onClick={this.addTerminal}>Добавить</button>
        </div>
          
        <table id="termianlTable" onClick={this.deleteRow}>
          <thead>
            <th>Название</th>
            <th>Описание</th>
          </thead>
        </table>
      </div>
    )
  }
}

export default Terminals;