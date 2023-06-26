import { createNotification } from "../components/notification.js" 
const formContact = document.querySelector('#form-contact');
const nameInput = document.querySelector('#name-input');
const numberInput = document.querySelector('#number-input');
const selectInput = document.querySelector('#select-input');
const contactsListContainer = document.querySelector('#contacts-list-container');

let edit = false;

document.addEventListener('DOMContentLoaded', formContact.reset());

const newContact = {
    name: "",
    number: ""
}

// VALIDATIONS
const NUMBER_REGEX = /^(0412|0212|0416|0426|0414|0424)(\d{7})$/;

formContact.addEventListener('submit', async e => {
  e.preventDefault();
  const numberPhone = selectInput.value.concat(numberInput.value).trim();
  if (!nameInput.value || !numberInput.value || !selectInput.value) {
    createNotification(true, 'Debes llenar los campos');
    return;
  }
  
  if(!NUMBER_REGEX.test(numberPhone)) {
    createNotification(true, 'Número erroneo');
    return;
  }

  newContact.name = nameInput.value;
  newContact.number = numberInput.value;

    // Create list
    const { data } = await axios.post('/api/contacts', { name: nameInput.value, number: numberInput.value, cod: selectInput.value });
    console.log(data);

  createListContact(newContact.name, newContact.number, selectInput.value, data.id);
  createNotification(false, 'Contacto agregado');
  formContact.reset();
});

const createListContact = (name, number, cod, id) => {

    const li = document.createElement('LI');
    li.id = id;
    li.classList.add('flex', 'flex-col', 'gap-2', 'rounded', 'p-4', 'bg-indigo-700');

    li.innerHTML = `
    <div class="flex justify-center items-center">
    <input  class="p-2 rounded text-lg text-center w-full" type="text" autocomplete="off" disabled value="${name}">
    </div>
    <!-- PHONE -->
    <div class="flex justify-center items-center gap-2">
        <select disabled class="p-2 rounded text-lg w-2/4"  id="select-input">
            <option value="${cod}" Selected>${cod}</option>
        </select>
        <input class="p-2 rounded text-lg w-2/4" type="tel" autocomplete="off" disabled value="${number}">
    </div>
    <div class="flex justify-center items-center gap-4">
        <!-- EDIT -->
        <button id="edit-btn">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-green-600">
                <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
            </svg>       
        </button>
        <!-- DELETE -->
        <button id="delete-btn">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-red-600">
                <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
            </svg>
                    
        </button>
    </div>
    `;
    contactsListContainer.appendChild(li);

    // Funciones de los botones
    li.onclick =  async e => {

        // DELETE
        if (e.target.closest('#delete-btn')) {
            const id = e.target.closest('#delete-btn').parentElement.parentElement.id;
            const li = e.target.closest('#delete-btn').parentElement.parentElement;
            li.remove();
            await axios.delete(`/api/contacts/${id}`);
            return;
        }

        if (e.target.closest('#edit-btn')) {
            const id = e.target.closest('#edit-btn').parentElement.parentElement.id;
            const li = e.target.closest('#edit-btn').parentElement.parentElement;
            const inputName = li.children[0].children[0];
            const inputNumber = li.children[1].children[1];
            const selectCod = li.children[1].children[0];
            // EDIT
            if (!edit) {
                console.log('edit');
                edit = true;
                inputName.disabled = false;
                inputNumber.disabled = false;
                selectCod.disabled = false;
                selectCod.innerHTML = `
                <option value="" selected>####</option>
                <option value="0212">0212</option>
                <option value="0412">0412</option>
                <option value="0416">0416</option>
                <option value="0426">0426</option>
                <option value="0414">0414</option>
                <option value="0424">0424</option>
                `;
                inputName.value = "";
                inputName.focus();
                e.target.closest('#edit-btn').innerHTML = 
                `
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-yellow-700">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 3.75H6.912a2.25 2.25 0 00-2.15 1.588L2.35 13.177a2.25 2.25 0 00-.1.661V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 00-2.15-1.588H15M2.25 13.5h3.86a2.25 2.25 0 012.012 1.244l.256.512a2.25 2.25 0 002.013 1.244h3.218a2.25 2.25 0 002.013-1.244l.256-.512a2.25 2.25 0 012.013-1.244h3.859M12 3v8.25m0 0l-3-3m3 3l3-3" />
                </svg>
                `;

            } 
            // SAVE EDIT
            else {
                console.log('Close edit');
                // Confirmar si hay un input vacío
                if (!inputName.value || !inputNumber.value || !selectCod.value) {
                    createNotification(true, 'Debes llenar los campos');
                    return;
                }
                const numberPhone = selectCod.value.concat(inputNumber.value).trim();
                // Verificar si el número es válido
                if(!NUMBER_REGEX.test(numberPhone)) {
                    createNotification(true, 'Número erroneo');
                    return;
                }
                edit = false;
                inputName.disabled = true;
                inputNumber.disabled = true;
                selectCod.disabled = true;

                e.target.closest('#edit-btn').innerHTML = 
                `
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-green-600">
                <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                </svg>  
                `;

                await axios.patch(`/api/contacts/${id}`, { name: inputName.value, number: inputNumber.value, cod: selectCod.value });
                createNotification(false, 'Contacto modificado');
                
            }
            return;
        }
    }
}

// Función que carga la base de datos
( async () => {
    try {
        const { data } = await axios.get('/api/contacts', {
            withCredentials: true
        });
        data.forEach(contact => {
            const { name, number, cod } = contact;
            createListContact(name, number, cod, contact.id);
        });
    } catch (error) {
        window.location.pathname = '/login';
        console.log(error);
    }
})();