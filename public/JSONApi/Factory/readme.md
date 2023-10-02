Here we can see main folders:

1. FolderFileItem: This deals with url params

2. FolderFileItemFromConfig: This deals with Config keys.



Similarly, we have two main constraints known as from data, from screen

1. From data, here columns of bstable are built using data[0] (zeroth element) because we do not consider the screen.

2. From screen, we already have columns, hence columns of bstable are built by sending columns also as an input to the bstable