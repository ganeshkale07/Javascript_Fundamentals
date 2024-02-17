
    // ## Array Cardio Day 2

    const people = [
      { name: 'Wes', year: 1988 },
      { name: 'Kait', year: 1986 },
      { name: 'Irv', year: 1970 },
      { name: 'Lux', year: 2015 }
    ];

    const comments = [
      { text: 'Love this!', id: 523423 },
      { text: 'Super good', id: 823423 },
      { text: 'You are the best', id: 2039842 },
      { text: 'Ramen is my fav food ever', id: 123523 },
      { text: 'Nice Nice Nice!', id: 542328 }
    ];

    // Some and Every Checks
    // Array.prototype.some() // is at least one person 19 or older?

    console.log("At least some are 19 or older", people.some((ele) => (new Date().getFullYear() - ele.year) >= 19))

    let isThereAny19YearOlder = people.some((ele) => (new Date().getFullYear() - ele.year) >= 19);
    //learning
    console.log({isThereAny19YearOlder});
    // Array.prototype.every() // is everyone 19 or older?
    console.log("At least some are 19 or older", people.every((ele) => (new Date().getFullYear() - ele.year) >= 19))


    // Array.prototype.find()
    // Find is like filter, but instead returns just the one you are looking for
    // find the comment with the ID of 823423
    console.log("Find comment with the ID of 823423 ", comments.find(ele => ele.id === 823423))

    // Array.prototype.findIndex()
    // Find the comment with this ID
    // delete the comment with the ID of 823423
    let indexOfEle = comments.findIndex((ele) => ele.id === 823423);
    comments.splice(indexOfEle, 1);

    //Another way to do it 
    //elegant way to use slice
    //In these way we are creating final result using slice output array
    //learning
    const newComments = [
        ...comments.slice(0, indexOfEle),
        ...comments.slice(indexOfEle + 1)
      ];
    
    console.log("Splice the array with id 823423", comments,newComments);
