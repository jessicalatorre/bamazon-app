//schema

CREATE TABLE products (
item_id INTEGER (10) NOT NULL,
PRIMARY KEY (item_id),
product_name VARCHAR(100) NOT NULL,
department_name VARCHAR(100) NOT NULL,
price INTEGER(10),
stock_quantity INTEGER (10)
);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (875632, 'Hint Sunscreen', 'cosmetics', 14.99, 300);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (775677, 'The Cast Iron Cookbook', 'books', 9.58, 100);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (2215630, 'Hiking Boots', 'footwear', 108.00, 400);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (1700326, 'Eco-Friendly Jacket', 'outerwear', 169.99, 300);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (9879939, 'Organic Sweatshirt', 'clothing', 29.99, 500);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (8876632, 'Hat', 'outerwear', 14.99, 500);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (1875688, 'Wool Socks 2-pair', 'clothing', 15.99, 600);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (875632, 'Eco-Friendly Insect_Repllent', 'outdoor recreation', 9.58, 500);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (555635, 'Outdoor cooking utensils', 'outdoor recreation', 6.99, 300);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (495611, '6-Person Tent', 'outdoor recreation', 108.00, 400);
