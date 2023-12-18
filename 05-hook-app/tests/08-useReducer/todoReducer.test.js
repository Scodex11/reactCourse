const { fireEvent, render, screen } = require("@testing-library/react");
import { todoReducer } from "../../src/08-useReduce"


describe('Pruebas en todoReducer', () => { 
    const initalState = [{
        id: 1,
        desc: 'Aprender React',
        done: false
    }];
    
    test('ESTADO INCICIAL', () => {
        const newState  = todoReducer(initalState, {});
        expect(newState).toEqual(initalState);
    })

    test('ADD TODO', () => { 
        const action = {
            type: '[TODO] Add',
            payload: {
                id: 2,
                desc: 'Aprender Node',
                done: false
            }
        }

        const newState = todoReducer(initalState, action);
        expect(newState.length).toBe(2);

        expect(newState).toEqual([...initalState, action.payload]);
     })

     test('DELETE TODO', () => { 
        const {id} = initalState[0];

        const action = {
            type: '[TODO] Delete',
            payload: id
        }

        const newState = todoReducer(initalState, action);
        expect(newState.length).toBe(0);
      })

      test('Toggle TODO', () => { 
        const {id} = initalState[0];

        const action = {
            type: '[TODO] Toggle',
            payload: id
        }

        const newState = todoReducer(initalState, action);
        //DONE debe ser true
        expect(newState[0].done).toBe(true);
       })
 })