CREATE DATABASE IF NOT EXISTS entirety;
USE entirety;

DROP TABLE IF EXISTS users;
CREATE TABLE users (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    password CHAR(60) NOT NULL
);

INSERT INTO users (first_name, last_name, email, password) 
VALUES 
    ('abc', 'def', 'abc@example.com', '$2a$10$4M.vXhNccHdAhDjCNSlmWuSxDXH.0p1L1wEObO4wHBXZcmHZXsbNe'), -- Password: password123
    ('Alice', 'Smith', 'alice@example.com', '$2a$10$JDPfuEN0IiInoKPn9BoGSuySgJ2bDkUczFOvwX3IrlR1e0lyTYWf6'); -- Password: pass1234

DROP TABLE IF EXISTS properties;
CREATE TABLE properties (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    price DECIMAL(10, 2) NOT NULL,
    address VARCHAR(255) NOT NULL,
    country VARCHAR(100),
    city VARCHAR(100),
    amenities TEXT,
    image_url VARCHAR(255) -- Add a column to store the URL of the property image
);

SELECT * FROM users;
-- SELECT * FROM properties;