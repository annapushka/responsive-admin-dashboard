import { makeAutoObservable } from "mobx";
import { ListTypes } from "../types/lists";


class ListsStore {

    lists: ListTypes[] = [{
        id: 0,
        title: 'Last Episode',
        cards: [
            {
                id: 0,
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus consectetur, ligula condimentum suscipit rhoncus, neque lacus vestibulum libero, in sagittis orci leo eget nunc. Etiam gravida nisl nec orci imperdiet, a pulvinar lectus faucibus.',
            }, {
                id: 1,
                text: 'Praesent id faucibus ex. Aenean elementum porta metus, sed aliquet ligula dictum in. Proin fermentum vitae velit eget fringilla. Ut in ligula commodo, elementum lectus quis, imperdiet lectus. Sed quis ipsum eget augue lobortis porttitor.',
            }
        ]
    }, {
        id: 1,
        title: 'Last Episode',
        cards: [
            {
                id: 0,
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus consectetur, ligula condimentum suscipit rhoncus, neque lacus vestibulum libero, in sagittis orci leo eget nunc. Etiam gravida nisl nec orci imperdiet, a pulvinar lectus faucibus.',
            }, {
                id: 1,
                text: 'Praesent id faucibus ex. Aenean elementum porta metus, sed aliquet ligula dictum in. Proin fermentum vitae velit eget fringilla. Ut in ligula commodo, elementum lectus quis, imperdiet lectus. Sed quis ipsum eget augue lobortis porttitor.',
            }
        ]
    }, {
        id: 2,
        title: 'Last Episode',
        cards: [
            {
                id: 0,
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus consectetur, ligula condimentum suscipit rhoncus, neque lacus vestibulum libero, in sagittis orci leo eget nunc. Etiam gravida nisl nec orci imperdiet, a pulvinar lectus faucibus.',
            }, {
                id: 1,
                text: 'Praesent id faucibus ex. Aenean elementum porta metus, sed aliquet ligula dictum in. Proin fermentum vitae velit eget fringilla. Ut in ligula commodo, elementum lectus quis, imperdiet lectus. Sed quis ipsum eget augue lobortis porttitor.',
            }
        ]
    }]


    constructor() {
        makeAutoObservable(this);
    }
}

export default new ListsStore();