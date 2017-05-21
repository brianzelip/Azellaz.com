/*
  Task: automate Abbie's workflow for adding new products to the shop.

  Thoughts:
    - have abbie run a npm script to create new product, something like:
      for every product in products.json
        for every file in products/
          if product.slug is NOT an indexOf fileString(slice off .html)
            create a file with the following contents:
              ---
              layout: product
              permalink: `/${product.slug}/`
              productID: `/${product.id}/`
              ---
              /n

*/
