<?php

// Traits
namespace MyNamespace;
trait GreetTrait {
    public function sapa() {
        echo "Halo, ";
    }
}

// Abstract 
abstract class EntitasAbstrak {
    protected $nama;#properti
    protected $deskripsi;

    //Method
    abstract public function tampilkanInfo();
}

// pewarisan 
class Produk extends EntitasAbstrak {
    use GreetTrait;

    public function __construct($nama, $deskripsi) {
        $this->nama = $nama;
        $this->deskripsi = $deskripsi;
    }

    public function tampilkanInfo() {
        echo "Produk: {$this->nama}\nDeskripsi: {$this->deskripsi}\n";
    }
}

class Orang extends EntitasAbstrak {
    use GreetTrait;

    public function __construct($nama, $deskripsi) {
        $this->nama = $nama;
        $this->deskripsi = $deskripsi;
    }

    public function tampilkanInfo() {
        echo "Orang: {$this->nama}\nDeskripsi: {$this->deskripsi}\n";
    }
}

// Program Utama
$produk = new Produk("Apple", "Perusahaan Teknologi Terbesar");
$orang = new Orang("Steve Jobs", "Pendiri Apple");

echo $produk->sapa();
$produk->tampilkanInfo();

echo $orang->sapa();
$orang->tampilkanInfo();

?>
