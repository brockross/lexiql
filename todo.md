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
- basic offset working; need multidirectional offset
- also need to move lots of the data to collapsible containers so nodes can be smaller
- i would love to somehow make a node's circumfrential space a flex container. i.e., take a div set to flex-direction row, and wrap it in a circle around the node. Any children can then be arranged using flex. There is probably some basic transform y type of math that could handle this
- when rendering its edges[], a node also needs to be aware of its parent, lest it render a node on top of it. Spatially speaking, a parent node should sort of occupy the space normally alotted to an edge
- a library is starting to sound really nice
- should node placement be predetermined or random (within a range)? I like the latter but the former would be easier
