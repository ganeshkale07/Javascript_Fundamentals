
    // Get your shorts on - this is an array workout!
    // ## Array Cardio Day 1

    // Some data we can work with

    const inventors = [
      { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
      { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
      { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
      { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
      { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
      { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
      { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
      { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
      { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
      { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
      { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
      { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
    ];

    const people = [
      'Bernhard, Sandra', 'Bethea, Erin', 'Becker, Carl', 'Bentsen, Lloyd', 'Beckett, Samuel', 'Blake, William', 'Berger, Ric', 'Beddoes, Mick', 'Beethoven, Ludwig',
      'Belloc, Hilaire', 'Begin, Menachem', 'Bellow, Saul', 'Benchley, Robert', 'Blair, Robert', 'Benenson, Peter', 'Benjamin, Walter', 'Berlin, Irving',
      'Benn, Tony', 'Benson, Leana', 'Bent, Silas', 'Berle, Milton', 'Berry, Halle', 'Biko, Steve', 'Beck, Glenn', 'Bergman, Ingmar', 'Black, Elk', 'Berio, Luciano',
      'Berne, Eric', 'Berra, Yogi', 'Berry, Wendell', 'Bevan, Aneurin', 'Ben-Gurion, David', 'Bevel, Ken', 'Biden, Joseph', 'Bennington, Chester', 'Bierce, Ambrose',
      'Billings, Josh', 'Birrell, Augustine', 'Blair, Tony', 'Beecher, Henry', 'Biondo, Frank'
    ];
    
    // Array.prototype.filter()
    // 1. Filter the list of inventors for those who were born in the 1500's
    console.log("Filter -",inventors.filter(ele => ele.year < 1500))

    // Array.prototype.map()
    // 2. Give us an array of the inventors first and last names
    console.log("MApping - ",inventors.map(ele => `firstName : ${ele.first}, last : ${ele.last}`))

    // Array.prototype.sort()
    // 3. Sort the inventors by birthdate, oldest to youngest
    console.log("Sorting -",inventors.sort((a,b) => {
        return a.year - b.year;
    }))

    // Array.prototype.reduce()
    // 4. How many years did all the inventors live all together?
    console.log("How many year inventors lived -" ,inventors.reduce((sum,ele) => {
        console.log(sum)
        return sum = sum + (ele.passed - ele.year);
    }),0)


 
    // 5. Sort the inventors by years lived
    //Learning
    //Brut force to do it
    console.log("Sort the inventors by years lived - ",inventors.map(ele => {
        return {...ele,lifeSpan : (ele.passed - ele.year)}
    }).sort((a,b) => a.lifeSpan - b.lifeSpan))
    //efficient way to do it
    console.log("Sort the inventors by years lived 2 efficient way - ",inventors.sort((a,b) => {
        let preInventor = a.passed - a.year;
        let nextInventor = b.passed - b.year;
        return nextInventor - preInventor;
    }))



    // 7. sort Exercise
    // Sort the people alphabetically by last name
    console.log("Sort the people alphabetically by last name - " , people.map(ele => ele.split(',')[1].trim()).sort())

    // 8. Reduce Exercise
    // Sum up the instances of each of these
    const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];

    //Brut force 
    let storage = [];
    let result = {};
    data.forEach(ele => {        
        if(!storage.includes(ele)){
            storage.push(ele);
            result[ele] = 1;
        }
        else{
            result[ele]++;
        }
        
    })
    console.log("Sum up instances of each - " ,result);

    //elegant way
    //Learning
    console.log("Sum up instances of each - elegant way " ,data.reduce((obj , ele) => {
        if(!obj[ele]){
            obj[ele] = 0;
        }
        obj[ele]++;
        return obj
    },{}))


