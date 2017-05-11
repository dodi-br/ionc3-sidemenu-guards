# ionc3-sidemenu-guards
Ionic3 starter project with page guards

All protected pages should extend from the ProtectedPage class. It currently relays on a very simple logic, based on ionViewCanEnter event from NavController. TokenServices reads/writes to/from Ionic Storage and tells the NavController is there a value for token_id or not. If token is empty, the user will be redirected to LoginPage.

This seend project utilise the new SplitPane and also it makes it possible to hide the SideMenu for login page.

@todo: if presented, add token_id as header for all requests
