
const body = document.body;

export const createNotification = (isError, message) => {
  const div = document.createElement('DIV');
  div.classList.add('fixed', 'top-20', 'right-0', 'left-0');

  if (isError) {
    div.innerHTML =
    `
        <div class="max-w-7xl mx-auto flex justify-end p-4">
            <p class="bg-red-600 text-center font-semibold rounded p-2 w-3/12">${message}</p>
        </div>
    `;
  } else {
    div.innerHTML =
        `
            <div class="max-w-7xl mx-auto flex justify-end p-4">
                <p class="bg-green-600 text-center font-semibold rounded p-2 w-3/12">${message}</p>
            </div>
        `;
  }

  body.appendChild(div);

  setTimeout(() => div.remove(), 5000);
};