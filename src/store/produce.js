import productData from '../mockData/produce.json'

const POPULATE = 'product/POPULATE'

export const populateProduce = () => {
    return {
        type: POPULATE,
        produce: productData
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
        default:
            return state;
    }
}