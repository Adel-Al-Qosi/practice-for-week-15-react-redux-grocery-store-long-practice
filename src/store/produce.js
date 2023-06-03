import productData from '../mockData/produce.json'

const POPULATE = 'product/POPULATE'
const LIKE = 'product/LIKE'

export const populateProduce = () => {
    return {
        type: POPULATE,
        produce: productData
    }
}

export const toggleLike = (id) => {
    return {
        type: LIKE,
        payload: {
            id: id,
        }
    }
}

export default function productReducer(state = {}, action) {
    switch (action.type) {
        case POPULATE:
            const newState = {};
            action.produce.forEach(produce => {
                newState[produce.id] = produce;
            })
            return newState
        case LIKE:
            const produceId = action.payload.id
            return {
                ...state,
                [produceId]: {
                    ...state[produceId],
                    liked: !state[produceId].liked
                }
            }
        default:
            return state;
    }
}