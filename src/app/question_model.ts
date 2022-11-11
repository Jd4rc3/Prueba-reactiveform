export interface question {
  id: number;
  text: string;
  assessmentSectionIndex: number;
  answerRequired: boolean;
  questionTypeId: number;
  questionType: string;
  allowOpenedText: boolean;
  allowMultipleChoices: boolean;
  assessmentSectionId: number;
  assessmentSectionName: string;
  assessmentIndex: number;
  answerRangeId: number | null;
  name: string | null;
  answersRangeItems: AnswersRangeItem[];
}

export interface AnswersRangeItem {
  id:              number;
  rangeItemWeight: number;
  value:           string;
}
