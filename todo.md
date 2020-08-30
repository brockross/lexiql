## TODOs

## Chunk 1: Sloth Love Chunk

- make basic word display component
- set up RapidAPI access to WordsAPI
- play with WordsAPI

## Chunk 2: Whoa, That's Chunky

- sketch out data structure--linked list or graph? Latter is the correct choice but would be more complex. I don't know if I want to 'iterate' to it and rewrite all the methods for adding/removing/navigating nodes
- write code for adding to graph based on word clicks
- hold off on most styling for now

## Chunk 3: Choosy Moms Choose Jif® Chunky

- add styling (Tailwind?)
  - tailwind doesn't feel like a good choice here because there's too much unconventional custom styling of nodes/connections
- work out how to deal with hierarchical data but orphaned styling--i.e., a node's edges will be HTML children, but should not appear contained within the node in any way
- randomization of node position within a certain radius around its source?
- at what point should i consider a library? i.e. a 2d graphical library
- css offset values could be derived from index in edges array?
