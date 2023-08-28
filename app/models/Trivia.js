


export class Trivia{

    constructor({category, type, difficulty, question, correct_answer, incorrect_answers}){
        this.category = category
        this.type = type
        this.difficulty = difficulty
        this.question = question
        this.correctAnswer = correct_answer
        this.incorrectAnswers = incorrect_answers
    }



    get TriviaCard(){
        return `
        <div class=" col-5 card">
        <div>
        <p class="fw-bold">${this.question}</p>
        
        <button class=" col-6 selectable">${this.incorrectAnswers[0]}</button>
        <button class=" col-6 selectable">${this.incorrectAnswers[1]}</button>
        <button class="col-6 selectable">${this.incorrectAnswers[2]}</button>
        <button class="col-6 selectable">${this.correctAnswer}</button>
        
        </div>
      </div>
        `
    }




}