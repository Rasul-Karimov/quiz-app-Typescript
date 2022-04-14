import { ActionTypes, questionTypes } from "./types"


const initialValue: questionTypes[] = [
    {
        question: "Сколько пар ребер у человека?",
        answers: ["12", '14', "15"],
        rightAnswer: "12"
    },
    {
        question: "Какое название у самого большого амфитеатра Древнего Рима?",
        answers: ["Галилео", "Царство небесное", "Колизей"],
        rightAnswer: "Колизей"
    },
    {
        question: "Столица словакии?",
        answers: ["Кипер", "Андолусия", "Братислава",],
        rightAnswer: "Братислава"
    },
    {
        question: "Сколько респеблик Входиело в состав СССР?",
        answers: ["12", "15", "14",],
        rightAnswer: "15"
    },
    {
        question: "Сколько костей у взрослова человека?",
        answers: ["200", "150", "210",],
        rightAnswer: "200"
    },


]


const questionsReducer = (state = initialValue, action: ActionTypes) => {
    switch (action.type) {
        default:
            return state
    }
}

export type RootType = ReturnType<typeof questionsReducer>
export default questionsReducer