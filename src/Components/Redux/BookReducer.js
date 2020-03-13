import {ADD_BOOK} from './actions/actions';
const InitState = {
    BookDetails: [{
    id: 1,
    BookName: "abc",
    Author: null,
    Price: null,
    Genre: null
    },
    {
    id: 2,
    BookName: "xyz",
    Author: null,
    Price: null,
    Genre: null
    }
]


}

export const BookReducer=(state = InitState, action)=>{
    switch(action.type){
        case ADD_BOOK:
            return{
                ...state,
                BookDetails: [...state.BookDetails, action.book]
            };
        default: 
            return state;
    }
}
