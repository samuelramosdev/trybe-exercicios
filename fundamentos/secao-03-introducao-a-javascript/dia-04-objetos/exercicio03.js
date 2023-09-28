const school = {
  lessons: [
    {
      course: "Python",
      students: 20,
      professor: "Carlos Patrício",
      shift: "Manhã",
    },
    {
      course: "Kotlin",
      students: 10,
      professor: "Gabriel Oliva",
      shift: "Noite",
    },
    {
      course: "JavaScript",
      students: 738,
      professor: "Gustavo Caetano",
      shift: "Tarde",
    },
    {
      course: "MongoDB",
      students: 50,
      shift: "Noite",
    },
  ],
};

const selectLesson = (obj, position) => Object.values(obj)[position];

console.log(selectLesson(school, 0));

const sumOfStudents = (obj) => {
  let sum = 0;
  for (let index = 0; index < obj.lessons.length; index += 1) {
    sum += obj.lessons[index].students;
  }

  return sum;
};

console.log(sumOfStudents(school));

const checkExistence = (obj, key) => {
  for (let index = 0; index < obj.lessons.length; index += 1) {
    if (obj.lessons[index][key] === undefined) {
      return false;
    }
  }
  return true;
};

console.log(checkExistence(school, "course"));

const changeKey = (obj, course, value) => {
  let findCourse;
  for (let index = 0; index < obj.lessons.length; index += 1) {
    let element = obj.lessons[index];
    if (element.course === course) {
      findCourse = obj.lessons[index];
      break;
    }
  }

  if (findCourse !== undefined) {
    findCourse.shift = value;
    return findCourse;
  } else {
    return "Curso não encontrado.";
  }
};

console.log(changeKey(school, "Python", "Noite"));
