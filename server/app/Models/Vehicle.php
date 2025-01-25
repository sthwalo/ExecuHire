<?php

namespace App\Models;

class Vehicle
{
    public $id;
    public $name;
    public $model;
    public $price;
    public $category;

    public function __construct(array $attributes = [])
    {
        foreach ($attributes as $key => $value) {
            $this->$key = $value;
        }
    }

    public function save($db)
    {
        $sql = "INSERT INTO vehicles (name, model, price, category) VALUES (:name, :model, :price, :category)";
        $result = $db->query($sql, [
            ':name' => $this->name,
            ':model' => $this->model,
            ':price' => $this->price,
            ':category' => $this->category
        ]);
        
        $this->id = $db->lastInsertId();
        return (bool)$result;
    }

    public function update($db)
    {
        $sql = "UPDATE vehicles SET name = :name, model = :model, price = :price, category = :category WHERE id = :id";
        return $db->query($sql, [
            ':id' => $this->id,
            ':name' => $this->name,
            ':model' => $this->model,
            ':price' => $this->price,
            ':category' => $this->category
        ]);
    }

    public static function find($db, $id)
    {
        $stmt = $db->query("SELECT * FROM vehicles WHERE id = :id", [':id' => $id]);
        $data = $stmt->fetch(\PDO::FETCH_ASSOC);
        return $data ? new static($data) : null;
    }
}
