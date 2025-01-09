```javascript
// Ensure you have an index with case-insensitive option
db.collection.createIndex( { field: "text" }, { caseInsensitive: true } );

const query = {
  field: { $regex: /pattern/i },
};

const cursor = collection.find(query);

const result = await cursor.toArray();
console.log(result);
```