insert into users28 (username, password, balance, user_img)
values(
    ${username}, ${password}, 0, 'https://cdn.shopify.com/s/files/1/0257/6087/products/d1b2e81fb85680d23b5c6b752a89c9d3.png?v=1539831273'
)
returning id, username, balance, user_img