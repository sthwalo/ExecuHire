<?php

namespace Tests\Unit;

use PHPUnit\Framework\TestCase;
use App\Models\Vehicle;
use App\Database\Connection;

class VehicleTest extends TestCase
{
    private $db;
    private Vehicle $vehicle;

    protected function setUp(): void
    {
        parent::setUp();
        $this->db = new Connection('test'); // Use test database
        $this->vehicle = new Vehicle();
    }

    public function testCanCreateVehicle()
    {
        $vehicle = new Vehicle();
        $this->assertInstanceOf(Vehicle::class, $vehicle);
    }

    public function testCanCreateVehicleWithEmptyAttributes()
    {
        $vehicle = new Vehicle();
        $this->assertNull($vehicle->name);
        $this->assertNull($vehicle->model);
        $this->assertNull($vehicle->price);
    }

    public function testCanCreateVehicleWithPartialAttributes()
    {
        $vehicle = new Vehicle([
            'name' => 'Test Vehicle',
            'model' => '2023'
        ]);
        
        $this->assertEquals('Test Vehicle', $vehicle->name);
        $this->assertEquals('2023', $vehicle->model);
        $this->assertNull($vehicle->price);
    }

    public function testCanSaveVehicleToDatabase()
    {
        $vehicle = new Vehicle([
            'name' => 'Test Vehicle',
            'model' => '2023',
            'price' => 100.00,
            'category' => 'LUXURY'
        ]);

        $saved = $vehicle->save($this->db);
        $this->assertTrue($saved);
        
        $retrieved = Vehicle::find($this->db, $vehicle->id);
        $this->assertEquals($vehicle->name, $retrieved->name);
    }

    public function testCanUpdateVehicleInDatabase()
    {
        $vehicle = new Vehicle([
            'name' => 'Test Vehicle',
            'model' => '2023'
        ]);

        $vehicle->save($this->db);
        $vehicle->price = 150.00;
        $vehicle->update($this->db);

        $updated = Vehicle::find($this->db, $vehicle->id);
        $this->assertEquals(150.00, $updated->price);
    }

    protected function tearDown(): void
    {
        // Clean up test database after each test
        $this->db->query("DELETE FROM vehicles");
        parent::tearDown();
    }
}
