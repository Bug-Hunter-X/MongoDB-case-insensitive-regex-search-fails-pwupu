# MongoDB Case-Insensitive Regex Search Bug

This repository demonstrates a bug where a case-insensitive regular expression search in MongoDB using the `$regex` operator fails to return expected results. The issue occurs when combining the `$regex` operator with the case-insensitive flag `/i`.  The search unexpectedly returns an empty array even when matching documents exist.

## Bug Description:
The provided JavaScript code snippet uses a simple case-insensitive regular expression to search for documents in a MongoDB collection. However, the query returns an empty array, despite the presence of matching documents. This inconsistency contradicts the expected behavior of case-insensitive regex searches.

## Reproduction Steps:
1. Clone this repository.
2. Ensure you have a MongoDB instance running and accessible.
3. Populate the collection with sample documents.
4. Run the `bug.js` script.  Observe that it returns an empty array.

## Solution:
The bug is resolved by using the `$regex` operator with the case-insensitive flag correctly, and ensuring the index is appropriately configured for case-insensitive searches, as detailed in `bugSolution.js`.