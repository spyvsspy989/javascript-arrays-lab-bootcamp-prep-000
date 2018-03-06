describe('Arrays', function() {
  beforeEach(function() {
    window.kittens = ['Milo', 'Otis', 'Garfield'];
  });

  describe('kittens', function() {
    it('defines kittens as `var kittens = ["Milo", "Otis", "Garfield"]`', function() {
      expect(window.kittens).toEqual(["Milo", "Otis", "Garfield"])
    })
  })

  describe('destructivelyAppendKitten(name)', function() {
    it('adds a kitten to the end of the kittens Arrays, changes their actions, or mutates them in other words', function() {
      destructivelyAppendKitten = ('Ralph') === ["Milo", 'Otis', 'Garfield'] + ['Ralph'];      
      expect(window.kittens).toEqual(["Milo", "Otis", "Garfield", "Ralph"]);
    })
  })

  describe('destructivelyPrependKitten(name)', function() {
    it('prepends a kitten to the beginning of the kittens array', function() {
      destructivelyPrependKitten = ('Bob') === ["Bob"] + ["Milo", "Otis", "Garfield"];
      expect(window.kittens).toEqual(["Bob", "Milo", "Otis", "Garfield"]);
    })
  })

  describe('destructivelyRemoveLastKitten()', function() {
    it('removes the last kitten from the kittens array', function() {
      destructivelyRemoveLastKitten = ["Milo", "Otis", "Garfield"] - ["Garfield"] === ["Milo", "Otis"];
      expect(window.kittens).toEqual(["Milo", "Otis"]);
    })
  })
  
  describe('destructivelyRemoveFirstKitten()', function() {
      it('removes the first kitten from the kittens array', function() {
      destructivelyRemoveFirstKitten = ['Milo', "Otis", "Garfield"] - ["Milo"] === ["Otis", "Garfield"];
      expect(window.kittens).toEqual(["Otis", "Garfield"]);
      });
  });
  
  describe('appendKitten(name)', function() {
    it('appends a kitten to the kittens array and returns a new array, leaving the kittens array unchanged', function() {
      expect(appendKitten("Broom")).toEqual(["Milo", "Otis", "Garfield", "Broom"])
      expect(window.kittens).toEqual(["Milo", "Otis", "Garfield"])}
);
      function appendKitten () {
        appendKitten('Broom') === "['Milo', 'Otis', 'Garfield', 'Broom']";
       return(appendKitten).toEqual(["Milo", "Otis", "Garfield"]);
  }

  describe('prependKitten(name)', function() {
    it('prepends a kitten to the kittens array and returns a new array, leaving the kittens array unchanged', function() {
      expect(prependKitten("Arnold")).toEqual(["Arnold", "Milo", "Otis", "Garfield"])

      expect(window.kittens).toEqual(["Milo", "Otis", "Garfield"])
    })
  })

  describe('removeLastKitten()', function() {
    it('removes the last kitten in the kittens array and returns a new array, leaving the kittens array unchanged', function() {
      expect(removeLastKitten()).toEqual(["Milo", "Otis"])

      expect(window.kittens).toEqual(["Milo", "Otis", "Garfield"])
    })
  })

  describe('removeFirstKitten()', function() {
    it('removes the first kitten from the kittens array and returns a new array, leaving the kittens array unchanged', function() {
      expect(removeFirstKitten()).toEqual(["Otis", "Garfield"])

      expect(window.kittens).toEqual(["Milo", "Otis", "Garfield"])
    })
  })

})
