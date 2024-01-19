<template>
  <div>
<h3> Students grades </h3>


<div class="container">
    <table>
      
      <th class="header">St.Code</th>
      <th class="header">Homework 1</th>
      <th class="header">Homework 2</th>
      <th class="header">Exam</th>
      <th class="header">Final Grade</th>
      
      <tr v-for="student in grades">
      
      <td class="data">{{ student.studentcode }}</td>
      <td class="data">{{ student.hw1 }}</td>
      <td class="data">{{ student.hw2 }}</td>
      <td class="data">{{ student.exam }}</td>
      <td :class="{'data': true, 'failed': student.exam <= 20 || student.final <= 20, 'passed': student.exam > 20 && student.final > 20}" @click="showJustification(student)">{{ student.final }}</td>
      </tr>
    </table>

    <div class="justification" v-if="justification">
      <strong>Grade justification:</strong> {{ justification }}
    </div>
</div>
</div>
</template>

<script>
export default {
  name: "Students",
  data() {
    return {
      grades: [],
      justification: "",
    };
  },
  methods: {
    fetchRecords() {
      fetch(`http://localhost:3000/api/grades`)
        .then((response) => response.json())
        .then((data) => (this.grades = data))
        .catch((err) => console.log(err.message));
  },
    showJustification(student) {
      if (student.final < 51 && student.exam < 21) {
        this.justification =
          "You failed because you need to get 21 points or more in the exam to pass the course and you also need to get 51 or more in the HWs and exam to pass the course.";
      } else if (student.final > 51 && student.exam < 21) {
        this.justification =
          "You failed because you need to get 21 points or more in the exam to pass the course.";
      } else if (student.final < 51 && student.exam > 21) {
        this.justification =
          "You failed because you need to get 51 points or more in the HWs and exam to pass the course.";
      } else if (student.final > 51 && student.exam > 21) {
        this.justification =
          "You have passed because you got over 20 points in the exam and over 50 points in the HWs and exam.";
    }
  },
  },
  mounted() {
    this.fetchRecords();
    console.log("mounted");
  } 
};
</script>

<style scoped>
h1 {
  font-size: 20px;
}
.container {
  background-color: lightgray;
}

table {
  margin-left:auto;
  margin-right:auto;
  background-color: rgba(128, 128, 128, 0.373);
}

.header {
  background-color: rgba(99, 81, 153, 0.815);
  padding: 10px;
}

.data {
  background-color: rgba(67, 142, 176, 0.775);
  padding: 10px;
}

.failed {
  background-color: red;
}

.passed {
  background-color: green;
}

.justification {
    background-color: #6ac6db;
    padding: 10px;
    margin-top: 10px;
  }
</style>
