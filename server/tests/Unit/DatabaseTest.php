<?php

namespace Tests\Unit;

use App\Database\Connection;
use PHPUnit\Framework\TestCase;
use PDO;

class DatabaseTest extends TestCase
{
    public function testCanConnectToDatabase()
    {
        $db = Connection::getInstance();
        $this->assertInstanceOf(PDO::class, $db);
        
        $result = $db->query('SELECT 1 as test')->fetch();
        $this->assertEquals(1, $result['test']);
    }

    public function testConnectionReset()
    {
        $db1 = Connection::getInstance();
        Connection::reset();
        $db2 = Connection::getInstance();
        
        $this->assertNotSame($db1, $db2);
    }
}
