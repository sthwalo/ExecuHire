<?php

return [
    'development' => [
        'host' => $_ENV['DB_HOST'],
        'port' => $_ENV['DB_PORT'],
        'database' => $_ENV['DB_NAME'],
        'username' => $_ENV['DB_USER'],
        'password' => $_ENV['DB_PASS']
    ],
    'test' => [
        'host' => $_ENV['DB_HOST'] ?? 'localhost',
        'port' => $_ENV['DB_PORT'] ?? 5432,
        'database' => $_ENV['DB_NAME'] ?? 'execuhire_test',
        'username' => $_ENV['DB_USER'] ?? 'postgres',
        'password' => $_ENV['DB_PASS'] ?? 'postgres',
    ]
];
