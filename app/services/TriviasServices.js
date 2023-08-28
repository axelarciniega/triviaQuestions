import { AppState } from "../AppState.js"
import { Trivia } from "../models/trivia.js"



class TriviasServices{

    async getTrivia(){
        console.log('Getting them questions')
        const response = await fetch('https://opentdb.com/api.php?amount=10&category=17&type=multiple')
        const data = await response.json()
        console.log(data.results)
        let newTrivias = data.results.map(trivia => new Trivia(trivia))
        console.log('📖', newTrivias)
        AppState.trivias = newTrivias
    }



}








export const triviasServices = new TriviasServices()