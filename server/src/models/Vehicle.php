<?php

namespace App\Models;

class Vehicle
{
    private $name;
    private $model;
    private $price;

    public function __construct(array $attributes = [])
    {
        $this->name = $attributes['name'] ?? null;
        $this->model = $attributes['model'] ?? null;
        $this->price = $attributes['price'] ?? null;
    }

    public function __get($property)
    {
        return $this->$property;
    }
}
