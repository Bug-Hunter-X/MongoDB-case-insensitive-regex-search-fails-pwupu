```javascript
const query = {
  field: { $regex: /pattern/i },
};

const cursor = collection.find(query);

const result = await cursor.toArray();
console.log(result);
```