import { AppState } from "../AppState.js"
import { triviasServices } from "../services/TriviasServices.js"
import { setHTML } from "../utils/Writer.js"


function _drawTrivia(){
    let trivia = AppState.trivias
    let content = ''
    trivia.forEach(t => content += t.TriviaCard)
    setHTML('trivia', content)
}



export class TriviasController{
    constructor(){
        console.log('TRIVIA time')
        this.getTrivia()
        // NOTE the trivias is coming from the empty array
        AppState.on('trivias', _drawTrivia)
    }

    async getTrivia(){
        await triviasServices.getTrivia()
    }




}