class Libro {
    constructor(titulo, autor) {
      this.titulo = titulo;
      this.autor = autor;
    }
  }
  
  class LibroDigital extends Libro {
    constructor(titulo, autor, formato) {
      super(titulo, autor);
      this.formato = formato;
    }
  }
  
  class LibroFisico extends Libro {
    constructor(titulo, autor, paginas) {
      super(titulo, autor);
      this.paginas = paginas;
    }
  }
  
  const biblioteca = [];
  
  function listarLibrosPorAutor(autor) {
    console.log(`Libros de ${autor}:`);
    biblioteca.forEach((libro) => {
      if (libro.autor === autor) {
        console.log(`- ${libro.titulo}`);
      }
    });
  }
  
  biblioteca.push(new LibroDigital("Crimen y castigo", "Fyodor Dostoevsky", "PDF"));
  biblioteca.push(new LibroFisico("Los hermanos Karamazov", "Fyodor Dostoevsky", 796));
  biblioteca.push(new LibroDigital("La metamorfosis", "Franz Kafka", "ePub"));
  biblioteca.push(new LibroFisico("El proceso", "Franz Kafka", 300));
  biblioteca.push(new LibroFisico("El extranjero", "Albert Camus", 160));
  biblioteca.push(new LibroDigital("La peste", "Albert Camus", "PDF"));
  
  listarLibrosPorAutor("Fyodor Dostoevsky");
  listarLibrosPorAutor("Franz Kafka");
  listarLibrosPorAutor("Albert Camus");
  