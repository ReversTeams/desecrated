// ServerEvents.tags('item', event => {
//     // 1. Get the specific tag wrapper
//     let tag = event.get('forge:raw_meat');
    
//     // 2. Get all item IDs in the tag (returns a Java Collection)
//     let items = tag.getObjectIds();
    
//     // 3. Convert to a standard JS array of strings
//     let itemsArray = [];
    
//     // Note: If .forEach throws an error, change this to: Array.from(items).forEach(...)
//     items.forEach(id => itemsArray.push(id.toString()));
    
//     // Prints formatted JSON to the server log
//     console.log(JSON.stringify(itemsArray, null, 2));
    
//     // Optional: If you have the 'JsonIO' mod installed, save it directly to a file:
//     JsonIO.writeAndCreateDirectories('kubejs/output/raw_meat.json', itemsArray);
// })