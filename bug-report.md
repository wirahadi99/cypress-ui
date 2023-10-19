# Bug report : 

```bash
Title : after user success checkout one of the product and the product itself become out
out of stock, if user back to the marketplace the product still show and if user click it,
it will redirected to page not found

step to reproduce:
visit voila main page
Login with any active voila.id user
Click any category of the marketplace
Choose and click any item product and have only 1 stock
Click buy
Proceed until checkout payment
Success checkout
Find the item product that you buy

Expected result : Not found in marketplace
Actual result :  found it and if user click it it will redirected to page not found
```
![bug-image-1](cypress/asset/bug-image-1.PNG)


```bash
Title : after user logout and have item on basket, the item on the basket still show instead of not showing
because now user visit as a guest

step to reproduce:
visit voila main page
Login with any active voila.id user
Click any category of the marketplace
Choose and click any item product
Click add to basket
Logout
Success Logout
Check item on the basket

Expected result : No item on basket
Actual result :  there is item on basket user previously put
```

![bug-image-2](cypress/asset/bug-image-2.PNG)

```bash
Title : When user click category on main page, there is still filter on the same category

step to reproduce:
visit voila main page
Click men category
Check the filter

Expected result : show no gender filter
Actual result :  show gender filter
```

![bug-image-3](cypress/asset/bug-image-3.PNG)