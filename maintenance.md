# Maintenance notes

## Re-opening Azellaz after being closed for 2018 holidays

Here are the files that changed and how to update them to re-open Azellaz.com:

- `shop.html`: delete `{% include hiatus-flash.html %}`
- `product-page.html`: uncomment the buy button parent
- `product-page.html`: delete the `section` parent of the `hiatus-flash.html` include
- `about.html`: delete the `section` parent of the `hiatus-flash.html` include
- `contact.html`: delete the `section` parent of the `hiatus-flash.html` include
