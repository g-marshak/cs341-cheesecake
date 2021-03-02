//author: gabby marshak

const orders = require('../routes/orders.js');
test('returns json array of orders', () => {
    //unsure about what specificallly to check (/orders page works in web browser and displays properly)
    //using orders.get as expect gives [Function anonymous], rather than any actual result
    //using stringify gives undefined
    expect(JSON.stringify(orders.get)).toBe(
        "{orders:[{topping:\"cherry\", quantity:5},{topping:\"chocolate\", quantity:6},{topping:\"plain\", quantity:7}]}");
}); 