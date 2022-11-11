import { Injectable } from '@angular/core';
import {question} from "./question_model";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }
  getData(): question[]{
    return [
      {
        "id": 1,
        "text": "Indique el nombre del proyecto en el que esta asignado actualmente",
        "assessmentSectionIndex": 1,
        "answerRequired": true,
        "questionTypeId": 1,
        "questionType": "Respuesta corta",
        "allowOpenedText": true,
        "allowMultipleChoices": false,
        "assessmentSectionId": 2,
        "assessmentSectionName": "Información del proyecto.",
        "assessmentIndex": 2,
        "answerRangeId": null,
        "name": null,
        "answersRangeItems": []
      },
      {
        "id": 2,
        "text": "¿Cuánto tiempo llevas en el proyecto?",
        "assessmentSectionIndex": 2,
        "answerRequired": true,
        "questionTypeId": 3,
        "questionType": "Selección múltiple con única respuesta",
        "allowOpenedText": false,
        "allowMultipleChoices": false,
        "assessmentSectionId": 2,
        "assessmentSectionName": "Información del proyecto.",
        "assessmentIndex": 2,
        "answerRangeId": 1,
        "name": "Tiempo de Antiguedad",
        "answersRangeItems": [
          {
            "id": 1,
            "rangeItemWeight": 1,
            "value": "Nuevo"
          },
          {
            "id": 2,
            "rangeItemWeight": 2,
            "value": "Entre 6 meses y 1 año"
          },
          {
            "id": 3,
            "rangeItemWeight": 3,
            "value": "Entre 1 a 2 años"
          },
          {
            "id": 4,
            "rangeItemWeight": 4,
            "value": "Mas de 2 años"
          }
        ]
      },
      {
        "id": 17,
        "text": "¿Qué nivel de ingles tienes?",
        "assessmentSectionIndex": 2,
        "answerRequired": true,
        "questionTypeId": 5,
        "questionType": "Selección de respuesta en lista desplegable",
        "allowOpenedText": false,
        "allowMultipleChoices": false,
        "assessmentSectionId": 2,
        "assessmentSectionName": "Información del proyecto.",
        "assessmentIndex": 2,
        "answerRangeId": 5,
        "name": "Niveles de inglés",
        "answersRangeItems": [
          {
            "id": 22,
            "rangeItemWeight": 1,
            "value": "A1"
          },
          {
            "id": 23,
            "rangeItemWeight": 2,
            "value": "A2"
          },
          {
            "id": 24,
            "rangeItemWeight": 3,
            "value": "B1"
          },
          {
            "id": 25,
            "rangeItemWeight": 4,
            "value": "B2"
          },
          {
            "id": 26,
            "rangeItemWeight": 5,
            "value": "C1"
          },
          {
            "id": 27,
            "rangeItemWeight": 6,
            "value": "C2"
          }
        ]
      },
      {
        "id": 3,
        "text": "¿Te consideras?",
        "assessmentSectionIndex": 3,
        "answerRequired": true,
        "questionTypeId": 4,
        "questionType": "Selección múltiple con varias respuestas",
        "allowOpenedText": false,
        "allowMultipleChoices": true,
        "assessmentSectionId": 2,
        "assessmentSectionName": "Información del proyecto.",
        "assessmentIndex": 2,
        "answerRangeId": 2,
        "name": "Roles de Desarrollador",
        "answersRangeItems": [
          {
            "id": 5,
            "rangeItemWeight": 1,
            "value": "Desarrollador Frontend"
          },
          {
            "id": 6,
            "rangeItemWeight": 2,
            "value": "Desarrollador Backend"
          },
          {
            "id": 7,
            "rangeItemWeight": 3,
            "value": "Desarrollador Mobile"
          },
          {
            "id": 8,
            "rangeItemWeight": 4,
            "value": "Desarrollador Full Stack"
          },
          {
            "id": 9,
            "rangeItemWeight": 5,
            "value": "Desarrollador Android"
          },
          {
            "id": 10,
            "rangeItemWeight": 6,
            "value": "Desarrollador iOS"
          }
        ]
      },
      {
        "id": 4,
        "text": "¿Qué rol estas desempeñando en el proyecto?",
        "assessmentSectionIndex": 4,
        "answerRequired": true,
        "questionTypeId": 3,
        "questionType": "Selección múltiple con única respuesta",
        "allowOpenedText": false,
        "allowMultipleChoices": false,
        "assessmentSectionId": 2,
        "assessmentSectionName": "Información del proyecto.",
        "assessmentIndex": 2,
        "answerRangeId": 3,
        "name": "Roles de Empleado",
        "answersRangeItems": [
          {
            "id": 11,
            "rangeItemWeight": 1,
            "value": "Desarrollador Backend"
          },
          {
            "id": 12,
            "rangeItemWeight": 2,
            "value": "Desarrollador Frontend"
          },
          {
            "id": 13,
            "rangeItemWeight": 3,
            "value": "Desarrollador Full Stack"
          },
          {
            "id": 14,
            "rangeItemWeight": 4,
            "value": "Líder técnico"
          },
          {
            "id": 15,
            "rangeItemWeight": 5,
            "value": "Arquitecto"
          },
          {
            "id": 16,
            "rangeItemWeight": 6,
            "value": "Otro"
          }
        ]
      },
      {
        "id": 5,
        "text": "¿Vienes de?",
        "assessmentSectionIndex": 9,
        "answerRequired": true,
        "questionTypeId": 3,
        "questionType": "Selección múltiple con única respuesta",
        "allowOpenedText": false,
        "allowMultipleChoices": false,
        "assessmentSectionId": 2,
        "assessmentSectionName": "Información del proyecto.",
        "assessmentIndex": 2,
        "answerRangeId": 8,
        "name": "Tipos de Ingreso",
        "answersRangeItems": [
          {
            "id": 36,
            "rangeItemWeight": 1,
            "value": "SofkaU"
          },
          {
            "id": 37,
            "rangeItemWeight": 2,
            "value": "Contratación Directa"
          }
        ]
      },
      {
        "id": 6,
        "text": "¿Qué nivel de ingles tienes?",
        "assessmentSectionIndex": 10,
        "answerRequired": true,
        "questionTypeId": 3,
        "questionType": "Selección múltiple con única respuesta",
        "allowOpenedText": false,
        "allowMultipleChoices": false,
        "assessmentSectionId": 2,
        "assessmentSectionName": "Información del proyecto.",
        "assessmentIndex": 2,
        "answerRangeId": 5,
        "name": "Niveles de inglés",
        "answersRangeItems": [
          {
            "id": 22,
            "rangeItemWeight": 1,
            "value": "A1"
          },
          {
            "id": 23,
            "rangeItemWeight": 2,
            "value": "A2"
          },
          {
            "id": 24,
            "rangeItemWeight": 3,
            "value": "B1"
          },
          {
            "id": 25,
            "rangeItemWeight": 4,
            "value": "B2"
          },
          {
            "id": 26,
            "rangeItemWeight": 5,
            "value": "C1"
          },
          {
            "id": 27,
            "rangeItemWeight": 6,
            "value": "C2"
          }
        ]
      },
      {
        "id": 7,
        "text": "¿Actualmente estás estudiando Inglés?",
        "assessmentSectionIndex": 11,
        "answerRequired": true,
        "questionTypeId": 3,
        "questionType": "Selección múltiple con única respuesta",
        "allowOpenedText": false,
        "allowMultipleChoices": false,
        "assessmentSectionId": 2,
        "assessmentSectionName": "Información del proyecto.",
        "assessmentIndex": 2,
        "answerRangeId": 6,
        "name": "Si/No",
        "answersRangeItems": [
          {
            "id": 28,
            "rangeItemWeight": 1,
            "value": "Si"
          },
          {
            "id": 29,
            "rangeItemWeight": 2,
            "value": "No"
          }
        ]
      },
      {
        "id": 8,
        "text": "Indica tu nivel de Scrum",
        "assessmentSectionIndex": 1,
        "answerRequired": true,
        "questionTypeId": 3,
        "questionType": "Selección múltiple con única respuesta",
        "allowOpenedText": false,
        "allowMultipleChoices": false,
        "assessmentSectionId": 3,
        "assessmentSectionName": "Metodologías Ágiles",
        "assessmentIndex": 3,
        "answerRangeId": 7,
        "name": "Niveles de conocimiento",
        "answersRangeItems": [
          {
            "id": 30,
            "rangeItemWeight": 1,
            "value": "No conoce"
          },
          {
            "id": 31,
            "rangeItemWeight": 2,
            "value": "Conoce"
          },
          {
            "id": 32,
            "rangeItemWeight": 3,
            "value": "Comprende"
          },
          {
            "id": 33,
            "rangeItemWeight": 4,
            "value": "Practica"
          },
          {
            "id": 34,
            "rangeItemWeight": 5,
            "value": "Domina"
          },
          {
            "id": 35,
            "rangeItemWeight": 6,
            "value": "Diseña"
          }
        ]
      },
      {
        "id": 9,
        "text": "Indica tu nivel de Kanban",
        "assessmentSectionIndex": 2,
        "answerRequired": true,
        "questionTypeId": 3,
        "questionType": "Selección múltiple con única respuesta",
        "allowOpenedText": false,
        "allowMultipleChoices": false,
        "assessmentSectionId": 3,
        "assessmentSectionName": "Metodologías Ágiles",
        "assessmentIndex": 3,
        "answerRangeId": 7,
        "name": "Niveles de conocimiento",
        "answersRangeItems": [
          {
            "id": 30,
            "rangeItemWeight": 1,
            "value": "No conoce"
          },
          {
            "id": 31,
            "rangeItemWeight": 2,
            "value": "Conoce"
          },
          {
            "id": 32,
            "rangeItemWeight": 3,
            "value": "Comprende"
          },
          {
            "id": 33,
            "rangeItemWeight": 4,
            "value": "Practica"
          },
          {
            "id": 34,
            "rangeItemWeight": 5,
            "value": "Domina"
          },
          {
            "id": 35,
            "rangeItemWeight": 6,
            "value": "Diseña"
          }
        ]
      },
      {
        "id": 10,
        "text": "Indica tu nivel de Scrum Developer",
        "assessmentSectionIndex": 3,
        "answerRequired": true,
        "questionTypeId": 3,
        "questionType": "Selección múltiple con única respuesta",
        "allowOpenedText": false,
        "allowMultipleChoices": false,
        "assessmentSectionId": 3,
        "assessmentSectionName": "Metodologías Ágiles",
        "assessmentIndex": 3,
        "answerRangeId": 7,
        "name": "Niveles de conocimiento",
        "answersRangeItems": [
          {
            "id": 30,
            "rangeItemWeight": 1,
            "value": "No conoce"
          },
          {
            "id": 31,
            "rangeItemWeight": 2,
            "value": "Conoce"
          },
          {
            "id": 32,
            "rangeItemWeight": 3,
            "value": "Comprende"
          },
          {
            "id": 33,
            "rangeItemWeight": 4,
            "value": "Practica"
          },
          {
            "id": 34,
            "rangeItemWeight": 5,
            "value": "Domina"
          },
          {
            "id": 35,
            "rangeItemWeight": 6,
            "value": "Diseña"
          }
        ]
      },
      {
        "id": 11,
        "text": "Indica tu nivel de conocimiento en Java",
        "assessmentSectionIndex": 1,
        "answerRequired": true,
        "questionTypeId": 3,
        "questionType": "Selección múltiple con única respuesta",
        "allowOpenedText": false,
        "allowMultipleChoices": false,
        "assessmentSectionId": 4,
        "assessmentSectionName": "Tecnologías Back-end",
        "assessmentIndex": 4,
        "answerRangeId": 7,
        "name": "Niveles de conocimiento",
        "answersRangeItems": [
          {
            "id": 30,
            "rangeItemWeight": 1,
            "value": "No conoce"
          },
          {
            "id": 31,
            "rangeItemWeight": 2,
            "value": "Conoce"
          },
          {
            "id": 32,
            "rangeItemWeight": 3,
            "value": "Comprende"
          },
          {
            "id": 33,
            "rangeItemWeight": 4,
            "value": "Practica"
          },
          {
            "id": 34,
            "rangeItemWeight": 5,
            "value": "Domina"
          },
          {
            "id": 35,
            "rangeItemWeight": 6,
            "value": "Diseña"
          }
        ]
      },
      {
        "id": 12,
        "text": "Indica tu nivel de conocimiento en .NetCore",
        "assessmentSectionIndex": 2,
        "answerRequired": true,
        "questionTypeId": 3,
        "questionType": "Selección múltiple con única respuesta",
        "allowOpenedText": false,
        "allowMultipleChoices": false,
        "assessmentSectionId": 4,
        "assessmentSectionName": "Tecnologías Back-end",
        "assessmentIndex": 4,
        "answerRangeId": 7,
        "name": "Niveles de conocimiento",
        "answersRangeItems": [
          {
            "id": 30,
            "rangeItemWeight": 1,
            "value": "No conoce"
          },
          {
            "id": 31,
            "rangeItemWeight": 2,
            "value": "Conoce"
          },
          {
            "id": 32,
            "rangeItemWeight": 3,
            "value": "Comprende"
          },
          {
            "id": 33,
            "rangeItemWeight": 4,
            "value": "Practica"
          },
          {
            "id": 34,
            "rangeItemWeight": 5,
            "value": "Domina"
          },
          {
            "id": 35,
            "rangeItemWeight": 6,
            "value": "Diseña"
          }
        ]
      },
      {
        "id": 13,
        "text": "Indica tu nivel de conocimiento en .Net 5",
        "assessmentSectionIndex": 3,
        "answerRequired": true,
        "questionTypeId": 3,
        "questionType": "Selección múltiple con única respuesta",
        "allowOpenedText": false,
        "allowMultipleChoices": false,
        "assessmentSectionId": 4,
        "assessmentSectionName": "Tecnologías Back-end",
        "assessmentIndex": 4,
        "answerRangeId": 7,
        "name": "Niveles de conocimiento",
        "answersRangeItems": [
          {
            "id": 30,
            "rangeItemWeight": 1,
            "value": "No conoce"
          },
          {
            "id": 31,
            "rangeItemWeight": 2,
            "value": "Conoce"
          },
          {
            "id": 32,
            "rangeItemWeight": 3,
            "value": "Comprende"
          },
          {
            "id": 33,
            "rangeItemWeight": 4,
            "value": "Practica"
          },
          {
            "id": 34,
            "rangeItemWeight": 5,
            "value": "Domina"
          },
          {
            "id": 35,
            "rangeItemWeight": 6,
            "value": "Diseña"
          }
        ]
      },
      {
        "id": 14,
        "text": "Indica tu nivel de conocimiento en NodeJS",
        "assessmentSectionIndex": 4,
        "answerRequired": true,
        "questionTypeId": 3,
        "questionType": "Selección múltiple con única respuesta",
        "allowOpenedText": false,
        "allowMultipleChoices": false,
        "assessmentSectionId": 4,
        "assessmentSectionName": "Tecnologías Back-end",
        "assessmentIndex": 4,
        "answerRangeId": 7,
        "name": "Niveles de conocimiento",
        "answersRangeItems": [
          {
            "id": 30,
            "rangeItemWeight": 1,
            "value": "No conoce"
          },
          {
            "id": 31,
            "rangeItemWeight": 2,
            "value": "Conoce"
          },
          {
            "id": 32,
            "rangeItemWeight": 3,
            "value": "Comprende"
          },
          {
            "id": 33,
            "rangeItemWeight": 4,
            "value": "Practica"
          },
          {
            "id": 34,
            "rangeItemWeight": 5,
            "value": "Domina"
          },
          {
            "id": 35,
            "rangeItemWeight": 6,
            "value": "Diseña"
          }
        ]
      },
      {
        "id": 15,
        "text": "Indica tu nivel de conocimiento en Spring Boot",
        "assessmentSectionIndex": 5,
        "answerRequired": true,
        "questionTypeId": 3,
        "questionType": "Selección múltiple con única respuesta",
        "allowOpenedText": false,
        "allowMultipleChoices": false,
        "assessmentSectionId": 4,
        "assessmentSectionName": "Tecnologías Back-end",
        "assessmentIndex": 4,
        "answerRangeId": 7,
        "name": "Niveles de conocimiento",
        "answersRangeItems": [
          {
            "id": 30,
            "rangeItemWeight": 1,
            "value": "No conoce"
          },
          {
            "id": 31,
            "rangeItemWeight": 2,
            "value": "Conoce"
          },
          {
            "id": 32,
            "rangeItemWeight": 3,
            "value": "Comprende"
          },
          {
            "id": 33,
            "rangeItemWeight": 4,
            "value": "Practica"
          },
          {
            "id": 34,
            "rangeItemWeight": 5,
            "value": "Domina"
          },
          {
            "id": 35,
            "rangeItemWeight": 6,
            "value": "Diseña"
          }
        ]
      },
      {
        "id": 16,
        "text": "Describe brevemente tu experiencia con AWS",
        "assessmentSectionIndex": 13,
        "answerRequired": true,
        "questionTypeId": 2,
        "questionType": "Párrafo",
        "allowOpenedText": true,
        "allowMultipleChoices": false,
        "assessmentSectionId": 13,
        "assessmentSectionName": "Cloud - AWS",
        "assessmentIndex": 13,
        "answerRangeId": null,
        "name": null,
        "answersRangeItems": []
      }
    ]
  }
}
