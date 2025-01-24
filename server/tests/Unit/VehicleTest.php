<?php

namespace Tests\Unit;

use PHPUnit\Framework\TestCase;
use App\Models\Vehicle;

class VehicleTest extends TestCase
{
    public function testCanCreateVehicle()
    {
        $vehicle = new Vehicle([
            'name' => 'Test Vehicle',
            'model' => '2023',
            'price' => 100.00
        ]);
        
        $this->assertEquals('Test Vehicle', $vehicle->name);
        $this->assertEquals('2023', $vehicle->model);
        $this->assertEquals(100.00, $vehicle->price);
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
}
