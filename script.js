// Seleccionar el contenedor donde se mostrarán los datos
const dataContainer = document.getElementById('data-container');

const postData = {
    "chatbotId": "631a5a854baca00004415ee7",
    "questionList": {
      "salute": {
        "_id": "62f15ca66ac49a68decdd114",
        "order": 0,
        "label": "Initial message",
        "descriptions": [
          "<p class=\"editor-paragraph\"><span>Hi!👋I'm online, how can I help you?</span></p>"
        ],
        "alternativeTexts": {
          "_id": "62f15ca66ac49a68decdd120",
          "text": "Hello, at this moment our agents are disconnected, you can leave us your contact information and they will contact you as soon as possible"
        },
        "ancestors": [],
        "responseOptions": [],
        "isDefaultQuestion": true,
        "isEmptyText": false,
        "parent": "",
        "internalName": "salute",
        "show": true,
        "showChildrens": true,
        "disabled": false,
        "required": true,
        "assignedTo": {
          "id": "",
          "name": ""
        },
        "tag": "",
        "responseType": "TEXT",
        "interfaceConfig": {
          "canBeDeleted": false,
          "canBeEdited": true,
          "canBeMarkedAsRequired": false,
          "canBeDisabled": false,
          "canBeMoved": true,
          "canChangeResponseType": false,
          "canHaveChildrens": true,
          "isPremium": false,
          "canCreateQuestions": true
        }
      },
      "name": {
        "_id": "62f15ca66ac49a68decdd116",
        "order": 1,
        "label": "Name",
        "descriptions": [
          "Could you tell me your name?"
        ],
        "alternativeTexts": {
          "_id": "",
          "text": ""
        },
        "ancestors": [],
        "responseOptions": [],
        "isDefaultQuestion": true,
        "isEmptyText": false,
        "parent": "",
        "internalName": "name",
        "show": true,
        "showChildrens": true,
        "disabled": true,
        "required": false,
        "assignedTo": {
          "id": "",
          "name": ""
        },
        "tag": "",
        "responseType": "NAME",
        "interfaceConfig": {
          "canBeDeleted": false,
          "canBeEdited": true,
          "canBeMarkedAsRequired": true,
          "canBeDisabled": true,
          "canBeMoved": true,
          "canChangeResponseType": false,
          "canHaveChildrens": false,
          "isPremium": false,
          "canCreateQuestions": true
        }
      },
      "email": {
        "_id": "62f15ca66ac49a68decdd118",
        "order": 2,
        "label": "E-mail",
        "descriptions": [
          "Could you share with me your email?"
        ],
        "alternativeTexts": {
          "_id": "",
          "text": ""
        },
        "ancestors": [],
        "responseOptions": [],
        "isDefaultQuestion": true,
        "isEmptyText": false,
        "parent": "",
        "internalName": "email",
        "show": true,
        "showChildrens": true,
        "disabled": true,
        "required": false,
        "assignedTo": {
          "id": "",
          "name": ""
        },
        "tag": "",
        "responseType": "EMAIL",
        "interfaceConfig": {
          "canBeDeleted": false,
          "canBeEdited": true,
          "canBeMarkedAsRequired": true,
          "canBeDisabled": true,
          "canBeMoved": true,
          "canChangeResponseType": false,
          "canHaveChildrens": false,
          "isPremium": false,
          "canCreateQuestions": true
        }
      },
      "phone": {
        "_id": "62f15ca66ac49a68decdd117",
        "order": 3,
        "label": "Phone",
        "descriptions": [
          "Please, could you give me a phone number?"
        ],
        "alternativeTexts": {
          "_id": "",
          "text": ""
        },
        "ancestors": [],
        "responseOptions": [],
        "isDefaultQuestion": true,
        "isEmptyText": false,
        "parent": "",
        "internalName": "phone",
        "show": true,
        "showChildrens": true,
        "disabled": true,
        "required": false,
        "assignedTo": {
          "id": "",
          "name": ""
        },
        "tag": "",
        "responseType": "PHONE",
        "interfaceConfig": {
          "canBeDeleted": false,
          "canBeEdited": true,
          "canBeMarkedAsRequired": true,
          "canBeDisabled": true,
          "canBeMoved": true,
          "canChangeResponseType": false,
          "canHaveChildrens": false,
          "isPremium": false,
          "canCreateQuestions": true
        }
      },
      "mensaje@5af5": {
        "_id": "63bc351af6777c377a035af4",
        "order": 4,
        "label": "Menu",
        "descriptions": [
          "<p class=\"editor-paragraph\"><span>How may i help you?</span></p>"
        ],
        "alternativeTexts": {
          "_id": "",
          "text": ""
        },
        "ancestors": [],
        "responseOptions": [
          "Option 1",
          "Option 2"
        ],
        "isDefaultQuestion": false,
        "isEmptyText": false,
        "parent": "",
        "internalName": "mensaje@5af5",
        "show": true,
        "showChildrens": true,
        "disabled": true,
        "required": false,
        "assignedTo": {
          "id": "",
          "name": ""
        },
        "tag": "",
        "responseType": "LIST",
        "interfaceConfig": {
          "canBeDeleted": true,
          "canBeEdited": true,
          "canBeMarkedAsRequired": false,
          "canBeDisabled": true,
          "canBeMoved": true,
          "canChangeResponseType": false,
          "canHaveChildrens": true,
          "isPremium": false,
          "canCreateQuestions": true
        }
      },
      "option_1@5af7": {
        "_id": "63bc3572f6777c377a035af6",
        "order": 5,
        "label": "Option 1",
        "descriptions": [
          "<p class=\"editor-paragraph\"><span>Thanks you for your response. We will contacting you as soon as possible to help you</span></p>"
        ],
        "alternativeTexts": {
          "_id": "",
          "text": ""
        },
        "ancestors": [
          "mensaje@5af5"
        ],
        "responseOptions": [],
        "isDefaultQuestion": false,
        "isEmptyText": false,
        "parent": "mensaje@5af5",
        "internalName": "option_1@5af7",
        "show": true,
        "showChildrens": true,
        "disabled": false,
        "required": false,
        "assignedTo": {
          "id": "",
          "name": ""
        },
        "tag": "Option 1",
        "responseType": "NONE",
        "interfaceConfig": {
          "canBeDeleted": true,
          "canBeEdited": true,
          "canBeMarkedAsRequired": false,
          "canBeDisabled": false,
          "canBeMoved": true,
          "canChangeResponseType": false,
          "canHaveChildrens": true,
          "isPremium": false,
          "canCreateQuestions": true
        }
      },
      "option_2@5af9": {
        "_id": "63bc3574f6777c377a035af8",
        "order": 6,
        "label": "Option 2",
        "descriptions": [
          "<p class=\"editor-paragraph\"><span>Thanks you for your response. We will contacting you as soon as possible to help you</span></p>"
        ],
        "alternativeTexts": {
          "_id": "",
          "text": ""
        },
        "ancestors": [
          "mensaje@5af5"
        ],
        "responseOptions": [],
        "isDefaultQuestion": false,
        "isEmptyText": false,
        "parent": "mensaje@5af5",
        "internalName": "option_2@5af9",
        "show": true,
        "showChildrens": true,
        "disabled": false,
        "required": false,
        "assignedTo": {
          "id": "",
          "name": ""
        },
        "tag": "Option 2",
        "responseType": "NONE",
        "interfaceConfig": {
          "canBeDeleted": true,
          "canBeEdited": true,
          "canBeMarkedAsRequired": false,
          "canBeDisabled": false,
          "canBeMoved": true,
          "canChangeResponseType": false,
          "canHaveChildrens": true,
          "isPremium": false,
          "canCreateQuestions": true
        }
      },
      "invalid_response": {
        "_id": "62f15ca66ac49a68decdd11b",
        "order": 7,
        "label": "Insist contact details",
        "descriptions": [
          "<p class=\"editor-paragraph\"><span>I recommend you enter an email or phone so we can contact you.😀</span></p>"
        ],
        "alternativeTexts": {
          "_id": "",
          "text": ""
        },
        "ancestors": [],
        "responseOptions": [],
        "isDefaultQuestion": true,
        "isEmptyText": false,
        "parent": "",
        "internalName": "invalid_response",
        "show": true,
        "showChildrens": true,
        "disabled": false,
        "required": true,
        "assignedTo": {
          "id": "",
          "name": ""
        },
        "tag": "",
        "responseType": "EMAIL_OR_PHONE",
        "interfaceConfig": {
          "canBeDeleted": false,
          "canBeEdited": true,
          "canBeMarkedAsRequired": true,
          "canBeDisabled": true,
          "canBeMoved": true,
          "canChangeResponseType": false,
          "canHaveChildrens": false,
          "isPremium": false,
          "canCreateQuestions": true
        }
      },
      "contact_document_number": {
        "_id": "62f15ca66ac49a68decdd11a",
        "order": 8,
        "label": "Document",
        "descriptions": [
          "Could you share with me your ID number?"
        ],
        "alternativeTexts": {
          "_id": "",
          "text": ""
        },
        "ancestors": [],
        "responseOptions": [
          "[0-9]{1,2}[.|-]?[0-9]{3}[.|-]?[0-9]{3}"
        ],
        "isDefaultQuestion": true,
        "isEmptyText": false,
        "parent": "",
        "internalName": "contact_document_number",
        "show": true,
        "showChildrens": true,
        "disabled": true,
        "required": false,
        "assignedTo": {
          "id": "",
          "name": ""
        },
        "tag": "",
        "responseType": "REGEX",
        "interfaceConfig": {
          "canBeDeleted": false,
          "canBeEdited": true,
          "canBeMarkedAsRequired": true,
          "canBeDisabled": true,
          "canBeMoved": true,
          "canChangeResponseType": false,
          "canHaveChildrens": false,
          "isPremium": false,
          "canCreateQuestions": true
        }
      },
      "contact_time": {
        "_id": "62f15ca66ac49a68decdd119",
        "order": 9,
        "label": "Availability",
        "descriptions": [
          "<p class=\"editor-paragraph\"><span>Which time of day do you prefer us to call you?</span></p>"
        ],
        "alternativeTexts": {
          "_id": "",
          "text": ""
        },
        "ancestors": [],
        "responseOptions": [],
        "isDefaultQuestion": true,
        "isEmptyText": false,
        "parent": "",
        "internalName": "contact_time",
        "show": true,
        "showChildrens": true,
        "disabled": true,
        "required": false,
        "assignedTo": {
          "id": "",
          "name": ""
        },
        "tag": "",
        "responseType": "TEXT",
        "interfaceConfig": {
          "canBeDeleted": false,
          "canBeEdited": true,
          "canBeMarkedAsRequired": false,
          "canBeDisabled": true,
          "canBeMoved": true,
          "canChangeResponseType": false,
          "canHaveChildrens": false,
          "isPremium": false,
          "canCreateQuestions": true
        }
      },
      "final_question": {
        "_id": "62f15ca66ac49a68decdd11c",
        "order": 10,
        "label": "Additional question",
        "descriptions": [
          "Do you have any other questions?"
        ],
        "alternativeTexts": {
          "_id": "",
          "text": ""
        },
        "ancestors": [],
        "responseOptions": [],
        "isDefaultQuestion": true,
        "isEmptyText": false,
        "parent": "",
        "internalName": "final_question",
        "show": true,
        "showChildrens": true,
        "disabled": false,
        "required": false,
        "assignedTo": {
          "id": "",
          "name": ""
        },
        "tag": "",
        "responseType": "TEXT",
        "interfaceConfig": {
          "canBeDeleted": false,
          "canBeEdited": true,
          "canBeMarkedAsRequired": false,
          "canBeDisabled": true,
          "canBeMoved": true,
          "canChangeResponseType": false,
          "canHaveChildrens": false,
          "isPremium": false,
          "canCreateQuestions": true
        }
      },
      "final_salutation": {
        "_id": "62f15ca66ac49a68decdd11f",
        "order": 11,
        "label": "Conversation closure",
        "descriptions": [
          "Thank you for communicating with us!"
        ],
        "alternativeTexts": {
          "_id": "62f15ca66ac49a68decdd120",
          "text": "Thank you very much for communicating!"
        },
        "ancestors": [],
        "responseOptions": [],
        "isDefaultQuestion": true,
        "isEmptyText": false,
        "parent": "",
        "internalName": "final_salutation",
        "show": true,
        "showChildrens": true,
        "disabled": true,
        "required": false,
        "assignedTo": {
          "id": "",
          "name": ""
        },
        "tag": "",
        "responseType": "TEXT",
        "interfaceConfig": {
          "canBeDeleted": false,
          "canBeEdited": true,
          "canBeMarkedAsRequired": false,
          "canBeDisabled": false,
          "canBeMoved": false,
          "canChangeResponseType": false,
          "canHaveChildrens": false,
          "isPremium": false,
          "canCreateQuestions": true
        }
      }
    }
  }

const requestHeaders = {
    'Authorization': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJwcml2aWxlZ2VzIjpbImFkbWluIiwiYWxsLXdlYnNpdGVzIl0sInYiOjEsImNvbXBhbnkiOiI2MzJiMTliMjVlNWI1YTAwMjYwNzkxNmEiLCJ3ZWJzaXRlcyI6W10sIndoaXRlbGFiZWwiOiI1NWRmNGVkM2U0YjAzMzc3NDRiY2Q2NWEiLCJ1c2VyIjoiNjMyYjE5YjI1ZTViNWEwMDI2MDc5MTZiIiwidGltZXN0YW1wIjoxNjk1MzkzNjk1NjYxfQ.32eLEVhfh9DuVcKJiPPdp0jaWkKlctK-nTnuymZTEB0', // Reemplaza 'tu_token' con tu token de autenticación si es necesario
    'Content-Type': 'application/json' // Tipo de contenido (JSON en este caso)
};


// URL de la API de ejemplo
const apiUrl = 'http://localhost:3001/api/v1/chatbotconfig';

// Realizar la solicitud POST utilizando Axios
axios.post(apiUrl, postData, { headers: requestHeaders })
    .then((response) => {
        // Manejar la respuesta de la API
        const data = response.data;
        console.log('console.log',response)
        // Mostrar los datos en el contenedor
        dataContainer.innerHTML = `
            <h2>ID del Nuevo Post: ${data.id}</h2>
            <p>Título: ${data.title}</p>
            <p>Cuerpo: ${data.body}</p>
        `;
    })
    .catch((error) => {
        console.error('Error al realizar la solicitud:', error);
    })