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
      <td class="data">{{ student.final }}</td>
      </tr>
    </table>
</div>
</div>
</template>

<script>
export default {
  name: "Students",
  data() {
    return {
      grades: [],
    };
  },
  methods: {
    fetchRecords() {
      fetch(`http://localhost:3000/api/grades`)
        .then((response) => response.json())
        .then((data) => (this.grades = data))
        .catch((err) => console.log(err.message));
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
</style>
