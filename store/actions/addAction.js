export default addItem = (string) => {
    return {
        type: 'ADD_ITEM',
        payload: { 
            id: Math.floor(1 + Math.random() * 9999), // пока что тестовое рандомное значение
            text: string 
        }
    }
} 