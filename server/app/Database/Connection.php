<?php

namespace App\Database;

use PDO;
use PDOException;

class Connection
{
    private static ?PDO $instance = null;
    private PDO $connection;

    public function __construct($database = 'default')
    {
        if ($database === 'test') {
            $this->connection = new PDO('sqlite::memory:');
            $this->connection->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            
            // Create test database schema
            $this->query("
                CREATE TABLE IF NOT EXISTS vehicles (
                    id INTEGER PRIMARY KEY AUTOINCREMENT,
                    name TEXT,
                    model TEXT,
                    price DECIMAL(10,2),
                    category TEXT
                )
            ");
        } else {
            $this->connection = self::getInstance();
        }
    }

    public static function getInstance(): PDO
    {
        if (self::$instance === null || !self::isConnected()) {
            self::connect();
        }
        return self::$instance;
    }

    private static function connect(): void
    {
        try {
            $config = require __DIR__ . '/../../config/database.php';
            $env = $_ENV['APP_ENV'] ?? 'development';
            
            $dsn = sprintf(
                "pgsql:host=%s;port=%s;dbname=%s",
                $config[$env]['host'],
                $config[$env]['port'],
                $config[$env]['database']
            );
            
            self::$instance = new PDO(
                $dsn,
                $config[$env]['username'],
                $config[$env]['password'],
                [
                    PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
                    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
                    PDO::ATTR_TIMEOUT => 5
                ]
            );
        } catch (PDOException $e) {
            throw new PDOException("Connection failed: " . $e->getMessage());
        }
    }

    private static function isConnected(): bool
    {
        if (!self::$instance) {
            return false;
        }

        try {
            self::$instance->query('SELECT 1');
            return true;
        } catch (PDOException $e) {
            return false;
        }
    }

    public static function reset(): void
    {
        self::$instance = null;
    }

    public function query($sql, $params = [])
    {
        $stmt = $this->connection->prepare($sql);
        $stmt->execute($params);
        return $stmt;
    }

    public function lastInsertId()
    {
        return $this->connection->lastInsertId();
    }
}
