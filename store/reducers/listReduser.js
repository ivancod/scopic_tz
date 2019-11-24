export default function(store = [], action) {
  
  switch(action.type) {
    case 'ADD_ITEM':
      return [ ...store, action.payload ];
    
    default: return store;
  }
}